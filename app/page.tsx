// app/page.tsx
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
            <a href="#investors" className="hover:text-white">Investors</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
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
        <div className="pointer-events-none absolute inset-0 opacity-30"
             style={{
               background:
                 'radial-gradient(600px 300px at 50% -20%, #4f46e5 0%, transparent 60%), radial-gradient(600px 300px at 120% 0%, #22d3ee 0%, transparent 50%)'
             }} />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 relative">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Illuminate the Markets
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Bring institutional-grade visibility to everyone. Lumina equips both
            retail and professional traders with the same high-fidelity market insights
            typically reserved for institutions.
          </p>
          <div id="cta" className="mt-8 flex gap-3">
            <a
              href="mailto:admin@luminaterminal.com"
              className="rounded-lg bg-white text-black px-5 py-2.5 font-medium hover:bg-zinc-200"
            >
              Get early access
            </a>
            <a
              href="#features"
              className="rounded-lg ring-1 ring-zinc-700 px-5 py-2.5 font-medium hover:bg-zinc-900"
            >
              Explore features
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Core features</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['Real-time market data & order flow', 'High-granularity feeds for precise decision-making.'],
            ['Level 2+ (MBO/MBP)', 'Market-by-order and market-by-price depth.'],
            ['Footprint chart', 'Volume-at-price & delta visualization.'],
            ['Heatmap', 'Liquidity and depth dynamics at a glance.'],
            ['Real-time news', 'Fast headlines, no noise.'],
            ['Smart Scanner', 'Volume + price + news filters in real time.'],
            ['Algorithmic bots', 'Design, backtest, and deploy.'],
            ['Copy trading', 'Follow strategies you trust.'],
            ['Low-latency cloud', 'Web-based, secure, and responsive.'],
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
            We bring institutional-grade visibility to everyone—retail and professional traders alike.
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
          with transparent, low-latency market data—so your workflow is faster, clearer, and more confident.
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
