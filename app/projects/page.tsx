import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";

const projects = [
  {
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A personal academic portfolio website built with Next.js, TypeScript, Tailwind CSS, and Cloudflare Workers.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
  },
  {
    category: "Planned Project",
    title: "AI Research Brief",
    description:
      "A planned project exploring AI-assisted information filtering, research updates summarization, and knowledge organization.",
    tags: ["AI", "Knowledge Organization"],
  },
  {
    category: "Technology Exploration",
    title: "AI and Language Technology Exploration",
    description:
      "Personal exploration of artificial intelligence, large language models, and natural language processing technologies.",
    tags: ["Python", "PyTorch", "Transformers"],
  },
  {
    category: "Technology Exploration",
    title: "Computational Creativity Exploration",
    description:
      "Exploring computational approaches for creative applications and intelligent systems.",
    tags: ["Python", "Machine Learning"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="projects" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-36 sm:px-10 sm:pb-40 sm:pt-44 lg:px-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Selected Work
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] text-zinc-50 sm:text-7xl lg:text-8xl">
            Work in progress. Ideas in motion.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            A considered collection of personal work and public areas of exploration.
          </p>
        </Reveal>

        <Stagger className="mt-24 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <article className="project-card surface-card flex min-h-80 flex-col rounded-3xl p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                    {project.category}
                  </p>
                  <span className="text-xs text-zinc-600">0{index + 1}</span>
                </div>
                <h2 className="mt-auto pt-16 text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology tags">
                  {project.tags.map((tag) => (
                    <li
                      className="rounded-full border border-white/[0.12] px-3 py-1.5 text-xs text-zinc-400"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </main>
  );
}
