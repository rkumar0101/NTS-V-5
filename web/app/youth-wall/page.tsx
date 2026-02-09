import Link from "next/link";
import youthData from "@/data/youth.json";

type YouthVoice = {
  id: string;
  name: string;
  city: string;
  quote: string;
  timestamp?: string;
};

export default function YouthWallPage() {
  const voices = Array.isArray(youthData)
    ? (youthData as YouthVoice[])
    : [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Voice of Youth</h1>
          <p className="mt-2 text-[color:var(--muted-foreground)]">
            Share your perspective on policy, culture, and civic life.
          </p>
        </div>
        <Link
          href="/youth-wall/submit"
          className="rounded-lg bg-pink-500 text-white px-4 py-2 text-sm font-semibold hover:bg-pink-600 transition"
        >
          Submit your voice
        </Link>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {voices.map((voice) => (
          <div key={voice.id} className="rounded-2xl card-surface p-5">
            <p className="text-sm text-[color:var(--muted-foreground)] italic">“{voice.quote}”</p>
            <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
              {voice.name}, {voice.city}
              {voice.timestamp ? ` • ${voice.timestamp}` : ""}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
