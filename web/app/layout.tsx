// web/app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/header/Header";
import ThemeToggle from "@/components/ui/FloatingToggles";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "India-first news & analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-[color:var(--background)] text-[color:var(--foreground)]">
        <ThemeProvider>
          <Header />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
