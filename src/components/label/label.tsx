import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/cn";

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-[var(--ui-foreground)] peer-disabled:opacity-60",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";
