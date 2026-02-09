import { notFound } from "next/navigation";
import Image from "next/image";
import { editorsPicks } from "@/lib/news";
import { formatDate } from "@/lib/date";

type Props = {
  params: { id: string };
};

export default function ArticlePage({ params }: Props) {
  const article = editorsPicks.find((item) => item.id === params.id);

  if (!article) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <header className="space-y-4">
        <div className="text-sm text-[color:var(--muted-foreground)]">
          {article.category} • <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {article.title}
        </h1>
        <p className="text-base md:text-lg text-[color:var(--muted-foreground)]">
          {article.excerpt}
        </p>
      </header>

      {article.image && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border surface-card">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <section className="rounded-2xl border surface-card p-6 md:p-8 space-y-4">
        <p className="text-base leading-relaxed text-[color:var(--muted-foreground)]">
          {article.summary ??
            "This is a preview of the article detail view. Use this page to expand the story with analysis, charts, and sourced references."}
        </p>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          Source: {article.source}
        </p>
      </section>
    </main>
  );
}
