export default function SupportBlock() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">Support Our Mission</h3>
        <p className="mt-2 text-sm md:text-base opacity-90">
          We’re building an India-first intelligence platform—clear analysis, verified data,
          and zero noise. Your support helps us stay independent.
        </p>
        <a
          href="/support"
          className="inline-block mt-4 rounded-lg bg-black text-white dark:bg-white dark:text-black px-5 py-2 font-medium hover:opacity-90"
        >
          Support Us
        </a>
      </div>
    </section>
  );
}
