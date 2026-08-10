"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  age: number;
  maxRadius: number;
  x: number;
  y: number;
};

const RIPPLE_DURATION = 4400;
const MAX_RIPPLES = 12;

export default function MouseRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrameId: number | null = null;
    let lastFrameTime = performance.now();
    let lastPointer = { x: -Infinity, y: -Infinity, time: 0 };
    let ripples: Ripple[] = [];
    let context: CanvasRenderingContext2D | null = null;

    if (reducedMotion.matches) {
      return;
    }

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context = canvas.getContext("2d");
      context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const addRipple = (event: MouseEvent) => {
      const now = performance.now();
      const distance = Math.hypot(
        event.clientX - lastPointer.x,
        event.clientY - lastPointer.y,
      );

      if (distance < 24 && now - lastPointer.time < 100) {
        return;
      }

      lastPointer = { x: event.clientX, y: event.clientY, time: now };
      ripples.push({
        age: 0,
        maxRadius: 280 + Math.min(distance, 70),
        x: event.clientX,
        y: event.clientY,
      });

      if (ripples.length > MAX_RIPPLES) {
        ripples = ripples.slice(-MAX_RIPPLES);
      }

      if (animationFrameId === null) {
        lastFrameTime = now;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const render = (time: number) => {
      const delta = Math.min(time - lastFrameTime, 64);
      lastFrameTime = time;

      if (!context) {
        animationFrameId = null;
        return;
      }

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const ripple of ripples) {
        ripple.age += delta;

        if (ripple.age >= RIPPLE_DURATION) {
          continue;
        }

        const progress = ripple.age / RIPPLE_DURATION;
        const fade = (1 - progress) ** 2;

        const coreFade = Math.max(0, 1 - progress * 4.5);
        if (coreFade > 0) {
          const glow = context.createRadialGradient(
            ripple.x,
            ripple.y,
            0,
            ripple.x,
            ripple.y,
            18 + progress * 14,
          );
          glow.addColorStop(0, `rgba(226, 237, 246, ${coreFade * 0.18})`);
          glow.addColorStop(1, "rgba(162, 194, 219, 0)");
          context.beginPath();
          context.arc(ripple.x, ripple.y, 18 + progress * 14, 0, Math.PI * 2);
          context.fillStyle = glow;
          context.fill();
          context.beginPath();
          context.arc(ripple.x, ripple.y, 1.4 + progress * 2.6, 0, Math.PI * 2);
          context.fillStyle = `rgba(229, 238, 247, ${coreFade * 0.22})`;
          context.fill();
        }

        for (let layer = 0; layer < 5; layer += 1) {
          const delay = layer * 0.09;
          const layerProgress = Math.max(0, progress - delay) / (1 - delay);

          if (layerProgress <= 0) {
            continue;
          }

          const radius = ripple.maxRadius * layerProgress;
          const alpha = fade * (0.16 - layer * 0.022);
          context.beginPath();
          context.arc(ripple.x, ripple.y, radius, 0, Math.PI * 2);
          const color = layer % 2 === 0 ? "213, 225, 236" : "174, 205, 228";
          context.strokeStyle = `rgba(${color}, ${alpha})`;
          context.lineWidth = 0.5 + (1 - layerProgress) * 0.28;
          context.stroke();
        }
      }

      ripples = ripples.filter((ripple) => ripple.age < RIPPLE_DURATION);

      animationFrameId =
        ripples.length > 0 ? requestAnimationFrame(render) : null;
    };

    resizeCanvas();
    window.addEventListener("mousemove", addRipple, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener("mousemove", addRipple);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      ref={canvasRef}
    />
  );
}
