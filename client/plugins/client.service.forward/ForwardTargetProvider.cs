﻿using client.messengers.clients;
using client.messengers.singnin;
using common.forward;
using common.proxy;
using common.server;

namespace client.service.forward
{
    /// <summary>
    /// 转发目标提供
    /// </summary>
    internal class ForwardTargetProvider : IForwardTargetProvider
    {
        private readonly IClientInfoCaching clientInfoCaching;
        private readonly IForwardTargetCaching<ForwardTargetCacheInfo> forwardTargetCaching;
        private readonly SignInStateInfo signInStateInfo;
        private readonly IClientsTransfer clientsTransfer;

        public ForwardTargetProvider(IClientInfoCaching clientInfoCaching, IForwardTargetCaching<ForwardTargetCacheInfo> forwardTargetCaching, SignInStateInfo signInStateInfo, IClientsTransfer clientsTransfer)
        {
            this.clientInfoCaching = clientInfoCaching;
            this.forwardTargetCaching = forwardTargetCaching;
            this.signInStateInfo = signInStateInfo;
            signInStateInfo.OnChange += (state) =>
            {
                forwardTargetCaching.ClearConnection();
            };
            clientInfoCaching.OnOffline += (client) =>
            {
                forwardTargetCaching.ClearConnection(client.Name);
            };
            this.clientsTransfer = clientsTransfer;
        }

        public bool Contains(ushort port)
        {
            return forwardTargetCaching.Contains(port);
        }

        /// <summary>
        /// 根据host获取目标连接
        /// </summary>
        /// <param name="domain"></param>
        /// <param name="info"></param>
        public void Get(string domain, ProxyInfo info)
        {
            GetTarget(forwardTargetCaching.Get(domain), info);
        }
        /// <summary>
        /// 根据端口获取目标连接
        /// </summary>
        /// <param name="port"></param>
        /// <param name="info"></param>
        public void Get(ushort port, ProxyInfo info)
        {
            GetTarget(forwardTargetCaching.Get(port), info);
        }

        private void GetTarget(ForwardTargetCacheInfo cacheInfo, ProxyInfo info)
        {
            if (cacheInfo != null)
            {
                if (cacheInfo.Connection == null || !cacheInfo.Connection.Connected)
                {
                    cacheInfo.Connection = SelectConnection(cacheInfo);
                }
                info.Connection = cacheInfo.Connection;
                info.TargetAddress = cacheInfo.IPAddress;
                info.TargetPort = cacheInfo.Port;
            }
        }

        private IConnection SelectConnection(ForwardTargetCacheInfo cacheInfo)
        {
            if (cacheInfo.Name == "/")
            {
                return signInStateInfo.Connection;
            }

            if (clientInfoCaching.GetByName(cacheInfo.Name, out ClientInfo client))
            {
                if (client.Connection == null || client.Connection.Connected == false)
                {
                    clientsTransfer.ConnectClient(client);
                }
                return client.Connection;
            }
            return null;
        }
    }

    internal class ForwardUdpTargetProvider : ForwardTargetProvider, IForwardUdpTargetProvider
    {
        public ForwardUdpTargetProvider(IClientInfoCaching clientInfoCaching, IForwardUdpTargetCaching<ForwardTargetCacheInfo> forwardUdpTargetCaching, SignInStateInfo signInStateInfo, IClientsTransfer clientsTransfe)
            : base(clientInfoCaching, forwardUdpTargetCaching, signInStateInfo, clientsTransfe)
        {

        }
    }
}