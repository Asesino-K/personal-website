import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav />

      <div className="page-enter">
        <section className="relative isolate mx-auto flex min-h-[82svh] w-full max-w-6xl flex-col justify-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 h-80 w-[min(52rem,100vw)] -translate-x-1/2 rounded-full bg-zinc-100/[0.035] blur-3xl"
          />
          <p className="hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
            Computer Science · NLP · LLM · Human-Centered AI
          </p>

          <h1 className="hero-name max-w-5xl text-6xl font-semibold tracking-[-0.055em] text-zinc-50 sm:text-8xl lg:text-[7.5rem]">
            Lumen Chen
          </h1>

          <p className="hero-description mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Computer Science undergraduate focused on natural language processing,
            large language models, and human-centered AI.
          </p>

          <div className="hero-actions mt-11 flex flex-wrap gap-3">
            <a
              href="#research"
              className="button-primary rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-white"
            >
              View Research
            </a>
            <a
              href="#projects"
              className="button-secondary rounded-full border border-zinc-700 bg-zinc-900/30 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900/80"
            >
              View Projects
            </a>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10 sm:pb-32 lg:px-16">
          <Reveal>
            <div className="grid gap-14 border-t border-zinc-800/90 pt-12 md:grid-cols-2">
              <section id="about">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                  01 / About
                </p>
                <p className="max-w-xl leading-7 text-zinc-400">
                  I am a Computer Science undergraduate interested in natural
                  language processing, large language models, and human-centered AI.
                </p>
                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  My interests focus on building intelligent systems that better
                  understand language, context, and human interaction.
                </p>
              </section>

              <section id="research">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                  02 / Research
                </p>
                <h2 className="text-2xl font-medium tracking-tight text-zinc-100">
                  Research Interests
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  Natural Language Processing, Large Language Models, Human-Centered
                  AI, Language and Cultural Understanding.
                </p>
                <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                  As an undergraduate, I am exploring how intelligent systems can
                  support meaningful and accessible human experiences with technology.
                </p>
              </section>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-zinc-800/90 pt-12">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
              03 / Education &amp; Skills
            </p>
            <div className="grid gap-14 md:grid-cols-2">
              <section id="education">
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Education
                </p>
                <h2 className="text-2xl font-medium tracking-tight">
                  Zhejiang Sci-Tech University
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">
                  Bachelor of Computer Science and Technology
                </p>
              </section>

              <section id="skills">
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Skills
                </p>
                <div className="space-y-3 leading-7 text-zinc-400">
                  <p>
                    <span className="font-medium text-zinc-200">Programming:</span>{" "}
                    Python, C++, TypeScript
                  </p>
                  <p>
                    <span className="font-medium text-zinc-200">AI:</span> PyTorch,
                    Transformers, Large Language Models
                  </p>
                  <p>
                    <span className="font-medium text-zinc-200">Web:</span> Next.js,
                    React, Cloudflare
                  </p>
                </div>
              </section>
            </div>
          </Reveal>

          <Reveal className="mt-20 border-t border-zinc-800/90 pt-12">
            <section id="projects">
              <p className="mb-8 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                04 / Selected Projects
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="project-card rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Planned Project
                  </p>
                  <h3 className="mt-4 text-xl font-medium tracking-tight text-zinc-100">
                    AI Research Brief
                  </h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    A planned personal project focused on AI and computer science
                    information filtering, research updates summarization, and
                    knowledge organization.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology tags">
                    <li className="rounded-full border border-zinc-700/80 px-3 py-1 text-xs text-zinc-400">
                      AI
                    </li>
                    <li className="rounded-full border border-zinc-700/80 px-3 py-1 text-xs text-zinc-400">
                      Knowledge Organization
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </Reveal>

          <Reveal className="mt-20 border-t border-zinc-800/90 pt-12">
            <section>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                05 / Contact
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
                <a
                  href="https://github.com/Asesino-K"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-zinc-100"
                >
                  GitHub
                </a>
                <a href="/cv.pdf" className="transition-colors hover:text-zinc-100">
                  CV
                </a>
                <a
                  href="mailto:chenyitong448@gmail.com"
                  className="transition-colors hover:text-zinc-100"
                >
                  Email
                </a>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
