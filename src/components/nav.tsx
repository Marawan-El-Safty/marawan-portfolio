"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "container-x mt-3 flex items-center justify-between rounded-full border border-transparent px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled &&
            "border-line bg-ink/70 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/50",
        )}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-ink">
            M
          </span>
          <span className="hidden sm:inline">{PROFILE.name.split(" ")[0]}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-sweep text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent"
          >
            Let&apos;s talk
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
