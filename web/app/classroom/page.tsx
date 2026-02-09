import Link from "next/link";
import classroomData from "@/data/classroom.json";

type ClassroomItem = {
  id: string;
  topic: string;
  summary: string;
  slug?: string;
  updated?: string;
};

export default function ClassroomPage() {
  const items = Array.isArray(classroomData)
    ? (classroomData as ClassroomItem[])
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Civic Classroom</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Rights, laws, and systems explained in simple language.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl card-surface p-6 text-sm text-[color:var(--muted-foreground)]">
          No explainers yet. Add entries in <code>data/classroom.json</code>.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.slug ? `/classroom/${item.slug}` : `/classroom/${item.id}`}
              className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors"
            >
              <h2 className="text-lg font-semibold">{item.topic}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
                {item.summary}
              </p>
              {item.updated && (
                <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
                  Updated: {item.updated}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
