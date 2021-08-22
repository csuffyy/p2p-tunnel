﻿using client.service.events;
using server.model;
using System;
using System.Net;
using System.Net.Sockets;

namespace client.service.serverPlugins.heart
{
    public class HeartEventHandles
    {
        private static readonly Lazy<HeartEventHandles> lazy = new Lazy<HeartEventHandles>(() => new HeartEventHandles());
        public static HeartEventHandles Instance => lazy.Value;

        private HeartEventHandles()
        {

        }

        private EventHandlers eventHandlers => EventHandlers.Instance;
        private IPEndPoint UdpServer => eventHandlers.UdpServer;
        private Socket TcpServer => eventHandlers.TcpServer;
        private long ConnectId => eventHandlers.ConnectId;

        /// <summary>
        /// 发送心跳消息
        /// </summary>
        public event EventHandler<SendMessageEventArg> OnSendHeartMessageHandler;
        /// <summary>
        /// 发送心跳消息
        /// </summary>
        /// <param name="arg"></param>
        public void SendHeartMessage(IPEndPoint address = null)
        {
            if (UdpServer != null || address != null)
            {
                SendMessageEventArg arg = new SendMessageEventArg
                {
                    Address = address ?? UdpServer,
                    Data = new MessageHeartModel
                    {
                        SourceId = ConnectId
                    }
                };

                eventHandlers.SendMessage(arg);
                OnSendHeartMessageHandler?.Invoke(this, arg);
            }
        }
        /// <summary>
        /// 发送TCP心跳消息
        /// </summary>
        public event EventHandler<SendTcpMessageEventArg> OnSendTcpHeartMessageHandler;
        /// <summary>
        /// 发送TCP心跳消息
        /// </summary>
        /// <param name="arg"></param>
        public void SendTcpHeartMessage(Socket socket = null)
        {
            if (UdpServer != null || socket != null)
            {
                SendTcpMessageEventArg arg = new SendTcpMessageEventArg
                {
                    Socket = socket ?? TcpServer,
                    Data = new MessageHeartModel
                    {
                        SourceId = ConnectId
                    },
                };
                eventHandlers.SendTcpMessage(arg, 500);
                OnSendTcpHeartMessageHandler?.Invoke(this, arg);
            }
        }

        /// <summary>
        /// 收到心跳信息
        /// </summary>
        public event EventHandler<OnHeartEventArg> OnHeartEventHandler;
        /// <summary>
        /// 收到心跳信息
        /// </summary>
        /// <param name="arg"></param>
        public void OnHeartMessage(OnHeartEventArg arg)
        {
            OnHeartEventHandler?.Invoke(this, arg);
        }
    }

    public class OnHeartEventArg : EventArgs
    {
        public PluginExcuteModel Packet { get; set; }
        public MessageHeartModel Data { get; set; }
    }

}