﻿using common.libs;
using common.libs.extends;
using common.proxy;
using common.server;
using common.server.model;
using System;
using System.Net;
using System.Text;

namespace common.forward
{
    public interface IForwardProxyPlugin : IProxyPlugin
    {
        public Action<ushort> OnStarted { get; set; }
        public Action<ushort> OnStoped { get; set; }
    }

    public class ForwardProxyPlugin : IForwardProxyPlugin
    {
        public byte Id => config.Plugin;
        public virtual uint Access => 0b00000000_00000000_00000000_00001000;
        public virtual string Name => "port forward";
        public EnumBufferSize BufferSize => config.BufferSize;
        public IPAddress BroadcastBind => IPAddress.Any;
        public Action<ushort> OnStarted { get; set; } = (port) => { };
        public Action<ushort> OnStoped { get; set; } = (port) => { };

        private readonly Config config;
        private readonly IProxyServer proxyServer;
        private readonly IForwardTargetProvider forwardTargetProvider;
        private readonly IServiceAccessValidator serviceAccessValidator;
        public ForwardProxyPlugin(Config config, IProxyServer proxyServer, IForwardTargetProvider forwardTargetProvider, IServiceAccessValidator serviceAccessValidator)
        {
            this.config = config;
            this.proxyServer = proxyServer;
            this.forwardTargetProvider = forwardTargetProvider;
            this.serviceAccessValidator = serviceAccessValidator;
        }

        public EnumProxyValidateDataResult ValidateData(ProxyInfo info)
        {
            return EnumProxyValidateDataResult.Equal;
        }

        public bool HandleRequestData(ProxyInfo info)
        {
            if (info.Connection == null || info.Connection.Connected == false)
            {
                info.Connection = null;
                GetConnection(info);
            }

            if (info.Connection == null || info.Connection.Connected == false)
            {
                info.Data = Helper.EmptyArray;
                proxyServer.InputData(info);
                return true;
            }

            info.AddressType = EnumProxyAddressType.IPV4;
            return true;
        }
        public bool HandleAnswerData(ProxyInfo info)
        {
            if (info.Step == EnumProxyStep.Command)
            {
                info.Step = EnumProxyStep.ForwardTcp;
                return false;
            }
            return true;
        }
        public virtual bool ValidateAccess(ProxyInfo info)
        {
            return config.ConnectEnable ||  serviceAccessValidator.Validate(info.Connection.ConnectId,Access);
        }

        public void Started(ushort port)
        {
            OnStarted(port);
        }
        public void Stoped(ushort port)
        {
            OnStoped(port);
        }

        private void GetConnection(ProxyInfo info)
        {
            ForwardAliveTypes aliveTypes = (ForwardAliveTypes)info.Rsv;
            if (aliveTypes == ForwardAliveTypes.Tunnel)
            {
                forwardTargetProvider.Get(info.ListenPort, info);
            }
            else
            {
                int portStart = 0;
                string host = HttpParser.GetHost(info.Data, ref portStart).GetString();
                forwardTargetProvider.Get(host, info);
            }
        }
    }
}
