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
      <div className="mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full border border-white/[0.09] bg-zinc-950/65 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:w-[calc(100%-3rem)] sm:px-5">
        <Link
          aria-label="Lumen Chen home"
          className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-100 transition-colors hover:text-white"
          href="/"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-[10px] tracking-[0.12em]">
            LC
          </span>
          <span className="hidden sm:inline">Lumen Chen</span>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-x-3 sm:gap-x-6">
          {links.map((link) => (
            <Link
              aria-current={active === link.page ? "page" : undefined}
              className={
                active === link.page
                  ? "text-xs font-medium text-zinc-100 sm:text-sm"
                  : "text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-100 sm:text-sm"
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
