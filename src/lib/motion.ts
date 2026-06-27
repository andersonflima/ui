import type { Transition, Variants } from "framer-motion";

/** Easing de assinatura do design system (cúbico, suave na saída). */
export const easing = [0.22, 1, 0.36, 1] as const;

/** Transições reutilizáveis. */
export const transitions = {
  base: { duration: 0.3, ease: easing } satisfies Transition,
  soft: { duration: 0.5, ease: easing } satisfies Transition,
  slow: { duration: 0.7, ease: easing } satisfies Transition,
  spring: { type: "spring", stiffness: 180, damping: 18 } satisfies Transition,
  springSoft: { type: "spring", stiffness: 120, damping: 24, mass: 0.2 } satisfies Transition,
};

/** Variants de entrada com fade + blur-up — a assinatura visual do portfólio. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: transitions.slow },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.soft },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
};

/** Container com stagger para revelar filhos em sequência. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Presets prontos para overlays (dialog, popover, tooltip). */
export const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: transitions.base,
};

export const popMotion = {
  initial: { opacity: 0, scale: 0.96, y: 6 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: 6 },
  transition: transitions.base,
};
