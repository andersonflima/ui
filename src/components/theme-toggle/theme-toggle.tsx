import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { transitions } from "@/lib/motion";
import { useTheme } from "@/providers/theme-provider";

export type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

/** Botão que alterna entre tema claro e escuro com transição animada do ícone. */
export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    const { resolvedTheme, toggleTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
      <button
        ref={ref}
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        className={cn(
          "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ui-border)] bg-[var(--ui-chip)] text-[var(--ui-foreground)] backdrop-blur-xl outline-none transition-colors duration-300 hover:border-[var(--ui-border-strong)] focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
          className,
        )}
        {...props}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={transitions.base}
            className="inline-flex"
          >
            {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </motion.span>
        </AnimatePresence>
      </button>
    );
  },
);

ThemeToggle.displayName = "ThemeToggle";
