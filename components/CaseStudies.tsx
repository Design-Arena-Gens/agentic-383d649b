import Image from "next/image";
import { caseStudies } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <SectionHeading
        eyebrow="Case Studies"
        title="Partnering with teams shipping ambitious products."
        description="Selected transformations we supported to unlock growth, connect with audiences, and level up product stories."
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {caseStudies.map((project) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition hover:border-brand-400/50"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-sm text-slate-200">
                <span className="rounded-full bg-slate-950/80 px-4 py-1 font-medium">
                  {project.name}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-200">
                  {project.result}
                </span>
              </div>
            </div>
            <div className="space-y-3 p-8">
              <p className="text-sm text-slate-300">{project.summary}</p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100">
                View Outcome →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
