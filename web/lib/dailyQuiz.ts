export type QuizQ = {
  id: string;
  q: string;
  options: string[];
  answer: number;        // index of correct option
  explain?: string;
};

export type DailyQuiz = {
  date: string;          // YYYY-MM-DD
  questions: QuizQ[];
};

export const todayQuiz: DailyQuiz = {
  date: "2025-11-02",    // update daily (or generate server-side later)
  questions: [
    {
      id: "q1",
      q: "Which index best captures large-cap Indian equities?",
      options: ["Nifty Midcap 100", "Sensex", "Bank Nifty", "Nifty IT"],
      answer: 1,
      explain: "Sensex tracks 30 large-cap companies listed on BSE.",
    },
    {
      id: "q2",
      q: "‘Blue-water navy’ refers to a fleet capable of:",
      options: [
        "Only coastal defence",
        "Limited regional patrols",
        "Global power projection on high seas",
        "Riverine operations",
      ],
      answer: 2,
      explain: "A blue-water navy sustains operations across deep oceans globally.",
    },
    {
      id: "q3",
      q: "CPI inflation primarily measures price changes for:",
      options: ["Corporate inputs", "Household consumption basket", "Exports", "Capital goods"],
      answer: 1,
      explain: "CPI = consumer prices faced by households.",
    },
  ],
};
