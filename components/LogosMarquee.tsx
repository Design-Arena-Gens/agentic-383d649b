const logos = [
  "Circuit AI",
  "Nimbus Analytics",
  "Aurora Finance",
  "PulseStack",
  "Luna Health",
  "Atlas Robotics"
];

export function LogosMarquee() {
  return (
    <section className="border-y border-slate-900/60 bg-slate-950/60 py-8">
      <div className="relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm font-semibold uppercase tracking-[0.5em] text-slate-500">
          {logos.map((logo) => (
            <span key={logo} className="mx-10 inline-flex items-center gap-2">
              {logo}
              <span className="h-1 w-1 rounded-full bg-slate-700" />
            </span>
          ))}
          {logos.map((logo) => (
            <span key={`${logo}-duplicate`} className="mx-10 inline-flex items-center gap-2">
              {logo}
              <span className="h-1 w-1 rounded-full bg-slate-700" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
