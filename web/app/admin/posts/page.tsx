const posts = [
  { id: "a1", title: "Why India’s chip strategy hinges on supply chains", status: "Draft" },
  { id: "a2", title: "A quiet border thaw: trade routes reopen", status: "Published" },
  { id: "a3", title: "Defence procurement: what offsets actually deliver", status: "Review" },
];

export default function AdminPostsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Manage Posts</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Review drafts, schedule publishes, and edit stories.
        </p>
      </header>
      <div className="rounded-2xl card-surface p-6 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-xs text-[color:var(--muted-foreground)]">ID: {post.id}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
              {post.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
