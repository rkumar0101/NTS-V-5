// web/app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "India-first news & analysis — an independent think-tank for the conscious citizen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-[color:var(--background)] text-[color:var(--foreground)] selection:bg-indigo-500 selection:text-white">
        <ThemeProvider>
          <ToastProvider>
            <Header />
            <main className="pt-16 lg:pt-20 pb-16 lg:pb-0">
              {children}
            </main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
