export default function SenaJoinPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Join Narayani Sena</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Become a verified citizen reporter and share local updates.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 space-y-4">
        <p className="text-[color:var(--muted-foreground)]">
          Applications open every quarter. Submit your details and we will reach out with
          onboarding instructions.
        </p>
        <form className="grid gap-4">
          <input
            placeholder="Full name"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
          />
          <input
            placeholder="City"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
          />
          <button className="rounded-lg bg-[color:var(--accent)] text-[color:var(--accent-foreground)] px-4 py-2 text-sm font-semibold hover:bg-[color:var(--accent-strong)] transition">
            Submit application
          </button>
        </form>
      </section>
    </main>
  );
}
