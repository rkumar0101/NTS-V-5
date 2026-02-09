import Link from "next/link";
import heroesData from "@/data/heroes.json";

type HeroItem = {
  id: string;
  name: string;
  role: string;
  story: string;
  image?: string;
  link?: string;
  tag?: string;
};

export default function HeroesPage() {
  const heroes = Array.isArray(heroesData)
    ? (heroesData as HeroItem[])
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Heroes of the Nation</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Stories of people shaping communities with courage and service.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {heroes.map((hero) => (
          <Link
            key={hero.id}
            href={hero.link ?? `/heroes/${hero.id}`}
            className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            <h2 className="text-lg font-semibold">{hero.name}</h2>
            <p className="text-xs text-[color:var(--muted-foreground)]">{hero.role}</p>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
              {hero.story}
            </p>
            {hero.tag && (
              <span className="mt-3 inline-flex text-xs px-2 py-0.5 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--muted-foreground)]">
                {hero.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
