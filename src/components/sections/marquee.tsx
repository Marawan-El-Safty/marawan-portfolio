import { STACK } from "@/lib/data";

/** Infinite horizontal marquee of the tech stack. */
export function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <section
      aria-label="Tech stack"
      className="border-y border-line py-6"
    >
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {items.map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-2xl font-medium text-ink/50 sm:text-3xl">
                {tech}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-10 pr-10"
        >
          {items.map((tech, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-2xl font-medium text-ink/50 sm:text-3xl">
                {tech}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
