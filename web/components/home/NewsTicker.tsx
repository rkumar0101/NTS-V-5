"use client";

import { BREAKING_NEWS } from "@/lib/news";

export default function NewsTicker() {
  const doubled = BREAKING_NEWS.join("  +++  ");

  return (
    <div className="bg-slate-950 border-b border-slate-800 py-3 relative z-20">
      <div className="container mx-auto px-4 flex items-center gap-6">
        {/* Live indicator */}
        <div className="flex items-center gap-2 text-rose-500 font-bold uppercase text-xs tracking-widest shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
          </span>
          Live
        </div>

        {/* Marquee */}
        <div className="overflow-hidden flex-1 relative h-6">
          <div className="absolute whitespace-nowrap animate-marquee text-slate-400 text-sm font-medium">
            {doubled}
            {"  +++  "}
            {doubled}
          </div>
        </div>
      </div>
    </div>
  );
}
