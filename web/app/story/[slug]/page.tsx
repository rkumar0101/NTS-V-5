import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

type Props = {
  params: { slug: string };
};

export default function StoryPage({ params }: Props) {
  const breakingSlug = siteConfig.breaking.href.split("/").pop();
  const title =
    params.slug === "eq-2025" ? "Breaking: EQ tremors felt in North India" : null;

  if (!title && params.slug !== breakingSlug) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{title ?? siteConfig.breaking.title}</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          This story page is a placeholder for full coverage.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)]">
        We are compiling verified updates. Check back soon for more details.
      </section>
    </main>
  );
}
