// web/lib/news.ts
export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;         // ISO yyyy-mm-dd or full ISO
  excerpt: string;
  image?: string;
  thumbnail?: string;
  summary?: string;
  source: string;       // <-- required (your UI prints current.source)
};

export const editorsPicks: Article[] = [
  {
    id: "a1",
    title: "Why India’s chip strategy hinges on supply chains, not fabs",
    category: "Tech",
    date: "2025-10-30",
    excerpt: "Design IP, packaging, and how India can move up the value stack.",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
  {
    id: "a2",
    title: "A quiet border thaw: trade routes reopen after 18 months",
    category: "Geo-Politics",
    date: "2025-10-29",
    excerpt: "Logistics and customs reforms signal calibrated normalization.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
  {
    id: "a3",
    title: "Defence procurement: what offsets actually deliver",
    category: "Defence",
    date: "2025-10-27",
    excerpt: "From MRO jobs to vendor growth—beyond headline numbers.",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
  {
    id: "a4",
    title: "Elections and the economy: signals vs. noise",
    category: "Economy",
    date: "2025-10-25",
    excerpt: "Why GDP prints often lag real inflection points.",
    image:
      "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
  {
    id: "a5",
    title: "Cricket’s data revolution: how matchups are built",
    category: "Sports",
    date: "2025-10-22",
    excerpt: "Ball-by-ball models and player micro-roles.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
  {
    id: "a6",
    title: "The rise of Bharat OTT: regional stories go national",
    category: "Culture",
    date: "2025-10-18",
    excerpt: "Language-first content and micro-subscriptions.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
    source: "Narayani Thoughts",
  },
];
