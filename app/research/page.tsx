import Link from "next/link";

const interests = [
  "Natural Language Processing",
  "Large Language Models",
  "Human-Centered AI",
  "Language and Cultural Understanding",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-end gap-x-6 gap-y-3 border-b border-zinc-900 px-6 py-6 text-sm text-zinc-400 sm:px-10 lg:px-16"
      >
        <Link className="transition-colors hover:text-zinc-100" href="/">
          Home
        </Link>
        <Link className="text-zinc-100" href="/research">
          Research
        </Link>
        <Link
          className="transition-colors hover:text-zinc-100"
          href="/projects"
        >
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
          Research
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Research Interests
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
          作为本科生，目前关注如何构建能够理解语言、上下文和人类交互的智能系统。
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
          {interests.map((interest) => (
            <div className="bg-zinc-950 p-7 sm:p-9" key={interest}>
              <h2 className="text-lg font-medium text-zinc-200">{interest}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
