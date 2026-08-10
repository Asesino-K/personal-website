export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Computer Science · NLP · LLM · Human-Centered AI
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Lumen Chen
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Computer Science undergraduate focused on natural language processing,
          large language models, and human-centered AI.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#research"
            className="rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-white"
          >
            View Research
          </a>

          <a
            href="#projects"
            className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            View Projects
          </a>
        </div>

        <div className="mt-24 grid gap-14 border-t border-zinc-800 pt-12 md:grid-cols-2">
          <section id="about">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
              About
            </p>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              I am a Computer Science undergraduate interested in natural
              language processing, large language models, and human-centered AI.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              My interests focus on building intelligent systems that better
              understand language, context, and human interaction.
            </p>
          </section>

          <section id="research">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
              Research
            </p>

            <h2 className="text-2xl font-medium">Research Interests</h2>

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

        <div className="mt-20 grid gap-14 border-t border-zinc-800 pt-12 md:grid-cols-2">
          <section id="education">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
              Education
            </p>

            <h2 className="text-2xl font-medium">
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

        <section
          id="projects"
          className="mt-20 border-t border-zinc-800 pt-12"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
            Selected Projects
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-xl font-medium">
                AI Research Brief
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                A planned personal project focused on AI and computer science
                information filtering, research updates summarization, and
                knowledge organization.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 border-t border-zinc-800 pt-12">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
            Contact
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-zinc-400">
            <a
              href="https://github.com/Asesino-K"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href="/cv.pdf"
              className="transition-colors hover:text-zinc-100"
            >
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
      </section>
    </main>
  );
}
