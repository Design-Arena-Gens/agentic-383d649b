import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-3",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg text-slate-300">{description}</p>
    </div>
  );
}
