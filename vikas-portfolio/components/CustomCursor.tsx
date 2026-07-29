"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    let raf: number;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60 transition-all duration-200"
        style={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: visible ? 1 : 0,
          boxShadow: hovering ? "0 0 30px rgba(0,245,255,0.5)" : "0 0 12px rgba(0,245,255,0.25)",
          background: hovering ? "rgba(0,245,255,0.08)" : "transparent",
        }}
      />
    </div>
  );
}
