import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "size-5 shrink-0 rounded-[6px] border border-[var(--ui-border-strong)] bg-[var(--ui-panel)] text-[var(--ui-accent-contrast)] transition-colors",
      "outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=checked]:border-[var(--ui-accent)] data-[state=checked]:bg-[var(--ui-accent)] data-[state=checked]:text-[var(--ui-accent-contrast)]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="size-3.5" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";
