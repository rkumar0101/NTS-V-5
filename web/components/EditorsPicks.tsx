// web/components/EditorsPicks.tsx
import Link from "next/link";
import { categoryMatches, editorsPicks } from "@/lib/news";
import { formatDate } from "@/lib/date";

export default function EditorsPicks({ category }: { category?: string }) {
  const filteredPicks = editorsPicks.filter((article) =>
    categoryMatches(article.category, category),
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Editors’ Picks</h2>
        <Link href="#" className="text-sm text-[color:var(--accent)] hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPicks.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="group overflow-hidden rounded-2xl border surface-card shadow-sm transition hover:shadow-lg"
          >
            <div className="aspect-[16/9] w-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900" />
            <div className="p-4">
              <span className="inline-block rounded-full bg-[color:var(--surface-muted)] px-2 py-0.5 text-xs text-[color:var(--muted-foreground)]">
                {article.category}
              </span>
              <h3 className="mt-2 text-base font-semibold leading-snug group-hover:underline">
                {article.title}
              </h3>
              <p className="mt-1 text-sm text-[color:var(--muted-foreground)] line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-4 text-xs text-[color:var(--muted-foreground)]">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
