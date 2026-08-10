import Link from "next/link";

const technicalSkills = [
  "Python",
  "C++",
  "TypeScript",
  "PyTorch",
  "Transformers",
  "Next.js",
];

export default function CvPage() {
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
        <Link
          className="transition-colors hover:text-zinc-100"
          href="/writing"
        >
          Writing
        </Link>
        <Link className="text-zinc-100" href="/cv">
          CV
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
              CV
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Curriculum Vitae
            </h1>
          </div>
          <a
            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            href="/cv.pdf"
          >
            Download CV
          </a>
        </div>

        <div className="mt-16 divide-y divide-zinc-800 border-y border-zinc-800">
          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-medium">Zhejiang Sci-Tech University</h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Bachelor of Computer Science and Technology
              </p>
            </div>
          </section>

          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
              Research Interests
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>NLP</li>
              <li>LLM</li>
              <li>Human-Centered AI</li>
            </ul>
          </section>

          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <li
                  className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
