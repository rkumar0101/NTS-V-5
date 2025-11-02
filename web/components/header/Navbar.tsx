"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, User2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="block">
              <Menu className="h-5 w-5 text-black dark:text-white" />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-72 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-sm shadow-lg z-50 p-4 space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Search stories..."
                    className="w-full rounded-md px-4 py-2 border border-black/10 dark:border-white/10 bg-white dark:bg-slate-700 text-sm text-black dark:text-white"
                  />

                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="block px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="block px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="block px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10">
                        Contact
                      </Link>
                    </li>
                  </ul>
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
          <button onClick={() => setProfileOpen((prev) => !prev)}>
            <User2 className="h-5 w-5 text-black dark:text-white" />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-40 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-slate-800 text-sm shadow-lg z-50"
              >
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10">
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setProfileOpen(false)}
                    className="block w-full text-left px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    Log Out
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}
