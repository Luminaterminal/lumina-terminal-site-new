'use client';

import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

type Pt = { t: string; p: number; v: number };

const data: Pt[] = [
  { t: '10:00', p: 22.85, v: 0.8 },
  { t: '10:30', p: 22.70, v: 0.7 },
  { t: '11:00', p: 23.05, v: 1.1 },
  { t: '11:30', p: 22.92, v: 0.9 },
  { t: '12:00', p: 23.18, v: 1.2 },
  { t: '12:30', p: 23.00, v: 0.6 },
  { t: '13:00', p: 23.12, v: 0.8 },
  { t: '13:30', p: 23.28, v: 1.0 },
  { t: '14:00', p: 23.22, v: 0.9 },
  { t: '14:30', p: 23.40, v: 1.6 }, // spike
  { t: '15:00', p: 23.58, v: 2.3 }, // spike
];

const badges = [
  { label: 'Alternative data', cls: 'bg-cyan-500/10 text-cyan-300' },
  { label: 'Dark pool activity', cls: 'bg-amber-500/10 text-amber-300' },
  { label: 'Social media: negative', cls: 'bg-rose-500/10 text-rose-300' },
];

function Tip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const price = payload.find((x: any) => x.dataKey === 'p')?.value as number | undefined;
  const vol = payload.find((x: any) => x.dataKey === 'v')?.value as number | undefined;
  return (
    <div className="rounded-md border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-xs">
      <div className="text-zinc-300">{label}</div>
      {price !== undefined && (
        <div className="text-white">Price: ${price.toFixed(2)}</div>
      )}
      {vol !== undefined && (
        <div className="text-amber-300">Volume: {vol.toFixed(2)}M</div>
      )}
    </div>
  );
}

export default function MarketChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      {/* header i kartës */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-zinc-400">
          Intraday · sample data
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b.label}
              className={`rounded-full px-2.5 py-1 text-[11px] ${b.cls} border border-zinc-800`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* chart */}
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
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
              axisLine={false}
              tickLine={false}
            />
            {/* Y për çmimin (majtas) */}
            <YAxis
              yAxisId="left"
              width={42}
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 0.3', 'dataMax + 0.3']}
            />
            {/* Y për volumin (djathtas, fshehur) */}
            <YAxis yAxisId="right" orientation="right" hide domain={[0, 'dataMax + 0.5']} />

            <Tooltip content={<Tip />} />

            {/* volumet (shtylla) */}
            <Bar
              yAxisId="right"
              dataKey="v"
              barSize={6}
              radius={[2, 2, 0, 0]}
              fill="#f59e0b"
              opacity={0.65}
            />

            {/* çmimi (area) */}
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="p"
              stroke="#22d3ee"
              strokeWidth={2}
              fill="url(#priceFill)"
              dot={false}
              activeDot={{ r: 3 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 text-right text-[11px] text-zinc-500">
        *Demo UI 
      </div>
    </div>
  );
}

