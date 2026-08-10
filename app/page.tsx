import Hero from "@/components/Hero";
import ObservatoryChapter from "@/components/ObservatoryChapter";
import SiteNav from "@/components/SiteNav";

const interests = [
  "Natural Language Processing",
  "Large Language Models",
  "Human-Centered AI",
  "Language and Cultural Understanding",
];

const skills = [
  ["Language", "Python · C++ · TypeScript"],
  ["Intelligence", "PyTorch · Transformers · Large Language Models"],
  ["Interface", "Next.js · React · Cloudflare"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-zinc-100">
      <SiteNav />
      <Hero />

      <div aria-hidden="true" className="chapter-progress"><span>01</span><i /><span>02</span><i /><span>03</span></div>

      <div className="observatory-shell">
        <ObservatoryChapter
          id="chapter-one"
          index="01"
          kicker="The Ocean of Language"
          title={<>The ocean of <span>language.</span></>}
        >
          <div className="chapter-grid mt-14 lg:mt-20">
            <p className="chapter-lead">
              Language is more than information. It carries context, culture, intent,
              and the traces of human interaction.
            </p>
            <div className="signal-list" id="research">
              {interests.map((interest, index) => (
                <div className="signal-row" key={interest}>
                  <span>0{index + 1}</span>
                  <p>{interest}</p>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
          <p className="chapter-note">
            As a Computer Science undergraduate, I am interested in building systems
            that better understand language, context, and human interaction.
          </p>
        </ObservatoryChapter>

        <ObservatoryChapter
          id="about"
          className="chapter-intelligence"
          index="02"
          kicker="Building Intelligence"
          title={<>Building <span>intelligence.</span></>}
        >
          <div className="intelligence-stage mt-14 lg:mt-20">
            <div className="intelligence-orbit" aria-hidden="true"><span /></div>
            <div className="relative z-10 max-w-xl">
              <p className="chapter-lead">
                I explore intelligent systems through the lens of language and people:
                what they understand, where context matters, and how technology can
                remain human-scale.
              </p>
              <div className="education-line">
                <p>Education</p>
                <div><strong>Zhejiang Sci-Tech University</strong><span>Bachelor of Computer Science and Technology</span></div>
              </div>
            </div>
            <div className="skill-signal">
              {skills.map(([label, value]) => (
                <div key={label}><span>{label}</span><p>{value}</p></div>
              ))}
            </div>
          </div>
        </ObservatoryChapter>

        <ObservatoryChapter
          id="writing"
          index="03"
          kicker="Thinking in Public"
          title={<>Thinking in <span>public.</span></>}
        >
          <div className="chapter-grid mt-14 lg:mt-20">
            <p className="chapter-lead">
              Public work is a way to turn technical curiosity into a navigable
              surface: careful, useful, and made to be explored.
            </p>
            <a className="featured-project" href="/projects" id="projects">
              <span>Selected direction · Planned project</span>
              <h3>AI Research Brief</h3>
              <p>
                AI and computer science information filtering, research updates
                summarization, and knowledge organization.
              </p>
              <i aria-hidden="true">Explore projects ↗</i>
            </a>
          </div>
        </ObservatoryChapter>

        <footer className="observatory-footer" id="contact">
          <div><p>Beyond the surface</p><h2>Let&apos;s stay in touch.</h2></div>
          <div className="footer-links">
            <a href="https://github.com/Asesino-K" rel="noreferrer" target="_blank">GitHub</a>
            <a href="/cv.pdf">CV</a>
            <a href="mailto:chenyitong448@gmail.com">Email</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
