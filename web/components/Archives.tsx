// web/components/Archives.tsx
import Link from "next/link";
import { Article, editorsPicks } from "@/lib/news";

export default function Archives() {
  const now = Date.now();
  const sixMonths = 1000 * 60 * 60 * 24 * 180;

  // Use editorsPicks as the source for now (replace with full news list later)
  const base: Article[] = editorsPicks;

  // Prefer 6+ months old, else fallback to last 4 items so the section never crashes
  const older = base.filter((n) => {
    const t = Date.parse(n.date);
    return !Number.isNaN(t) && now - t > sixMonths;
  });

  const items = (older.length ? older : base).slice(0, 4);

  if (!items.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4">From the Archives</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((a) => (
          <Link
            key={a.id}
            href={`/article/${a.id}`}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5 hover:shadow-sm"
          >
            <div className="text-xs opacity-70">
              {new Date(a.date).toDateString()}
            </div>
            <div className="text-base md:text-lg font-semibold mt-1">{a.title}</div>
            <div className="text-sm opacity-80 line-clamp-2 mt-1">
              {a.summary ?? a.excerpt}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
