import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
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

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-36 sm:px-10 sm:pb-40 sm:pt-44 lg:px-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Writing
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-zinc-50 sm:text-7xl lg:text-8xl">
            Notes for thinking in public.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Technical notes and reflections on ideas that shape intelligent systems.
          </p>
        </Reveal>

        <Reveal className="mt-24">
          <div className="surface-card rounded-[2rem] p-8 sm:p-12">
            <div className="flex flex-col justify-between gap-10 border-b border-white/[0.09] pb-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                  Areas of Focus
                </p>
                <p className="mt-4 max-w-lg text-2xl font-medium tracking-[-0.03em] text-zinc-200">
                  Technical notes and reflections on:
                </p>
              </div>
              <p className="text-sm text-zinc-500">Coming soon.</p>
            </div>

            <Stagger className="mt-4 divide-y divide-white/[0.08]">
              {topics.map((topic, index) => (
                <StaggerItem key={topic}>
                  <div className="flex items-center justify-between gap-6 py-5 sm:py-6">
                    <p className="text-xl font-medium tracking-[-0.03em] text-zinc-200 sm:text-2xl">
                      {topic}
                    </p>
                    <span className="text-xs text-zinc-600">0{index + 1}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
