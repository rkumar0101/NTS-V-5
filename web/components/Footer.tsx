import Link from "next/link";
import {
  Feather,
  Globe,
  Share2,
  MessageSquare,
} from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const EXPLORE_LINKS = [
  { label: "Visual Stories", href: "/#visual" },
  { label: "Podcast Network", href: "/#podcast" },
  { label: "Civic Classroom", href: "/#civic" },
  { label: "Data Lab", href: "/#data" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "Code of Ethics", href: "/about#ethics" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Feather size={16} />
              </div>
              <span className="font-serif font-black text-xl">NARAYANI.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              An independent think-tank and media organization tailored for the
              conscious citizen of the 21st century.
            </p>
            <div className="flex gap-4 text-slate-500">
              <Globe
                size={20}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <Share2
                size={20}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <MessageSquare
                size={20}
                className="hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-slate-500">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-slate-500">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-slate-500">
              The Daily Brief
            </h4>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Narayani Media. All rights
            reserved.
          </div>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
