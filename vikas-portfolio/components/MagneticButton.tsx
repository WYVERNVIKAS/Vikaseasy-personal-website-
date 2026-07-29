"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "button" | "a";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  as = "button",
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const Comp: any = as === "a" ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-300 ease-out"
      data-cursor-hover
    >
      <Comp
        href={href}
        onClick={onClick}
        type={as === "button" ? type : undefined}
        disabled={disabled}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-70",
          className
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
