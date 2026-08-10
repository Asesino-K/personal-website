import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-end gap-x-6 gap-y-3 border-b border-zinc-900 px-6 py-6 text-sm text-zinc-400 sm:px-10 lg:px-16"
      >
        <Link className="transition-colors hover:text-zinc-100" href="/">
          Home
        </Link>
        <Link
          className="transition-colors hover:text-zinc-100"
          href="/research"
        >
          Research
        </Link>
        <Link className="text-zinc-100" href="/projects">
          Projects
        </Link>
        <Link
          className="transition-colors hover:text-zinc-100"
          href="/writing"
        >
          Writing
        </Link>
        <Link className="transition-colors hover:text-zinc-100" href="/cv">
          CV
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
          Selected Work
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Projects
        </h1>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">
              Personal Portfolio Website
            </h2>
            <p className="mt-5 leading-7 text-zinc-400">
              A personal academic website built with:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Cloudflare Workers</li>
            </ul>
            <div className="mt-8 border-t border-zinc-800 pt-6 text-sm leading-7 text-zinc-500">
              <p>Full-stack web development</p>
              <p>Serverless deployment</p>
              <p>Custom domain</p>
            </div>
          </article>

          <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                AI Research Brief
              </h2>
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                Planned Project
              </span>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              A planned project exploring AI-assisted information filtering,
              research updates summarization, and knowledge organization.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
