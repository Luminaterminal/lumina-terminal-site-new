"use client";
import { useState } from "react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/early-access", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setStatus(res.ok ? "ok" : "err");
  }

  return (
    <form onSubmit={submit} className="mt-6 flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="w-64 rounded-md bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm"
      />
      <button
        disabled={status === "sending"}
        className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium"
      >
        {status === "sending" ? "Sending..." : "Get early access"}
      </button>
      {status === "ok" && <span className="text-green-400 text-sm">Thanks!</span>}
      {status === "err" && <span className="text-red-400 text-sm">Try again</span>}
    </form>
  );
}
