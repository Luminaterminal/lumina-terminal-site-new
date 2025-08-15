// app/page.tsx
import Link from "next/link";
import MarketPanel from "./components/MarketPanel";
// Nëse ke një form ekzistues për early access, ç‘komento vijën më poshtë:
// import EarlyAccessForm from "./components/EarlyAccessForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B1215] text-slate-200">
      {/* CONTAINER KRYESOR */}
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-20">

        {/* NAV i thjeshtë */}
        <header className="mb-10 flex items-center justify-between">
          <div className="font-semibold tracking-wide text-slate-100">
            LUMINA TERMINAL
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <Link href="#features" className="hover:text-slate-100">Features</Link>
            <Link href="#investors" className="hover:text-slate-100">Investors</Link>
            <Link href="#about" className="hover:text-slate-100">About</Link>
            <Link href="#contact" className="hover:text-slate-100">Contact</Link>
            <Link
              href="#early-access"
              className="rounded-md bg-emerald-600/20 px-3 py-1.5 text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-600/30"
            >
              Get Early Access
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="relative mb-10 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-slate-100 md:text-6xl">
            Illuminate the Markets.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-300 md:text-lg">
            Real-time market data, order flow analysis, and AI-powered trading tools — all in one platform.
          </p>

          <div className="mt-6">
            <Link
              href="#early-access"
              className="inline-flex items-center rounded-lg bg-emerald-600/20 px-4 py-2 text-emerald-300 ring-1 ring-emerald-500/40 hover:bg-emerald-600/30"
            >
              Get Early Access
            </Link>
          </div>

          {/* Rreth dekorativ (vend i globit) */}
          <div
            aria-hidden
            className="pointer-events-none mx-auto mt-10 h-56 w-56 rounded-full
                       ring-1 ring-emerald-400/30
                       shadow-[0_0_140px_rgba(16,185,129,0.35)]
                       bg-[radial-gradient(closest-side,rgba(16,185,129,0.25),rgba(13,18,21,0))]"
          />
        </section>

        {/* PANELI I BASHKUAR: Kartat + Grafiku + Banner */}
        <section className="mb-16">
          <MarketPanel />
        </section>

        {/* FEATURE + INVESTORS */}
        <section id="features" className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-100">
              Core Features
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li>✅ Real-Time Market Data &amp; Order Flow</li>
              <li>✅ Footprint Charts &amp; Heatmaps</li>
              <li>✅ News Integration &amp; Market Scanner</li>
              <li>✅ Algorithmic Bots &amp; Copy Trading</li>
              <li>✅ Secure, Low-Latency Cloud Platform</li>
            </ul>
          </div>

          <div id="investors" className="rounded-2xl border border-white/5 bg-white/3 backdrop-blur p-6">
            <h2 className="mb-2 text-2xl font-semibold text-slate-100">For Investors</h2>
            <p className="text-slate-300">
              Lumina Terminal is positioned to disrupt the retail and institutional trading space.
              Pitch deck and business roadmap available upon request.
            </p>
          </div>
        </section>

        {/* EARLY ACCESS (opsional nëse ke formë) */}
        <section id="early-access" className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-slate-100">Get Early Access</h2>
          <p className="mb-4 text-slate-300">
            Leave your email to get early access and updates when Lumina Terminal launches.
          </p>

          {/* Nëse ke komponent ekzistues të formës, hiq komentin: */}
          {/* <EarlyAccessForm /> */}

          {/* Nëse akoma s’ke formë, një buton placeholder: */}
          <Link
            href="mailto:admin@luminaterminal.com?subject=Early%20Access%20Request"
            className="inline-flex rounded-lg bg-emerald-600/20 px-4 py-2 text-emerald-300 ring-1 ring-emerald-500/40 hover:bg-emerald-600/30"
          >
            Request via Email
          </Link>
        </section>

        {/* ABOUT */}
        <section id="about" className="mb-12">
          <h2 className="mb-3 text-2xl font-semibold text-slate-100">About Lumina</h2>
          <p className="max-w-3xl text-slate-300">
            Founded by professional traders; Lumina Terminal merges institutional-grade analytics
            with AI-driven decision tools — built for retail and institutional users.
          </p>
        </section>

        {/* CONTACT (pa numër telefoni) */}
        <section id="contact" className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-slate-100">Contact Us</h2>
          <p className="text-slate-300">
            Email: <a className="text-emerald-300 hover:underline" href="mailto:admin@luminaterminal.com">admin@luminaterminal.com</a>
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Lumina Terminal. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
