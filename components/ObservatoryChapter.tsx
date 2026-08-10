"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ObservatoryChapterProps = {
  children: ReactNode;
  index: string;
  kicker: string;
  title: ReactNode;
  className?: string;
};

export default function ObservatoryChapter({
  children,
  index,
  kicker,
  title,
  className = "",
}: ObservatoryChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5, 1], shouldReduceMotion ? [0, 0, 0] : [64, 0, -48]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], shouldReduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0.2]);

  return (
    <section className={`observatory-chapter ${className}`} ref={sectionRef}>
      <motion.div className="relative z-10" style={{ opacity, y }}>
        <div className="chapter-marker">
          <span>{index}</span>
          <span className="chapter-rule" />
          <span>{kicker}</span>
        </div>
        <h2 className="chapter-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
