import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";

/** Regional Network — verified TH offices + overseas presence (brief §09). */
export function RegionalNetwork({ dict }: { dict: Dictionary }) {
  const t = dict.network;
  return (
    <section id="network" className="reveal bg-white py-[clamp(64px,9vw,120px)]">
      <Container className="grid grid-cols-1 items-start gap-9 min-[960px]:grid-cols-[.9fr_1.1fr] min-[960px]:gap-16">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary">
            {t.title}
          </h2>
          <p className="mt-[18px] max-w-[44ch] text-base leading-[1.7] text-muted">
            {t.sub}
          </p>
          <div className="mt-[34px] flex gap-9">
            <div>
              <div className="text-[40px] font-extrabold tracking-[-0.02em] text-primary">
                {company.stats.officesTH}
              </div>
              <div className="mt-0.5 text-[13px] text-muted">{t.statOffices}</div>
            </div>
            <div>
              <div className="text-[40px] font-extrabold tracking-[-0.02em] text-primary">
                {company.stats.countries}
              </div>
              <div className="mt-0.5 text-[13px] text-muted">{t.statCountries}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[0.16em] text-accent">
            {t.thailand}
          </div>
          <div className="grid grid-cols-1 gap-3.5 min-[600px]:grid-cols-2">
            {t.th.map((o) => (
              <div key={o.city} className="rounded-[14px] border border-line bg-background px-5 py-[18px]">
                <div className="flex items-center gap-2.5">
                  <span className="text-primary">
                    <Icon name="pin" size={18} />
                  </span>
                  <div className="text-base font-bold text-ink">{o.city}</div>
                </div>
                {o.role && (
                  <div className="mt-2 text-xs font-semibold tracking-[0.04em] text-accent">
                    {o.role}
                  </div>
                )}
                <div className="mt-1 text-[12.5px] leading-[1.5] text-muted">
                  {o.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3.5 mt-6 text-xs font-bold tracking-[0.16em] text-accent">
            {t.overseas}
          </div>
          <div className="grid grid-cols-1 gap-3.5 min-[600px]:grid-cols-2">
            {t.overseasOffices.map((o) => (
              <div key={o.city} className="rounded-[14px] bg-primary px-5 py-[18px]">
                <div className="flex items-center gap-2.5">
                  <span className="text-accent">
                    <Icon name="globe" size={18} />
                  </span>
                  <div className="text-base font-bold text-white">{o.city}</div>
                </div>
                <div className="mt-2 text-[12.5px] leading-[1.5] text-white/70">
                  {o.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
