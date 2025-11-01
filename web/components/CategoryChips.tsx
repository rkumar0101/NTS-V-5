// components/CategoryChips.tsx
"use client";

type Props = {
  active: string;
  onChange: (value: string) => void;
};

const categories = [
  "All",
  "Politics",
  "Geo-Politics",
  "Tech",
  "Defence",
  "Sports",
  "Economy",
  "Culture",
  "World",
  "India",
];

export default function CategoryChips({ active, onChange }: Props) {
  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all
              ${
                active === cat
                  ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                  : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        Showing stories under{" "}
        <span className="font-semibold text-sky-600 dark:text-sky-400">
          {active}
        </span>
      </p>
    </section>
  );
}
