import * as React from "react";
import { cn } from "@/lib/cn";
import { Spinner } from "@/components/spinner/spinner";

export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controla a visibilidade da sobreposição. */
  visible: boolean;
  /** Texto opcional exibido abaixo do spinner. */
  label?: string;
  /** Tamanho do spinner. */
  spinnerSize?: "sm" | "md" | "lg";
}

/**
 * Sobreposição de carregamento (glass blur) para bloquear uma seção enquanto
 * processa. O elemento pai precisa ter `position: relative`.
 */
export const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ visible, label, spinnerSize = "md", className, ...props }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-busy="true"
        className={cn(
          "absolute inset-0 z-40 flex flex-col items-center justify-center gap-3 rounded-[inherit] bg-[var(--ui-overlay)] backdrop-blur-sm",
          className,
        )}
        style={{ animation: "ui-fade-in var(--ui-duration) var(--ui-ease)" }}
        {...props}
      >
        <Spinner size={spinnerSize} />
        {label ? <p className="text-sm text-[var(--ui-text-soft)]">{label}</p> : null}
      </div>
    );
  },
);

LoadingOverlay.displayName = "LoadingOverlay";
