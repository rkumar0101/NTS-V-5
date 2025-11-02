import { socials } from "@/lib/socials";

export default function FollowUs() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank" rel="noreferrer"
              className="rounded-xl border border-black/10 dark:border-white/10 px-4 py-3 text-center hover:bg-black/5 dark:hover:bg-white/10"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
