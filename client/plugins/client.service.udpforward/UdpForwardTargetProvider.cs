﻿using client.messengers.clients;
using client.messengers.register;
using common.server;
using common.udpforward;

namespace client.service.udpforward
{
    internal class UdpForwardTargetProvider : IUdpForwardTargetProvider
    {
        private readonly IClientInfoCaching clientInfoCaching;
        private readonly IUdpForwardTargetCaching<UdpForwardTargetCacheInfo> udpForwardTargetCaching;
        private readonly RegisterStateInfo registerStateInfo;

        public UdpForwardTargetProvider(IClientInfoCaching clientInfoCaching, IUdpForwardTargetCaching<UdpForwardTargetCacheInfo> udpForwardTargetCaching, RegisterStateInfo registerStateInfo)
        {
            this.clientInfoCaching = clientInfoCaching;
            this.udpForwardTargetCaching = udpForwardTargetCaching;
            this.registerStateInfo = registerStateInfo;
            registerStateInfo.OnRegisterStateChange.Sub((state) =>
            {
                udpForwardTargetCaching.ClearConnection();
            });
            clientInfoCaching.OnOffline.Sub((client) =>
            {
                udpForwardTargetCaching.ClearConnection(client.Name);
            });
        }

        public void Get(ushort port, UdpForwardInfo info)
        {
            UdpForwardTargetCacheInfo cacheInfo = udpForwardTargetCaching.Get(port);
            if (cacheInfo == null)
            {
                return;
            }
            if (cacheInfo.Connection == null || !cacheInfo.Connection.Connected)
            {
                cacheInfo.Connection = SelectConnection(cacheInfo);
            }
            info.Connection = cacheInfo.Connection;
            info.TargetEndpoint = cacheInfo.Endpoint;
        }

        private IConnection SelectConnection(UdpForwardTargetCacheInfo cacheInfo)
        {
            if (string.IsNullOrWhiteSpace(cacheInfo.Name))
            {
                return registerStateInfo.OnlineConnection;
            }

            ClientInfo client = clientInfoCaching.GetByName(cacheInfo.Name);
            if (client == null)
            {
                return null;
            }

            return client.Connection;
        }
    }
}