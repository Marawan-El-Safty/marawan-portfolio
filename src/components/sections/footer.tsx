import { Github, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-white/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js &
          Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-4" /> Email
          </a>
          <a
            href="#top"
            className="link-sweep transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
