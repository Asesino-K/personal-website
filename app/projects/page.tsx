import SiteNav from "@/components/SiteNav";

const tagClassName =
  "rounded-full border border-zinc-700/80 px-3 py-1 text-xs text-zinc-400";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="projects" />

      <section className="page-enter mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Selected Work
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Projects
        </h1>
        <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
          A selection of personal work and public areas of exploration.
        </p>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <article className="project-card rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Web Development
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Personal Portfolio Website
            </h2>
            <p className="mt-5 leading-7 text-zinc-400">
              A personal academic portfolio website built with Next.js,
              TypeScript, Tailwind CSS, and Cloudflare Workers.
            </p>
            <div className="mt-8 border-t border-zinc-800 pt-6 text-sm leading-7 text-zinc-500">
              <p className="mb-3 font-medium uppercase tracking-[0.18em] text-zinc-600">
                Focus
              </p>
              <p>Modern web development</p>
              <p>Serverless deployment</p>
              <p>Personal knowledge management</p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology tags">
              {["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers"].map(
                (tag) => (
                  <li className={tagClassName} key={tag}>
                    {tag}
                  </li>
                ),
              )}
            </ul>
          </article>

          <article className="project-card rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Planned Project
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              AI Research Brief
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              A planned project exploring AI-assisted information filtering,
              research updates summarization, and knowledge organization.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology tags">
              {["AI", "Knowledge Organization"].map((tag) => (
                <li className={tagClassName} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>

          <article className="project-card rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Technology Exploration
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              AI and Language Technology Exploration
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Personal exploration of artificial intelligence, large language
              models, and natural language processing technologies.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology tags">
              {["Python", "PyTorch", "Transformers"].map((tag) => (
                <li className={tagClassName} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>

          <article className="project-card rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 sm:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Technology Exploration
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Computational Creativity Exploration
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Exploring computational approaches for creative applications and
              intelligent systems.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology tags">
              {["Python", "Machine Learning"].map((tag) => (
                <li className={tagClassName} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
