import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const base =
  "px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 " +
  "flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50",
  secondary:
    "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
  ghost:
    "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
  dark:
    "bg-slate-900 text-white hover:bg-black shadow-lg shadow-slate-900/20",
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
export default Button;
