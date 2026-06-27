"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

export type MagneticLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
} & Omit<
  React.ComponentPropsWithoutRef<"a">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "ref" | "style"
>;

/** Link que "magnetiza" suavemente em direção ao cursor. */
export const MagneticLink = ({
  href,
  children,
  className,
  strength = 0.35,
  ...props
}: MagneticLinkProps) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 18 });
  const y = useSpring(rawY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    rawX.set(offsetX * strength);
    rawY.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      href={href}
      className={cn(
        "inline-flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-ring)]",
        className,
      )}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
};
