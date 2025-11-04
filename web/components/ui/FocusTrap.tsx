"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Called when user presses Escape or clicks outside (if you wire that externally) */
  onEscape?: () => void;
  /** Focus the first focusable element on mount (default: true) */
  autoFocus?: boolean;
};

export default function FocusTrap({ children, onEscape, autoFocus = true }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Collect focusable elements
    const focusables = Array.from(
      root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));

    // Autofocus first
    if (autoFocus && focusables.length) {
      focusables[0].focus();
    } else {
      // Ensure container itself is focusable fallback
      (root as HTMLElement).tabIndex = -1;
      (root as HTMLElement).focus();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscape?.();
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift+Tab on first -> wrap to last
        if (document.activeElement === first || document.activeElement === root) {
          last.focus();
          e.preventDefault();
        }
      } else {
        // Tab on last -> wrap to first
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onEscape, autoFocus]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
