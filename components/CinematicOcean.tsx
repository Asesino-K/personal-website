"use client";

import { useEffect, useRef } from "react";

type Speck = { x: number; y: number; r: number; vx: number; vy: number; alpha: number };

export default function CinematicOcean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame: number | null = null;
    let specks: Speck[] = [];
    let pointer = { x: -Infinity, y: -Infinity };
    let last = performance.now();

    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = innerWidth < 700 ? 20 : Math.min(76, Math.round((innerWidth * innerHeight) / 26000));
      specks = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth, y: Math.random() * innerHeight,
        r: 0.45 + Math.random() * 1.35, vx: (Math.random() - 0.5) * 0.035,
        vy: -0.012 - Math.random() * 0.035, alpha: 0.025 + Math.random() * 0.09,
      }));
    };

    const move = (event: MouseEvent) => { pointer = { x: event.clientX, y: event.clientY }; };
    const render = (time: number) => {
      const delta = Math.min(time - last, 48); last = time;
      context.clearRect(0, 0, innerWidth, innerHeight);
      for (const speck of specks) {
        const dx = speck.x - pointer.x; const dy = speck.y - pointer.y; const distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < 220) { const force = (1 - distance / 220) * delta * 0.065; speck.x += (dx / distance) * force; speck.y += (dy / distance) * force; }
        speck.x += speck.vx * delta; speck.y += speck.vy * delta;
        if (speck.x < -4) speck.x = innerWidth + 4; if (speck.x > innerWidth + 4) speck.x = -4;
        if (speck.y < -4) speck.y = innerHeight + 4; if (speck.y > innerHeight + 4) speck.y = -4;
        context.beginPath(); context.arc(speck.x, speck.y, speck.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(217, 243, 255, ${speck.alpha})`; context.fill();
      }
      frame = requestAnimationFrame(render);
    };
    resize(); addEventListener("resize", resize, { passive: true }); addEventListener("mousemove", move, { passive: true }); frame = requestAnimationFrame(render);
    return () => { if (frame !== null) cancelAnimationFrame(frame); removeEventListener("resize", resize); removeEventListener("mousemove", move); };
  }, []);

  return <><div aria-hidden="true" className="cinematic-ocean"><span className="ocean-ray ray-a" /><span className="ocean-ray ray-b" /><span className="ocean-fog fog-a" /><span className="ocean-fog fog-b" /><span className="ocean-caustic" /></div><canvas aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" ref={canvasRef} /></>;
}
