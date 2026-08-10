"use client";

import { motion, useReducedMotion } from "framer-motion";
import PrismObject from "@/components/PrismObject";
import WhalePresence from "@/components/WhalePresence";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : "hidden";
  const enter = { hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } };

  return (
    <section className="cinematic-hero">
      <WhalePresence />
      <PrismObject />
      <div className="hero-depth-marker" aria-hidden="true"><span>DEPTH</span><i /><span>0001M</span></div>
      <motion.div className="cinematic-hero-content" animate="visible" initial={initial} transition={{ staggerChildren: 0.12 }}>
        <motion.p className="hero-kicker" transition={{ duration: 0.7, ease }} variants={enter}>
          Lumen Chen · Digital Ocean Observatory
        </motion.p>
        <motion.h1 className="cinematic-title" transition={{ duration: 1.05, ease }} variants={enter}>
          EXPLORING<br /><span>INTELLIGENCE</span>
        </motion.h1>
        <motion.div className="hero-bottomline" transition={{ duration: 0.8, ease }} variants={enter}>
          <p>AI<br />Language<br />Human</p>
          <a href="#chapter-one">Scroll to dive <span>↓</span></a>
        </motion.div>
      </motion.div>
      <div className="hero-soundline" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>
    </section>
  );
}
