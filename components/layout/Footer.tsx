import type { Dictionary } from "@/lib/i18n";
import { company } from "@/data/company";

const socialLink =
  "flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-white/15 text-[#C9D6CE] transition-colors hover:border-accent hover:text-accent";

function SocialGlyph({ kind }: { kind: string }) {
  if (kind === "line") return <span className="text-[11px] font-extrabold">LINE</span>;
  const paths: Record<string, string> = {
    facebook:
      '<path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.8-1.5H17V2.2c-.4 0-1.5-.2-2.7-.2C11.7 2 10 3.6 10 6.7V10H7v4h3v8h3Z"/>',
    youtube:
      '<path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.6 6 12 6 12 6s-6.6 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.7 12 27 27 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.4 18 12 18 12 18s6.6 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22.3 12 27 27 0 0 0 22 8.2ZM10 15V9l5 3Z"/>',
    whatsapp:
      '<path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.2-4.8-4.4-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.5.3.1.2.1.8-.1 1.5Z"/>',
  };
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths[kind] ?? "" }}
    />
  );
}

export function Footer({ dict }: { dict: Dictionary }) {
  const t = dict.footer;
  return (
    <footer className="bg-primary-950 pt-[72px] text-[#C9D6CE]">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 min-[900px]:grid-cols-[1.4fr_1fr_1fr_1.2fr] min-[900px]:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-primary text-[18px] font-extrabold text-accent">
                FM
              </span>
              <span className="text-base font-extrabold tracking-[0.04em] text-white">
                FMK INTERTRADE
              </span>
            </div>
            <p className="mt-[18px] max-w-[34ch] text-[13.5px] leading-relaxed text-white/60">
              {t.tagline}
            </p>
            <div className="mt-[22px] flex gap-2.5">
              {company.social.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialLink}
                >
                  <SocialGlyph kind={s.key} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-white">
              {t.colCompany}
            </div>
            <div className="flex flex-col gap-[11px]">
              {t.company.map((l) => (
                <a key={l} href="#" className="text-[13.5px] text-white/65 hover:text-accent">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-white">
              {t.colSolutions}
            </div>
            <div className="flex flex-col gap-[11px]">
              {t.solutions.map((l) => (
                <a key={l} href="#solutions" className="text-[13.5px] text-white/65 hover:text-accent">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4 text-xs font-bold tracking-[0.14em] text-white">
              {t.colContact}
            </div>
            <div className="flex flex-col gap-3 text-[13.5px] text-white/65">
              <div>
                <span className="mb-0.5 block text-[11px] font-semibold text-accent">
                  {t.headOffice}
                </span>
                {company.address.full}
              </div>
              <a href={`tel:${company.phoneHrefs[0]}`} className="text-white/65 hover:text-accent">
                {company.phones[0]}
              </a>
              <a href={`mailto:${company.email}`} className="text-white/65 hover:text-accent">
                {company.email}
              </a>
              <div>{t.hours}</div>
            </div>
          </div>
        </div>

        <div className="mt-[52px] flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-[26px]">
          <div className="text-[12.5px] text-white/50">{t.copyright}</div>
          <div className="flex flex-wrap gap-5">
            {t.legal.map((l) => (
              <a key={l} href="#" className="text-[12.5px] text-white/50 hover:text-accent">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
