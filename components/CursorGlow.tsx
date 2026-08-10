"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number | null = null;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const render = () => {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (Math.hypot(targetX - currentX, targetY - currentY) > 0.2) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        animationFrameId = null;
      }
    };

    const moveGlow = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = "1";

      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("mousemove", moveGlow, { passive: true });

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return <div aria-hidden="true" className="cursor-glow" ref={glowRef} />;
}
