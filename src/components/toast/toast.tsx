import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export type ToastData = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "danger";
  duration?: number;
  action?: React.ReactNode;
};

type ToastContextValue = {
  toast: (data: Omit<ToastData, "id">) => string;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

const variantBorder: Record<NonNullable<ToastData["variant"]>, string> = {
  default: "border-[var(--ui-border)]",
  success: "border-[var(--ui-success)]",
  warning: "border-[var(--ui-warning)]",
  danger: "border-[var(--ui-danger)]",
};

const variantAccent: Record<NonNullable<ToastData["variant"]>, string> = {
  default: "text-[var(--ui-foreground)]",
  success: "text-[var(--ui-success)]",
  warning: "text-[var(--ui-warning)]",
  danger: "text-[var(--ui-danger)]",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastData[]>([]);
  const counter = React.useRef(0);

  const remove = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback((data: Omit<ToastData, "id">) => {
    const id = `${(counter.current += 1)}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { ...data, id }]);
    return id;
  }, []);

  const value = React.useMemo<ToastContextValue>(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      <ToastPrimitive.Provider>
        {children}
        {toasts.map(({ id, title, description, variant = "default", duration, action }) => (
          <ToastPrimitive.Root
            key={id}
            data-ui-pop
            duration={duration}
            onOpenChange={(open) => {
              if (!open) remove(id);
            }}
            className={cn(
              "ui-glass relative flex items-start gap-3 rounded-[var(--ui-radius)] border p-4 pr-10 shadow-[var(--ui-shadow-lg)]",
              variantBorder[variant],
            )}
          >
            <div className="flex flex-col gap-1">
              {title ? (
                <ToastPrimitive.Title
                  className={cn("text-sm font-semibold", variantAccent[variant])}
                >
                  {title}
                </ToastPrimitive.Title>
              ) : null}
              {description ? (
                <ToastPrimitive.Description className="text-sm text-[var(--ui-text-muted)]">
                  {description}
                </ToastPrimitive.Description>
              ) : null}
              {action ? <ToastPrimitive.Action altText="action" asChild>{action}</ToastPrimitive.Action> : null}
            </div>
            <ToastPrimitive.Close
              aria-label="Fechar"
              className="absolute right-3 top-3 text-[var(--ui-text-muted)] transition-colors hover:text-[var(--ui-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]"
            >
              <X className="size-4" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full max-w-sm flex-col gap-2 p-4" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast deve ser usado dentro de um <ToastProvider>.");
  }
  return ctx;
}
