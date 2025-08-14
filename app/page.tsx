// app/page.tsx
import dynamic from "next/dynamic";
// komponentët që duam vetëm në klient
const MarketChart = dynamic(() => import("./components/MarketChart"), { ssr: false });
const EarlyAccessForm = dynamic(() => import("./components/EarlyAccessForm"), { ssr: false });
const markets = [
  "US Equity",
  "CME Group",
  "Hong Kong Exchange",
  "Eurex",
  "London Stock Exchange",
  "Forex",
  "Indices",
];
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Top bar */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-zinc-900 ring-1 ring-zinc-700 flex items-center justify-center">
              <span className="text-xs">▲</span>
            </div>
            <span className="font-semibold tracking-wide">Lumina Terminal</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#markets" className="hover:text-white">Markets</a>
            <a href="#investors" className="hover:text-white">Investors</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          {/* butoni vetëm të të çojë te seksioni #cta për formën */}
          <a
            href="#cta"
            className="rounded-lg bg-white text-black px-3 py-1.5 text-sm font-medium hover:bg-zinc-200"
          >
            Get early access
          </a>
        </div>
      </header>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px 300px at 50% -20%, #4f46e5 0%, transparent 60%), radial-gradient(600px 300px at 120% 0%, #22d3ee 0%, transparent 50%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 relative">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Illuminate the Markets
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Bring institutional grade visibility to everyone. Lumina equips both
            retail and professional traders with the same high fidelity market insights
            typically reserved for institutions.
          </p>
          {/* CTA: këtu e fusim formën */}
          <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
            <EarlyAccessForm />
            <a
              href="#features"
              className="rounded-lg ring-1 ring-zinc-700 px-5 py-2.5 font-medium hover:bg-zinc-900"
            >
              Explore features
            </a>
          </div>
        </div>
      </section>
      {/* Markets + Chart */}
      <section id="markets" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Markets</h2>
          <span className="text-sm text-zinc-400">demo UI</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {/* lista e tregjeve */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 h-fit">
            <ul className="space-y-3">
              {markets.map((m) => (
                <li
                  key={m}
                  className="flex items-center justify-between rounded-lg border border-zinc-800/60 bg-black/40 px-3 py-2 text-zinc-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                    {m}
                  </span>
                  <span className="text-[10px] text-zinc-500">live</span>
                </li>
              ))}
            </ul>
          </div>
          {/* chart-i */}
          <div className="lg:col-span-2">
            <MarketChart />
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Core features</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Real time market data & order flow", "High granularity feeds for precise decision making."],
            ["Level 2+ (MBO/MBP)", "Market by order and market by price depth."],
            ["Footprint chart", "Volume at price & delta visualization."],
            ["Heatmap", "Liquidity and depth dynamics at a glance."],
            ["Real time news", "Fast headlines, no noise."],
            ["Smart Scanner", "Volume + price + news filters in real time."],
            ["Algorithmic bots", "Design, backtest, and deploy."],
            ["Copy trading", "Follow strategies you trust."],
            ["Low latency cloud", "Web based, secure, and responsive."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-zinc-800 p-5 hover:border-zinc-700 transition">
              <h3 className="font-medium">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Investors */}
      <section id="investors" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-zinc-800 p-8 bg-gradient-to-br from-zinc-950 to-zinc-900">
          <h2 className="text-2xl md:text-3xl font-semibold">For Early Investors</h2>
          <p className="mt-4 text-zinc-300">
            We bring institutional grade visibility to everyone—retail and professional traders alike.
            Pitch deck and business roadmap are available upon request.
          </p>
          <p className="mt-4 text-zinc-300">
            Before the full platform launch, we’ll introduce a utility token that enables up to 20% savings
            on platform fees when used for payment.
          </p>
          <a
            href="mailto:admin@luminaterminal.com?subject=Investor%20materials%20request"
            className="mt-6 inline-block rounded-lg bg-white text-black px-5 py-2.5 font-medium hover:bg-zinc-200"
          >
            Request investor materials
          </a>
        </div>
      </section>
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">About Lumina</h2>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Built by active traders for active traders. Our mission is to combine AI-driven decision tools
          with transparent, low-latency market data so your workflow is faster, clearer, and more confident.
        </p>
      </section>
      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-xl border border-zinc-800 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">admin@luminaterminal.com</p>
        </div>
      </section>
      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Lumina Terminal. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// app/components/MarketChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

const MarketChart = () => {
  const times = [
    '2025-08-14T10:00:00',
    '2025-08-14T10:30:00',
    '2025-08-14T11:00:00',
    '2025-08-14T11:30:00',
    '2025-08-14T12:00:00',
    '2025-08-14T12:30:00',
    '2025-08-14T13:00:00',
    '2025-08-14T13:30:00',
    '2025-08-14T14:00:00',
    '2025-08-14T14:30:00',
    '2025-08-14T15:00:00',
    '2025-08-14T15:30:00',
  ];

  const candleY = [
    [24.0, 24.1, 23.9, 23.9],
    [23.9, 24.0, 23.8, 23.8],
    [23.8, 23.8, 23.6, 23.6],
    [23.6, 23.7, 23.5, 23.6],
    [23.6, 23.7, 23.6, 23.7],
    [23.7, 23.8, 23.6, 23.7],
    [23.7, 23.8, 23.7, 23.7],
    [23.7, 23.8, 23.6, 23.6],
    [23.6, 23.7, 23.6, 23.7],
    [23.7, 24.0, 23.7, 23.9],
    [23.9, 24.1, 23.9, 24.0],
    [24.0, 24.4, 24.0, 24.1],
  ];

  const volumeData = [
    0.5, 1.0, 5.0, 1.5, 1.0, 0.5, 0.8, 0.6, 0.9, 1.2, 1.5, 3.1 // Approximated unusual volume peaks based on images
  ];

  const series = [
    {
      name: 'Price',
      type: 'candlestick',
      data: candleY.map((y, i) => ({
        x: new Date(times[i]).getTime(),
        y,
      })),
    },
    {
      name: 'Unusual Volume (M)',
      type: 'column',
      data: volumeData.map((v, i) => ({
        x: new Date(times[i]).getTime(),
        y: v,
      })),
    },
  ];

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: '#1a1a1a',
      foreColor: '#ccc',
    },
    title: {
      text: 'Palantir Technologies Inc. $PLTR - Combined Dark Pool Activity',
      align: 'left',
      style: {
        color: '#fff',
      },
    },
    subtitle: {
      text: 'Dark Pool Volume: 9.2M +5.8% | Negative Volume: 65,916 ▼20.7% | Sens. Analytics: NEGATIVE | Social Media: NEGATIVE | Unusual Volume: 5 posts ▲31.3% | Average Price: 24.10 ▼1.7% | Current Price: 24.10',
      align: 'left',
      style: {
        color: '#ccc',
      },
    },
    annotations: {
      yaxis: [
        {
          y: 24.10,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Current/Avg Price $24.10',
          },
        },
        {
          y: 24.80,
          borderColor: '#FEB019',
          label: {
            borderColor: '#FEB019',
            style: {
              color: '#fff',
              background: '#FEB019',
            },
            text: 'Institutions Buying at $24.80',
          },
        },
      ],
      xaxis: [
        {
          x: new Date('2025-08-14T09:30:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 60,000 shares @ 09:30',
          },
        },
        {
          x: new Date('2025-08-14T09:45:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 200,000 shares @ 09:45',
          },
        },
        {
          x: new Date('2025-08-14T09:58:00').getTime(),
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 100,000 shares @ 09:58',
          },
        },
        {
          x: new Date('2025-08-14T09:58:00').getTime() + 60000, // slightly offset
          borderColor: '#775DD0',
          label: {
            borderColor: '#775DD0',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'ATS 50,000 shares @ 24.50',
          },
        },
      ],
    },
    xaxis: {
      type: 'datetime',
      min: new Date('2025-08-14T09:00:00').getTime(),
      labels: {
        datetimeFormatter: {
          hour: 'HH:mm',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Price (USD)',
          style: {
            color: '#fff',
          },
        },
        labels: {
          formatter: (val: number) => val.toFixed(1),
        },
      },
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        opposite: true,
        title: {
          text: 'Volume (M)',
          style: {
            color: '#fff',
          },
        },
      },
    ],
    grid: {
      borderColor: '#333',
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746',
          downward: '#EF403C',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  };

  return <Chart options={options} series={series} type="candlestick" height={350} width="100%" />;
};

export default MarketChart;
