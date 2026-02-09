"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Smartphone, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";
import factData from "@/data/factdose.json";

type FactDose = {
  heading: string;
  subtext: string;
  tgLink?: string;   // Telegram channel/link
  waLink?: string;   // WhatsApp bot/group link
  schedule?: string; // e.g., "Daily at 8 AM & 8 PM"
  examples?: { title: string; blurb: string }[];
};

export default function FactDoseShowcase() {
  const data: FactDose = (factData as FactDose) ?? {
    heading: "Fact Dose",
    subtext: "Daily civic news in 60 seconds — crisp, neutral, verified.",
    schedule: "Daily at 8 AM",
    examples: [],
  };

  const [copied, setCopied] = useState(false);

  async function copyLink(link?: string) {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-sky-400" />
          {data.heading || "Fact Dose"}
        </h3>
        {data.schedule && (
          <div className="text-xs flex items-center gap-1 opacity-75">
            <Clock className="w-4 h-4" />
            {data.schedule}
          </div>
        )}
      </div>

      <div className="rounded-2xl card-surface p-5 md:p-6">
        <p className="text-sm text-[color:var(--muted-foreground)] max-w-3xl">
          {data.subtext || "Daily civic news in 60 seconds — crisp, neutral, verified."}
        </p>

        {/* CTA buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          {data.tgLink && (
            <Link
              href={data.tgLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[color:var(--accent)] text-[color:var(--accent-foreground)] text-sm font-semibold hover:bg-[color:var(--accent-strong)] transition-colors"
            >
              <Send className="w-4 h-4" />
              Join on Telegram
            </Link>
          )}

          {data.waLink && (
            <Link
              href={data.waLink}
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[color:var(--border)] text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
            >
              <Smartphone className="w-4 h-4" />
              Open WhatsApp Bot
            </Link>
          )}

          {/* Copy link helper */}
          {(data.tgLink || data.waLink) && (
            <button
              type="button"
              onClick={() => copyLink(data.waLink ?? data.tgLink)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[color:var(--border)] text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              aria-live="polite"
            >
              {copied ? "Copied!" : "Copy link"}
            </button>
          )}
        </div>

        {/* Example pills / mini teasers */}
        {Array.isArray(data.examples) && data.examples.length > 0 && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.examples.slice(0, 3).map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                viewport={{ once: true }}
                className="rounded-xl card-surface p-3"
              >
                <div className="text-sm font-semibold">{ex.title}</div>
                <div className="text-sm text-[color:var(--muted-foreground)] mt-1 line-clamp-3">
                  {ex.blurb}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
