export default function WhistleblowerSubmitPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Submit a Tip</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Share information securely. Do not include sensitive personal details unless required.
        </p>
      </header>
      <form className="rounded-2xl card-surface p-6 space-y-4">
        <input
          placeholder="Subject"
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <textarea
          rows={6}
          placeholder="Describe the issue..."
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <button className="rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-600 transition">
          Submit securely
        </button>
      </form>
    </main>
  );
}
