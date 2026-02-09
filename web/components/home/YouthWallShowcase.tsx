"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart, Quote } from "lucide-react";
import Link from "next/link";
import youthData from "@/data/youth.json";

type YouthVoice = {
  id: string;
  name: string;
  city: string;
  quote: string;
  timestamp?: string;
};

export default function YouthWallShowcase() {
  const voices = Array.isArray(youthData)
    ? (youthData as YouthVoice[]).slice(0, 6)
    : [];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <MessageCircleHeart className="w-5 h-5 text-pink-400" /> Voice of Youth
        </h3>
        <Link href="/youth-wall" className="text-sm text-sky-400 hover:underline">
          See all voices →
        </Link>
      </div>

      {voices.length === 0 ? (
        <div className="rounded-2xl card-surface p-6 text-sm text-[color:var(--muted-foreground)]">
          No youth voices available. Add entries in <code>data/youth.json</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {voices.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.25 }}
              viewport={{ once: true }}
              className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-all"
            >
              <div className="flex items-start gap-2 mb-2">
                <Quote className="w-4 h-4 text-pink-400 opacity-70" />
                <p className="text-sm text-[color:var(--muted-foreground)] leading-snug italic line-clamp-4">
                  {v.quote}
                </p>
              </div>

              <div className="mt-3 text-xs text-[color:var(--muted-foreground)] flex items-center justify-between">
                <span>
                  {v.name}, {v.city}
                </span>
                {v.timestamp && <span className="opacity-70">{v.timestamp}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-5 rounded-2xl border border-pink-400/20 bg-pink-400/10 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm text-[color:var(--muted-foreground)]">
          Have something to say about your city or policy? Be part of the Voice of Youth wall.
        </div>
        <div className="flex gap-3">
          <Link
            href="/youth-wall/submit"
            className="px-3 py-2 rounded-lg bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors"
          >
            Submit your voice
          </Link>
          <Link
            href="/youth-wall"
            className="px-3 py-2 rounded-lg border border-[color:var(--border)] text-sm hover:border-pink-500 hover:text-pink-600 transition"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
