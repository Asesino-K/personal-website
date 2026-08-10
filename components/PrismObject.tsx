"use client";

import { useEffect, useRef } from "react";

export default function PrismObject() {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const prism = ref.current;
    if (!prism || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame: number | null = null; let tx = 0; let ty = 0; let x = 0; let y = 0;
    const move = (event: MouseEvent) => { tx = (event.clientX / innerWidth - 0.5) * 18; ty = (event.clientY / innerHeight - 0.5) * 14; };
    const render = () => { x += (tx - x) * 0.055; y += (ty - y) * 0.055; prism.style.setProperty("--prism-x", `${x}px`); prism.style.setProperty("--prism-y", `${y}px`); frame = requestAnimationFrame(render); };
    addEventListener("mousemove", move, { passive: true }); frame = requestAnimationFrame(render);
    return () => { if (frame !== null) cancelAnimationFrame(frame); removeEventListener("mousemove", move); };
  }, []);
  return <svg aria-hidden="true" className="prism-object" fill="none" ref={ref} viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="glass-a" x1="85" x2="430" y1="70" y2="468"><stop stopColor="#F0FBFF" stopOpacity="0.76" /><stop offset="0.42" stopColor="#71BCE8" stopOpacity="0.2" /><stop offset="1" stopColor="#A979C6" stopOpacity="0.4" /></linearGradient><linearGradient id="glass-b" x1="210" x2="424" y1="162" y2="468"><stop stopColor="#D9F3FF" stopOpacity="0.22" /><stop offset="1" stopColor="#6B1E32" stopOpacity="0.44" /></linearGradient><linearGradient id="prism-spectrum" x1="82" x2="441" y1="114" y2="445"><stop stopColor="#86D6FF" stopOpacity="0" /><stop offset="0.28" stopColor="#D9F3FF" stopOpacity="0.86" /><stop offset="0.62" stopColor="#B681DE" stopOpacity="0.7" /><stop offset="1" stopColor="#6B1E32" stopOpacity="0" /></linearGradient><filter id="prism-glow"><feGaussianBlur stdDeviation="1.3" /></filter></defs><g filter="url(#prism-glow)"><path d="m168 62 206 96 70 239-184 104L80 355 168 62Z" fill="url(#glass-a)" /><path d="m168 62 206 96-114 170L80 355 168 62Z" fill="#D9F3FF" fillOpacity="0.2" /><path d="m374 158 70 239-184 104V328l114-170Z" fill="url(#glass-b)" /><path d="m80 355 180-27v173L80 355Z" fill="#071B33" fillOpacity="0.32" /><path d="m168 62 206 96 70 239-184 104L80 355 168 62Z" stroke="#F0FBFF" strokeOpacity="0.9" strokeWidth="1.4" /><path d="m80 355 180-27 114-170M260 328v173M168 62l92 266" stroke="#D9F3FF" strokeOpacity="0.52" /><path d="M-5 391 260 328 523 211M116 16l144 312 258 183" stroke="url(#prism-spectrum)" strokeOpacity="0.75" strokeWidth="2" /><circle cx="260" cy="328" r="7" fill="#D9F3FF" fillOpacity="0.74" /><circle cx="260" cy="328" r="22" fill="#D9F3FF" fillOpacity="0.14" /></g></svg>;
}
