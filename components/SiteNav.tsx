"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type ActivePage = "research" | "projects" | "writing" | "cv";

const links: Array<{ href: string; label: string; page: ActivePage }> = [
  { href: "/research", label: "Research", page: "research" },
  { href: "/projects", label: "Projects", page: "projects" },
  { href: "/writing", label: "Writing", page: "writing" },
  { href: "/cv", label: "CV", page: "cv" },
];

export default function SiteNav({ active }: { active?: ActivePage }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
      transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="cinematic-nav mx-auto flex w-[calc(100%-2rem)] max-w-[92rem] items-center justify-between px-1 py-5 sm:w-[calc(100%-4rem)]">
        <Link
          aria-label="Lumen Chen home"
          className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-zinc-200 transition-colors hover:text-white"
          href="/"
        >
          <span>Lumen Chen</span>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-x-3 sm:gap-x-6">
          {links.map((link) => (
            <Link
              aria-current={active === link.page ? "page" : undefined}
              className={
                active === link.page
                  ? "text-[0.58rem] font-medium uppercase tracking-[0.15em] text-zinc-100 sm:text-[0.64rem]"
                  : "text-[0.58rem] font-medium uppercase tracking-[0.15em] text-zinc-500 transition-colors hover:text-zinc-100 sm:text-[0.64rem]"
              }
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
