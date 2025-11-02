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
        <Link href="#" className="text-sm text-sky-500 hover:underline">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPicks.map((article) => (
          <Link
            key={article.id}
            href={`/article/${article.id}`}
            className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <div className="aspect-[16/9] w-full bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5" />
            <div className="p-4">
              <span className="inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-white/10">
                {article.category}
              </span>
              <h3 className="mt-2 text-base font-semibold leading-snug group-hover:underline">
                {article.title}
              </h3>
              <p className="mt-1 text-sm opacity-80 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
