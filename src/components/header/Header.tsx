"use client";

import { useState, useEffect } from "react";
import { styled } from "styled-system/jsx";
import { css } from "styled-system/css";

/* ====== Layout shells ====== */
const HeaderBar = styled("header", {
  base: {
    position: "sticky",
    top: "0",
    zIndex: "50",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    bg: "rgba(0,0,0,.30)"
  }
});

const Inner = styled("div", {
  base: {
    h: "16",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxW: "maxw",
    mx: "auto",
    px: "5",
    w: "full"
  }
});

/* ====== Simple Button styles ====== */
const IconBtn = styled("button", {
  base: {
    display: "grid",
    placeItems: "center",
    h: "10",
    w: "10",
    borderRadius: "lg",
    bg: "appBgElev",
    cursor: "pointer",
    userSelect: "none",
    border: "none"
  }
});

const PillGroup = styled("div", {
  base: {
    display: "flex",
    overflow: "hidden",
    borderRadius: "full",
    bg: "appBgElev"
  }
});
const PillBtn = styled("button", {
  base: {
    px: "3",
    py: "2",
    border: "none",
    cursor: "pointer",
    userSelect: "none",
    bg: "transparent",
    _hover: { bg: "rgba(255,255,255,.06)" }
  }
});

/* ====== Left Sheet (pure React) ====== */
function LeftSheet() {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <IconBtn aria-label="Open menu" onClick={() => setOpen(true)}>
        ☰
      </IconBtn>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={css({
            position: "fixed",
            inset: "0",
            bg: "rgba(0,0,0,.45)"
          })}
        />
      )}

      {/* Sheet */}
      <aside
        className={css({
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          w: "340px",
          maxW: "88vw",
          bg: "appBgElev",
          borderRight: "1px solid rgba(255,255,255,.06)",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .18s ease-out",
          p: "4",
          display: "flex",
          flexDir: "column",
          gap: "3"
        })}
        aria-hidden={!open}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "2"
          })}
        >
          <strong>Browse</strong>
          <button
            className={css({ fontSize: "20px", bg: "transparent", border: "none", cursor: "pointer" })}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className={css({ display: "flex", flexDir: "column", gap: "2" })}>
          <a className={css({ px: "3", py: "2", borderRadius: "lg", _hover: { bg: "rgba(255,255,255,.06)" } })} href="/">
            Home
          </a>
          <a className={css({ px: "3", py: "2", borderRadius: "lg", _hover: { bg: "rgba(255,255,255,.06)" } })} href="/categories/politics">
            Politics
          </a>
          <a className={css({ px: "3", py: "2", borderRadius: "lg", _hover: { bg: "rgba(255,255,255,.06)" } })} href="/categories/tech">
            Tech
          </a>
          <a className={css({ px: "3", py: "2", borderRadius: "lg", _hover: { bg: "rgba(255,255,255,.06)" } })} href="/categories/sports">
            Sports
          </a>
          <a className={css({ px: "3", py: "2", borderRadius: "lg", _hover: { bg: "rgba(255,255,255,.06)" } })} href="/about">
            About
          </a>
        </nav>
      </aside>
    </>
  );
}

/* ====== Header component ====== */
export default function Header() {
  return (
    <HeaderBar>
      <Inner>
        {/* Left: Hamburger */}
        <LeftSheet />

        {/* Center: Logo (text placeholder for now) */}
        <a
          href="/"
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "3",
            textDecoration: "none",
            color: "inherit"
          })}
        >
          <span
            className={css({
              fontWeight: "700",
              fontSize: "18px",
              letterSpacing: "0.3px"
            })}
          >
            Narayani Thoughts
          </span>
        </a>

        {/* Right: Language + Theme + Profile (stubs) */}
        <div className={css({ display: "flex", alignItems: "center", gap: "3" })}>
          {/* Language (no-op for now) */}
          <PillGroup aria-label="Language">
            <PillBtn>EN</PillBtn>
            <PillBtn>HI</PillBtn>
            <PillBtn>BN</PillBtn>
          </PillGroup>

          {/* Theme (no-op for now; wiring later with next-themes) */}
          <IconBtn aria-label="Toggle theme">🌓</IconBtn>

          {/* Profile (no-op for now) */}
          <button
            className={css({
              h: "10",
              w: "10",
              borderRadius: "full",
              bg: "appBgElev",
              display: "grid",
              placeItems: "center",
              border: "none",
              cursor: "pointer"
            })}
            aria-label="Profile"
          >
            <span
              className={css({
                h: "5",
                w: "5",
                borderRadius: "full",
                bg: "linear-gradient(135deg, var(--colors-appBrand), var(--colors-appBrand2))"
              })}
            />
          </button>
        </div>
      </Inner>
    </HeaderBar>
  );
}
