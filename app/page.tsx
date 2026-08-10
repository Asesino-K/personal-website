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

            <h2 className="text-2xl font-medium">
              Building toward research.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              I work on problems involving language, cultural context, model
              reasoning, and practical AI systems. This site documents my
              research, projects, and technical work.
            </p>
          </section>

          <section id="research">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
              Research
            </p>

            <h2 className="text-2xl font-medium">
              Chinese Meme Understanding
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Current work explores cultural-pragmatic reasoning, structured
              supervision, and interpretable modeling for Chinese internet memes.
            </p>
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
                H-CRAL
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                Research pipeline for structured Chinese meme understanding and
                pragmatic reasoning.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-xl font-medium">
                AI Research Brief
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                A planned information product for filtering AI and computer
                science research updates into concise, useful briefings.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 border-t border-zinc-800 pt-12">
          <p className="mb-3 text-sm uppercase tracking-[0.22em] text-zinc-500">
            Contact
          </p>

          <p className="text-zinc-400">
            GitHub, CV, email, and research links will be added here.
          </p>
        </section>
      </section>
    </main>
  );
}