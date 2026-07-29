"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import TiltCard from "@/components/TiltCard";
import { expertise } from "@/data/expertise";

export default function Expertise() {
  return (
    <section id="expertise" className="section-pad relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="font-mono-label text-xs uppercase text-primary">
            What I Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            OUR <span className="text-gradient">EXPERTISE</span>
          </h2>
          <p className="mt-4 text-white/60">
            From concept to deployment, we build secure, scalable solutions
            that power your business forward.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = (Icons as any)[item.icon] || Icons.Globe;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <TiltCard className="glow-border glass h-full p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mono-label text-[11px] uppercase text-primary/70">
                    {item.stack}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
