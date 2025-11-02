// web/app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "India-first news & analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
