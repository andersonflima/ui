import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/cn";

export interface ProgressProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "value"> {
  /** Valor de 0 a `max`. Omita (ou passe null) para barra indeterminada. */
  value?: number | null;
  /** Valor máximo (default 100). */
  max?: number;
  /** Força o modo indeterminado (loading contínuo). */
  indeterminate?: boolean;
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, max = 100, indeterminate, ...props }, ref) => {
  const isIndeterminate = indeterminate || value == null;
  const clamped = isIndeterminate ? 0 : Math.min(Math.max(value, 0), max);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      max={max}
      value={isIndeterminate ? null : clamped}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-[var(--ui-chip)]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-ui-progress-indeterminate={isIndeterminate ? "" : undefined}
        className="h-full rounded-full bg-[var(--ui-accent)] transition-transform duration-500 ease-[var(--ui-ease)]"
        style={
          isIndeterminate ? undefined : { transform: `translateX(-${100 - (clamped / max) * 100}%)` }
        }
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = "Progress";
