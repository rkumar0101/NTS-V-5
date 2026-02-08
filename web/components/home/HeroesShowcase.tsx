"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Medal, Shield } from "lucide-react";
import heroesData from "@/data/heroes.json";

type Hero = {
  id: string;
  name: string;
  role: string;
  story: string;
  image?: string;
  link?: string;
  tag?: string;
};

export default function HeroesShowcase() {
  const heroes = Array.isArray(heroesData)
    ? (heroesData as Hero[]).slice(0, 4)
    : [];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-yellow-400" /> Heroes of the Nation
        </h3>
        <Link href="/heroes" className="text-sm text-sky-400 hover:underline">
          View all stories →
        </Link>
      </div>

      {heroes.length === 0 ? (
        <div className="rounded-2xl border border-white/10 p-6 text-sm text-gray-400">
          No hero stories available. Add entries in <code>data/heroes.json</code>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {heroes.map((h, i) => (
            <motion.article
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-4 flex flex-col transition-all"
            >
              {h.image && (
                <div className="aspect-[4/3] mb-3 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h4 className="font-semibold text-base text-white">{h.name}</h4>
              <p className="text-xs text-gray-400 mb-1">{h.role}</p>
              <p className="text-sm text-gray-300 line-clamp-3 flex-1">{h.story}</p>

              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center gap-1 text-xs text-yellow-400">
                  <Medal className="w-3 h-3" />
                  {h.tag || "National Hero"}
                </div>
                <Link
                  href={h.link ?? `/heroes/${h.id}`}
                  className="text-xs text-sky-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
