export type MediaItem = {
  id: string;
  kind: "video";                 // future: "photo" | "audio"
  title: string;
  description?: string;
  // For YouTube/Vimeo, set provider+videoId. For self-hosted, set src.
  provider?: "youtube" | "vimeo";
  videoId?: string;
  src?: string;                  // e.g., MP4 URL if self-hosted
  poster?: string;
  href?: string;                 // deep page later
};

export const featured: MediaItem = {
  id: "kargil-doc",
  kind: "video",
  title: "Kargil, 25 Years On — What Changed in India’s Defence Posture",
  description:
    "A 7-minute explainer on how budgets, doctrine, and tech evolved after 1999.",
  provider: "youtube",
  videoId: "dQw4w9WgXcQ", // replace with your video id
  poster:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  href: "/video/kargil-25",
};
