"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { columnists } from "../lib/columnists";

export default function FeaturedColumnists() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  // Auto-slide every 4s (pause on hover / focus)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const timer = setInterval(() => {
      if (hovered) return;
      // snap to next card
      el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      // loop back when near end
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [hovered]);

  const next = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
  };

  const prev = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section
      className="max-w-6xl mx-auto px-4 md:px-6 py-12"
      aria-label="Featured Columnists"
    >
      <div className="flex items-end justify-between gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Featured Columnists
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {columnists.map((c) => (
          <article
            key={c.id}
            className="snap-start shrink-0 w-[82%] sm:w-[55%] md:w-[40%] lg:w-[30%]
                       rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5
                       shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5 flex items-start gap-4">
              <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 ring-white/70 dark:ring-white/10">
                <Image
                  src={c.avatar}
                  alt={c.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight truncate">
                  {c.name}
                </h3>
                <p className="text-sm opacity-80">{c.role}</p>

                {/* Beat chips */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {c.beat.map((b) => (
                    <span
                      key={b}
                      className="text-xs rounded-full px-2 py-1 bg-black/80 text-white"
                    >
                      {ICON[b] ?? "📰"} {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="px-5 pb-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {c.blurb}
            </p>

            <div className="px-5 pb-5 flex items-center justify-between">
              <Link
                href={c.href}
                className="text-sm font-medium text-sky-700 dark:text-sky-400 hover:underline"
              >
                Read columns →
              </Link>
              {c.x && (
                <a
                  href={`https://x.com/${c.x.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm opacity-80 hover:opacity-100"
                  aria-label={`${c.name} on X`}
                >
                  𝕏 {c.x}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// simple emoji icon map (replace with SVGs later if you want)
const ICON: Record<string, string> = {
  Politics: "🏛️",
  "Geo-Politics": "🌍",
  Tech: "💻",
  Defence: "🛡️",
  Sports: "🏏",
  Economy: "💹",
  Culture: "🎭",
};
