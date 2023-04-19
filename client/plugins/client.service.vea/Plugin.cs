﻿using client.service.socks5;
using client.service.vea.socks5;
using common.libs;
using common.proxy;
using common.server;
using common.socks5;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace client.service.vea
{
    public sealed class Plugin : IPlugin
    {
        public void LoadAfter(ServiceProvider services, Assembly[] assemblys)
        {
            var transfer = services.GetService<VeaTransfer>();
            ProxyPluginLoader.LoadPlugin(services.GetService<IVeaSocks5ProxyPlugin>());
            Config config = services.GetService<Config>();

            Logger.Instance.Warning(string.Empty.PadRight(Logger.Instance.PaddingWidth, '='));
            Logger.Instance.Debug($"虚拟网卡插件已加载");
            if (config.Enable)
            {
                transfer.Run();
                Logger.Instance.Debug($"虚拟网卡插件已开启");
            }
            else
            {
                Logger.Instance.Info($"虚拟网卡插件未开启");
            }
            if (config.ConnectEnable)
            {
                Logger.Instance.Debug($"虚拟网卡插件已允许连接");
            }
            else
            {
                Logger.Instance.Info($"虚拟网卡插件未允许连接");
            }
            Logger.Instance.Warning(string.Empty.PadRight(Logger.Instance.PaddingWidth, '='));
        }

        public void LoadBefore(ServiceCollection services, Assembly[] assemblys)
        {
            services.AddSingleton<Config>();
            services.AddSingleton<VeaTransfer>();
            services.AddSingleton<VeaMessengerSender>();

            services.AddSingleton<IVeaSocks5ConnectionProvider, VeaSocks5ConnectionProvider>();
            services.AddSingleton<IVeaSocks5ProxyPlugin, VeaSocks5ProxyPlugin>();

        }
    }
}
