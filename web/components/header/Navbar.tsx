// web/components/header/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  Bell,
  Bookmark,
  User2,
  X,
  Search,
} from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => setMounted(true), []);

  return (
    <div className="border-b border-black/5 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        {/* Left: mobile menu + brand */}
        <button
          aria-label="Open menu"
          className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10 md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          href="/"
          className="mr-2 whitespace-nowrap text-lg font-semibold tracking-tight"
        >
          <span className="opacity-80">Narayani</span>{" "}
          <span className="text-sky-500">Thoughts</span>
        </Link>

        {/* Center: search */}
        <div className="mx-auto hidden w-full max-w-md items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/5 md:flex">
          <Search className="h-4 w-4 opacity-60" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search stories..."
            className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
          />
        </div>

        {/* Right: nav links (desktop) */}
        <nav className="ml-auto hidden items-center gap-4 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-sky-500 ${
                pathname === item.href ? "text-sky-500" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="ml-2 flex items-center gap-2">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            className="rounded-lg border border-black/10 p-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            onClick={() =>
              setTheme(
                (resolvedTheme ?? theme) === "dark" ? "light" : "dark",
              )
            }
          >
            {mounted && (resolvedTheme ?? theme) === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            aria-label="Notifications"
            className="rounded-lg border border-black/10 p-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            aria-label="Saved"
            className="rounded-lg border border-black/10 p-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <Bookmark className="h-5 w-5" />
          </button>

          <button
            aria-label="Profile"
            className="rounded-lg border border-black/10 p-2 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          >
            <User2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden">
          <div className="absolute inset-y-0 left-0 w-72 bg-background p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <Link
                href="/"
                className="whitespace-nowrap text-lg font-semibold tracking-tight"
                onClick={() => setOpen(false)}
              >
                <span className="opacity-80">Narayani</span>{" "}
                <span className="text-sky-500">Thoughts</span>
              </Link>
              <button
                aria-label="Close menu"
                className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/5">
              <Search className="h-4 w-4 opacity-60" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search stories..."
                className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
              />
            </div>

            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 ${
                    pathname === item.href ? "text-sky-500" : "opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
