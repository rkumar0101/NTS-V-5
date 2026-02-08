export default function SupportBlock() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border surface-card p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">Support Our Mission</h3>
        <p className="mt-2 text-sm md:text-base text-[color:var(--muted-foreground)]">
          We’re building an India-first intelligence platform—clear analysis, verified data,
          and zero noise. Your support helps us stay independent.
        </p>
        <a
          href="/support"
          className="inline-block mt-4 rounded-lg bg-[color:var(--accent)] text-[color:var(--accent-foreground)] px-5 py-2 font-medium hover:bg-[color:var(--accent-strong)] transition"
        >
          Support Us
        </a>
      </div>
    </section>
  );
}
