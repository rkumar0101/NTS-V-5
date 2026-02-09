import { notFound } from "next/navigation";
import trackerData from "@/data/tracker.json";

type CaseItem = {
  id: string;
  title: string;
  tags?: string[];
  lastUpdate?: string;
  status?: string;
  summary?: string;
};

type Props = {
  params: { id: string };
};

export default function TrackerDetailPage({ params }: Props) {
  const items = Array.isArray(trackerData)
    ? (trackerData as CaseItem[])
    : [];
  const item = items.find((entry) => entry.id === params.id);

  if (!item) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <div className="text-sm text-[color:var(--muted-foreground)]">
          {item.status ?? "Status pending"}
          {item.lastUpdate ? ` • Updated ${item.lastUpdate}` : ""}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
      </header>
      <section className="rounded-2xl card-surface p-6 space-y-4">
        <p className="text-[color:var(--muted-foreground)]">
          {item.summary ?? "This case entry will be expanded with sources and updates."}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
