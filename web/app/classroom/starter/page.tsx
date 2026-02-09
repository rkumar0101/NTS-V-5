export default function ClassroomStarterPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Civic Classroom Starter Guide</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          A quick path to understand foundational civic concepts.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 text-[color:var(--muted-foreground)] space-y-2">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Learn about Fundamental Rights and Duties.</li>
          <li>Understand RTI and grievance redressal.</li>
          <li>Explore how local governance works.</li>
        </ol>
      </section>
    </main>
  );
}
