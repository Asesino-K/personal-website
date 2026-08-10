import Link from "next/link";

type ActivePage = "research" | "projects" | "writing" | "cv";

const links: Array<{ href: string; label: string; page: ActivePage }> = [
  { href: "/research", label: "Research", page: "research" },
  { href: "/projects", label: "Projects", page: "projects" },
  { href: "/writing", label: "Writing", page: "writing" },
  { href: "/cv", label: "CV", page: "cv" },
];

export default function SiteNav({ active }: { active?: ActivePage }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-zinc-950/45 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16"
      >
        <Link
          aria-label="Lumen Chen home"
          className="text-sm font-semibold tracking-[0.22em] text-zinc-100 transition-colors hover:text-white"
          href="/"
        >
          LC
        </Link>

        <div className="flex items-center gap-x-4 text-xs font-medium text-zinc-500 sm:gap-x-6 sm:text-sm">
          {links.map((link) => (
            <Link
              aria-current={active === link.page ? "page" : undefined}
              className={
                active === link.page
                  ? "text-zinc-100"
                  : "transition-colors hover:text-zinc-100"
              }
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
