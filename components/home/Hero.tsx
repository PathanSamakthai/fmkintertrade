import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Icon, Arrow } from "@/components/ui/Icon";
import { ConsultButton } from "@/components/ui/ConsultButton";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section
      className="relative flex min-h-[760px] items-center overflow-hidden bg-primary"
      aria-label={t.eyebrow}
    >
      {/* Striped placeholder texture + labelled note (brief §04 — replace with a real photo). */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(135deg,#0d3527 0 22px,#0B2F22 22px 44px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-end justify-center pb-6"
      >
        <span className="font-mono text-[11px] tracking-[0.06em] text-white/30">
          PLACEHOLDER — Replace with verified FMK operations photograph
          (evaporative housing / cold storage / logistics)
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg,rgba(6,27,20,.94) 0%,rgba(6,27,20,.78) 42%,rgba(6,27,20,.42) 100%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 py-24 min-[960px]:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-accent" />
            <span className="text-[13px] font-bold tracking-[0.22em] text-accent">
              {t.eyebrow}
            </span>
          </div>
          <h1 className="max-w-[15ch] text-[clamp(38px,5.2vw,76px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-[56ch] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-white/80">
            {t.sub}
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#solutions"
              className="inline-flex items-center gap-[9px] rounded-[11px] bg-accent px-6 py-3.5 text-[15px] font-bold text-primary-950 shadow-[0_8px_24px_rgba(196,162,99,.3)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(196,162,99,.4)]"
            >
              {t.ctaPrimary}
              <Arrow size={17} />
            </a>
            <ConsultButton
              label={t.ctaSecondary}
              variant="outlineLight"
              className="px-6 py-3.5 text-[15px]"
            />
          </div>
        </div>

        {/* Glass value card — stacks below on mobile. */}
        <div className="rounded-[22px] border border-white/15 bg-white/[0.07] p-[30px] backdrop-blur-[10px]">
          <div className="mb-5 text-xs font-bold tracking-[0.16em] text-accent">
            {t.valueTitle}
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[14px] bg-white/10">
            {t.values.map((v) => (
              <div
                key={v.label}
                className="flex flex-col gap-2 bg-primary p-[18px_18px] px-[18px] py-5"
              >
                <span className="text-accent">
                  <Icon name={v.icon} size={22} />
                </span>
                <span className="text-[15px] font-bold text-white">{v.label}</span>
                <span className="text-[12.5px] leading-[1.45] text-white/60">
                  {v.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
