import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, Arrow } from "@/components/ui/Icon";

/** Integrated Solutions — 6 cards built from real FMK business lines (§06). */
export function Solutions({ dict }: { dict: Dictionary }) {
  const t = dict.solutions;
  return (
    <section id="solutions" className="reveal bg-white py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="max-w-[720px]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary">
            {t.title}
          </h2>
          <p className="mt-[18px] text-[17px] leading-[1.65] text-muted">{t.sub}</p>
        </div>

        <div className="mt-[52px] grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 min-[820px]:grid-cols-3">
          {t.items.map((s) => (
            <a
              key={s.slug}
              href="#solutions"
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-background p-[30px] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_60px_rgba(11,47,34,.13)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-primary text-accent">
                  <Icon name={s.icon} size={28} />
                </span>
                <span className="font-mono text-[13px] font-medium text-accent">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-[22px] text-[22px] font-bold tracking-[-0.01em] text-primary">
                {s.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-[1.6] text-muted">
                {s.desc}
              </p>
              <div className="mt-[18px] flex flex-wrap gap-[7px]">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-[7px] text-sm font-bold text-primary">
                {dict.cta.learnMore}
                <Arrow size={15} strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
