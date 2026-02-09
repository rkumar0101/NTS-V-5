"use client";

import Link from "next/link";
import { Clock, AlertTriangle } from "lucide-react";
import trackerData from "@/data/tracker.json";

/**
 * Expected data shape in /data/tracker.json (example):
 * [
 *   {
 *     "id": "c1",
 *     "title": "Procurement irregularities in Project X",
 *     "tags": ["Defense", "Procurement"],
 *     "lastUpdate": "2025-10-15",
 *     "status": "Ongoing",
 *     "summary": "Short one-line summary of the case...",
 *     "link": "/tracker/c1"
 *   },
 *   ...
 * ]
 */

type CaseItem = {
  id: string;
  title: string;
  tags?: string[];
  lastUpdate?: string; // ISO date
  status?: string;
  summary?: string;
  link?: string;
};

function formatDateIso(iso?: string) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    const mm = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][d.getMonth()];
    return `${d.getDate().toString().padStart(2,"0")} ${mm} ${d.getFullYear()}`;
  } catch {
    return iso;
  }
}

export default function CorruptionTrackerShowcase() {
  const items: CaseItem[] = Array.isArray(trackerData)
    ? (trackerData as CaseItem[]).slice(0, 4)
    : [];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold">Corruption Tracker</h3>
        <Link href="/tracker" className="text-sm text-sky-400 hover:underline">
          View full tracker &rarr;
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl card-surface p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-red-500/10 text-red-500">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-medium">Tracker data not available</div>
            <div className="text-sm subtle mt-1">
              Add a `data/tracker.json` to show recent cases.
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((c) => (
            <article
              key={c.id}
              className="rounded-2xl card-surface p-4 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold leading-snug">{c.title}</div>
                  <div className="text-xs subtle mt-2 line-clamp-2">{c.summary ?? ""}</div>
                </div>
                <div className="flex flex-col items-end text-right">
                  <div className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
                    {c.status ?? "Unknown"}
                  </div>
                  <div className="text-xs subtle mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3 opacity-80" />
                    <span>{formatDateIso(c.lastUpdate)}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center flex-wrap gap-2">
                {(c.tags || []).slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-3">
                <Link
                  href={c.link ?? `/tracker/${c.id}`}
                  className="text-sm inline-block text-sky-400 hover:underline"
                >
                  Read more &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
