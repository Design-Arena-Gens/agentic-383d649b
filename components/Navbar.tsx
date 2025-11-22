"use client";

import Link from "next/link";
import { navLinks } from "@/data/content";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-slate-950">
            NW
          </span>
          <span className="hidden sm:inline">NovaWeb Studio</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-brand-500 px-4 py-2 text-slate-950 transition hover:bg-brand-400"
          >
            Book Discovery
          </Link>
        </div>
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-200 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-6 mb-4 rounded-2xl border border-slate-800 bg-slate-900/80 md:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800/60"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-center text-sm font-semibold text-slate-950",
                  "bg-brand-500 transition hover:bg-brand-400"
                )}
              >
                Book Discovery
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
