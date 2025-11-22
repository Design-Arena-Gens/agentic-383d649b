export function Footer() {
  return (
    <footer className="border-t border-slate-900/60 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-1">
          <div className="font-semibold text-slate-200">NovaWeb Studio</div>
          <div className="max-w-sm text-xs text-slate-500">
            Clone-grade experience crafted with Next.js, Tailwind CSS, and
            obsession for detail.
          </div>
        </div>
        <div className="flex gap-4 text-xs text-slate-500">
          <a href="#services" className="hover:text-brand-200">
            Services
          </a>
          <a href="#process" className="hover:text-brand-200">
            Process
          </a>
          <a href="#contact" className="hover:text-brand-200">
            Contact
          </a>
        </div>
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} NovaWeb Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
