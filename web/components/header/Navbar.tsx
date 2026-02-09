"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  User,
  Feather,
  Sun,
  Moon,
  BookOpen,
  Search,
  Bookmark,
  Home,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FocusTrap from "@/components/ui/FocusTrap";

const NAV_LINKS = [
  { label: "News", href: "/" },
  { label: "Economy", href: "/#economy" },
  { label: "Thoughts", href: "/#thoughts" },
  { label: "Civic Tools", href: "/#civic" },
  { label: "About", href: "/about" },
];

const MOBILE_NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Search", href: "/#search", icon: Search },
  { label: "Saved", href: "/#saved", icon: Bookmark },
  { label: "Civic", href: "/#civic", icon: GraduationCap },
  { label: "Profile", href: "/profile", icon: User },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileMenu]);

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      {/* ── Desktop / Tablet Navbar ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg py-2"
            : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-indigo-600/20 group-hover:scale-105 transition-transform">
              <Feather size={20} />
            </div>
            <div className="font-serif text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              NARAYANI<span className="text-indigo-500">.</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide text-slate-600 dark:text-slate-300">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-indigo-500 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right-side actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Reading mode toggle */}
            <button
              onClick={() => setReadingMode(!readingMode)}
              className={`p-2 rounded-full transition-colors ${
                readingMode
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"
              }`}
              title="Reading Mode"
              aria-label="Toggle reading mode"
            >
              <BookOpen size={20} />
            </button>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />

            {/* Sign In */}
            <Link
              href="/profile"
              className="hidden md:flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-xs tracking-wide shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
            >
              <User size={16} /> SIGN IN
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 text-slate-500 dark:text-slate-400"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile slide-down menu ── */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl"
            >
              <FocusTrap onEscape={() => setMobileMenu(false)} autoFocus>
                <div className="container mx-auto px-4 py-6 grid gap-2">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-left text-lg font-bold text-slate-800 dark:text-slate-200 px-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 dark:border-slate-800 my-2" />
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
                  >
                    <User size={16} /> Sign In
                  </Link>
                </div>
              </FocusTrap>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Mobile bottom navigation bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 safe-area-bottom">
        <div className="flex items-center justify-around py-2">
          {MOBILE_NAV.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-0.5 px-3 py-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Icon size={20} />
                <span className="text-[10px] font-bold tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
