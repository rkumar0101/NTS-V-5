"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, User2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FocusTrap from "@/components/ui/FocusTrap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isAnyOpen = menuOpen || profileOpen;

  // Close handlers
  const closeMenu = () => setMenuOpen(false);
  const closeProfile = () => setProfileOpen(false);
  const closeAll = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  // Lock body scroll while any overlay is open
  useEffect(() => {
    if (isAnyOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isAnyOpen]);

  // Global ESC close (redundant with FocusTrap ESC, but ensures both work)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    if (isAnyOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [isAnyOpen]);

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur sticky top-0 z-50">
      <nav
        className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center"
        aria-label="Primary"
      >
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="block"
            >
              <Menu className="h-5 w-5 text-black dark:text-white" />
            </button>

            {/* Dropdown menu (desktop + mobile unified) */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  id="site-menu"
                  role="dialog"
                  aria-modal="true"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-2 w-80 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-sm shadow-lg z-[60]"
                >
                  <FocusTrap onEscape={closeMenu} autoFocus>
                    <div className="p-4 space-y-4">
                      <input
                        type="text"
                        placeholder="Search stories..."
                        className="w-full rounded-md px-4 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-slate-700 text-sm text-black dark:text-white"
                      />
                      <ul className="space-y-1">
                        <li>
                          <Link
                            href="/"
                            className="block rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                            onClick={closeMenu}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about"
                            className="block rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                            onClick={closeMenu}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="block rounded px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                            onClick={closeMenu}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </FocusTrap>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/" className="text-lg font-semibold">
            Narayani Thoughts
          </Link>
        </div>

        {/* Right: Profile */}
        <div className="relative">
          <button
            aria-label="Open profile menu"
            aria-expanded={profileOpen}
            aria-controls="profile-menu"
            onClick={() => setProfileOpen((prev) => !prev)}
          >
            <User2 className="h-5 w-5 text-black dark:text-white" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                id="profile-menu"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 mt-2 w-44 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-sm shadow-lg z-[60]"
              >
                <FocusTrap onEscape={closeProfile} autoFocus>
                  <ul className="py-1">
                    <li>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={closeProfile}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={closeProfile}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={closeProfile}
                        className="block w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </FocusTrap>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Backdrop for any open overlay (click to close) */}
      <AnimatePresence>
        {isAnyOpen && (
          <motion.button
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeAll}
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-50"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
