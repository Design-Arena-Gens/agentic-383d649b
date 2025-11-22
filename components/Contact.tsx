export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 pb-24 md:px-10 lg:pb-32"
    >
      <div className="grid gap-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 lg:grid-cols-[1.2fr,1fr]">
        <div className="space-y-4">
          <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-200">
            Let’s build together
          </span>
          <h2 className="text-3xl font-semibold text-white">
            Tell us about your next launch.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Schedule a discovery call and we’ll map the engagement timeline,
            provide a measurable success plan, and outline stakeholders we’ll
            need to collaborate with.
          </p>
          <div className="grid gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-200">
                Availability
              </div>
              <div className="text-sm text-slate-400">
                Next project kickoff window opens {new Date()
                  .toLocaleString("en-US", {
                    month: "long"
                  })
                  .toLowerCase()}
                .
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">
                Response time
              </div>
              <div className="text-sm text-slate-400">Under 12 business hours</div>
            </div>
          </div>
        </div>
        <form className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Taylor Morgan"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </label>
            <label className="text-sm text-slate-300">
              Work email
              <input
                type="email"
                placeholder="taylor@company.com"
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </label>
          </div>
          <label className="text-sm text-slate-300">
            Company
            <input
              type="text"
              placeholder="Nimbus Analytics"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </label>
          <label className="text-sm text-slate-300">
            Project goals
            <textarea
              rows={4}
              placeholder="Outline key outcomes, launch date, and stakeholders involved."
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
          >
            Book discovery call
          </button>
        </form>
      </div>
    </section>
  );
}
