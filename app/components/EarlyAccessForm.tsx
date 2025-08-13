"use client";

import { useState } from "react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"ok"|"err"|"loading">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email@domain.com"
        className="rounded-lg border border-zinc-700 bg-black/40 px-3 py-2 text-sm text-white"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
      >
        {status === "loading" ? "Sending..." : "Get Early Access"}
      </button>
      {status === "ok" && (
        <span className="text-sm text-emerald-400">Faleminderit! U ruajt.</span>
      )}
      {status === "err" && (
        <span className="text-sm text-red-400">Diçka s'shkoi mirë.</span>
      )}
    </form>
  );
}
