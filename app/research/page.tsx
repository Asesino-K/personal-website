import SiteNav from "@/components/SiteNav";

const interests = [
  "Natural Language Processing",
  "Large Language Models",
  "Human-Centered AI",
  "Language and Cultural Understanding",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="research" />

      <section className="page-enter mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Research
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Research Interests
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
          作为本科生，目前关注如何构建能够理解语言、上下文和人类交互的智能系统。
        </p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {interests.map((interest) => (
            <article
              className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-7 sm:p-9"
              key={interest}
            >
              <h2 className="text-lg font-medium text-zinc-200">{interest}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
