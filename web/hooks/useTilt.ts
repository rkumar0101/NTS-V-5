"use client";
import { useState, useRef, useCallback } from "react";

/**
 * 3D tilt effect on mouse move.
 * Returns ref, inline styles, and event handlers to spread on the element.
 */
export function useTilt(active = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [transition, setTransition] = useState("transform 0.1s ease-out");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!active || !ref.current) return;
      const { left, top, width, height } =
        ref.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      const rotateX = y * -15;
      const rotateY = x * 15;
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      );
      setTransition("transform 0.1s ease-out");
    },
    [active],
  );

  const handleMouseLeave = useCallback(() => {
    if (!active) return;
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    );
    setTransition("transform 0.5s ease-out");
  }, [active]);

  return { ref, transform, transition, handleMouseMove, handleMouseLeave };
}
