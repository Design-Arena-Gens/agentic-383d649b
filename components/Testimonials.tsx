import { testimonials } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by product and growth leaders."
        description="We slot into existing teams, ship fast, and obsess over measurable wins."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.author}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-8"
          >
            <p className="text-sm leading-relaxed text-slate-300">
              “{testimonial.quote}”
            </p>
            <footer className="mt-6 space-y-1 text-sm text-slate-400">
              <div className="font-semibold text-slate-100">
                {testimonial.author}
              </div>
              <div>{testimonial.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
