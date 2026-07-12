"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { Icon, Arrow } from "@/components/ui/Icon";
import { useConsultation } from "@/components/providers/ConsultationProvider";

function LogoMark() {
  return (
    <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] bg-primary text-[18px] font-extrabold tracking-[-0.02em] text-accent">
      FM
    </span>
  );
}

export function Header({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useConsultation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Esc for the off-canvas menu.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const openConsult = () => {
    setMenuOpen(false);
    openModal();
  };

  return (
    <header
      className="sticky top-0 z-[1000] border-b border-line backdrop-blur-[14px] transition-[padding,box-shadow,background] duration-300"
      style={{
        background: scrolled ? "rgba(244,247,245,.94)" : "rgba(244,247,245,.86)",
        boxShadow: scrolled ? "0 8px 30px rgba(11,47,34,.10)" : "none",
      }}
    >
      <div
        className="mx-auto flex max-w-container items-center gap-6 px-6 transition-[padding] duration-300"
        style={{ paddingTop: scrolled ? 9 : 14, paddingBottom: scrolled ? 9 : 14 }}
      >
        <Link
          href="#top"
          aria-label="FMK Intertrade home"
          className="flex flex-shrink-0 items-center gap-3"
        >
          <LogoMark />
          <span className="flex flex-col leading-[1.1]">
            <span className="text-base font-extrabold tracking-[0.04em] text-primary">
              FMK INTERTRADE
            </span>
            <span className="text-[11px] tracking-[0.03em] text-muted">
              {dict.brandDescriptor}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 min-[1120px]:flex"
        >
          {dict.nav.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="rounded-[8px] px-3 py-[9px] text-sm font-semibold text-secondary transition-colors hover:bg-primary/[0.06] hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openModal}
          className="ml-1.5 hidden items-center gap-2 rounded-[10px] bg-primary px-[18px] py-[11px] text-sm font-bold text-white shadow-[0_4px_16px_rgba(11,47,34,.18)] transition-[background,transform] hover:-translate-y-px hover:bg-primary-800 min-[1120px]:inline-flex"
        >
          {dict.cta.consult}
          <Arrow size={16} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-[10px] border border-line bg-white text-primary min-[1120px]:hidden"
        >
          <Icon name="menu" size={22} strokeWidth={1.8} />
        </button>
      </div>

      {menuOpen && (
        <MobileMenu
          dict={dict}
          lang={lang}
          onClose={() => setMenuOpen(false)}
          onConsult={openConsult}
        />
      )}
    </header>
  );
}

function MobileMenu({
  dict,
  lang,
  onClose,
  onConsult,
}: {
  dict: Dictionary;
  lang: Lang;
  onClose: () => void;
  onConsult: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[1500] flex justify-end">
      <div
        className="absolute inset-0 bg-primary-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="relative flex h-full w-[min(360px,86vw)] flex-col overflow-y-auto bg-background p-[22px] shadow-[-20px_0_60px_rgba(6,27,20,.3)]"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[15px] font-extrabold tracking-[0.04em] text-primary">
            FMK INTERTRADE
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-line bg-white text-primary"
          >
            <Icon name="close" size={22} strokeWidth={1.8} />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-col gap-0.5">
          {dict.nav.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              onClick={onClose}
              className="border-b border-line px-3 py-3.5 text-[17px] font-semibold text-ink transition-colors hover:bg-white hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onConsult}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[11px] bg-primary px-4 py-[15px] text-[15px] font-bold text-white"
        >
          {dict.cta.consult}
        </button>

        <div className="mt-auto flex gap-2 pt-6">
          <Link
            href="/en"
            hrefLang="en"
            className={`flex-1 rounded-[9px] border border-line py-[11px] text-center text-sm font-bold text-primary ${lang === "en" ? "bg-primary/[0.06]" : "bg-white"}`}
          >
            EN
          </Link>
          <Link
            href="/th"
            hrefLang="th"
            className={`flex-1 rounded-[9px] border border-line py-[11px] text-center text-sm font-bold text-primary ${lang === "th" ? "bg-primary/[0.06]" : "bg-white"}`}
          >
            TH
          </Link>
        </div>
      </div>
    </div>
  );
}
