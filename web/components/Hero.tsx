// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50 to-transparent dark:from-slate-900 dark:via-slate-950 dark:to-transparent" />

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--foreground)] leading-tight">
          Narayani <span className="text-[color:var(--accent)]">Thoughts</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
          India-first news & analysis platform bringing deeper stories from{" "}
          <span className="font-medium text-[color:var(--foreground)]">
            politics, geo-strategy, technology, defence, and culture
          </span>
          . Curated for clarity, not chaos.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#latest"
            className="rounded-lg bg-[color:var(--accent)] hover:bg-[color:var(--accent-strong)] text-[color:var(--accent-foreground)] px-5 py-3 text-base font-medium transition shadow-sm"
          >
            Explore Stories
          </a>
          <a
            href="#categories"
            className="rounded-lg border border-[color:var(--border)] hover:border-[color:var(--accent)] text-[color:var(--muted-foreground)] hover:text-[color:var(--accent)] px-5 py-3 text-base font-medium transition"
          >
            Browse Topics
          </a>
        </div>

        <p className="mt-8 text-sm text-[color:var(--muted-foreground)]">
          Updated daily • Built for thoughtful readers
        </p>
      </div>
    </section>
  );
}
