"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

export type ScrollProgressProps = {
  className?: string;
};

/** Barra fixa no topo que indica o progresso de scroll da página. */
export const ScrollProgress = ({ className }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className={cn(
        "fixed left-0 top-0 z-[100] h-0.5 w-full origin-left bg-[linear-gradient(90deg,var(--ui-accent),var(--ui-accent-strong))]",
        className,
      )}
      style={{ scaleX }}
    />
  );
};
