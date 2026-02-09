"use client";
import { useState, useEffect } from "react";

/**
 * Returns a scroll-based offset for parallax backgrounds.
 * `speed` controls how fast the element moves relative to scroll (0–1).
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * speed);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
}
