"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Send, Inbox, Tag } from "lucide-react";
import askData from "@/data/ask.json";

type AskConfig = {
  categories: { id: string; label: string }[];
  note?: string;
};

export default function AskNarayaniShowcase() {
  const cfg: AskConfig = (askData as AskConfig) ?? {
    categories: [
      { id: "rights", label: "Citizen Rights" },
      { id: "laws", label: "Law & Process" },
      { id: "governance", label: "Governance" },
      { id: "benefits", label: "Schemes/Benefits" }
    ],
    note: "We answer neutral, fact-checked civic questions."
  };

  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState(cfg.categories[0]?.id ?? "");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Frontend-only placeholder: store locally so user sees it "saved".
    const payload = { question, category, email, ts: Date.now() };
    try {
      const prev = JSON.parse(localStorage.getItem("ask-narayani") || "[]");
      prev.unshift(payload);
      localStorage.setItem("ask-narayani", JSON.stringify(prev.slice(0, 20)));
      setSaved(true);
      setQuestion("");
      setEmail("");
      setTimeout(() => setSaved(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-violet-400" />
          Ask Narayani
          <span className="text-xs md:text-sm font-normal opacity-70">
            — citizen query platform
          </span>
        </h3>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl card-surface p-5 md:p-6"
      >
        {cfg.note && (
          <p className="text-sm text-[color:var(--muted-foreground)] mb-4">
            {cfg.note}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Question */}
          <label className="md:col-span-2 block">
            <span className="text-xs uppercase tracking-wide text-[color:var(--muted-foreground)] flex items-center gap-1">
              <Inbox className="w-3.5 h-3.5" /> Your question
            </span>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about rights, laws, processes, benefits…"
              className="mt-1 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm min-h-[92px] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
              required
              maxLength={600}
            />
            <div className="text-[11px] text-[color:var(--muted-foreground)] mt-1">
              {question.length}/600
            </div>
          </label>

          {/* Category + email */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-wide text-[color:var(--muted-foreground)] flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Category
              </span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
              >
                {cfg.categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-wide text-[color:var(--muted-foreground)]">
                Email (optional)
              </span>
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
              />
              <div className="text-[11px] text-[color:var(--muted-foreground)] mt-1">
                We’ll notify you when answers go live (optional).
              </div>
            </label>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-400 text-black text-sm font-semibold hover:bg-violet-300 transition-colors"
            aria-live="polite"
            disabled={!question.trim()}
            title={!question.trim() ? "Type your question to enable" : "Submit"}
          >
            <Send className="w-4 h-4" />
            {saved ? "Saved!" : "Submit"}
          </button>

          <span className="text-xs text-[color:var(--muted-foreground)]">
            Coming soon: public answers, voting, and expert explainers.
          </span>
        </div>
      </motion.form>
    </section>
  );
}
