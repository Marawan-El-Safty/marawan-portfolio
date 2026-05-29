"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "../reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container-x relative z-10 py-28 sm:py-36"
    >
      <Reveal>
        <p className="mb-4 text-sm uppercase tracking-widest text-accent">
          Kind words
        </p>
        <h2 className="mb-16 max-w-2xl font-display text-4xl font-medium tracking-tight sm:text-6xl">
          What people say about working with me.
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <motion.figure
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8"
            >
              <Quote className="mb-6 size-7 text-accent" />
              <blockquote className="flex-1 text-lg leading-relaxed text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                <span className="grid size-10 place-items-center rounded-full bg-accent/15 text-sm font-medium text-accent">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-white/50">{t.title}</span>
                </span>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
