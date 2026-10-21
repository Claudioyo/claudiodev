type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`font-mono text-sm uppercase tracking-[0.2em] ${
          dark ? "text-zinc-400" : "text-[var(--coffee-medium)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display mt-4 text-4xl font-semibold ${
          dark ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl leading-7 ${
            dark ? "text-zinc-400" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}