import Link from "next/link";
import glossaryData from "@/data/glossary.json";

type GlossaryItem = {
  term: string;
  definition: string;
  slug?: string;
  tag?: string;
};

export default function GlossaryPage() {
  const items = Array.isArray(glossaryData)
    ? (glossaryData as GlossaryItem[])
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Glossary</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Quick definitions of key civic and policy terms.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug ?? item.term}
            href={item.slug ? `/glossary/${item.slug}` : "/glossary"}
            className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{item.term}</h2>
              {item.tag && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[color:var(--surface-muted)] border border-[color:var(--border)] text-[color:var(--muted-foreground)]">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
              {item.definition}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
