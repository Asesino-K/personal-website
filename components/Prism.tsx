"use client";

import { useEffect, useRef } from "react";

export default function Prism() {
  const prismRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prism = prismRef.current;
    if (!prism || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const render = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      prism.style.setProperty("--prism-x", `${currentX}px`);
      prism.style.setProperty("--prism-y", `${currentY}px`);
      frame = requestAnimationFrame(render);
    };
    const onMove = (event: MouseEvent) => {
      targetX = (event.clientX / innerWidth - 0.5) * 18;
      targetY = (event.clientY / innerHeight - 0.5) * 14;
    };
    addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <svg
      aria-hidden="true"
      className="prism-element"
      fill="none"
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      ref={prismRef}
    >
      <defs>
        <linearGradient id="prism-face-one" x1="72" x2="340" y1="64" y2="348">
          <stop stopColor="#D9F3FF" stopOpacity="0.5" />
          <stop offset="0.44" stopColor="#4A7796" stopOpacity="0.2" />
          <stop offset="1" stopColor="#9C83C6" stopOpacity="0.32" />
        </linearGradient>
        <linearGradient id="prism-face-two" x1="104" x2="356" y1="80" y2="316">
          <stop stopColor="#B7D2E4" stopOpacity="0.34" />
          <stop offset="1" stopColor="#071B33" stopOpacity="0.08" />
        </linearGradient>
        <filter id="prism-soften" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      <g filter="url(#prism-soften)">
        <path d="m132 62 158 44 72 148-158 105-118-126 46-171Z" fill="url(#prism-face-one)" />
        <path d="m132 62 158 44-86 127-118 0 46-171Z" fill="#D9F3FF" fillOpacity="0.13" />
        <path d="m290 106 72 148-158 105V233l86-127Z" fill="url(#prism-face-two)" />
        <path d="m86 233 118 0v126L86 233Z" fill="#6B1E32" fillOpacity="0.13" />
        <path d="m132 62 158 44 72 148-158 105-118-126 46-171Z" stroke="#D9F3FF" strokeOpacity="0.44" />
        <path d="M86 233h118m0 0 86-127m-86 127 158 21M132 62l72 171" stroke="#D9F3FF" strokeOpacity="0.3" />
        <path d="m55 130 101-36m110 21 101-25m-18 216 55 20" stroke="#9C83C6" strokeOpacity="0.2" />
      </g>
    </svg>
  );
}
