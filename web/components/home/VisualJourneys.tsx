"use client";

import { ArrowRight } from "lucide-react";
import { VISUAL_STORIES } from "@/lib/news";

export default function VisualJourneys() {
  return (
    <section className="bg-slate-900 -mx-4 md:-mx-8 lg:mx-0 p-8 rounded-3xl relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif font-bold text-white">
            Visual Journeys
          </h2>
          <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold">
            View Gallery <ArrowRight size={16} />
          </button>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
          {VISUAL_STORIES.map((story) => (
            <div
              key={story.id}
              className="min-w-[260px] sm:min-w-[280px] h-[350px] rounded-2xl overflow-hidden relative group cursor-pointer snap-start shrink-0"
            >
              <img
                src={story.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={story.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white font-bold text-lg">{story.title}</h4>
                <span className="text-white/60 text-xs uppercase tracking-widest mt-1 block">
                  {story.tag ?? "Photo Essay"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
