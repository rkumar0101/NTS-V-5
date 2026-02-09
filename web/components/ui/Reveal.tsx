"use client";

import { useScrollReveal } from "@/hooks";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Extra delay in ms before the reveal triggers */
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}
