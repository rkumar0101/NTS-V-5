"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldAlert, ShieldCheck, FileWarning, Lock, Send, Mail } from "lucide-react";
import { useState } from "react";
import whistleblowerData from "@/data/whistleblower.json";

type Channel = { type: "email" | "form" | "matrix" | "signal" | "other"; label: string; href?: string; note?: string };
type TipExample = { title: string; blurb: string };
type GuideItem = { text: string };

type WBConfig = {
  heading?: string;
  subtext?: string;
  channels?: Channel[];
  guidelines?: GuideItem[];
  examples?: TipExample[];
  disclaimer?: string;
};

export default function WhistleblowerShowcase() {
  const data: WBConfig = (whistleblowerData as WBConfig) ?? {
    heading: "Whistleblower Corner",
    subtext: "Securely share documents, leads, and evidence in the public interest.",
    disclaimer:
      "Do not share state secrets or information that endangers lives. Use secure channels. You are responsible for complying with applicable laws.",
    channels: [
      { type: "form", label: "Submit via Secure Form (Coming soon)" },
      { type: "email", label: "Encrypted Email", href: "mailto:tips@narayanithoughts.in" }
    ],
    guidelines: [
      { text: "Remove metadata from files (images, PDFs) before upload." },
      { text: "Share only what you are legally allowed to share." },
      { text: "Avoid personal identifiers unless strictly necessary." }
    ],
    examples: [
      { title: "Procurement Irregularities", blurb: "Invoices, tender docs, internal mails showing conflicts of interest." },
      { title: "Environmental Violations", blurb: "Photos/videos with location details; notices from authorities." },
      { title: "Public Service Failures", blurb: "Official memos, RTI replies, or grievance IDs evidencing systemic issues." }
    ]
  };

  const [copied, setCopied] = useState(false);
  async function copy(link?: string) {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-400" />
          {data.heading || "Whistleblower Corner"}
        </h3>
        <div className="hidden md:flex items-center gap-2 text-xs opacity-75">
          <Lock className="w-4 h-4" /> Stay safe & use secure channels
        </div>
      </div>

      {/* Intro / Disclaimer */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
        <p className="text-sm opacity-90 max-w-3xl">
          {data.subtext || "Securely share documents, leads, and evidence in the public interest."}
        </p>

        {/* Channels */}
        {Array.isArray(data.channels) && data.channels.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {data.channels.map((c, i) => {
              const isPrimary = i === 0;
              const Icon = c.type === "email" ? Mail : Send;
              const baseClasses =
                "inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors";
              const variant = isPrimary
                ? "bg-red-400 text-black font-semibold hover:bg-red-300"
                : "border border-white/15 hover:bg-white/10";

              if (c.href) {
                return (
                  <Link
                    key={c.label + i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    className={`${baseClasses} ${variant}`}
                    title={c.note}
                  >
                    <Icon className="w-4 h-4" />
                    {c.label}
                  </Link>
                );
              }

              return (
                <button
                  key={c.label + i}
                  type="button"
                  className={`${baseClasses} ${variant}`}
                  title={c.note}
                >
                  <Icon className="w-4 h-4" />
                  {c.label}
                </button>
              );
            })}

            {/* Copy helper for first link that has href */}
            {data.channels.find((c) => !!c.href) && (
              <button
                onClick={() => copy(data.channels?.find((c) => !!c.href)?.href)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/10"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            )}
          </div>
        )}

        {/* Security Tips / Guidelines */}
        {Array.isArray(data.guidelines) && data.guidelines.length > 0 && (
          <div className="mt-5 rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Safety Guidelines
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm opacity-90">
              {data.guidelines.map((g, i) => (
                <li key={i}>{g.text}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Examples grid */}
        {Array.isArray(data.examples) && data.examples.length > 0 && (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.examples.slice(0, 3).map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <div className="text-sm font-semibold">{ex.title}</div>
                <div className="text-sm opacity-80 mt-1">{ex.blurb}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        {data.disclaimer && (
          <div className="mt-5 text-xs opacity-70 flex items-start gap-2">
            <FileWarning className="w-4 h-4 mt-0.5" />
            <p>{data.disclaimer}</p>
          </div>
        )}

        {/* CTA row */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm opacity-85">
            Prefer offline? Learn how to prepare your documents safely.
          </div>
          <div className="flex gap-3">
            <Link
              href="/whistleblower/submit"
              className="px-3 py-2 rounded-lg bg-red-400 text-black text-sm font-semibold hover:bg-red-300 transition-colors"
            >
              Submit a tip
            </Link>
            <Link
              href="/whistleblower/how-to"
              className="px-3 py-2 rounded-lg border border-white/15 text-sm hover:bg-white/10"
            >
              How to stay safe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
