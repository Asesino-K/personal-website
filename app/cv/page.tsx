import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";

const technicalSkills = [
  "Python",
  "C++",
  "TypeScript",
  "PyTorch",
  "Transformers",
  "Next.js",
];

export default function CvPage() {
  return (
    <main className="min-h-screen bg-transparent text-zinc-100">
      <SiteNav active="cv" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-36 sm:px-10 sm:pb-40 sm:pt-44 lg:px-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                Curriculum Vitae
              </p>
              <h1 className="mt-6 text-5xl font-medium tracking-[-0.06em] text-zinc-50 sm:text-7xl">
                A concise profile.
              </h1>
            </div>
            <a
              className="rounded-full border border-white/[0.14] bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.11] hover:text-white"
              href="/cv.pdf"
            >
              Download CV
            </a>
          </div>
        </Reveal>

        <Stagger className="mt-24 space-y-4">
          <StaggerItem>
            <section className="surface-card grid gap-7 rounded-3xl p-8 sm:grid-cols-[0.65fr_1.35fr] sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Education
              </p>
              <div>
                <h2 className="text-3xl font-medium tracking-[-0.04em] text-zinc-100">
                  Zhejiang Sci-Tech University
                </h2>
                <p className="mt-3 text-lg text-zinc-400">
                  Bachelor of Computer Science and Technology
                </p>
              </div>
            </section>
          </StaggerItem>

          <StaggerItem>
            <section className="surface-card grid gap-7 rounded-3xl p-8 sm:grid-cols-[0.65fr_1.35fr] sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-3">
                {["NLP", "LLM", "Human-Centered AI"].map((interest) => (
                  <span
                    className="rounded-full border border-white/[0.12] px-4 py-2 text-sm text-zinc-300"
                    key={interest}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </StaggerItem>

          <StaggerItem>
            <section className="surface-card grid gap-7 rounded-3xl p-8 sm:grid-cols-[0.65fr_1.35fr] sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Technical Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <span
                    className="rounded-full border border-white/[0.12] px-4 py-2 text-sm text-zinc-300"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </StaggerItem>
        </Stagger>
      </div>
    </main>
  );
}
