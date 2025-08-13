"use client";
import { useState } from "react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="rounded-lg bg-zinc-900 px-3 py-2 ring-1 ring-zinc-700"
        required
      />
      <button
        disabled={status === "loading"}
        className="rounded-lg bg-white text-black px-4 py-2 font-medium disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Request access"}
      </button>
      {status === "ok" && (
        <span className="text-sm text-green-400 ml-2">Thanks!</span>
      )}
      {status === "err" && (
        <span className="text-sm text-red-400 ml-2">Try again</span>
      )}
    </form>
  );
}
