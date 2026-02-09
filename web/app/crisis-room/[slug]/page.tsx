import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

type Props = {
  params: { slug: string };
};

export default function CrisisRoomPage({ params }: Props) {
  const match =
    siteConfig.breaking.href.split("/").pop() === params.slug
      ? siteConfig.breaking
      : null;

  if (!match) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Crisis Room</h1>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          Live updates and verified information.
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6">
        <h2 className="text-xl font-semibold">{match.title}</h2>
        <p className="mt-2 text-[color:var(--muted-foreground)]">
          This live page will be updated as new information arrives.
        </p>
      </section>
    </main>
  );
}
