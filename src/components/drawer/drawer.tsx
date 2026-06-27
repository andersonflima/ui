import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;

type DrawerSide = "right" | "bottom";

const sideClasses: Record<DrawerSide, string> = {
  right: "fixed right-0 top-0 h-full w-full max-w-sm",
  bottom: "fixed bottom-0 left-0 w-full max-h-[85vh]",
};

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: DrawerSide;
}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ className, children, side = "right", ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      data-ui-overlay=""
      className="fixed inset-0 z-50 bg-[var(--ui-overlay)] backdrop-blur-sm"
    />
    <DialogPrimitive.Content
      ref={ref}
      data-ui-drawer={side}
      className={cn(
        sideClasses[side],
        "z-50 border border-[var(--ui-border)] bg-[var(--ui-panel-strong)] text-[var(--ui-foreground)] shadow-[var(--ui-shadow-lg)] backdrop-blur-xl",
        side === "right" ? "rounded-l-[var(--ui-radius-xl)]" : "rounded-t-[var(--ui-radius-xl)]",
        "p-6",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-[var(--ui-radius-sm)] p-1 text-[var(--ui-text-muted)] transition-colors",
          "hover:text-[var(--ui-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Fechar</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DrawerContent.displayName = "DrawerContent";

export const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
  ),
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex justify-end gap-3", className)} {...props} />
  ),
);
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold tracking-tight text-[var(--ui-foreground)]",
      className,
    )}
    {...props}
  />
));
DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[var(--ui-text-muted)]", className)}
    {...props}
  />
));
DrawerDescription.displayName = "DrawerDescription";
