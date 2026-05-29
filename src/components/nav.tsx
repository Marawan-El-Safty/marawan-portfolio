"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { Magnetic } from "./magnetic";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
              "border-line bg-paper/70 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/50",
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="grid size-8 place-items-center rounded-full bg-ink text-paper">
              M
            </span>
            <span className="hidden sm:inline">
              {PROFILE.name.split(" ")[0]}
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-sweep text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Magnetic>
              <a
                href="#contact"
                className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-white sm:inline-block"
              >
                Let&apos;s talk
              </a>
            </Magnetic>

            {/* Hamburger — mobile only */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 grid size-10 place-items-center rounded-full border border-line md:hidden"
            >
              <span className="relative block h-3 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="absolute left-0 top-0 h-0.5 w-5 bg-ink"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute left-0 top-[5px] h-0.5 w-5 bg-ink"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 h-0.5 w-5 bg-ink"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper/95 px-8 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="font-display text-5xl font-medium tracking-tight text-ink/80 transition-colors hover:text-accent"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-sm text-ink/50"
            >
              {PROFILE.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
