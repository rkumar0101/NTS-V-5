// components/SectionTitle.tsx
export default function SectionTitle({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {action}
    </div>
  );
}
