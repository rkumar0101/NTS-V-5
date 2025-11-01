// components/EditorsPicks.tsx
import { editorsPicks } from "../lib/news";
import ArticleCard from "./ArticleCard";

export default function EditorsPicks({ category }: { category: string }) {
  const items =
    category === "All"
      ? editorsPicks
      : editorsPicks.filter((a) => a.category === category);

  return (
    <section id="editors" className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Editors’ Picks
        </h2>
        <a href="#editors" className="text-sm text-sky-700 dark:text-sky-400 hover:underline">
          {category === "All" ? "View all" : `Only ${category}`}
        </a>
      </div>

      {items.length === 0 ? (
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          No stories in <span className="font-medium">{category}</span> yet.
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </section>
  );
}
