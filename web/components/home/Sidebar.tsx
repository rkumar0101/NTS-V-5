"use client";

import { Feather, BarChart3, CheckCircle } from "lucide-react";
import { Reveal, TiltCard, MarketPulse } from "@/components/ui";
import Button from "@/components/ui/Button";
import { EDITORIALS, CIVIC_POLL } from "@/lib/news";

export default function Sidebar() {
  return (
    <div className="space-y-10">
      {/* Market Pulse */}
      <Reveal delay={100}>
        <MarketPulse />
      </Reveal>

      {/* Narayani Thoughts — Editorial */}
      <Reveal delay={200}>
        <TiltCard className="bg-slate-950 text-white p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Feather size={100} />
          </div>
          <h3 className="font-serif font-bold text-2xl mb-1 text-indigo-400">
            Narayani Thoughts.
          </h3>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">
            Editorial &amp; Opinion
          </p>

          <div className="space-y-6">
            {EDITORIALS.map((ed, i) => (
              <div key={ed.id}>
                {i > 0 && <hr className="border-slate-800 mb-6" />}
                <div className="cursor-pointer group">
                  <h4 className="font-bold text-lg leading-tight group-hover:text-indigo-400 transition-colors mb-2">
                    &ldquo;{ed.quote}&rdquo;
                  </h4>
                  <p className="text-xs text-slate-400">
                    By {ed.author} &bull; {ed.readTime} read
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            className="mt-8 w-full text-white border border-white/10 hover:bg-white/5"
          >
            Read All Opinions
          </Button>
        </TiltCard>
      </Reveal>

      {/* Civic Pulse Poll */}
      <Reveal delay={300}>
        <div className="bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 p-6 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-indigo-600" size={20} />
            <h3 className="font-bold text-slate-900 dark:text-white">
              Civic Pulse
            </h3>
          </div>
          <p className="text-sm font-medium mb-4 text-slate-700 dark:text-slate-300">
            {CIVIC_POLL.question}
          </p>
          <div className="space-y-2">
            {CIVIC_POLL.options.map((opt, i) => (
              <button
                key={i}
                className="w-full text-left px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all flex justify-between group"
              >
                {opt}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle size={16} />
                </span>
              </button>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500 text-center">
            {CIVIC_POLL.totalVotes.toLocaleString()} votes &bull; Ends in{" "}
            {CIVIC_POLL.endsIn}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
