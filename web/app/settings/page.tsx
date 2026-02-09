export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <section className="rounded-3xl border surface-card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
          Settings
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Customize your reading experience.
        </h1>
        <p className="mt-4 text-base text-[color:var(--muted-foreground)]">
          Manage your alerts, newsletter preferences, and accessibility options.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Breaking news alerts",
            body: "Get real-time alerts for major developments.",
          },
          {
            title: "Weekly intelligence brief",
            body: "One curated email every Sunday morning.",
          },
          {
            title: "Audio highlights",
            body: "Short summaries of top stories in audio format.",
          },
          {
            title: "Accessibility",
            body: "High contrast, large text, and dyslexia-friendly mode.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border surface-card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                  {item.body}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[color:var(--surface-muted)] px-3 py-1 text-xs text-[color:var(--muted-foreground)]">
                Enabled
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
