"use client";

import { motion, useReducedMotion } from "framer-motion";
import Prism from "@/components/Prism";
import WhaleSilhouette from "@/components/WhaleSilhouette";

const entrance = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <Prism />
      <WhaleSilhouette />
      {[
        { className: "left-[9%] top-[30%]", label: "NLP", duration: 5.5 },
        { className: "right-[10%] top-[25%]", label: "LLM", duration: 6.2 },
        { className: "bottom-[23%] left-[15%]", label: "AI Systems", duration: 5.8 },
        {
          className: "bottom-[27%] right-[13%]",
          label: "Human-Centered AI",
          duration: 6.5,
        },
      ].map((badge) => (
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          className={`float-badge hidden lg:flex ${badge.className}`}
          key={badge.label}
          transition={{ duration: badge.duration, ease: "easeInOut", repeat: Infinity }}
        >
          {badge.label}
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
        initial={initial}
        transition={{ staggerChildren: 0.13 }}
        variants={{ hidden: {}, visible: {} }}
        animate="visible"
      >
        <motion.p
          className="max-w-full text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400 sm:text-xs sm:tracking-[0.36em]"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          variants={entrance}
        >
          Lumen Chen · Computer Science · NLP · LLM · Human-Centered AI
        </motion.p>

        <motion.h1
          className="mt-8 max-w-5xl text-balance text-[clamp(3.15rem,8vw,8.5rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-zinc-50 sm:mt-10"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          variants={entrance}
        >
          Building intelligence<br />that understands<br />language and humans.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-400 sm:text-xl"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          variants={entrance}
        >
          Exploring language, context, and the human side of intelligent systems.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          variants={entrance}
        >
          <motion.a
            className="rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950"
            href="#research"
            whileHover={shouldReduceMotion ? undefined : { y: -2, backgroundColor: "#ffffff" }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Research
          </motion.a>
          <motion.a
            className="rounded-full border border-white/15 bg-white/[0.045] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm"
            href="#projects"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -2,
                    backgroundColor: "rgba(255,255,255,0.10)",
                    borderColor: "rgba(255,255,255,0.28)",
                  }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Projects
          </motion.a>
        </motion.div>

        <motion.p className="mt-20 text-[10px] font-medium uppercase tracking-[0.34em] text-zinc-500" transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} variants={entrance}>
          Deep Ocean · Prism · Intelligence
        </motion.p>
      </motion.div>
    </section>
  );
}
