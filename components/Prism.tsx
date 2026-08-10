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
        <linearGradient id="prism-face-one" x1="70" x2="322" y1="48" y2="360">
          <stop stopColor="#DCE7F0" stopOpacity="0.46" />
          <stop offset="0.48" stopColor="#4A7796" stopOpacity="0.2" />
          <stop offset="1" stopColor="#8B7AA8" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="prism-face-two" x1="102" x2="330" y1="84" y2="320">
          <stop stopColor="#B7D2E4" stopOpacity="0.28" />
          <stop offset="1" stopColor="#102C44" stopOpacity="0.08" />
        </linearGradient>
        <filter id="prism-soften" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>
      <g filter="url(#prism-soften)">
        <path d="M210 36 366 314 54 314 210 36Z" fill="url(#prism-face-one)" />
        <path d="m210 36 156 278-156-76V36Z" fill="url(#prism-face-two)" />
        <path d="m210 36-156 278 156-76V36Z" fill="#D7E4EE" fillOpacity="0.11" />
        <path d="m54 314 156-76 156 76" stroke="#D7E4EE" strokeOpacity="0.34" />
        <path d="M210 36v202" stroke="#D7E4EE" strokeOpacity="0.28" />
      </g>
    </svg>
  );
}
