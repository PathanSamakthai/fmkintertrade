import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;
  return (
    <section
      id="about"
      className="reveal bg-background py-[clamp(64px,9vw,120px)]"
    >
      <Container className="grid grid-cols-1 items-center gap-9 min-[960px]:grid-cols-[45%_55%] min-[960px]:gap-16">
        {/* Image placeholder (brief §04 — replace with a verified project image). */}
        <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-[22px] border border-line shadow-lg"
          style={{ background: "repeating-linear-gradient(135deg,#e7ede9 0 12px,#eef3f0 12px 24px)" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <span className="text-center font-mono text-[11px] tracking-[0.03em] text-muted">
              {t.imageAlt}
            </span>
          </div>
          <div className="relative m-5 rounded-[14px] bg-primary px-[22px] py-[18px] text-white">
            <div className="text-xs font-bold tracking-[0.1em] text-accent">
              {t.badge}
            </div>
            <div className="mt-1.5 text-sm leading-[1.5] text-white/90">
              {t.badgeDesc}
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="max-w-[16ch] text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-primary">
            {t.title}
          </h2>
          <p className="mt-[22px] max-w-[44ch] text-[clamp(17px,1.7vw,21px)] font-semibold leading-[1.5] text-ink">
            {t.lead}
          </p>
          <p className="mt-4 max-w-[52ch] text-base leading-[1.7] text-muted">
            {t.body}
          </p>
          <div className="mt-[34px] grid grid-cols-1 gap-[18px] min-[520px]:grid-cols-2">
            {t.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-[14px] border border-line bg-white p-5"
              >
                <span className="inline-flex text-primary">
                  <Icon name={p.icon} size={22} />
                </span>
                <div className="mt-3 text-base font-bold text-ink">{p.title}</div>
                <div className="mt-1.5 text-[13.5px] leading-[1.55] text-muted">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
