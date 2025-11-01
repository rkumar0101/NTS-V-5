"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { editorsPicks } from "../lib/news";

type Lang = "en" | "hi" | "bn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [q, setQ] = useState("");

  // ---- init from localStorage
useEffect(() => {
  const el = document.documentElement; // <html>
  if (theme === "dark") el.classList.add("dark");
  else el.classList.remove("dark");
  localStorage.setItem("nt-theme", theme);
}, [theme]);

  // ---- apply to <html>
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("nt-lang", lang);
  }, [lang]);

  useEffect(() => {
    const el = document.documentElement;
    if (theme === "dark") el.classList.add("dark");
    else el.classList.remove("dark");
    localStorage.setItem("nt-theme", theme);
  }, [theme]);

  // ---- simple client-side search (title + excerpt)
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return editorsPicks
      .filter(
        (a) =>
          a.title.toLowerCase().includes(term) ||
          a.excerpt.toLowerCase().includes(term)
      )
      .slice(0, 6);
  }, [q]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* brand */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Narayani <span className="text-sky-600">Thoughts</span>
        </Link>

        {/* search (desktop) */}
        <div className="ml-auto hidden md:block relative w-80">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search stories…"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-600"
          />
          {/* results dropdown */}
          {q && (
            <div className="absolute mt-2 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
              {results.length === 0 ? (
                <div className="p-3 text-sm opacity-70">No matches</div>
              ) : (
                results.map((r) => (
                  <Link
                    key={r.id}
                    href={`/article/${r.id}`}
                    className="block p-3 hover:bg-black/5 dark:hover:bg-white/5"
                    onClick={() => setQ("")}
                  >
                    <div className="text-sm font-medium">{r.title}</div>
                    <div className="text-xs opacity-70 line-clamp-1">
                      {r.excerpt}
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        {/* controls */}
        <div className="flex items-center gap-2 ml-2">
          {/* language */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-sm px-2 py-1"
            title="Language"
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="bn">BN</option>
          </select>

          {/* dark switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm"
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* mobile search toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm"
            title="Search"
          >
            🔎
          </button>
        </div>
      </nav>

      {/* mobile search bar */}
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search stories…"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-600"
            />
            {q && (
              <div className="absolute left-4 right-4 mt-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
                {results.length === 0 ? (
                  <div className="p-3 text-sm opacity-70">No matches</div>
                ) : (
                  results.map((r) => (
                    <Link
                      key={r.id}
                      href={`/article/${r.id}`}
                      className="block p-3 hover:bg-black/5 dark:hover:bg-white/5"
                      onClick={() => {
                        setQ("");
                        setOpen(false);
                      }}
                    >
                      <div className="text-sm font-medium">{r.title}</div>
                      <div className="text-xs opacity-70 line-clamp-1">
                        {r.excerpt}
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
