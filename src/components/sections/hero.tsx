"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { RevealText } from "../reveal";
import { Magnetic } from "../magnetic";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32"
    >
      {/* Ambient glows */}
      <div className="glow left-[-10%] top-[10%] h-[420px] w-[420px] bg-accent2/20" />
      <div className="glow right-[-5%] top-[30%] h-[380px] w-[380px] bg-accent/10" />

      <motion.div style={{ y, opacity }} className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-3 text-sm text-ink/60"
        >
          {PROFILE.available && (
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              Available for freelance work
            </span>
          )}
          <span className="text-ink/20">/</span>
          <span>{PROFILE.location}</span>
        </motion.div>

        <h1 className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight sm:text-[10vw] lg:text-[8.5vw]">
          <RevealText text="Full-Stack" className="block" />
          <RevealText
            text="Developer"
            className="block"
            gradient
            delay={0.15}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-md text-balance text-lg text-ink/70"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
          >
            <Magnetic strength={0.5}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                View selected work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-x relative z-10 mt-16 flex items-center gap-2 text-xs uppercase tracking-widest text-ink/40"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Scroll to explore
      </motion.div>
    </section>
  );
}
