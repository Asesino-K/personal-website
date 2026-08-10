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

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number | null = null;
    let context: CanvasRenderingContext2D | null = null;
    let particles: Particle[] = [];
    let pointer = { x: -Infinity, y: -Infinity };
    let lastTime = performance.now();

    const createParticles = () => {
      const count = Math.min(42, Math.max(20, Math.round((window.innerWidth * window.innerHeight) / 46000)));
      particles = Array.from({ length: count }, () => ({
        opacity: 0.045 + Math.random() * 0.075,
        size: 0.8 + Math.random() * 1.5,
        velocityX: (Math.random() - 0.5) * 0.07,
        velocityY: -0.025 - Math.random() * 0.07,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context = canvas.getContext("2d");
      context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const movePointer = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
    };

    const render = (time: number) => {
      const delta = Math.min(time - lastTime, 48);
      lastTime = time;

      if (!context) {
        animationFrameId = null;
        return;
      }

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particles) {
        const distanceX = particle.x - pointer.x;
        const distanceY = particle.y - pointer.y;
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < 180 && distance > 0) {
          const influence = (1 - distance / 180) * 0.12;
          particle.x += (distanceX / distance) * influence * delta;
          particle.y += (distanceY / distance) * influence * delta;
        }

        particle.x += particle.velocityX * delta;
        particle.y += particle.velocityY * delta;

        if (particle.x < -8) particle.x = window.innerWidth + 8;
        if (particle.x > window.innerWidth + 8) particle.x = -8;
        if (particle.y < -8) particle.y = window.innerHeight + 8;
        if (particle.y > window.innerHeight + 8) particle.y = -8;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(196, 215, 230, ${particle.opacity})`;
        context.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("mousemove", movePointer, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", movePointer);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" ref={canvasRef} />;
}
