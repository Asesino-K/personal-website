"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const revealVariants: Variants = {
  hidden: { filter: "blur(8px)", opacity: 0, y: 28 },
  visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={revealVariants}
      viewport={{ amount: 0.18, once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: Omit<RevealProps, "delay">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.1 }}
      variants={{
        hidden: {},
        visible: {},
      }}
      viewport={{ amount: 0.12, once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<RevealProps, "delay">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      variants={shouldReduceMotion ? undefined : revealVariants}
    >
      {children}
    </motion.div>
  );
}
