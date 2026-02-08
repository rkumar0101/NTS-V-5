"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Gavel, Landmark, ShieldQuestion, Scale } from "lucide-react";
import classroomData from "@/data/classroom.json";

type ClassroomItem = {
  id: string;
  topic: string;         // e.g., "Right to Information (RTI)"
  summary: string;       // 1–2 lines
  slug?: string;         // /classroom/<slug>
  icon?: "BookOpen" | "Gavel" | "Landmark" | "ShieldQuestion" | "Scale";
  updated?: string;      // ISO or "2 days ago"
};

const ICONS = {
  BookOpen: BookOpen,
  Gavel: Gavel,
  Landmark: Landmark,
  ShieldQuestion: ShieldQuestion,
  Scale: Scale,
} as const;

export default function CivicClassroomShowcase() {
  const items = Array.isArray(classroomData)
    ? (classroomData as ClassroomItem[]).slice(0, 6)
    : [];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          Civic Classroom
          <span className="text-xs md:text-sm font-normal opacity-70">
            — rights, laws & how systems work
          </span>
        </h3>
        <Link href="/classroom" className="text-sm text-sky-400 hover:underline">
          See all explainers →
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-white/10 p-6 text-sm text-gray-400">
          No explainers yet. Add entries in <code>data/classroom.json</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon && ICONS[it.icon] ? ICONS[it.icon] : BookOpen;
            return (
              <motion.article
                key={it.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.28 }}
                viewport={{ once: true }}
                className="rounded-2xl card-surface p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-400/15 text-emerald-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-base leading-snug">{it.topic}</h4>
                    <p className="text-sm opacity-80 mt-1 line-clamp-3">{it.summary}</p>
                    <div className="mt-2 text-xs opacity-60">{it.updated ? `Updated: ${it.updated}` : ""}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <Link
                    href={it.slug ? `/classroom/${it.slug}` : `/classroom/${it.id}`}
                    className="text-sm text-sky-400 hover:underline"
                  >
                    Read explainer →
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}

      {/* CTA row */}
      <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm opacity-90">
          New to civics? Start with the basics — RTI, Fundamental Rights, PILs, and more.
        </div>
        <div className="flex gap-3">
          <Link
            href="/classroom/starter"
            className="px-3 py-2 rounded-lg bg-emerald-400 text-black text-sm font-semibold hover:bg-emerald-300 transition-colors"
          >
            Starter guide
          </Link>
          <Link
            href="/glossary"
            className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/10"
          >
            Open glossary
          </Link>
        </div>
      </div>
    </section>
  );
}
