import Hero from "@/components/Hero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";

const skills = [
  ["Programming", "Python, C++, TypeScript"],
  ["AI", "PyTorch, Transformers, Large Language Models"],
  ["Web", "Next.js, React, Cloudflare"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav />
      <Hero />

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 sm:px-10 sm:pb-40 lg:px-16">
        <Reveal className="grid gap-8 py-24 sm:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            01 — Introduction
          </p>
          <div>
            <p className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] text-zinc-100 sm:text-5xl">
              Building a perspective on language, intelligence, and human interaction.
            </p>
            <div className="mt-10 grid max-w-2xl gap-5 text-base leading-7 text-zinc-400 sm:grid-cols-2">
              <p>
                I am a Computer Science undergraduate interested in natural language
                processing, large language models, and human-centered AI.
              </p>
              <p>
                My interests focus on building intelligent systems that better
                understand language, context, and human interaction.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="border-t border-white/[0.09] py-24 sm:py-32" delay={0.05}>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                02 — Research
              </p>
              <h2
                id="research"
                className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-zinc-50 sm:text-6xl"
              >
                Research interests, presented with clarity.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-zinc-400">
              An undergraduate perspective on intelligent systems and meaningful
              human experiences with technology.
            </p>
          </div>

          <Stagger className="mt-14 grid gap-3 sm:grid-cols-2">
            {[
              "Natural Language Processing",
              "Large Language Models",
              "Human-Centered AI",
              "Language and Cultural Understanding",
            ].map((interest, index) => (
              <StaggerItem key={interest}>
                <article className="surface-card rounded-3xl p-7 sm:p-8">
                  <p className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                    0{index + 1}
                  </p>
                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                    {interest}
                  </h3>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <Reveal className="border-t border-white/[0.09] py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                03 — Foundation
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-zinc-50 sm:text-5xl">
                Education and technical range.
              </h2>
            </div>
            <div className="surface-card rounded-3xl p-7 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                Education
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em]">
                Zhejiang Sci-Tech University
              </h3>
              <p className="mt-3 text-zinc-400">
                Bachelor of Computer Science and Technology
              </p>
              <div className="mt-10 space-y-6 border-t border-white/[0.09] pt-7">
                {skills.map(([label, value]) => (
                  <div className="grid gap-2 sm:grid-cols-[120px_1fr]" key={label}>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {label}
                    </p>
                    <p className="leading-7 text-zinc-300">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="border-t border-white/[0.09] py-24 sm:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                04 — Selected Project
              </p>
              <h2
                id="projects"
                className="mt-5 text-4xl font-medium tracking-[-0.05em] text-zinc-50 sm:text-6xl"
              >
                Ideas made navigable.
              </h2>
            </div>
            <a
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              href="/projects"
            >
              Explore all projects →
            </a>
          </div>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-[1.4fr_0.8fr]">
            <StaggerItem>
              <article className="project-card surface-card h-full rounded-3xl p-8 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                  Planned Project
                </p>
                <h3 className="mt-14 text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">
                  AI Research Brief
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">
                  A planned personal project focused on AI and computer science
                  information filtering, research updates summarization, and
                  knowledge organization.
                </p>
                <div className="mt-10 flex flex-wrap gap-2">
                  {["AI", "Knowledge Organization"].map((tag) => (
                    <span
                      className="rounded-full border border-white/[0.12] px-3 py-1.5 text-xs text-zinc-400"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
            <StaggerItem>
              <div className="surface-card flex h-full flex-col justify-between rounded-3xl p-8 sm:p-10">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                  A considered practice
                </p>
                <p className="mt-20 text-2xl font-medium leading-tight tracking-[-0.04em] text-zinc-200">
                  Curating information into useful, human-scale knowledge.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </Reveal>

        <Reveal className="border-t border-white/[0.09] pt-20 sm:pt-24">
          <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                05 — Contact
              </p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Let&apos;s stay in touch.
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
              <a
                className="transition-colors hover:text-zinc-100"
                href="https://github.com/Asesino-K"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a className="transition-colors hover:text-zinc-100" href="/cv.pdf">
                CV
              </a>
              <a
                className="transition-colors hover:text-zinc-100"
                href="mailto:chenyitong448@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
