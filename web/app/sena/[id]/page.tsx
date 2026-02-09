import { notFound } from "next/navigation";
import senaData from "@/data/sena.json";

type SenaPost = {
  id: string;
  reporter: string;
  city?: string;
  title: string;
  summary: string;
  timestamp?: string;
};

type SenaData = {
  posts: SenaPost[];
};

type Props = {
  params: { id: string };
};

export default function SenaDetailPage({ params }: Props) {
  const data = (senaData as SenaData) ?? { posts: [] };
  const post = Array.isArray(data.posts)
    ? data.posts.find((item) => item.id === params.id)
    : undefined;

  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          {post.reporter}
          {post.city ? ` • ${post.city}` : ""}
          {post.timestamp ? ` • ${post.timestamp}` : ""}
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)]">
        {post.summary}
      </section>
    </main>
  );
}
