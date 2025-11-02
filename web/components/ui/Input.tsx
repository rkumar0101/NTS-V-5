import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={
        "h-10 w-full rounded-md border border-black/10 dark:border-white/15 " +
        "bg-white/80 dark:bg-white/5 px-3 text-sm outline-none " +
        "placeholder:text-zinc-500 dark:placeholder:text-zinc-400 " +
        "focus:ring-2 focus:ring-sky-500 transition-colors " + className
      }
      {...props}
    />
  )
);

Input.displayName = "Input";
export default Input;
