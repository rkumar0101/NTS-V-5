type Props = {
  className?: string;
};

/**
 * Placeholder shimmer block shown while real content loads.
 */
export default function Skeleton({ className = "" }: Props) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800 ${className}`}
    />
  );
}
