export type EconMetric = {
  key: "sensex" | "usdinr" | "gdp" | "inflation";
  label: string;
  value: number | string;
  change: number; // +/-
  unit?: string;
};

export const economy: EconMetric[] = [
  { key: "sensex", label: "Sensex", value: 73120, change: 0.6 },
  { key: "usdinr", label: "USD/INR", value: 83.2, change: -0.2 },
  { key: "gdp", label: "GDP Growth", value: 6.6, change: 0.1, unit: "%" },
  { key: "inflation", label: "Inflation", value: 5.4, change: -0.3, unit: "%" },
];
