import * as React from "react";
import { cn } from "@/lib/cn";

export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--ui-radius-sm)] bg-[linear-gradient(90deg,var(--ui-chip),var(--ui-panel),var(--ui-chip))] bg-[length:200%_100%]",
        className,
      )}
      style={{ animation: "ui-shimmer 1.6s linear infinite", ...style }}
      {...props}
    />
  ),
);
Skeleton.displayName = "Skeleton";
