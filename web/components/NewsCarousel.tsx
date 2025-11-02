// web/components/NewsCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { categoryMatches, editorsPicks } from "@/lib/news";
import { formatTimeUTC } from "@/lib/date";

type Slide = (typeof editorsPicks)[number];

export default function NewsCarousel({ category }: { category?: string }) {
  const [index, setIndex] = useState(0);
  const slides: Slide[] = editorsPicks
    .filter((article) => categoryMatches(article.category, category))
    .slice(0, 6);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="mt-2 rounded-xl bg-black/90 p-3 text-white dark:bg-black">
        <div className="flex items-center gap-2">
          <span className="text-xs opacity-70">{current.category}</span>
          <span className="text-xs opacity-70">•</span>
          {/* Stable, SSR-safe time */}
          <time className="text-xs opacity-70" dateTime={current.date}>
            {formatTimeUTC(current.date)}
          </time>
          <span className="text-xs opacity-70">— Narayani Thoughts</span>
        </div>
        <div className="mt-1 text-sm">{current.title}</div>
      </div>
    </div>
  );
}
