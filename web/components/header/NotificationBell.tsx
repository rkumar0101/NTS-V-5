"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import Link from "next/link";

const demo = [
  { id: "n1", text: "Breaking: EQ tremors felt in North India", href: "/story/eq-2025" },
  { id: "n2", text: "Editors’ Picks updated", href: "/#editors" },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const hasUnread = demo.length > 0;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="relative p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {hasUnread && (
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-background shadow-lg">
          <div className="p-3 text-sm font-semibold">Notifications</div>
          <ul className="divide-y divide-black/5 dark:divide-white/10">
            {demo.map(n => (
              <li key={n.id}>
                <Link
                  href={n.href}
                  className="block px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {n.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-2 text-xs text-right opacity-70">Soon: real feed</div>
        </div>
      )}
    </div>
  );
}
