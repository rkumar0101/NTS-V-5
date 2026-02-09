import Link from "next/link";
import whistleblowerData from "@/data/whistleblower.json";

type WBConfig = {
  heading?: string;
  subtext?: string;
  disclaimer?: string;
};

export default function WhistleblowerPage() {
  const data = (whistleblowerData as WBConfig) ?? {};

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          {data.heading ?? "Whistleblower Corner"}
        </h1>
        <p className="text-[color:var(--muted-foreground)]">
          {data.subtext ?? "Securely share documents, leads, and evidence in the public interest."}
        </p>
      </header>
      <section className="rounded-2xl card-surface p-6 space-y-4 text-[color:var(--muted-foreground)]">
        <p>
          Use our secure channels to submit tips. You can also learn how to protect your identity
          before sharing sensitive documents.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/whistleblower/submit"
            className="rounded-lg bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-600 transition"
          >
            Submit a tip
          </Link>
          <Link
            href="/whistleblower/how-to"
            className="rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm hover:border-red-500 hover:text-red-600 transition"
          >
            How to stay safe
          </Link>
        </div>
        {data.disclaimer && <p className="text-xs">{data.disclaimer}</p>}
      </section>
    </main>
  );
}
