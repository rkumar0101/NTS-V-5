"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { useEffect, useState } from "react";

export default function BreakingNews() {
  const cfg = siteConfig.breaking;
  const [visible, setVisible] = useState(cfg.enabled);

  useEffect(() => setVisible(cfg.enabled), [cfg.enabled]);
  if (!visible) return null;

  const color =
    cfg.severity === "high"
      ? "bg-red-600"
      : cfg.severity === "med"
      ? "bg-amber-500"
      : "bg-sky-600";

  return (
    <div className={`${color} text-white`}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="relative inline-flex items-center gap-2 font-semibold">
          <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
          {cfg.label}
        </span>

        <Link href={cfg.href} className="truncate hover:underline flex-1">
          {cfg.title}
        </Link>

        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss breaking banner"
          className="px-2 py-1 rounded-md bg-white/15 hover:bg-white/25"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
