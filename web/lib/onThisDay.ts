export type PastEvent = {
  id: string;
  month: number;  // 1-12
  day: number;    // 1-31
  year: number;   // event year (e.g., 1984)
  title: string;
  summary: string;
  href?: string;
};

export const onThisDay: PastEvent[] = [
  {
    id: "indira-1984",
    month: 10, day: 31, year: 1984,
    title: "Indira Gandhi assassinated",
    summary:
      "Prime Minister Indira Gandhi was assassinated by her Sikh bodyguards in New Delhi, triggering nationwide unrest.",
    href: "/history/indira-gandhi-1984",
  },
  {
    id: "constitution-1949",
    month: 11, day: 26, year: 1949,
    title: "Indian Constitution adopted",
    summary:
      "Constituent Assembly passed the Constitution of India; it came into effect on 26 Jan 1950.",
  },
];
