export default function Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold tracking-wide">
            <span className="text-white">Lumina</span>{' '}
            <span className="text-zinc-400">Terminal</span>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="text-zinc-300 hover:text-white">
              Features
            </a>
            <a href="#investors" className="text-zinc-300 hover:text-white">
              For Investors
            </a>
            <a href="#about" className="text-zinc-300 hover:text-white">
              About
            </a>
            <a href="#contact" className="text-zinc-300 hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#early-access"
            className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-zinc-200"
          >
            Get Early Access
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Illuminate the Markets
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300">
              Lumina equips both retail and professional traders with the same
              high-fidelity, institutional-grade market insights typically
              reserved for big players.
            </p>

            <div className="mt-8 flex items-center gap-4" id="early-access">
              <a
                href="#contact"
                className="rounded-md bg-white px-5 py-2 font-medium text-black hover:bg-zinc-200"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="rounded-md border border-white/20 px-5 py-2 font-medium text-white hover:bg-white/5"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Placeholder vizuale */}
          <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-8 text-zinc-400">
            <div className="text-sm uppercase tracking-wide text-zinc-500">
              Core Preview
            </div>
            <div className="mt-4 h-56 rounded-lg border border-white/10 bg-gradient-to-br from-zinc-900 to-black" />
            <p className="mt-3 text-sm text-zinc-400">
              Low-latency cloud charts. Clean, institutional-grade depth and
              order flow views.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-white">Core Features</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              'Real-time market data & order flow',
              'Level II+ (MBO/MBP)',
              'Footprint chart',
              'Heatmap',
              'Real-time news',
              'Scanner: combined volume, price & news (real-time)',
              'Create your algorithmic bot',
              'Copy trading',
              'Secure, low-latency, web-based cloud platform'
            ].map((f) => (
              <div
                key={f}
                className="rounded-lg border border-white/10 bg-zinc-900/30 p-4"
              >
                <div className="text-white">{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section id="investors" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-white">For Early Investors</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Bring institutional-grade visibility to everyone. Lumina equips both
            retail and professional traders with the same high-fidelity market
            insights typically reserved for institutions.
          </p>

          <div className="mt-8 rounded-lg border border-white/10 bg-zinc-900/30 p-6 text-zinc-300">
            The project, pitch deck, and business roadmap are available upon
            request.
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-white">About Lumina</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Founded by active traders, built for active traders. Everything is a
            thoughtful blend of AI-driven decision tools and professional market
            structure analytics.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-4 text-zinc-300">
            Email:{' '}
            <a
              href="mailto:admin@luminaterminal.com"
              className="underline decoration-white/40 underline-offset-4 hover:text-white"
            >
              admin@luminaterminal.com
            </a>
          </p>

          <div className="mt-6 rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-amber-200">
            Before platform launch, we plan to introduce a token that can be
            used to pay for the platform with up to 20% discount.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Lumina Terminal
      </footer>
    </main>
  );
}
