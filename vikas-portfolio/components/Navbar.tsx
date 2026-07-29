"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
          scrolled ? "glass-strong mx-4 md:mx-auto" : "bg-transparent"
        )}
      >
        <a
          href="#home"
          data-cursor-hover
          className="font-display text-xl font-bold tracking-widest text-white"
        >
          V<span className="text-primary">B</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative font-mono-label text-xs uppercase text-white/70 transition-colors hover:text-white"
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100",
                  active === link.href && "scale-x-100"
                )}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-hover
          className="hidden rounded-full border border-primary/40 px-5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/10 md:block"
        >
          Let&apos;s Talk
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
          data-cursor-hover
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-strong mx-4 mt-3 rounded-3xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-label text-sm uppercase text-white/80"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
