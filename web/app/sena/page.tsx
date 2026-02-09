import Link from "next/link";
import senaData from "@/data/sena.json";

type SenaPost = {
  id: string;
  reporter: string;
  city?: string;
  title: string;
  summary: string;
  link?: string;
  timestamp?: string;
};

type SenaData = {
  stats?: { reporters?: number; submissions?: number; verified?: number };
  posts: SenaPost[];
};

export default function SenaPage() {
  const data = (senaData as SenaData) ?? { posts: [] };
  const posts = Array.isArray(data.posts) ? data.posts : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Narayani Sena</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Citizen reporters network with verified local updates.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.link ?? `/sena/${post.id}`}
            className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-xs text-[color:var(--muted-foreground)] mt-1">
              {post.reporter}
              {post.city ? ` • ${post.city}` : ""}
            </p>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)] line-clamp-3">
              {post.summary}
            </p>
            {post.timestamp && (
              <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">{post.timestamp}</p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
