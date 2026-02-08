// components/Footer.tsx
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-[color:var(--muted-foreground)]">
          © {year} Narayani Thoughts — Built with Next.js & Tailwind.
        </p>
        <nav className="flex gap-4 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
