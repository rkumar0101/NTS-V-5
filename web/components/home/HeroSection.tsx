"use client";

import Link from "next/link";
import { Sparkles, PlayCircle } from "lucide-react";
import { useParallax } from "@/hooks";
import { Reveal } from "@/components/ui";
import Button from "@/components/ui/Button";
import { ARTICLES } from "@/lib/news";

export default function HeroSection() {
  const parallaxOffset = useParallax(0.4);
  const hero = ARTICLES[0];

  return (
    <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden flex items-center justify-center -mt-16 lg:-mt-20">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url('${hero.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-slate-950/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
            <Sparkles size={12} /> Spotlight
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
            The Silent <br />
            <span className="text-indigo-400 italic">Revolution.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {hero.excerpt}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/article/${hero.id}`}>
              <Button className="min-w-[180px]">Read Story</Button>
            </Link>
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all">
              <PlayCircle size={18} /> Watch Documentary
            </button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
