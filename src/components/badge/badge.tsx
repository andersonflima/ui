import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-xl",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--ui-border)] bg-[var(--ui-chip)] text-[var(--ui-text-soft)]",
        solid: "bg-[var(--ui-accent)] text-[var(--ui-accent-contrast)]",
        outline: "border border-[var(--ui-border-strong)] text-[var(--ui-foreground)]",
        success: "bg-[color-mix(in_srgb,var(--ui-success)_15%,transparent)] text-[var(--ui-success)]",
        warning: "bg-[color-mix(in_srgb,var(--ui-warning)_15%,transparent)] text-[var(--ui-warning)]",
        danger: "bg-[color-mix(in_srgb,var(--ui-danger)_15%,transparent)] text-[var(--ui-danger)]",
        info: "bg-[color-mix(in_srgb,var(--ui-info)_15%,transparent)] text-[var(--ui-info)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  ),
);
Badge.displayName = "Badge";
