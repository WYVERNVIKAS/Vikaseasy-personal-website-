"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Instagram, Send, Mail, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";

const roles = [
  "Full Stack Developer",
  "Cybersecurity Enthusiast",
  "Blockchain Developer",
  "AI Builder",
  "Cloud Engineer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const { x, y } = useMousePosition();
  const parallaxX = typeof window !== "undefined" ? (x / window.innerWidth - 0.5) * 24 : 0;
  const parallaxY = typeof window !== "undefined" ? (y / window.innerHeight - 0.5) * 24 : 0;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-mono-label text-xs uppercase text-primary"
          >
            🔐 Security isn&apos;t a feature—it&apos;s our promise.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            VIKAS
            <br />
            <span className="text-gradient">BANOTRA</span>
          </motion.h1>

          <div className="mt-6 h-7 font-mono-label text-sm text-white/70 sm:text-base">
            <span className="text-primary">&gt;</span> {typed}
            <span className="animate-pulse text-primary">_</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base"
          >
            Hi 🖐️ I&apos;m Vikas Banotra 🚀 We craft 📱 apps, 🛒 stores, 🤖 bots,
            ⛓️ blockchains, 🧠 AI brains, ☁️ cloud empires—pretty much anything
            you can imagine. 💡 And yes, we break into our own builds first
            🔨… so you don&apos;t have to worry about hackers doing it later.
            🛡️
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="glow-primary bg-gradient-to-r from-primary to-secondary text-black"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="glass border border-white/10 text-white"
            >
              Get In Touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/your-username" },
              { icon: Instagram, href: "https://instagram.com/your-username" },
              { icon: Send, href: "https://t.me/your-username" },
              { icon: Mail, href: "mailto:you@example.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-1 mx-auto md:order-2"
        >
          <div
            className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            style={{
              transform: `translate(${parallaxX}px, ${parallaxY}px)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="absolute -inset-8 animate-blob rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
            <div className="absolute inset-0 animate-float">
              <div className="glow-border relative h-full w-full rounded-full p-1">
                <div className="glass-strong relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Vikas Banotra"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
            <div className="absolute -right-2 -top-2 h-4 w-4 animate-glowPulse rounded-full bg-primary" />
            <div className="absolute -bottom-3 left-4 h-3 w-3 animate-glowPulse rounded-full bg-secondary" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-white/40"
        aria-label="Scroll down"
      >
        <span className="font-mono-label text-[10px] uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
