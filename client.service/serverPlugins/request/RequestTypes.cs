﻿using ProtoBuf;
using System;

namespace client.service.serverPlugins.request
{
    [ProtoContract(ImplicitFields = ImplicitFields.AllFields)]
    [Flags]
    public enum RequestExcuteTypes : short
    {
        GET,
        RESULT,
        SEND,
        FAIL
    }
}