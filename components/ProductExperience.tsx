"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const interests = ["Natural Language Processing", "Large Language Models", "Human-Centered AI", "Language and Cultural Understanding"];

export default function ProductExperience() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const hero = element.querySelector(".product-hero");
      const eye = element.querySelector(".eye-object");
      const headline = element.querySelector(".hero-headline");
      if (hero && eye && headline) {
        gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "+=140%", scrub: 0.8, pin: true } })
          .fromTo(eye, { filter: "blur(20px)", opacity: 0, scale: 0.8 }, { filter: "blur(0px)", opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" })
          .fromTo(headline, { filter: "blur(14px)", opacity: 0, y: 44 }, { filter: "blur(0px)", opacity: 1, y: 0, duration: 0.32, ease: "power2.out" }, 0.12)
          .to(eye, { opacity: 0.22, scale: 1.16, x: 45, y: -35, duration: 0.45, ease: "none" })
          .to(headline, { opacity: 0.14, y: -90, duration: 0.35, ease: "none" }, "<");
      }
      gsap.utils.toArray<HTMLElement>("[data-scene]").forEach((scene) => {
        const copy = scene.querySelector("[data-scene-copy]");
        const visual = scene.querySelector("[data-scene-visual]");
        gsap.fromTo(copy, { filter: "blur(20px)", opacity: 0, y: 40 }, { filter: "blur(0px)", opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: scene, start: "top 68%" } });
        if (visual) gsap.fromTo(visual, { opacity: 0.35, scale: 0.9 }, { opacity: 1, scale: 1.06, ease: "none", scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: 0.9 } });
      });
    }, element);
    return () => context.revert();
  }, []);

  return (
    <main className="product-experience" ref={root}>
      <section className="product-hero">
        <div className="eye-object" aria-hidden="true"><div className="eye-rim" /><div className="eye-iris"><i /></div><div className="eye-glint" /></div>
        <div className="hero-headline"><p>LUMEN CHEN</p><h1>Building intelligence<br />that understands<br />language and humans.</h1><span>AI · LANGUAGE · HUMAN</span></div>
        <div className="scroll-cue">SCROLL TO EXPLORE <i>↓</i></div>
      </section>

      <section className="product-scene language-scene" data-scene id="language">
        <div className="scene-wave" data-scene-visual aria-hidden="true"><span /><span /><span /></div>
        <div className="scene-copy" data-scene-copy><p className="scene-label">01 / LANGUAGE</p><h2>LANGUAGE</h2><p className="scene-statement">Meaning.<br />Context.<br />Human experience.</p><div className="interest-line">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div></div>
      </section>

      <section className="product-scene intelligence-scene" data-scene id="intelligence">
        <div className="intelligence-visual" data-scene-visual aria-hidden="true"><div /><div /><div /></div>
        <div className="scene-copy intelligence-copy" data-scene-copy><p className="scene-label">02 / INTELLIGENCE</p><h2>INTELLIGENCE</h2><p className="scene-statement">Systems that listen<br />before they respond.</p><div className="glass-spec"><span>AI Systems</span><span>Machine Learning</span><span>Human-Centered AI</span></div><a href="/projects">Explore projects <i>↗</i></a></div>
      </section>

      <section className="product-scene creation-scene" data-scene id="creation">
        <div className="creation-light" data-scene-visual aria-hidden="true" />
        <div className="scene-copy" data-scene-copy><p className="scene-label">03 / CREATION</p><h2>CREATION</h2><p className="scene-statement">Thinking in public.<br />Making ideas navigable.</p><p className="scene-detail">Technical notes and reflections on artificial intelligence, large language models, natural language processing, machine learning, and research papers.</p><a href="/writing">View writing <i>↗</i></a></div>
      </section>

      <section className="product-contact" id="contact"><p>04 / CONTACT</p><h2>Keep exploring.</h2><div><a href="https://github.com/Asesino-K" rel="noreferrer" target="_blank">GitHub</a><a href="/cv.pdf">CV</a><a href="mailto:chenyitong448@gmail.com">Email</a></div></section>
    </main>
  );
}
