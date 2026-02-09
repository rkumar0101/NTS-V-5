"use client";

import { useTilt } from "@/hooks";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function TiltCard({ children, className = "", onClick }: Props) {
  const { ref, transform, transition, handleMouseMove, handleMouseLeave } =
    useTilt();

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition }}
      className={`relative z-10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 ${className}`}
    >
      {children}
    </div>
  );
}
