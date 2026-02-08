import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={
        "h-10 w-full rounded-md border border-[color:var(--border)] " +
        "bg-[color:var(--surface)] px-3 text-sm outline-none " +
        "placeholder:text-[color:var(--muted-foreground)] " +
        "focus:ring-2 focus:ring-[color:var(--ring)] transition-colors " + className
      }
      {...props}
    />
  )
);

Input.displayName = "Input";
export default Input;
