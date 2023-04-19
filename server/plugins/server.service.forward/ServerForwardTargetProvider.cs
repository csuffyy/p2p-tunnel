﻿using common.forward;
using common.proxy;
using server.messengers.singnin;

namespace server.service.tcpforward
{
    internal class ServerForwardTargetProvider : IForwardTargetProvider
    {
        private readonly IClientSignInCaching clientSignInCaching;
        private readonly IForwardTargetCaching<ForwardTargetCacheInfo> forwardTargetCaching;

        public ServerForwardTargetProvider(IClientSignInCaching clientSignInCaching, IForwardTargetCaching<ForwardTargetCacheInfo> forwardTargetCaching)
        {
            this.clientSignInCaching = clientSignInCaching;
            this.forwardTargetCaching = forwardTargetCaching;

            clientSignInCaching.OnOffline += (client) =>
            {
                forwardTargetCaching.ClearConnection(client.ConnectionId);
            };
        }

        public bool Contains(ushort port)
        {
            return forwardTargetCaching.Contains(port);
        }

        public void Get(string host, ProxyInfo info)
        {
            GetTarget(forwardTargetCaching.Get(host), info);
        }

        public void Get(ushort port, ProxyInfo info)
        {
            GetTarget(forwardTargetCaching.Get(port), info);
        }

        private void GetTarget(ForwardTargetCacheInfo cacheInfo, ProxyInfo info)
        {
            if (cacheInfo != null)
            {
                if (cacheInfo.Connection == null || cacheInfo.Connection.Connected == false)
                {
                    if (clientSignInCaching.Get(cacheInfo.Id, out SignInCacheInfo client))
                    {
                        cacheInfo.Connection = client.Connection;
                    }
                }
                info.Connection = cacheInfo.Connection;
                info.TargetAddress = cacheInfo.IPAddress;
                info.TargetPort = cacheInfo.Port;
            }
        }
    }

    internal class ServerForwardUdpTargetProvider : ServerForwardTargetProvider, IForwardUdpTargetProvider
    {
        public ServerForwardUdpTargetProvider(IClientSignInCaching clientSignInCaching, IForwardUdpTargetCaching<ForwardTargetCacheInfo> forwardUdpTargetCaching)
            : base(clientSignInCaching, forwardUdpTargetCaching)
        {

        }
    }
}