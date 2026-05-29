"use client";

import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Reveal, RevealText } from "../reveal";
import { Magnetic } from "../magnetic";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden py-32 sm:py-44"
    >
      <div className="glow left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent2/20" />

      <div className="container-x relative z-10 text-center">
        <Reveal>
          <p className="mb-6 text-sm uppercase tracking-widest text-accent">
            Got a project?
          </p>
        </Reveal>

        <h2 className="font-display text-5xl font-medium tracking-tight sm:text-8xl">
          <RevealText text="Let's build" className="block" />
          <RevealText
            text="something great."
            className="block"
            gradient
            delay={0.1}
          />
        </h2>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center gap-6">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${PROFILE.email}`}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-ink transition-colors hover:bg-accent"
              >
                {PROFILE.email}
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <p className="text-sm text-white/40">
              Usually replies within 24h · Remote, worldwide
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
