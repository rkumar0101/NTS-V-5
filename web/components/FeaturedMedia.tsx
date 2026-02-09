"use client";

import { useState } from "react";
import { featured } from "@/lib/featured";

export default function FeaturedMedia() {
  const [play, setPlay] = useState(false);

  // Only video handled right now
  if (featured.kind !== "video") return null;

  const isYT = featured.provider === "youtube";
  const isVimeo = featured.provider === "vimeo";

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border surface-card overflow-hidden">
        <div className="p-5 md:p-6 flex flex-col md:flex-row gap-5 md:gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold">Featured Video</h3>
            <div className="mt-1 text-lg md:text-xl font-semibold">{featured.title}</div>
            {featured.description && (
              <p className="mt-2 text-sm md:text-base text-[color:var(--muted-foreground)]">{featured.description}</p>
            )}
          </div>
          {featured.href && (
            <a
              href={featured.href}
              className="shrink-0 rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
            >
              Open page →
            </a>
          )}
        </div>

        <div className="aspect-video bg-black relative">
          {!play ? (
            <button
              onClick={() => setPlay(true)}
              className="group absolute inset-0 w-full h-full"
              aria-label="Play video"
            >
              {/* Poster */}
              {featured.poster ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={featured.poster}
                  alt=""
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition"
                />
              ) : (
                <div className="w-full h-full" />
              )}

              {/* Play overlay */}
              <span className="absolute inset-0 grid place-items-center">
                <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/90 text-black grid place-items-center shadow-lg">
                  ▶
                </span>
              </span>
            </button>
          ) : isYT ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${featured.videoId}?autoplay=1&rel=0`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : isVimeo ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://player.vimeo.com/video/${featured.videoId}?autoplay=1`}
              title={featured.title}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              poster={featured.poster}
              src={featured.src}
            />
          )}
        </div>
      </div>
    </section>
  );
}
