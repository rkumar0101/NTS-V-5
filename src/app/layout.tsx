import "styled-system/styles.css";   // <-- Panda preflight + tokens + recipes
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "News & analysis platform built step by step.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

