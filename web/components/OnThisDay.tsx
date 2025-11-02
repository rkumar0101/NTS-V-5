"use client";

import Link from "next/link";
import { onThisDay } from "@/lib/onThisDay";

export default function OnThisDay() {
  const d = new Date();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const item =
    onThisDay.find(e => e.month === m && e.day === day) ??
    onThisDay[0]; // fallback

  if (!item) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8">
        <div className="text-sm font-semibold tracking-wide uppercase opacity-70">
          On this day • {item.day}-{item.month} • {item.year}
        </div>
        <h3 className="mt-1 text-xl md:text-2xl font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm md:text-base opacity-90">{item.summary}</p>
        {item.href && (
          <Link
            href={item.href}
            className="inline-block mt-3 rounded-lg border border-black/20 dark:border-white/20 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Read more →
          </Link>
        )}
      </div>
    </section>
  );
}
