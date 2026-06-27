import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"section">;

/** Bloco de layout de página com cabeçalho opcional (eyebrow, título, descrição). */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ eyebrow, title, description, children, className, ...props }, ref) => {
    const hasHeader = Boolean(eyebrow || title || description);

    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
          className,
        )}
        {...props}
      >
        {hasHeader ? (
          <header className="flex flex-col gap-3">
            {eyebrow ? (
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ui-accent)]">
                {eyebrow}
              </span>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--ui-foreground)] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-[var(--ui-text-muted)]">{description}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
