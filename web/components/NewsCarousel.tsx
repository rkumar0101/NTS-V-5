// web/components/NewsCarousel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { editorsPicks } from "@/lib/news";
import { formatDate } from "@/lib/date";

type Slide = (typeof editorsPicks)[number];

export default function NewsCarousel({ category }: { category?: string }) {
  const [index, setIndex] = useState(0);
  const slides: Slide[] = useMemo(() => {
    const filtered =
      category && category !== "All"
        ? editorsPicks.filter((n) => n.category === category)
        : editorsPicks;

    return filtered.slice(0, 6);
  }, [category]);

  useEffect(() => {
    setIndex(0);
  }, [category, slides.length]);

  useEffect(() => {
    if (slides.length === 0) {
      return;
    }

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000,
    );

    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  if (!current) {
    return (
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-2 rounded-xl border surface-card p-4">
          <p className="text-sm opacity-80">
            {category && category !== "All"
              ? `We don't have any stories in ${category} yet. Check back soon!`
              : "No stories available right now. Check back soon!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="rounded-xl border surface-card p-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[color:var(--muted-foreground)]">{current.category}</span>
          <span className="text-xs text-[color:var(--muted-foreground)]">•</span>
          {/* Stable, SSR-safe time */}
          <time className="text-xs text-[color:var(--muted-foreground)]" dateTime={current.date}>
            {formatDate(current.date)}
          </time>
          <span className="text-xs text-[color:var(--muted-foreground)]">— Narayani Thoughts</span>
        </div>
        <div className="mt-1 text-sm">{current.title}</div>
      </div>
    </div>
  );
}
