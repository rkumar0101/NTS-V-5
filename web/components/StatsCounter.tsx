"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  value: number;         // target number (e.g., 250)
  label: string;         // e.g., "In-Depth Articles"
  plus?: boolean;        // show trailing '+'
  prefix?: string;       // optional, e.g., '₹'
  format?: "number" | "compact"; // 78,000 vs 78K
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function useCount(to: number, run: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / duration);
      const eased = easeOutCubic(p);
      setN(Math.round(to * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [to, run, duration]);

  return n;
}

export default function StatsCounter({
  stats = [
    { value: 250, label: "In-Depth Articles", plus: true },
    { value: 49, label: "Columnists" },
    { value: 100, label: "Fact Checkers", plus: true },
    { value: 78000, label: "Readers", format: "compact" },
  ] as Stat[],
  caption = "Built for thoughtful readers — transparent sourcing, clear analysis.",
}: {
  stats?: Stat[];
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // trigger animation when the block enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const intl = useMemo(
    () =>
      new Intl.NumberFormat(undefined, {
        notation: "standard",
        maximumFractionDigits: 0,
      }),
    []
  );
  const compactIntl = useMemo(
    () =>
      new Intl.NumberFormat(undefined, {
        notation: "compact",
        maximumFractionDigits: 1,
      }),
    []
  );

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16"
      aria-label="Narayani Thoughts statistics"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => {
          const count = useCount(s.value, visible, 1200 + i * 120);
          const formatted =
            (s.format === "compact" ? compactIntl : intl).format(count);
          return (
            <div
              key={s.label}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 md:p-6 shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">
                {s.prefix ?? ""}
                <span aria-live="polite" aria-atomic="true">
                  {formatted}
                </span>
                {s.plus ? "+" : ""}
              </div>
              <div className="mt-1 text-sm opacity-80">{s.label}</div>
            </div>
          );
        })}
      </div>

      <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
        {caption}
      </p>
    </section>
  );
}
