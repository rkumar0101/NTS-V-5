export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <section className="rounded-3xl border surface-card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
          Contact
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Tell us what matters to you.
        </h1>
        <p className="mt-4 text-base text-[color:var(--muted-foreground)]">
          Share story leads, feedback, or partnership ideas. We’ll respond within 48 hours.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <form className="rounded-2xl border surface-card p-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              placeholder="you@domain.com"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="What should we know?"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-[color:var(--accent-foreground)] hover:bg-[color:var(--accent-strong)] transition"
          >
            Send message
          </button>
        </form>

        <aside className="rounded-2xl border surface-card p-6 space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Newsroom</h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Bengaluru, India
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              hello@narayanithoughts.in
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Hours</h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Monday–Friday, 9:00 AM – 6:00 PM IST
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
