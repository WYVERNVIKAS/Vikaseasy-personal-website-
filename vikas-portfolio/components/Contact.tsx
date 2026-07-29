"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Wire this up to your own API route, form service, or email endpoint.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-mono-label text-xs uppercase text-primary">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Secure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Have a project in mind? Tell me what you&apos;re building and
            I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-strong glow-border mt-12 rounded-3xl p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="font-mono-label text-[11px] uppercase text-white/50">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono-label text-[11px] uppercase text-white/50">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="font-mono-label text-[11px] uppercase text-white/50">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary/50"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> you@example.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> India
              </span>
            </div>

            <MagneticButton
              type="submit"
              disabled={status !== "idle"}
              className="glow-primary bg-gradient-to-r from-primary to-secondary text-black"
            >
              {status === "idle" && (
                <>
                  Send Message <Send size={16} />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && (
                <>
                  Sent <CheckCircle2 size={16} />
                </>
              )}
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
