import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium outline-none transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ui-background)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid:
          "bg-[var(--ui-accent)] text-[var(--ui-accent-contrast)] shadow-[var(--ui-shadow)] hover:brightness-110",
        default:
          "border border-[var(--ui-border)] bg-[var(--ui-panel-strong)] text-[var(--ui-foreground)] backdrop-blur-xl hover:border-[var(--ui-border-strong)]",
        subtle:
          "border border-[var(--ui-border)] bg-[var(--ui-chip)] text-[var(--ui-foreground)] backdrop-blur-xl hover:bg-[var(--ui-panel)]",
        outline:
          "border border-[var(--ui-border-strong)] text-[var(--ui-foreground)] hover:bg-[var(--ui-chip)]",
        ghost: "text-[var(--ui-text-soft)] hover:bg-[var(--ui-chip)]",
        destructive: "bg-[var(--ui-danger)] text-[var(--ui-on-status)] hover:brightness-110",
        link: "text-[var(--ui-accent)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-xs [&_svg]:size-4",
        md: "h-11 px-5 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-5",
        icon: "h-10 w-10 [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renderiza o filho como elemento raiz (ex.: um <a>), herdando estilos. */
  asChild?: boolean;
  /** Exibe um spinner e desabilita o botão durante uma ação assíncrona. */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={asChild ? undefined : disabled || loading}
        aria-busy={loading || undefined}
        data-loading={loading || undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading ? <Loader2 className="animate-spin" aria-hidden /> : null}
            {children}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";
