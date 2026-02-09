import { notFound } from "next/navigation";
import heroesData from "@/data/heroes.json";

type HeroItem = {
  id: string;
  name: string;
  role: string;
  story: string;
  image?: string;
  tag?: string;
};

type Props = {
  params: { id: string };
};

export default function HeroDetailPage({ params }: Props) {
  const heroes = Array.isArray(heroesData)
    ? (heroesData as HeroItem[])
    : [];
  const hero = heroes.find((item) => item.id === params.id);

  if (!hero) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{hero.name}</h1>
        <p className="text-sm text-[color:var(--muted-foreground)]">{hero.role}</p>
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)]">
        {hero.story}
      </section>
    </main>
  );
}
