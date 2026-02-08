"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import Link from "next/link";

type Saved = { id: string; title: string };

const mockSaved: Saved[] = [
  { id: "a1", title: "India’s chip strategy hinges on supply chains" },
  { id: "a2", title: "A quiet border thaw: trade routes reopen" },
];

export default function SavedStoriesButton() {
  const [open, setOpen] = useState(false);
  // TODO: replace mock with localStorage or API later

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="p-2 rounded-full border border-[color:var(--border)] hover:bg-[color:var(--surface-muted)] transition"
        aria-label="Saved stories"
      >
        <Bookmark className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] shadow-xl">
          <div className="p-3 text-sm font-semibold">Saved stories</div>
          {mockSaved.length ? (
            <ul className="divide-y divide-[color:var(--border)]">
              {mockSaved.map(s => (
                <li key={s.id}>
                  <Link
                    href={`/article/${s.id}`}
                    className="block px-3 py-2 text-sm hover:bg-[color:var(--surface-muted)] transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-3 pb-3 text-sm opacity-70">No saved stories yet.</div>
          )}
        </div>
      )}
    </div>
  );
}
