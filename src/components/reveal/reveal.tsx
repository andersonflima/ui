"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, transitions } from "@/lib/motion";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Revela o conteúdo com fade + blur-up ao entrar no viewport (uma vez). */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={cn(className)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-12%" }}
    variants={fadeUp}
    transition={{ ...transitions.slow, delay }}
  >
    {children}
  </motion.div>
);
