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
        setMessage(data?.message ?? "Thank you! We'll notify you when Lumina Terminal launches.");
        setEmail("");
      } else {
        setStatus("err");
        setMessage(data?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={submit} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
        {/* Honeypot (hidden) */}
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
          placeholder="Enter your email address"
          inputMode="email"
          autoComplete="email"
          required
          className="flex-1 rounded-lg bg-white/5 backdrop-blur px-4 py-3 text-slate-100 ring-1 ring-white/10 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 hover:bg-white/10 transition-all duration-200"
        />

        <button
          type="submit"
          disabled={!isValid || status === "loading"}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-600/20 px-6 py-3 font-medium text-emerald-300 ring-1 ring-emerald-500/40 hover:bg-emerald-600/30 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 whitespace-nowrap"
        >
          {status === "loading" ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Get Early Access"
          )}
        </button>
      </form>

      {/* Status message */}
      {(status === "ok" || status === "err") && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            status === "ok"
              ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20"
              : "bg-red-500/10 text-red-300 ring-1 ring-red-500/20"
          } transition-all duration-200`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
