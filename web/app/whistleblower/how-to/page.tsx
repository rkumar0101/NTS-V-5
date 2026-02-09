export default function WhistleblowerHowToPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">How to Stay Safe</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Basic operational security practices before sharing sensitive tips.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)] space-y-2">
        <ul className="list-disc pl-6 space-y-2">
          <li>Remove metadata from files (images, PDFs) before upload.</li>
          <li>Use secure networks and avoid shared devices.</li>
          <li>Share only information you are legally allowed to disclose.</li>
        </ul>
      </section>
    </main>
  );
}
