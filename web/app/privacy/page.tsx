export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <section className="rounded-3xl border surface-card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
          Privacy
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Your data, handled with care.
        </h1>
        <p className="mt-4 text-base text-[color:var(--muted-foreground)]">
          We collect only what we need to deliver the Narayani Thoughts experience.
          This page outlines how we use and protect your information.
        </p>
      </section>

      <section className="rounded-2xl border surface-card p-6 md:p-8 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">What we collect</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Email address, engagement metrics, and preferences that you explicitly share.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How we use it</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            To deliver newsletters, personalize your feed, and improve reporting.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Your control</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Update preferences or request deletion at any time by contacting us.
          </p>
        </div>
      </section>
    </main>
  );
}
