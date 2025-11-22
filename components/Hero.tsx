"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Launches shipped", value: "120+" },
  { label: "Avg. conversion lift", value: "42%" },
  { label: "Experiment velocity", value: "3.1x" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="absolute -right-12 top-36 h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-32 text-center md:px-10 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-sm font-semibold text-brand-100"
        >
          <Sparkles size={16} />
          Launch-ready digital experiences
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          Websites engineered to convert on day one.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          NovaWeb Studio partners with product teams to craft web experiences
          that bring clarity to complex products, accelerate growth funnels,
          and deliver measurable results within weeks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-brand-400"
          >
            Start a project
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="#cases"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-brand-500/60 hover:text-brand-100"
          >
            Explore case studies
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass relative grid w-full max-w-3xl grid-cols-1 divide-y divide-slate-800/70 overflow-hidden rounded-3xl sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 px-6 py-5">
              <div className="text-3xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
