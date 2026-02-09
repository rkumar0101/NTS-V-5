"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-slate-900 p-1.5 rounded-full flex border border-slate-800 focus-within:border-indigo-600 transition-colors"
      >
        <input
          type="email"
          placeholder="Email address"
          className="bg-transparent px-4 text-sm w-full focus:outline-none text-white placeholder-slate-600"
          aria-label="Email for daily brief"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-full p-2.5 transition-colors shrink-0"
          aria-label="Subscribe"
        >
          <ArrowRight size={16} />
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
