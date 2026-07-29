"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            document.body.style.overflow = "";
          }, 400);
          return 100;
        }
        return next;
      });
    }, 160);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-secondary/40"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ background: "radial-gradient(circle, rgba(0,245,255,0.4), transparent 70%)" }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="font-display text-2xl font-bold tracking-widest text-white">
              VB
            </span>
          </div>

          <div className="mt-8 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="mt-4 font-mono-label text-xs text-white/40">
            LOADING {Math.min(Math.floor(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
