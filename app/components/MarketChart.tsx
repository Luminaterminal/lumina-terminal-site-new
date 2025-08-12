'use client';

import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// --------------------
// të dhëna demo (statike) – vetëm për UI
// mund t’i zëvendësosh më vonë me real-time
// --------------------
type Point = { t: string; price: number; vol: number };

const data: Point[] = [
  { t: '10:00', price: 22.9, vol: 0.8 },
  { t: '10:30', price: 22.6, vol: 0.9 },
  { t: '11:00', price: 22.7, vol: 1.1 },
  { t: '11:30', price: 22.5, vol: 0.6 },
  { t: '12:00', price: 22.8, vol: 0.7 },
  { t: '12:30', price: 22.9, vol: 0.9 },
  { t: '13:00', price: 22.7, vol: 0.8 },
  { t: '13:30', price: 22.6, vol: 0.7 },
  { t: '14:00', price: 22.8, vol: 0.9 },
  { t: '14:30', price: 23.0, vol: 1.0 },
  { t: '15:00', price: 23.4, vol: 4.6 }, // "unusual volume"
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const p = payload.find((x: any) => x.dataKey === 'price')?.value;
  const v = payload.find((x: any) => x.dataKey === 'vol')?.value;
  return (
    <div className="rounded-md border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs text-zinc-200">
      <div className="font-medium">{label}</div>
      <div className="mt-1">Price: <span className="text-cyan-300">{p?.toFixed(2)}</span></div>
      <div>Volume: <span className="text-amber-300">{v?.toFixed(2)}M</span></div>
    </div>
  );
};

export default function MarketChart() {
  return (
    <div className="rounded-xl border border-zinc-800 p-4 bg-zinc-950">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm text-zinc-400">Intraday • demo</div>
        <div className="text-xs text-amber-300">Unusual volume</div>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#27272a" vertical={false} />
            <XAxis
              dataKey="t"
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              axisLine={{ stroke: '#3f3f46' }}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              width={40}
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              axisLine={{ stroke: '#3f3f46' }}
              tickLine={false}
              domain={['dataMin - 0.2', 'dataMax + 0.2']}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              hide
              domain={[0, 'dataMax + 1']}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* çmimi */}
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="price"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#priceFill)"
              dot={false}
              activeDot={{ r: 3 }}
            />

            {/* volumi */}
            <Bar
              yAxisId="right"
              dataKey="vol"
              barSize={5}
              radius={[2, 2, 0, 0]}
              fill="#f59e0b"
              opacity={0.65}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
