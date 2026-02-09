import Link from "next/link";

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <section className="rounded-3xl border surface-card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
          Support
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Keep independent journalism strong.
        </h1>
        <p className="mt-4 text-base text-[color:var(--muted-foreground)]">
          Your support funds investigative reporting, community initiatives, and public-interest tools.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Contributor", price: "₹499/mo", desc: "Weekly brief + supporter badge." },
          { title: "Sustainer", price: "₹1,499/mo", desc: "Early access to investigative series." },
          { title: "Patron", price: "₹4,999/mo", desc: "Quarterly briefing + newsroom Q&A." },
        ].map((tier) => (
          <div key={tier.title} className="rounded-2xl border surface-card p-6">
            <h3 className="text-lg font-semibold">{tier.title}</h3>
            <p className="mt-2 text-2xl font-semibold">{tier.price}</p>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{tier.desc}</p>
            <button className="mt-4 w-full rounded-lg bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--accent-foreground)] hover:bg-[color:var(--accent-strong)] transition">
              Choose {tier.title}
            </button>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border surface-card p-6 md:p-8">
        <h2 className="text-xl font-semibold">Prefer a one-time contribution?</h2>
        <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
          We welcome UPI and card contributions. Your contribution keeps the newsroom independent.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
        >
          Reach out to contribute
        </Link>
      </section>
    </main>
  );
}
