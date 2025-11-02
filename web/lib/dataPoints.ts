export type DataPoint = {
  id: string;
  date: string;        // YYYY-MM-DD
  value: number;       // numeric for animation (e.g., 7.8)
  suffix?: string;     // %, Bn, Cr, etc.
  label: string;       // short explainer
  href?: string;
};

export const dataPoints: DataPoint[] = [
  {
    id: "gdp-inflation",
    date: "2025-11-02",
    value: 7.8,
    suffix: "%",
    label: "CPI inflation (YoY) — September print eases on food prices.",
    href: "/datapoint/cpi-sep",
  },
];
