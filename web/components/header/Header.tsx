"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          Narayani <span className="text-blue-600">Thoughts</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute md:static left-0 top-full w-full md:w-auto bg-white dark:bg-gray-900 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
