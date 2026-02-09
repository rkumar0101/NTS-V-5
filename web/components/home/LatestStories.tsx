"use client";

import Link from "next/link";
import { Reveal, Badge } from "@/components/ui";
import SectionTitle from "@/components/SectionTitle";
import { ARTICLES } from "@/lib/news";

export default function LatestStories() {
  const stories = ARTICLES.slice(1);

  return (
    <section>
      <SectionTitle title="Latest Stories" />

      <div className="grid gap-8">
        {stories.map((article, i) => (
          <Reveal key={article.id} delay={i * 100}>
            <Link
              href={`/article/${article.id}`}
              className="group flex flex-col md:flex-row gap-6 cursor-pointer border-b border-slate-100 dark:border-slate-800 pb-8"
            >
              {/* Image */}
              <div className="md:w-5/12 overflow-hidden rounded-xl relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge color="blue">{article.category}</Badge>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 py-2">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wide">
                  <span>{article.author}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span>{article.readTime} Read</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
