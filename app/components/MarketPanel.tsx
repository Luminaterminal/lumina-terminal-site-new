"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  LineStyle,
} from "lightweight-charts";

type Candle = { time: number; open: number; high: number; low: number; close: number };
type VolBar = { time: number; value: number };
type TapeRow = { venue: string; price: number; shares: number; time: string };

const mockCandles: Candle[] = [
  // shembull; zëvendëso më vonë me të vërteta
  { time: 10, open: 23.8, high: 24.0, low: 23.7, close: 23.9 },
  { time: 11, open: 23.9, high: 24.1, low: 23.8, close: 24.0 },
  { time: 12, open: 24.0, high: 24.05, low: 23.9, close: 23.95 },
  { time: 13, open: 23.95, high: 24.1, low: 23.9, close: 24.02 },
  { time: 14, open: 24.02, high: 24.2, low: 24.0, close: 24.15 },
  { time: 15, open: 24.15, high: 24.35, low: 24.1, close: 24.30 },
];

const mockVol: VolBar[] = [
  { time: 10, value: 0.9 }, { time: 11, value: 1.4 }, { time: 12, value: 0.8 },
  { time: 13, value: 1.1 }, { time: 14, value: 1.6 }, { time: 15, value: 2.2 },
];

const mockAvgDarkLine = mockCandles.map(c => ({ time: c.time, value: 24.10 }));

const mockTape: TapeRow[] = [
  { venue: "ATS", price: 24.50, shares: 50_000, time: "24:50" },
  { venue: "ATS", price: 24.10, shares: 100_000, time: "09:58" },
  { venue: "ATS", price: 24.05, shares: 200_000, time: "09:45" },
  { venue: "ATS", price: 24.00, shares: 60_000, time: "09:30" },
];

export default function MarketPanel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {
      height: 360,
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#D7E0EA",
      },
      grid: {
        vertLines: { color: "rgba(200,200,200,0.06)" },
        horzLines: { color: "rgba(200,200,200,0.06)" },
      },
      rightPriceScale: {
        borderColor: "rgba(200,200,200,0.1)",
      },
      timeScale: {
        borderColor: "rgba(200,200,200,0.1)",
      },
      crosshair: {
        vertLine: { color: "rgba(255,255,255,0.25)", style: LineStyle.Dotted },
        horzLine: { color: "rgba(255,255,255,0.25)", style: LineStyle.Dotted },
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#19C37D",
      downColor: "#E85D5D",
      borderVisible: false,
      wickUpColor: "#19C37D",
      wickDownColor: "#E85D5D",
    });
    candleSeries.setData(mockCandles);

    const volSeries = chart.addHistogramSeries({
      priceFormat: { type: "volume" },
      priceScaleId: "",
      color: "rgba(88, 141, 197, 0.7)",
      base: 0,
    });
    volSeries.setData(mockVol);

    const avgLine = chart.addLineSeries({
      color: "#F39C12",
      lineWidth: 2,
    });
    avgLine.setData(mockAvgDarkLine);

    function handleResize() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      chart.applyOptions({ width: rect.width });
    }
    handleResize();

    const ro = new ResizeObserver(handleResize);
    ro.observe(containerRef.current);

    return () => {
      ro.disconnect();
      chart.remove();
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto text-slate-200">
      {/* Rreshti i sipërm: dy karta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Dark Pool Activity */}
        <div className="rounded-2xl border border-white/5 bg-white/3 backdrop-blur p-4">
          <div className="text-slate-300 text-sm">Dark Pool Activity</div>
          <div className="mt-1 text-slate-100 font-medium">Palantir Technologies Inc. <span className="text-slate-400 text-xs">$PLTR</span></div>

          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-slate-400">Dark pool volume</div>
              <div className="text-slate-100 font-semibold">2M</div>
            </div>
            <div>
              <div className="text-slate-400">Average price</div>
              <div className="text-slate-100 font-semibold">24.10</div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-emerald-300/90 text-xs">
                <span className="inline-block h-2 w-24 bg-emerald-500/40 rounded" />
                <span className="text-amber-300">▼ 1.7% vs avg price</span>
              </div>
            </div>
            <div>
              <div className="text-slate-400">Current price</div>
              <div className="text-slate-100 font-semibold">24.10</div>
            </div>
          </div>
        </div>

        {/* Time & Sales */}
        <div className="rounded-2xl border border-white/5 bg-white/3 backdrop-blur p-4">
          <div className="text-slate-300 text-sm">Time &amp; Sales</div>
          <div className="mt-3 space-y-2">
            {mockTape.map((r, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-semibold">{r.venue}</span>
                  <span className="text-slate-400">{r.time}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-slate-100 tabular-nums">{r.price.toFixed(2)}</span>
                  <span className="text-slate-300 tabular-nums">{r.shares.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grafiku */}
      <div className="rounded-2xl border border-white/5 bg-white/3 backdrop-blur p-3">
        <div ref={containerRef} className="w-full" />
        <div className="mt-2 text-xs text-amber-300">Average dark pr.</div>
      </div>

      {/* Banner sinjali */}
      <div className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 px-4 py-3 text-sm">
        🔔 Institutions are buying in dark pools at <span className="font-semibold">$24.80</span> while the current price is <span className="font-semibold">$24.10</span>.
      </div>
    </div>
  );
}

