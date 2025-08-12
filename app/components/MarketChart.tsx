'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { time: '10:00', price: 22.8, vol: 0.8 },
  { time: '10:30', price: 23.1, vol: 1.2 },
  { time: '11:00', price: 23.6, vol: 2.0 },
  { time: '11:30', price: 23.2, vol: 1.0 },
  { time: '12:00', price: 23.0, vol: 0.7 },
  { time: '12:30', price: 23.4, vol: 1.5 },
  { time: '13:00', price: 23.1, vol: 0.9 },
  { time: '13:30', price: 23.3, vol: 1.1 },
  { time: '14:00', price: 23.0, vol: 0.6 },
  { time: '14:30', price: 23.4, vol: 1.8 },
  { time: '15:00', price: 23.7, vol: 2.4 },
];

export default function MarketChart() {
  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="p" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#262626" vertical={false} />
          <XAxis dataKey="time" tick={{ fill: '#a1a1aa', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: '#a1a1aa', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 0.4', 'dataMax + 0.4']}
          />
          <Tooltip
            contentStyle={{ background: '#0a0a0a', border: '1px solid #27272a', borderRadius: 8 }}
            labelStyle={{ color: '#e4e4e7' }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#22d3ee"
            fill="url(#p)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-3 text-xs text-zinc-400">
        Unusual volume near close · synthetic sample data
      </div>
    </div>
  );
}
