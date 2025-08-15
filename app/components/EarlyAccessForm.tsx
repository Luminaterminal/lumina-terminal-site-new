"use client";
import { useRef, useState } from "react";

type Status = "idle" | "loading" | "ok" | "err";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const trapRef = useRef<HTMLInputElement>(null); // honeypot

  const trimmed = email.trim().toLowerCase();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    // nëse honeypot ka vlerë, e ndërpresim (gjasa bot)
    if (trapRef.current?.value) return;
    if (!isValid || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("ok");
        setMessage(data?.message ?? "Faleminderit! Do t’ju njoftojmë shpejt.");
        setEmail("");
      } else {
        setStatus("err");
        setMessage(data?.message ?? "Diçka nuk shkoi. Provo përsëri.");
      }
    } catch {
      setStatus("err");
      setMessage("Gabim rrjeti. Provo përsëri.");
    }
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-xl items-center gap-2">
      {/* Honeypot (i fshehtë) */}
      <input
        ref={trapRef}
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        inputMode="email"
        autoComplete="email"
        required
        className="flex-1 rounded-lg bg-zinc-900 px-3 py-2 ring-1 ring-zinc-700 placeholder:text-zinc-500 focus:outline-none focus:ring-emerald-500/40"
      />

      <button
        type="submit"
        disabled={!isValid || status === "loading"}
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white ring-emerald-500/40 hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : "Get Early Access"}
      </button>

      <span
        role="status"
        aria-live="polite"
        className={`ml-2 text-sm ${
          status === "ok"
            ? "text-emerald-400"
            : status === "err"
            ? "text-red-400"
            : "text-transparent"
        }`}
      >
        {status === "ok" || status === "err" ? message : "…"}
      </span>
    </form>
  );
}
