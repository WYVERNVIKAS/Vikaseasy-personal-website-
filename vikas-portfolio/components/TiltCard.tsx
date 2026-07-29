"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative rounded-2xl transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(0,245,255,0.08), transparent 70%)",
      }}
    >
      {children}
    </div>
  );
}
