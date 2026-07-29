"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="font-mono-label text-xs uppercase text-primary">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-white/60">
            A few builds where security, scale, and design had to work
            together — not compete.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
            >
              <TiltCard className="glass glow-border h-full overflow-hidden">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
                  <span className="absolute left-4 top-4 font-mono-label text-xs text-primary">
                    {project.id}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono-label text-[10px] uppercase text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/80 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-medium text-black"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
