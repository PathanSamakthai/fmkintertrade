import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

/** Why FMK — 4 standards pillars, calm and spacious (brief §08). */
export function WhyFMK({ dict }: { dict: Dictionary }) {
  const t = dict.why;
  return (
    <section id="why" className="reveal bg-background py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="mx-auto max-w-[680px] text-center">
          <div className="mb-[18px] inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-accent" />
            <span className="text-[13px] font-bold tracking-[0.2em] text-primary">
              {t.eyebrow}
            </span>
            <span className="h-px w-7 bg-accent" />
          </div>
          <h2 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary">
            {t.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 min-[820px]:grid-cols-4">
          {t.items.map((w) => (
            <div
              key={w.num}
              className="rounded-[18px] border border-line border-t-[3px] border-t-primary bg-white p-[30px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-primary">
                  <Icon name={w.icon} size={24} />
                </span>
                <span className="font-mono text-[26px] font-medium text-line">
                  {w.num}
                </span>
              </div>
              <h3 className="mt-[22px] text-[19px] font-bold leading-[1.25] text-ink">
                {w.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.6] text-muted">{w.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
