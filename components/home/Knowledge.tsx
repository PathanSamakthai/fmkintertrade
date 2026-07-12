import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Icon";

/**
 * Knowledge & Insights — 3 article cards. Placeholders are clearly marked
 * "Draft — pending publication"; no false publish dates (brief §11).
 */
export function Knowledge({ dict }: { dict: Dictionary }) {
  const t = dict.knowledge;
  return (
    <section id="knowledge" className="reveal bg-background py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary">
              {t.title}
            </h2>
          </div>
          <a href="#knowledge" className="inline-flex items-center gap-2 text-[15px] font-bold text-primary">
            {t.viewAll}
            <Arrow size={16} />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 min-[600px]:grid-cols-2 min-[820px]:grid-cols-3">
          {t.items.map((a) => (
            <article
              key={a.id}
              className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-[box-shadow,transform] duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_20px_50px_rgba(11,47,34,.1)]"
            >
              <div
                className="relative flex aspect-[16/10] items-center justify-center"
                style={{ background: "repeating-linear-gradient(135deg,#e7ede9 0 12px,#eef3f0 12px 24px)" }}
              >
                <span className="font-mono text-[10.5px] text-muted">{t.imageAlt}</span>
                <span className="absolute left-3.5 top-3.5 rounded-full bg-primary px-[11px] py-[5px] text-[11px] font-semibold text-white">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-semibold tracking-[0.04em] text-accent">
                  {a.date}
                </div>
                <h3 className="mt-2 text-[19px] font-bold leading-[1.3] text-ink">
                  {a.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-[1.6] text-muted">
                  {a.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-[7px] text-sm font-bold text-primary">
                  {t.readMore}
                  <Arrow size={15} strokeWidth={2} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
