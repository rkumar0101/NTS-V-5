"use client";

import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";

export default function MarketPulse() {
  // Bar chart heights (mock data — replace with real API later)
  const bars = [40, 65, 45, 70, 55, 80, 60, 90, 75, 100];
  const isUp = true; // toggle for demo

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Market Live
          </span>
        </div>
        <button
          className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 transition-colors"
          aria-label="View markets"
        >
          <ArrowRight size={14} className="-rotate-45" />
        </button>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-12 w-full mb-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-indigo-600 w-full rounded-t-sm opacity-20 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      {/* Value */}
      <div className="flex justify-between items-end">
        <div>
          <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            72,410.55
          </div>
          <div className="text-xs text-slate-500">BSE SENSEX</div>
        </div>
        <div
          className={`font-bold px-2 py-1 rounded text-xs flex items-center gap-1 ${
            isUp
              ? "text-green-600 bg-green-50 dark:bg-green-900/20"
              : "text-rose-600 bg-rose-50 dark:bg-rose-900/20"
          }`}
        >
          {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {isUp ? "+1.24%" : "-0.87%"}
        </div>
      </div>
    </div>
  );
}
