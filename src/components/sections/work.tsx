"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { Reveal } from "../reveal";

export function Work() {
  return (
    <section id="work" className="container-x relative z-10 py-28 sm:py-36">
      <Reveal>
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-6xl">
            Selected
            <br />
            <span className="text-ink/40">Work</span>
          </h2>
          <span className="hidden text-sm uppercase tracking-widest text-ink/40 sm:block">
            ({String(PROJECTS.length).padStart(2, "0")})
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <motion.article
        className="group relative grid gap-6 border-t border-line py-10 md:grid-cols-12 md:items-center"
        whileHover="hover"
      >
        {/* hover glow */}
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-accent2/5 via-transparent to-accent/5"
        />

        <div className="flex items-center gap-4 text-sm text-ink/40 md:col-span-2">
          <span>{project.year}</span>
          <span className="rounded-full border border-line px-3 py-1 text-xs">
            {project.category}
          </span>
        </div>

        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-ink/60">{project.blurb}</p>
        </div>

        <div className="flex flex-wrap gap-2 md:col-span-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 md:col-span-2 md:justify-end">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code`}
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-ink hover:text-ink"
            >
              <Github className="size-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="grid size-11 place-items-center rounded-full bg-ink text-paper transition-colors hover:bg-accent hover:text-white"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}
