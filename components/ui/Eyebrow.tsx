/** Gold eyebrow label with a hairline, matching the design system. */
export function Eyebrow({
  children,
  tone = "dark",
  centered = false,
}: {
  children: React.ReactNode;
  /** "dark" = green text on light bg; "light" = gold text on dark bg. */
  tone?: "dark" | "light";
  centered?: boolean;
}) {
  const textColor = tone === "light" ? "text-accent" : "text-primary";
  return (
    <div className="mb-[18px] inline-flex items-center gap-[10px]">
      <span className="h-px w-7 bg-accent" />
      <span
        className={`text-[13px] font-bold tracking-[0.2em] ${textColor}`}
      >
        {children}
      </span>
      {centered && <span className="h-px w-7 bg-accent" />}
    </div>
  );
}
