import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/cn";

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
>;

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-[var(--ui-border)] bg-[var(--ui-chip)] transition-colors",
      "outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=checked]:bg-[var(--ui-accent)]",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "block size-5 translate-x-0.5 rounded-full bg-[var(--ui-on-status)] shadow transition-transform",
        "data-[state=checked]:translate-x-[1.375rem]",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
