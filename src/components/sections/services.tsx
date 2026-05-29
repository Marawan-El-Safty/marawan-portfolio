"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Reveal } from "../reveal";

export function Services() {
  return (
    <section id="services" className="container-x relative z-10 py-28 sm:py-36">
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-widest text-accent">
          What I do
        </p>
        <h2 className="mb-16 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-6xl">
          Services built to make products feel premium.
        </h2>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.05}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(109,73,255,0.05)" }}
              className="group h-full bg-paper p-8 transition-colors sm:p-10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm text-ink/30">{s.no}</span>
                <span className="size-2 rounded-full bg-ink/20 transition-colors group-hover:bg-accent" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-medium sm:text-3xl">
                {s.title}
              </h3>
              <p className="text-ink/60">{s.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
