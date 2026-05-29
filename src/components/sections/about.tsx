"use client";

import { motion } from "framer-motion";
import { PROCESS, STATS } from "@/lib/data";
import { Reveal, RevealText } from "../reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-y border-line bg-surface py-28 sm:py-36"
    >
      <div className="container-x">
        <Reveal>
          <p className="mb-8 text-sm uppercase tracking-widest text-accent">
            About
          </p>
        </Reveal>

        <h2 className="max-w-4xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          <RevealText text="I'm a developer who cares as much about how a product feels as how it works — clean code, smooth motion, and details that earn trust." />
        </h2>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="bg-surface p-8 text-center">
                <div className="font-display text-4xl font-medium text-accent sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/50">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <Reveal>
            <h3 className="mb-12 font-display text-2xl font-medium text-white/40 sm:text-3xl">
              How I work
            </h3>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="group">
                  <div className="mb-4 font-display text-5xl font-medium text-white/10 transition-colors group-hover:text-accent">
                    {p.no}
                  </div>
                  <h4 className="mb-2 text-lg font-medium">{p.title}</h4>
                  <p className="text-sm text-white/55">{p.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
