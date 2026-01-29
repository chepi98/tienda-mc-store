type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4 max-w-2xl">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-ink-soft md:text-lg leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
