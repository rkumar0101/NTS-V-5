import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <section className="rounded-3xl border surface-card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
          About Narayani Thoughts
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          India-first journalism with clarity, context, and care.
        </h1>
        <p className="mt-4 text-base md:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
          Narayani Thoughts brings together investigative reporting, data-led insight,
          and civic literacy tools that help readers go beyond headlines. We focus on
          geopolitics, technology, economy, and culture — with transparency and accountability
          baked into every story.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Verified & accountable",
            body: "Every feature is built on clear sources, with context and follow-ups.",
          },
          {
            title: "Reader-first experience",
            body: "Distraction-free layouts and accessible language for busy readers.",
          },
          {
            title: "Public-interest focus",
            body: "Investigations, fact checking, and citizen-powered reporting.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border surface-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
              {item.body}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border surface-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Join the mission</h2>
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
            Stay informed with our weekly clarity brief and curated reports.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-lg bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-[color:var(--accent-foreground)] hover:bg-[color:var(--accent-strong)] transition"
        >
          Contact the team
        </Link>
      </section>
    </main>
  );
}
