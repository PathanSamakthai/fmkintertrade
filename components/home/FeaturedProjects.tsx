import type { Dictionary } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Arrow } from "@/components/ui/Icon";

/**
 * Featured Projects — editorial 1-large + 2-small layout (brief §07).
 * Every card carries a "pending verification" badge; no fabricated
 * names/clients/values are presented as confirmed.
 */
export function FeaturedProjects({ dict }: { dict: Dictionary }) {
  const t = dict.projects;
  const [primary, ...secondary] = t.items;

  return (
    <section id="projects" className="reveal bg-primary-950 py-[clamp(64px,9vw,120px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <div className="mb-[18px] inline-flex items-center gap-2.5">
              <span className="h-px w-7 bg-accent" />
              <span className="text-[13px] font-bold tracking-[0.2em] text-accent">
                {t.eyebrow}
              </span>
            </div>
            <h2 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
              {t.title}
            </h2>
            <p className="mt-[18px] text-[17px] leading-[1.65] text-white/70">
              {t.sub}
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-[9px] rounded-[10px] border border-accent/40 px-5 py-3 text-[15px] font-bold text-accent transition-colors hover:bg-accent/[0.12]"
          >
            {t.viewAll}
            <Arrow size={16} />
          </a>
        </div>

        <div className="mt-[52px] grid grid-cols-1 gap-6 min-[960px]:grid-cols-[1.5fr_1fr]">
          {/* Primary project */}
          <article
            className="relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[20px] border border-white/10"
            style={{ background: "repeating-linear-gradient(135deg,#123f2e 0 18px,#0f3627 18px 36px)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[11px] text-white/35">{t.imageAlt}</span>
            </div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top,rgba(6,27,20,.92),rgba(6,27,20,.1) 65%)" }}
            />
            <span className="absolute left-[22px] top-[22px] rounded-full border border-accent/40 bg-accent/[0.16] px-3 py-1.5 text-[11.5px] font-semibold tracking-[0.04em] text-accent">
              {t.pending}
            </span>
            <div className="relative p-8">
              <div className="text-[13px] font-bold tracking-[0.08em] text-accent">
                {primary.type}
              </div>
              <h3 className="mt-2 text-[28px] font-bold tracking-[-0.01em] text-white">
                {primary.name}
              </h3>
              <div className="mt-3.5 flex gap-5 text-[13.5px] text-white/70">
                <span>{primary.location}</span>
                {primary.scope && <span>{primary.scope}</span>}
              </div>
            </div>
          </article>

          {/* Secondary projects */}
          <div className="grid gap-6">
            {secondary.map((p) => (
              <article
                key={p.id}
                className="relative flex min-h-[208px] flex-col justify-end overflow-hidden rounded-[20px] border border-white/10"
                style={{ background: "repeating-linear-gradient(135deg,#3B4148 0 18px,#343a40 18px 36px)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[11px] text-white/35">{t.imageAlt}</span>
                </div>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(23,33,29,.92),rgba(23,33,29,.05) 60%)" }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-2.5 py-[5px] text-[11px] font-semibold text-white/85">
                  {t.pending}
                </span>
                <div className="relative p-[22px]">
                  <div className="text-xs font-bold tracking-[0.06em] text-accent">
                    {p.type}
                  </div>
                  <h3 className="mt-1.5 text-[19px] font-bold text-white">{p.name}</h3>
                  <div className="mt-1.5 text-[12.5px] text-white/60">{p.location}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
