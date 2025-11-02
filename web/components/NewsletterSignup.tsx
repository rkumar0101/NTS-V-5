"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle"|"loading"|"ok"|"err">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setState("err");
    setState("loading");

    // TODO: hook to your API/Email provider
    await new Promise(r => setTimeout(r, 800));

    setState("ok");
    setEmail("");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold">Get Clarity Delivered</h3>
          <p className="text-sm opacity-80 mt-1">
            One concise email. Big picture on politics, economy, tech, and defence.
          </p>
        </div>

        <form onSubmit={submit} className="w-full md:w-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="w-full md:w-72 rounded-lg border border-black/20 dark:border-white/20 bg-transparent px-3 py-2 outline-none"
            required
          />
          <button
            disabled={state === "loading"}
            className="rounded-lg bg-sky-600 text-white px-4 py-2 hover:bg-sky-700 disabled:opacity-60"
          >
            {state === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {state === "ok" && <div className="text-sm text-emerald-600">Subscribed! Check your inbox.</div>}
        {state === "err" && <div className="text-sm text-rose-600">Enter a valid email.</div>}
      </div>
    </section>
  );
}
