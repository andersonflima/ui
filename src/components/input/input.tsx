import * as React from "react";
import { cn } from "@/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-[var(--ui-radius-sm)] border border-[var(--ui-border)] bg-[var(--ui-panel)] px-4 text-sm text-[var(--ui-foreground)] backdrop-blur-xl transition-colors",
        "placeholder:text-[var(--ui-text-faint)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
        "aria-invalid:border-[var(--ui-danger)] aria-invalid:focus-visible:ring-[var(--ui-danger)]",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
