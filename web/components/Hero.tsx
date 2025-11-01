// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight animate-fade-in"></h1>
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          Narayani <span className="text-sky-600 dark:text-sky-400">Thoughts</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          India-first news & analysis platform bringing deeper stories from{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            politics, geo-strategy, technology, defence, and culture
          </span>
          . Curated for clarity, not chaos.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#latest"
            className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-base font-medium transition"
          >
            Explore Stories
          </a>
          <a
            href="#categories"
            className="rounded-lg border border-gray-300 hover:border-sky-600 text-gray-700 hover:text-sky-700 dark:text-gray-300 dark:hover:text-sky-400 dark:border-gray-700 px-5 py-3 text-base font-medium transition"
          >
            Browse Topics
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Updated daily • Built for thoughtful readers
        </p>
      </div>
    </section>
  );
}
