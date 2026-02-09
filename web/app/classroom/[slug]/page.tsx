import { notFound } from "next/navigation";
import classroomData from "@/data/classroom.json";

type ClassroomItem = {
  id: string;
  topic: string;
  summary: string;
  slug?: string;
  updated?: string;
};

type Props = {
  params: { slug: string };
};

export default function ClassroomDetailPage({ params }: Props) {
  const items = Array.isArray(classroomData)
    ? (classroomData as ClassroomItem[])
    : [];
  const item =
    items.find((entry) => entry.slug === params.slug) ??
    items.find((entry) => entry.id === params.slug);

  if (!item) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{item.topic}</h1>
        {item.updated && (
          <p className="text-sm text-[color:var(--muted-foreground)]">
            Updated: {item.updated}
          </p>
        )}
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)]">
        {item.summary}
      </section>
    </main>
  );
}
