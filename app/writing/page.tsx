import SiteNav from "@/components/SiteNav";

const topics = [
  "Large Language Models",
  "Natural Language Processing",
  "Machine Learning",
  "Artificial Intelligence Systems",
  "Research Papers",
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="writing" />

      <section className="page-enter mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Notes
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Writing
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
          Technical notes and reflections on ideas in artificial intelligence.
        </p>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-7 sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            Areas of Focus
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Technical notes and reflections on:
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <li
                className="border-l border-zinc-700 py-1 pl-4 text-zinc-300"
                key={topic}
              >
                {topic}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-2xl font-medium tracking-tight">Coming soon.</p>
        </div>
      </section>
    </main>
  );
}
