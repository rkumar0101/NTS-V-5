"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, MapPin, Users } from "lucide-react";
import senaData from "@/data/sena.json";

type SenaPost = {
  id: string;
  reporter: string;
  city?: string;
  title: string;
  summary: string;
  image?: string;
  link?: string;
  verified?: boolean;
  timestamp?: string;
};

type SenaData = {
  stats?: { reporters?: number; submissions?: number; verified?: number };
  posts: SenaPost[];
};

export default function NarayaniSenaShowcase() {
  const data: SenaData = (senaData as SenaData) ?? { posts: [] };
  const posts = Array.isArray(data.posts) ? data.posts.slice(0, 6) : [];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-sky-400" />
          Narayani Sena
          <span className="text-xs md:text-sm font-normal opacity-70">
            — citizen reporters network
          </span>
        </h3>

        <Link href="/sena" className="text-sm text-sky-400 hover:underline">
          Explore all reports →
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-5 grid grid-cols-3 gap-3 max-w-xl">
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide opacity-60">Reporters</div>
          <div className="text-lg font-semibold flex items-center gap-2">
            <Users className="w-4 h-4 opacity-70" />
            {data.stats?.reporters ?? 0}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide opacity-60">Submissions</div>
          <div className="text-lg font-semibold">{data.stats?.submissions ?? 0}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide opacity-60">Verified</div>
          <div className="text-lg font-semibold">{data.stats?.verified ?? 0}</div>
        </div>
      </div>

      {/* Empty state */}
      {posts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 p-6 text-sm text-gray-400">
          No citizen reports yet. Add entries in <code>data/sena.json</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.28 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {p.image && (
                <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-4">
                <div className="text-xs opacity-75 mb-1 flex items-center gap-2">
                  <span className="font-medium">{p.reporter}</span>
                  {p.city && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {p.city}
                    </span>
                  )}
                  {p.verified && (
                    <span className="ml-auto rounded-md border border-emerald-400/30 text-emerald-300/90 px-1.5 py-0.5 text-[10px]">
                      Verified
                    </span>
                  )}
                </div>

                <h4 className="font-semibold text-base mb-1 line-clamp-2">{p.title}</h4>
                <p className="text-sm opacity-80 line-clamp-3">{p.summary}</p>

                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="opacity-60">{p.timestamp ?? ""}</span>
                  <Link
                    href={p.link ?? `/sena/${p.id}`}
                    className="text-sky-400 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-5 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-sm opacity-90">
          Want to report from your city? Join Narayani Sena and file verified, local stories.
        </div>
        <div className="flex gap-3">
          <Link
            href="/sena/join"
            className="px-3 py-2 rounded-lg bg-sky-500 text-black text-sm font-semibold hover:bg-sky-400 transition-colors"
          >
            Become a reporter
          </Link>
          <Link
            href="/sena/how-it-works"
            className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/10"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
