type Color = "blue" | "red" | "gold" | "purple" | "green";

const styles: Record<Color, string> = {
  blue: "bg-blue-600/10 text-blue-600 border-blue-600/20",
  red: "bg-rose-600/10 text-rose-600 border-rose-600/20",
  gold: "bg-amber-600/10 text-amber-700 border-amber-600/20",
  purple: "bg-purple-600/10 text-purple-600 border-purple-600/20",
  green: "bg-emerald-600/10 text-emerald-600 border-emerald-600/20",
};

type Props = {
  children: React.ReactNode;
  color?: Color;
  className?: string;
};

export default function Badge({ children, color = "blue", className = "" }: Props) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
