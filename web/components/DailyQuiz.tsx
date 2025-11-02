"use client";

import { useEffect, useMemo, useState } from "react";
import { todayQuiz } from "@/lib/dailyQuiz";

type State = {
  step: number;                  // 0..questions.length
  answers: Record<string, number>;
  done: boolean;
  score: number;
};

const key = (d: string) => `nt-quiz-${d}`;

export default function DailyQuiz() {
  const qz = todayQuiz;
  const total = qz.questions.length;

  // restore from localStorage (prevent multiple attempts)
  const [state, setState] = useState<State>(() => {
    if (typeof window === "undefined") {
      return { step: 0, answers: {}, done: false, score: 0 };
    }
    const saved = window.localStorage.getItem(key(qz.date));
    return saved
      ? JSON.parse(saved)
      : { step: 0, answers: {}, done: false, score: 0 };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key(qz.date), JSON.stringify(state));
    }
  }, [state, qz.date]);

  const current = qz.questions[state.step];

  const progressPct = useMemo(
    () => Math.round(((state.step) / total) * 100),
    [state.step, total]
  );

  const choose = (optIdx: number) => {
    if (!current || state.done) return;
    setState((s) => ({
      ...s,
      answers: { ...s.answers, [current.id]: optIdx },
    }));
  };

  const next = () => {
    if (state.done) return;
    if (state.step + 1 < total) {
      setState((s) => ({ ...s, step: s.step + 1 }));
    } else {
      // finish
      let sc = 0;
      qz.questions.forEach((q) => {
        if (state.answers[q.id] === q.answer) sc++;
      });
      setState((s) => ({ ...s, done: true, score: sc }));
    }
  };

  const restart = () => {
    setState({ step: 0, answers: {}, done: false, score: 0 });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl md:text-2xl font-semibold">
            Daily Intelligence Brief — {qz.date}
          </h3>
          <div className="text-sm opacity-70">{state.done ? "Finished" : `${state.step}/${total}`}</div>
        </div>

        {/* progress */}
        <div className="mt-3 h-2 rounded bg-black/10 dark:bg-white/10">
          <div
            className="h-2 rounded bg-sky-600 transition-all"
            style={{ width: `${state.done ? 100 : progressPct}%` }}
          />
        </div>

        {!state.done && current && (
          <div className="mt-6">
            <div className="font-semibold">{current.q}</div>
            <ul className="mt-3 grid gap-2">
              {current.options.map((opt, i) => {
                const chosen = state.answers[current.id] === i;
                return (
                  <li key={i}>
                    <button
                      onClick={() => choose(i)}
                      className={`w-full text-left rounded-lg border px-3 py-2
                        ${chosen
                          ? "border-sky-600 bg-sky-600/10"
                          : "border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"}`}
                    >
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* explanation if selected and wrong/right */}
            {state.answers[current.id] !== undefined && (
              <div className="mt-3 text-sm">
                {state.answers[current.id] === current.answer ? (
                  <span className="text-emerald-600">Correct.</span>
                ) : (
                  <span className="text-rose-600">Not quite.</span>
                )}
                {current.explain && (
                  <span className="opacity-80"> {" "}{current.explain}</span>
                )}
              </div>
            )}

            <div className="mt-4">
              <button
                onClick={next}
                className="rounded-lg bg-black text-white dark:bg-white dark:text-black px-4 py-2"
              >
                {state.step + 1 < total ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        )}

        {state.done && (
          <div className="mt-6">
            <div className="text-lg md:text-xl font-semibold">
              Score: {state.score} / {total}
            </div>
            <p className="mt-1 text-sm opacity-80">
              Thanks for playing. Come back tomorrow for a new brief.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={restart}
                className="rounded-lg border border-black/20 dark:border-white/20 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                Try again (clear)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
