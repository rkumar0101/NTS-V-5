// components/CategoryChips.tsx
"use client";

import { editorsPicks } from "@/lib/news";

type Props = {
  active: string;
  onChange: (value: string) => void;
};

const categories = [
  "All",
  ...Array.from(new Set(editorsPicks.map((article) => article.category))),
];

export default function CategoryChips({ active, onChange }: Props) {
  return (
    <section id="categories" className="py-10">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all
              ${
                active === cat
                  ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] border-[color:var(--accent)] shadow-sm"
                  : "border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center mt-6 text-sm text-[color:var(--muted-foreground)]">
        Showing stories under{" "}
        <span className="font-semibold text-[color:var(--accent)]">
          {active}
        </span>
      </p>
    </section>
  );
}
