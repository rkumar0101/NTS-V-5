export default function SenaHowItWorksPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">How Narayani Sena Works</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          A simple, verified pipeline for citizen reporting.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 space-y-4 text-[color:var(--muted-foreground)]">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Submit a report with supporting evidence.</li>
          <li>Our editors verify sources and context.</li>
          <li>Approved reports publish with credit and updates.</li>
        </ol>
      </section>
    </main>
  );
}
