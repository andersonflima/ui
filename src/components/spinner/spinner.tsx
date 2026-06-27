import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const sizeMap = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
} as const;

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <Loader2 className={cn("animate-spin text-[var(--ui-accent)]", sizeMap[size])} />
      <span className="sr-only">Carregando</span>
    </span>
  ),
);
Spinner.displayName = "Spinner";
