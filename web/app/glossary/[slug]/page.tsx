import { notFound } from "next/navigation";
import glossaryData from "@/data/glossary.json";

type GlossaryItem = {
  term: string;
  definition: string;
  slug?: string;
  tag?: string;
};

type Props = {
  params: { slug: string };
};

export default function GlossaryDetailPage({ params }: Props) {
  const items = Array.isArray(glossaryData)
    ? (glossaryData as GlossaryItem[])
    : [];
  const item =
    items.find((entry) => entry.slug === params.slug) ??
    items.find((entry) => entry.term.toLowerCase() === params.slug.toLowerCase());

  if (!item) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{item.term}</h1>
        {item.tag && (
          <span className="inline-flex text-xs px-2 py-0.5 rounded-full bg-[color:var(--surface-muted)] border border-[color:var(--border)] text-[color:var(--muted-foreground)]">
            {item.tag}
          </span>
        )}
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)]">
        {item.definition}
      </section>
    </main>
  );
}
