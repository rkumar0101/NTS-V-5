"use client";

import { economy } from "@/lib/economy";

function Arrow({ n }: { n: number }) {
  const up = n > 0;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${
        up
          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
          : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
      }`}
      title={`${n > 0 ? "+" : ""}${n}`}
    >
      {up ? "▲" : "▼"} {n > 0 ? "+" : ""}
      {n}
    </span>
  );
}

export default function EconomicDashboard() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Economic Dashboard</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {economy.map((m) => (
          <div
            key={m.key}
            className="rounded-2xl border border-gray-300 bg-white dark:bg-white/5 p-4"
          >
            <div className="text-sm text-gray-700 dark:text-gray-400">{m.label}</div>
            <div className="mt-1 text-2xl font-semibold tracking-tight">
              {typeof m.value === "number"
                ? new Intl.NumberFormat().format(m.value)
                : m.value}
              {m.unit ?? ""}
            </div>
            <div className="mt-2">
              <Arrow n={m.change} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs opacity-70">
        * Static demo data — update <code>/lib/economy.ts</code> daily.
      </p>
    </section>
  );
}
