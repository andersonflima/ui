import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/cn";

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>;

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, value, defaultValue, ...props }, ref) => {
  const thumbCount =
    (Array.isArray(value) && value.length) ||
    (Array.isArray(defaultValue) && defaultValue.length) ||
    1;

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 grow overflow-hidden rounded-full bg-[var(--ui-chip)]">
        <SliderPrimitive.Range className="absolute h-full bg-[var(--ui-accent)]" />
      </SliderPrimitive.Track>
      {Array.from({ length: thumbCount }, (_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className={cn(
            "block size-4 rounded-full border border-[var(--ui-accent)] bg-[var(--ui-background)] shadow transition-colors",
            "outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = "Slider";
