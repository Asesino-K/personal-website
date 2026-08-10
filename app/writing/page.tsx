import Link from "next/link";

const topics = [
  "Artificial Intelligence",
  "Large Language Models",
  "Natural Language Processing",
];

export default function WritingPage() {
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
        <Link
          className="transition-colors hover:text-zinc-100"
          href="/projects"
        >
          Projects
        </Link>
        <Link className="text-zinc-100" href="/writing">
          Writing
        </Link>
        <Link className="transition-colors hover:text-zinc-100" href="/cv">
          CV
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
          Notes
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Writing
        </h1>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-10">
          <h2 className="text-2xl font-medium">Coming soon.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Technical notes and research reflections on:
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            {topics.map((topic) => (
              <li className="border-l border-zinc-700 pl-4" key={topic}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
