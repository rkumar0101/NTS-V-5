export default function AdminLoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-16 space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Admin Login</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Use your admin credentials to access the dashboard.
        </p>
      </header>
      <form className="rounded-2xl card-surface p-6 space-y-4">
        <input
          type="email"
          placeholder="admin@narayanithoughts.in"
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        />
        <button className="w-full rounded-lg bg-[color:var(--accent)] text-[color:var(--accent-foreground)] px-4 py-2 text-sm font-semibold hover:bg-[color:var(--accent-strong)] transition">
          Sign in
        </button>
      </form>
    </main>
  );
}
