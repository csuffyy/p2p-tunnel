﻿using common;
using common.extends;
using server.model;
using server.packet;
using System;
using System.Collections.Generic;

namespace server.extends
{
    public static class ByteArrayExtends
    {
        public static IEnumerable<UdpPacket> SerializeMessage(this IMessageModelBase obj, long sequence)
        {
            return obj.ProtobufSerialize().Split(sequence, obj.MsgType);
        }


        public static TcpPacket SerializeTcpMessage(this IMessageModelBase obj)
        {
            return new TcpPacket(obj.ProtobufSerialize(), obj.MsgType);
        }

        /// <summary>
        /// 分包 MTU值限制1500  UDP包头8  IP包头20
        /// </summary>
        /// <param name="datagram"></param>
        /// <param name="sequence"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        public static IEnumerable<UdpPacket> Split(this byte[] datagram, long sequence, MessageTypes type)
        {
            if (datagram == null)
            {
                throw new ArgumentNullException("datagram");
            }

            // 8UDP数据包头  20ip数据包头  8sequence长度 4type长度  4index长度
            int chunkLength = 1500 - 8 - 20 - 8 - 4 - 4;

            List<UdpPacket> packets = new List<UdpPacket>();

            int chunks = datagram.Length / chunkLength;
            int remainder = datagram.Length % chunkLength;
            int total = chunks;
            if (remainder > 0) total++;

            for (int i = 1; i <= chunks; i++)
            {
                byte[] chunk = new byte[chunkLength];
                Buffer.BlockCopy(datagram, (i - 1) * chunkLength, chunk, 0, chunkLength);
                packets.Add(new UdpPacket(sequence, total, i, chunk, type));
            }
            if (remainder > 0)
            {
                int length = datagram.Length - (chunkLength * chunks);
                byte[] chunk = new byte[length];
                Buffer.BlockCopy(datagram, chunkLength * chunks, chunk, 0, length);
                packets.Add(new UdpPacket(sequence, total, total, chunk, type));
            }

            return packets;
        }
    }
}