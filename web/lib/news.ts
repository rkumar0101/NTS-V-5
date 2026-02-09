// web/lib/news.ts — Central data models & mock data

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  source?: string;
};

export type VisualStory = {
  id: number;
  title: string;
  img: string;
  tag?: string;
};

export type CivicTool = {
  icon: string; // lucide icon name — resolved at render time
  title: string;
  desc: string;
  color: "blue" | "red" | "green" | "purple";
  href?: string;
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export const categoryMatches = (
  articleCategory: string,
  selected?: string,
) => {
  return !selected || selected === "All" || articleCategory === selected;
};

/* ------------------------------------------------------------------ */
/*  Breaking News Ticker                                               */
/* ------------------------------------------------------------------ */

export const BREAKING_NEWS: string[] = [
  "Sensex hits all-time high as global markets rally.",
  "Supreme Court to hear plea on digital privacy rights tomorrow.",
  "New Metro line operational in West Zone: Commuters rejoice.",
  "India's renewable energy targets revised upwards for 2030.",
  "ISRO successfully tests next-gen cryogenic engine.",
];

/* ------------------------------------------------------------------ */
/*  Articles                                                           */
/* ------------------------------------------------------------------ */

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "The Silent Revolution: How Rural India Is Embracing AI",
    excerpt:
      "From crop monitoring to localized education, artificial intelligence is finding its most profound use cases in the villages of India.",
    category: "Technology",
    author: "Arunima Gupta",
    date: "Feb 12, 2026",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    readTime: "8 min",
    source: "Narayani Thoughts",
  },
  {
    id: 2,
    title: "Fiscal Deficit & You: Decoding the Budget",
    excerpt:
      "We break down the complex jargon of the Union Budget to explain exactly how it impacts your monthly grocery bill.",
    category: "Economy",
    author: "Vikram Sethi",
    date: "Feb 11, 2026",
    image:
      "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min",
    source: "Narayani Thoughts",
  },
  {
    id: 3,
    title: "The Case for Urban Forests",
    excerpt:
      "Opinion: Why our cities need lungs more than they need flyovers. A radical proposal for green infrastructure.",
    category: "Opinion",
    author: "Narayani Editorial Board",
    date: "Feb 10, 2026",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min",
    source: "Narayani Thoughts",
  },
  {
    id: 4,
    title: "Fact Check: Deepfakes in the Election Year",
    excerpt:
      "A comprehensive guide to identifying AI-generated political content on WhatsApp and Twitter.",
    category: "Fact Dose",
    author: "Verify Team",
    date: "Feb 09, 2026",
    image:
      "https://images.unsplash.com/photo-1555421689-492a18d9c3ad?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min",
    source: "Narayani Thoughts",
  },
  {
    id: 5,
    title: "India's Chip Strategy: Supply Chains Over Fabs",
    excerpt:
      "Design IP, packaging, and how India can move up the semiconductor value stack without building mega-fabs.",
    category: "Technology",
    author: "Priya Nair",
    date: "Feb 08, 2026",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    readTime: "7 min",
    source: "Narayani Thoughts",
  },
  {
    id: 6,
    title: "A Quiet Border Thaw: Trade Routes Reopen",
    excerpt:
      "Logistics and customs reforms signal calibrated normalization after 18 months of standoff.",
    category: "Geo-Politics",
    author: "Arjun Rao",
    date: "Feb 07, 2026",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
    readTime: "6 min",
    source: "Narayani Thoughts",
  },
];

/* ------------------------------------------------------------------ */
/*  Visual Stories                                                     */
/* ------------------------------------------------------------------ */

export const VISUAL_STORIES: VisualStory[] = [
  {
    id: 1,
    title: "Faces of Resilience",
    img: "https://images.unsplash.com/photo-1455095692583-89d57a3e813a?auto=format&fit=crop&q=80&w=600",
    tag: "Photo Essay",
  },
  {
    id: 2,
    title: "Monsoon Fury",
    img: "https://images.unsplash.com/photo-1517865288-978fcbf21b8c?auto=format&fit=crop&q=80&w=600",
    tag: "Photo Essay",
  },
  {
    id: 3,
    title: "Startup Spirit",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    tag: "Photo Essay",
  },
  {
    id: 4,
    title: "Cultural Tapestry",
    img: "https://images.unsplash.com/photo-1588873280829-577559230533?auto=format&fit=crop&q=80&w=600",
    tag: "Photo Essay",
  },
  {
    id: 5,
    title: "Harvest Gold",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
    tag: "Documentary",
  },
];

/* ------------------------------------------------------------------ */
/*  Civic Tools metadata                                               */
/* ------------------------------------------------------------------ */

export const CIVIC_TOOLS: CivicTool[] = [
  {
    icon: "GraduationCap",
    title: "Civic Classroom",
    desc: "Know your rights. Interactive courses on the Constitution, laws, and governance.",
    color: "blue",
    href: "/civic/classroom",
  },
  {
    icon: "ShieldAlert",
    title: "Corruption Tracker",
    desc: "Report anonymously. Track cases on a live map with status updates.",
    color: "red",
    href: "/civic/tracker",
  },
  {
    icon: "CheckCircle",
    title: "Fact Dose",
    desc: "Verify viral news before you share. Community-powered fact-checking.",
    color: "green",
    href: "/civic/factdose",
  },
  {
    icon: "Users",
    title: "Youth Wall",
    desc: "Connect & Lead. A space for young citizens to organize and amplify ideas.",
    color: "purple",
    href: "/civic/youth",
  },
];

/* ------------------------------------------------------------------ */
/*  Editorial sidebar data                                             */
/* ------------------------------------------------------------------ */

export const EDITORIALS = [
  {
    id: 1,
    quote: "Democracy dies in the darkness of apathy.",
    author: "The Editor",
    readTime: "4 min",
  },
  {
    id: 2,
    quote: "Why we need a digital bill of rights now.",
    author: "Guest Columnist",
    readTime: "6 min",
  },
];

/* ------------------------------------------------------------------ */
/*  Civic Pulse Poll                                                   */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Backward-compat alias (used by existing components until rebuild)  */
/* ------------------------------------------------------------------ */

export const editorsPicks = ARTICLES.map((a) => ({
  ...a,
  id: String(a.id),
  summary: a.excerpt,
}));

/* ------------------------------------------------------------------ */
/*  Civic Pulse Poll                                                   */
/* ------------------------------------------------------------------ */

export const CIVIC_POLL = {
  question: "Should AI usage be regulated in political campaigns?",
  options: ["Yes, strictly.", "No, it hinders innovation.", "Only for deepfakes."],
  totalVotes: 12405,
  endsIn: "2 days",
};
