import Link from "next/link";
import trackerData from "@/data/tracker.json";

type CaseItem = {
  id: string;
  title: string;
  tags?: string[];
  lastUpdate?: string;
  status?: string;
  summary?: string;
  link?: string;
};

export default function TrackerPage() {
  const items = Array.isArray(trackerData)
    ? (trackerData as CaseItem[])
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Corruption Tracker</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Follow ongoing investigations and accountability stories.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl card-surface p-6 text-sm text-[color:var(--muted-foreground)]">
          Tracker data not available yet. Add entries in <code>data/tracker.json</code>.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.link ?? `/tracker/${item.id}`}
              className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                {item.status && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
                    {item.status}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
                {item.summary}
              </p>
              {item.lastUpdate && (
                <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
                  Last update: {item.lastUpdate}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
