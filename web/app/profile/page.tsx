import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <section className="rounded-3xl border surface-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="h-20 w-20 rounded-full bg-[color:var(--surface-muted)] flex items-center justify-center text-2xl font-semibold">
          NT
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Ananya Sharma</h1>
          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
            Reader • Joined Aug 2024 • Bengaluru
          </p>
        </div>
        <div className="md:ml-auto flex gap-2">
          <Link
            href="/settings"
            className="rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
          >
            Edit profile
          </Link>
          <Link
            href="/support"
            className="rounded-lg bg-[color:var(--accent)] px-4 py-2 text-sm font-medium text-[color:var(--accent-foreground)] hover:bg-[color:var(--accent-strong)] transition"
          >
            Support
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Saved stories",
            body: "12 articles saved for later reading.",
          },
          {
            title: "Reading streak",
            body: "5 days of consistent reading this week.",
          },
          {
            title: "Notifications",
            body: "Breaking news + weekly brief enabled.",
          },
          {
            title: "Topics",
            body: "Geopolitics, Economy, Technology, Culture.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border surface-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{item.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
