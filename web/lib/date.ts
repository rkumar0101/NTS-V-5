// web/lib/date.ts
export function formatDate(dateISO: string) {
  // Fixed locale + options so server and client render the same thing
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateISO));
}

export function formatTimeUTC(dateISO: string) {
  const d = new Date(dateISO);
  const h = String(d.getUTCHours()).padStart(2, "0");
  const m = String(d.getUTCMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}
