// lib/columnists.ts
export type Columnist = {
  id: string;
  name: string;
  role: string;
  beat: string[];          // tags
  avatar: string;          // remote image
  blurb: string;
  href: string;            // profile link (placeholder)
  x?: string;              // twitter/x handle
};

export const columnists: Columnist[] = [
  {
    id: "rohan",
    name: "Rohan Mehta",
    role: "Senior Editor",
    beat: ["Politics", "Policy"],
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop",
    blurb:
      "Explains India’s coalition math and center–state dynamics in plain language.",
    href: "/author/rohan-mehta",
    x: "@rohanwrites",
  },
  {
    id: "priya",
    name: "Priya Nair",
    role: "Tech Columnist",
    beat: ["Tech", "Startups"],
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    blurb:
      "Covers semis, AI policy, and why infra wins before apps do.",
    href: "/author/priya-nair",
    x: "@priyawrites",
  },
  {
    id: "arjun",
    name: "Arjun Rao",
    role: "Defence Analyst",
    beat: ["Defence", "Geo-Politics"],
    avatar:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=600&auto=format&fit=crop",
    blurb:
      "Makes procurement, offsets, and doctrine easy for non-mil nerds.",
    href: "/author/arjun-rao",
    x: "@arjunrao",
  },
  {
    id: "isha",
    name: "Isha Kulkarni",
    role: "Culture & Society",
    beat: ["Culture", "Economy"],
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    blurb:
      "Tracks work, media, and money where Bharat is becoming India 2.0.",
    href: "/author/isha-kulkarni",
    x: "@ishak",
  },
];
