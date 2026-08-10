import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
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

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-36 sm:px-10 sm:pb-40 sm:pt-44 lg:px-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Research Interests
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-zinc-50 sm:text-7xl lg:text-8xl">
            Understanding language in human context.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            作为本科生，目前关注如何构建能够理解语言、上下文和人类交互的智能系统。
          </p>
        </Reveal>

        <Stagger className="mt-24 grid gap-3 sm:grid-cols-2">
          {interests.map((interest, index) => (
            <StaggerItem key={interest}>
              <article className="surface-card min-h-56 rounded-3xl p-8 sm:p-10">
                <p className="text-xs font-medium tracking-[0.2em] text-zinc-500">0{index + 1}</p>
                <h2 className="mt-16 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] text-zinc-100">
                  {interest}
                </h2>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </main>
  );
}
