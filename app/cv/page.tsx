import SiteNav from "@/components/SiteNav";

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
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="cv" />

      <section className="page-enter mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
              Curriculum Vitae
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Curriculum Vitae
            </h1>
          </div>
          <a
            className="button-secondary rounded-full border border-zinc-700 bg-zinc-900/30 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900/80 hover:text-white"
            href="/cv.pdf"
          >
            Download CV
          </a>
        </div>

        <div className="mt-16 divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/35 px-7 sm:px-10">
          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-medium tracking-tight">
                Zhejiang Sci-Tech University
              </h3>
              <p className="mt-2 leading-7 text-zinc-400">
                Bachelor of Computer Science and Technology
              </p>
            </div>
          </section>

          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Research Interests
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>NLP</li>
              <li>LLM</li>
              <li>Human-Centered AI</li>
            </ul>
          </section>

          <section className="grid gap-5 py-9 md:grid-cols-[220px_1fr]">
            <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Technical Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <li
                  className="rounded-full border border-zinc-700/80 px-4 py-2 text-sm text-zinc-300"
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
