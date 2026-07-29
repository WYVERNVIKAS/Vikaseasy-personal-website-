"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Code2, Users, Cpu, Award } from "lucide-react";

const stats = [
  { label: "Projects", value: 40, suffix: "+", icon: Code2 },
  { label: "Clients", value: 25, suffix: "+", icon: Users },
  { label: "Technologies", value: 30, suffix: "+", icon: Cpu },
  { label: "Security Audits", value: 15, suffix: "+", icon: Shield },
  { label: "Years Experience", value: 4, suffix: "+", icon: Award },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      start = Math.floor(progress * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono-label text-xs uppercase text-primary">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg leading-relaxed text-white/70"
          >
            I am <span className="font-semibold text-white">Vikas Banotra</span>,
            a passionate Full Stack Developer, Cybersecurity Enthusiast,
            Blockchain Developer, AI Builder, and Cloud Engineer focused on
            creating secure, scalable, and high-performance digital products.
            Every build passes through the same lens I&apos;d use to break
            it — so what ships is resilient by design, not by luck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <p className="font-mono-label text-xs uppercase text-white/40">
              Core Focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>▹ Secure-by-design architecture across every layer</li>
              <li>▹ Scalable cloud infrastructure that grows with demand</li>
              <li>▹ AI systems that automate real business outcomes</li>
              <li>▹ Blockchain builds audited before they touch mainnet</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass flex flex-col items-center rounded-2xl px-4 py-6 text-center"
            >
              <stat.icon className="mb-3 text-primary" size={22} />
              <span className="font-display text-3xl font-bold">
                <Counter value={stat.value} />
                {stat.suffix}
              </span>
              <span className="mt-1 text-xs text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
