export default function AdminSettingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Admin Settings</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Configure alert banners, theme defaults, and newsroom preferences.
        </p>
      </header>
      <div className="rounded-2xl card-surface p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Breaking news banner</h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              Toggle the crisis banner on the homepage.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
            Enabled
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Default theme</h2>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              System preference with manual override.
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-[color:var(--surface-muted)] text-[color:var(--foreground)]">
            System
          </span>
        </div>
      </div>
    </main>
  );
}
