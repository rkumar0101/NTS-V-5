"use client";

import {
  GraduationCap,
  ShieldAlert,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTilt } from "@/hooks";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  ShieldAlert,
  CheckCircle,
  Users,
};

const gradients: Record<string, string> = {
  blue: "from-blue-500 to-cyan-500",
  red: "from-rose-500 to-orange-500",
  green: "from-emerald-500 to-teal-500",
  purple: "from-violet-500 to-fuchsia-500",
};

type Props = {
  icon: string;
  title: string;
  desc: string;
  color: "blue" | "red" | "green" | "purple";
  onClick?: () => void;
};

export default function TiltFeatureCard({
  icon,
  title,
  desc,
  color,
  onClick,
}: Props) {
  const { ref, transform, transition, handleMouseMove, handleMouseLeave } =
    useTilt();
  const Icon = iconMap[icon] ?? GraduationCap;
  const gradient = gradients[color];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform, transition }}
      className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 border border-slate-100 dark:border-slate-800 cursor-pointer relative overflow-hidden group h-full flex flex-col"
    >
      {/* Corner gradient blob */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full transition-transform group-hover:scale-150`}
      />

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 flex-grow">
        {desc}
      </p>

      <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform">
        Launch Tool <ArrowRight size={16} />
      </div>
    </div>
  );
}
