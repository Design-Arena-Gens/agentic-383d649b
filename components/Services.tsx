import { services } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, Palette, Sparkles } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  palette: Palette,
  sparkles: Sparkles
};

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <SectionHeading
        eyebrow="Capabilities"
        title="Full-stack digital craftsmanship."
        description="Our team blends product strategy, interaction design, and conversion optimization into launch-ready experiences."
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={service.title}
              className="noise group flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition hover:border-brand-400/60 hover:shadow-glow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200 transition group-hover:bg-brand-500/25">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
