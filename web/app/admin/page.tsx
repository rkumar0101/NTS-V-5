import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Admin Dashboard</h1>
          <p className="mt-2 text-[color:var(--muted-foreground)]">
            Manage content, users, and site settings.
          </p>
        </div>
        <Link
          href="/admin/login"
          className="rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
        >
          Admin login
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/admin/posts" className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors">
          <h2 className="text-lg font-semibold">Posts</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Create, edit, and schedule stories.
          </p>
        </Link>
        <Link href="/admin/users" className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Manage readers and staff access.
          </p>
        </Link>
        <Link href="/admin/settings" className="rounded-2xl card-surface p-5 hover:bg-[color:var(--surface-muted)] transition-colors">
          <h2 className="text-lg font-semibold">Settings</h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            Configure site-wide controls.
          </p>
        </Link>
      </div>
    </main>
  );
}
