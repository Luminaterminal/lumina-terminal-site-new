'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { t: '10:00', p: 22.9 },
  { t: '10:30', p: 22.7 },
  { t: '11:00', p: 23.1 },
  { t: '11:30', p: 22.8 },
  { t: '12:00', p: 23.2 },
  { t: '12:30', p: 23.0 },
  { t: '13:00', p: 23.1 },
  { t: '13:30', p: 22.95 },
  { t: '14:00', p: 23.2 },
  { t: '14:30', p: 23.35 },
  { t: '15:00', p: 23.6 },
];

export default function MarketChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="fillL" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
          <XAxis dataKey="t" stroke="#a1a1aa" tickLine={false} />
          <YAxis stroke="#a1a1aa" width={40} tickLine={false} />
          <Tooltip
            contentStyle={{
              background: '#0a0a0a',
              border: '1px solid #27272a',
              color: '#fff',
            }}
            labelStyle={{ color: '#a1a1aa' }}
          />
          <Area type="monotone" dataKey="p" stroke="#22d3ee" fill="url(#fillL)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
