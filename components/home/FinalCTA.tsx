import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ConsultButton } from "@/components/ui/ConsultButton";

/** Final CTA — dark green, headline + verified direct-contact card (§12). */
export function FinalCTA({ dict }: { dict: Dictionary }) {
  const t = dict.finalCta;
  const c = dict.contact;
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-[clamp(64px,9vw,120px)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{ background: "repeating-linear-gradient(135deg,#0d3527 0 22px,#0B2F22 22px 44px)" }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-9 min-[960px]:grid-cols-[1.2fr_.8fr] min-[960px]:gap-14">
        <div>
          <div className="mb-[18px] inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-accent" />
            <span className="text-[13px] font-bold tracking-[0.2em] text-accent">
              {t.eyebrow}
            </span>
          </div>
          <h2 className="max-w-[16ch] text-[clamp(32px,4.5vw,60px)] font-extrabold leading-[1.06] tracking-[-0.02em] text-white">
            {t.title}
          </h2>
          <p className="mt-[22px] max-w-[52ch] text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-white/[0.78]">
            {t.sub}
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <ConsultButton
              label={dict.cta.consult}
              variant="gold"
              withArrow
              className="px-6 py-3.5 text-[15px]"
            />
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center gap-[9px] rounded-[11px] border border-white/35 bg-transparent px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              {dict.cta.contactTeam}
            </a>
          </div>
        </div>

        {/* Direct contact — verified phone / email / address only. */}
        <div className="rounded-[20px] border border-white/15 bg-white/[0.06] p-[30px]">
          <div className="mb-5 text-xs font-bold tracking-[0.14em] text-accent">
            {c.title}
          </div>
          <div className="flex flex-col gap-[18px]">
            <a href={`tel:${company.phoneHrefs[0]}`} className="flex items-start gap-3.5 text-white">
              <span className="mt-0.5 text-accent">
                <Icon name="phone" size={20} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-xs text-white/60">{c.phoneLabel}</span>
                <span className="text-[15px] font-bold">
                  {company.phones.join(" · ")}
                </span>
              </span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-start gap-3.5 text-white">
              <span className="mt-0.5 text-accent">
                <Icon name="mail" size={20} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-xs text-white/60">{c.emailLabel}</span>
                <span className="text-[15px] font-bold">{company.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-3.5 text-white">
              <span className="mt-0.5 text-accent">
                <Icon name="mapPin" size={20} strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-xs text-white/60">{c.addressLabel}</span>
                <span className="text-sm font-semibold leading-[1.5]">
                  {company.address.full}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
