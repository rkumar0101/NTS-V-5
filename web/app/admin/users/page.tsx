const users = [
  { name: "Ananya Sharma", role: "Editor", status: "Active" },
  { name: "Rahul Verma", role: "Reporter", status: "Active" },
  { name: "Priya Menon", role: "Analyst", status: "Invited" },
];

export default function AdminUsersPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Users</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Manage newsroom and admin access.
        </p>
      </header>
      <div className="rounded-2xl card-surface p-6 space-y-3">
        {users.map((user) => (
          <div key={user.name} className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-xs text-[color:var(--muted-foreground)]">{user.role}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
