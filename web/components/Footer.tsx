// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Narayani Thoughts — Built with Next.js & Tailwind.
        </p>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
