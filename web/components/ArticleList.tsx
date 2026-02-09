// components/ArticleList.tsx
import { editorsPicks } from "../lib/news";
import { formatDate } from "@/lib/date";
import Link from "next/link";

export default function ArticleList() {
  // placeholder: using editorsPicks as "latest"
  const items = editorsPicks;

  return (
    <section id="latest" className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Latest</h2>
        <a href="#" className="text-sm text-[color:var(--accent)] hover:underline">
          View all
        </a>
      </div>

      <ul className="mt-6 divide-y divide-[color:var(--border)] rounded-2xl overflow-hidden border surface-card">
        {items.map((a) => (
          <li key={a.id} className="p-4 md:p-5 hover:bg-[color:var(--surface-muted)] transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <Link href={`/article/${a.id}`} className="font-semibold hover:underline">
                  {a.title}
                </Link>
                <p className="mt-1 text-sm text-[color:var(--muted-foreground)] line-clamp-2">{a.excerpt}</p>
                <div className="mt-2 text-xs text-[color:var(--muted-foreground)]">
                  {a.category} •{" "}
                  {formatDate(a.date)}
                </div>
              </div>
              <a
                href={`/article/${a.id}`}
                className="self-start sm:self-auto inline-flex items-center rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm
                           text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              >
                Read
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
