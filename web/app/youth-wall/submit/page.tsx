export default function YouthWallSubmitPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Submit Your Voice</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Share a short perspective (200–300 words).
        </p>
      </header>
      <form className="rounded-2xl card-surface p-6 space-y-4">
        <input
          placeholder="Name"
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <input
          placeholder="City"
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <textarea
          rows={6}
          placeholder="Your message..."
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <button className="rounded-lg bg-pink-500 text-white px-4 py-2 text-sm font-semibold hover:bg-pink-600 transition">
          Send
        </button>
      </form>
    </main>
  );
}
