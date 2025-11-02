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
        <a href="#" className="text-sm text-sky-700 dark:text-sky-400 hover:underline">
          View all
        </a>
      </div>

      <ul className="mt-6 divide-y divide-black/10 dark:divide-white/10 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
        {items.map((a) => (
          <li key={a.id} className="p-4 md:p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <Link href={`/article/${a.id}`} className="font-semibold hover:underline">
                  {a.title}
                </Link>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{a.excerpt}</p>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {a.category} •{" "}
                  {formatDate(a.date)}
                </div>
              </div>
              <a
                href={`/article/${a.id}`}
                className="self-start sm:self-auto inline-flex items-center rounded-lg border px-3 py-2 text-sm
                           border-gray-300 dark:border-gray-700 hover:border-sky-600 hover:text-sky-700
                           dark:hover:text-sky-400 transition"
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
