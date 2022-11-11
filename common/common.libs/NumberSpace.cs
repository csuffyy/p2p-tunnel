﻿using System.Threading;

namespace common.libs
{
    public class NumberSpace
    {
        private ulong num;

        public NumberSpace(ulong defaultVal = 0)
        {
            num = defaultVal;
        }

        public ulong Get()
        {
            return num;
        }

        public ulong Increment()
        {
            Interlocked.CompareExchange(ref num, 0, ulong.MaxValue - 10000);
            Interlocked.Increment(ref num);
            return num;
        }

        public void Decrement()
        {
            Interlocked.Decrement(ref num);
        }

        public void Reset(ulong val = 0)
        {
            Interlocked.Exchange(ref num, val);
        }
    }

    public class NumberSpaceUInt32
    {
        private uint num = 0;

        public NumberSpaceUInt32(uint defaultVal = 0)
        {
            num = defaultVal;
        }

        public uint Get()
        {
            return num;
        }

        public uint Increment()
        {
            Interlocked.CompareExchange(ref num, 0, uint.MaxValue - 10000);
            Interlocked.Increment(ref num);
            return num;
        }

        public void Decrement()
        {
            Interlocked.Decrement(ref num);
        }

        public void Reset(uint val = 0)
        {
            Interlocked.Exchange(ref num, val);
        }
    }

    public class BoolSpace
    {
        bool _default;
        private bool value;
        public BoolSpace(bool defaultVal = true)
        {
            _default = defaultVal;
            value = _default;
        }

        public bool IsDefault => value == _default;

        public bool Reverse()
        {
            value = !_default;
            return value;
        }

        public void Reset()
        {
            value = _default;
        }
    }
}
