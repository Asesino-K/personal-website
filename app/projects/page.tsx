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

        <Stagger className="mt-24 space-y-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <article className="project-showcase group relative overflow-hidden rounded-[2rem] px-7 py-10 sm:px-12 sm:py-14 lg:min-h-[30rem] lg:px-16 lg:py-16">
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Project · {project.category}
                  </p>
                  <span className="text-xl font-light text-[#7B2338]">0{index + 1}</span>
                </div>
                <div className="relative z-10 mt-20 max-w-3xl lg:mt-28">
                  <h2 className="text-4xl font-medium tracking-[-0.055em] text-zinc-100 sm:text-6xl lg:text-7xl">{project.title}</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{project.description}</p>
                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    {project.tags.map((tag) => <span className="liquid-tag" key={tag}>{tag}</span>)}
                    <span aria-hidden="true" className="ml-2 text-xl text-[#C7E8FF] transition-transform duration-500 group-hover:translate-x-2">↗</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </main>
  );
}
