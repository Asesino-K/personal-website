"use client";

import { useEffect, useRef } from "react";

type Particle = {
  opacity: number;
  size: number;
  velocityX: number;
  velocityY: number;
  x: number;
  y: number;
};

const MAX_PIXEL_RATIO = 2;

export default function OceanParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrameId: number | null = null;
    let context: CanvasRenderingContext2D | null = null;
    let particles: Particle[] = [];
    let pointer = { x: -Infinity, y: -Infinity };
    let lastTime = performance.now();

    const createParticles = () => {
      const count = innerWidth < 640 ? 14 : Math.min(46, Math.max(22, Math.round((innerWidth * innerHeight) / 42000)));
      particles = Array.from({ length: count }, () => ({
        opacity: 0.035 + Math.random() * 0.075,
        size: 0.7 + Math.random() * 1.6,
        velocityX: (Math.random() - 0.5) * 0.045,
        velocityY: -0.015 - Math.random() * 0.045,
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
      }));
    };

    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, MAX_PIXEL_RATIO);
      canvas.width = Math.round(innerWidth * ratio);
      canvas.height = Math.round(innerHeight * ratio);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context = canvas.getContext("2d");
      context?.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const onPointerMove = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const render = (time: number) => {
      const delta = Math.min(time - lastTime, 48);
      lastTime = time;
      const drawingContext = context;
      if (!drawingContext) return;
      drawingContext.clearRect(0, 0, innerWidth, innerHeight);

      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < 220) {
          const flow = (1 - distance / 220) * 0.085 * delta;
          particle.x += (dx / distance) * flow;
          particle.y += (dy / distance) * flow;
        }
        particle.x += particle.velocityX * delta;
        particle.y += particle.velocityY * delta;
        if (particle.x < -10) particle.x = innerWidth + 10;
        if (particle.x > innerWidth + 10) particle.x = -10;
        if (particle.y < -10) particle.y = innerHeight + 10;
        if (particle.y > innerHeight + 10) particle.y = -10;

        drawingContext.beginPath();
        drawingContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(199, 232, 255, ${particle.opacity})`;
        drawingContext.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    addEventListener("mousemove", onPointerMove, { passive: true });
    addEventListener("resize", resize, { passive: true });
    animationFrameId = requestAnimationFrame(render);
    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      removeEventListener("mousemove", onPointerMove);
      removeEventListener("resize", resize);
    };
  }, []);

  return <canvas aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" ref={canvasRef} />;
}
