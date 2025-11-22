import { pricing } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <SectionHeading
        eyebrow="Pricing"
        title="Engagement models built for outcomes."
        description="Transparent, fixed-fee engagements designed for high-velocity teams that want impact without the agency bloat."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {pricing.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-8 transition",
              tier.featured
                ? "relative overflow-hidden border-brand-400/60 bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-950 shadow-glow"
                : "hover:border-brand-400/40 hover:bg-slate-900/80"
            )}
          >
            {tier.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-slate-950">
                Most Popular
              </span>
            )}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
              <p className="text-sm text-slate-400">{tier.description}</p>
              <div className="text-3xl font-semibold text-white">
                {tier.price}
                <span className="ml-2 text-base font-normal text-slate-400">
                  /{tier.cadence}
                </span>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {tier.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-brand-500/20 p-1 text-brand-200">
                    <Check size={14} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={cn(
                "mt-8 inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition",
                tier.featured
                  ? "border-brand-400 bg-brand-500 text-slate-950 hover:bg-brand-400"
                  : "border-slate-700 text-slate-200 hover:border-brand-400/60 hover:text-brand-100"
              )}
            >
              Run scope check
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
