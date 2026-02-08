"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookText, Search } from "lucide-react";
import glossaryData from "@/data/glossary.json";

type GlossaryItem = {
  term: string;
  definition: string;
  slug?: string; // /glossary/<slug>
  tag?: string;  // optional label e.g., "Law", "Civics"
};

export default function GlossaryShowcase() {
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const base = Array.isArray(glossaryData)
      ? (glossaryData as GlossaryItem[])
      : [];
    const trimmed = q.trim().toLowerCase();
    if (!trimmed) return base.slice(0, 8);
    return base
      .filter(
        (g) =>
          g.term.toLowerCase().includes(trimmed) ||
          g.definition.toLowerCase().includes(trimmed)
      )
      .slice(0, 8);
  }, [q]);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4 gap-3">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <BookText className="w-5 h-5 text-indigo-400" />
          Glossary
        </h3>
        <Link href="/glossary" className="text-sm text-sky-400 hover:underline">
          See full glossary →
        </Link>
      </div>

      {/* mini search (local only) */}
      <div className="mb-4 relative max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-70" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search terms (e.g., RTI, PIL, FIR)…"
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm outline-none focus:border-white/20"
        />
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-white/10 p-6 text-sm text-gray-400">
          No matching terms. Try a different keyword.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((g, i) => (
            <motion.article
              key={g.slug ?? g.term}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.22 }}
              viewport={{ once: true }}
              className="rounded-2xl card-surface p-4 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-semibold leading-snug">{g.term}</h4>
                {g.tag && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 border border-white/10 opacity-80">
                    {g.tag}
                  </span>
                )}
              </div>
              <p className="text-sm opacity-80 mt-2 line-clamp-4">{g.definition}</p>

              <div className="mt-3">
                <Link
                  href={g.slug ? `/glossary/${g.slug}` : "/glossary"}
                  className="text-sm text-sky-400 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
