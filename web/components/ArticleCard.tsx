import Link from "next/link";
import type { Article } from "../lib/news"; // <-- use RELATIVE import to avoid alias hiccup
import { formatDate } from "@/lib/date";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="aspect-[16/9] w-full bg-gradient-to-tr from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30 grid place-items-start">
        <span className="m-3 inline-flex items-center gap-2 rounded-full bg-black/80 text-white text-xs px-2.5 py-1 tracking-wide">
          {article.category}
        </span>
      </div>

      <div className="flex-1 p-4 md:p-5 flex flex-col">
        <h3 className="text-base md:text-lg font-semibold leading-snug line-clamp-2">
          <Link href={`/article/${article.id}`} className="group-hover:underline">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          {formatDate(article.date)}
        </div>
      </div>
    </article>
  );
}
