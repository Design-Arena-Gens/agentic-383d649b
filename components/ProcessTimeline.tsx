import { process } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <SectionHeading
        eyebrow="Process"
        title="Launch in four focused weeks."
        description="A proven, transparent cadence that keeps stakeholders aligned and outcomes measurable from day one."
      />
      <div className="relative mt-16 flex flex-col gap-10 lg:flex-row">
        <div className="absolute left-3 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-400/60 via-slate-700 to-transparent lg:left-1/2 lg:-translate-x-1/2" />
        {process.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-1 flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur"
          >
            <div className="flex items-center gap-3 text-sm text-brand-200">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-400/50 bg-brand-500/10 text-base font-semibold text-brand-100">
                {index + 1}
              </span>
              {step.duration}
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
