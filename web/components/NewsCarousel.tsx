"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { editorsPicks } from "../lib/news";

type Props = { category?: string };

type Headline = {
  id: string;
  title: string;
  category: string;
  date: string;
  source?: string;
  href?: string;
  image?: string;
};

const CATEGORY_ICON: Record<string, string> = {
  "Politics": "🏛️",
  "Geo-Politics": "🌍",
  "Tech": "💻",
  "Defence": "🛡️",
  "Sports": "🏏",
  "Economy": "💹",
  "Culture": "🎭",
  "World": "🌐",
  "India": "🇮🇳",
};

const toHeadlines = (list = editorsPicks): Headline[] =>
  list.map((a) => ({
    id: a.id,
    title: a.title,
    category: a.category,
    date: a.date,
    source: "Narayani Thoughts",
    href: `/article/${a.id}`,
    image: a.image,
  }));

export default function NewsCarousel({ category = "All" }: Props) {
  const dataAll = useMemo(() => toHeadlines(editorsPicks), []);
  const data = useMemo(
    () => (category === "All" ? dataAll : dataAll.filter((d) => d.category === category)),
    [category, dataAll]
  );

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const hovered = useRef(false);

  useEffect(() => {
    if (data.length === 0) return;
    const t = setInterval(() => {
      if (!hovered.current && !playing) setIdx((i) => (i + 1) % data.length);
    }, 5000);
    return () => clearInterval(t);
  }, [data.length, playing]);

  const synthRef = useRef(typeof window !== "undefined" ? window.speechSynthesis : null);

  const speak = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const u = new SpeechSynthesisUtterance(data[idx]?.title ?? "");
    u.rate = 1; u.pitch = 1;
    u.onend = () => setPlaying(false);
    setPlaying(true);
    synthRef.current.speak(u);
  };

  const stop = () => {
    if (!synthRef.current) return;
    synthRef.current.cancel(); setPlaying(false);
  };
  useEffect(() => () => stop(), []);

  const next = () => setIdx((i) => (i + 1) % Math.max(1, data.length));
  const prev = () => setIdx((i) => (i - 1 + Math.max(1, data.length)) % Math.max(1, data.length));

  if (data.length === 0) return null;
  const current = data[idx];
  const icon = CATEGORY_ICON[current.category] ?? "📰";

  return (
    <div
      className="border-b border-black/10 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg py-2"
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-5 overflow-hidden">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="rounded-md border border-gray-300 dark:border-gray-700 px-2 py-1 text-sm"
        >
          ‹
        </button>

        {/* Thumbnail */}
        <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-gray-200 dark:bg-gray-800 shadow-sm grid place-items-center">

          {current.image ? (
            <Image
              src={current.image}
              alt={current.title}
              width={128}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>

        {/* Headline + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 text-white text-xs px-2.5 py-1">
              <span>{icon}</span>
              <span>{current.category}</span>
            </span>
            <time className="text-xs opacity-70">
              {new Date(current.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </time>
            <span className="text-xs opacity-70">• {current.source}</span>
          </div>

          <Link
  href={current.href ?? "#"}
  className="block mt-1 line-clamp-2 text-base md:text-lg font-semibold hover:underline"
  title={current.title}
>

            {current.title}
          </Link>
        </div>

        {/* Audio + Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={playing ? stop : speak}
            className="rounded-md border border-gray-300 dark:border-gray-700 px-2 py-1 text-sm"
            title={playing ? "Stop" : "Read headline"}
            aria-label="Toggle read headline"
          >
            {playing ? "⏹" : "🔊"}
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="rounded-md border border-gray-300 dark:border-gray-700 px-2 py-1 text-sm"
          >
            ›
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="pb-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1.5">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-sky-600" : "w-3 bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
