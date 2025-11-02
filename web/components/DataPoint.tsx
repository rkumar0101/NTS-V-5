"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { dataPoints } from "@/lib/dataPoints";

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

export default function DataPoint() {
  // pick today else the latest
  const item =
    dataPoints.find((d) => d.date === new Date().toISOString().slice(0, 10)) ??
    dataPoints[0];

  const [run, setRun] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && setRun(true)),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Number((item.value * ease(p)).toFixed(1)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, item.value]);

  const big = useMemo(() => `${n}${item.suffix ?? ""}`, [n, item.suffix]);

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-10 flex items-center justify-between gap-6">
        <div>
          <div className="text-5xl md:text-6xl font-bold tracking-tight">
            {big}
          </div>
          <p className="mt-2 text-sm md:text-base opacity-80">{item.label}</p>
        </div>
        {item.href ? (
          <Link
            href={item.href}
            className="shrink-0 rounded-lg border border-black/20 dark:border-white/20 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            See context →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
