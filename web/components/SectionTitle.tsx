type Props = {
  title: string;
  action?: React.ReactNode;
};

export default function SectionTitle({ title, action }: Props) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-3xl font-serif font-black text-slate-900 dark:text-white shrink-0">
        {title}
      </h2>
      <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
      {action}
    </div>
  );
}
