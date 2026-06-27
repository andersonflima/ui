import * as React from "react";
import { cn } from "@/lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[7rem] w-full resize-y rounded-[var(--ui-radius-sm)] border border-[var(--ui-border)] bg-[var(--ui-panel)] px-4 py-3 text-sm text-[var(--ui-foreground)] backdrop-blur-xl transition-colors",
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
Textarea.displayName = "Textarea";
