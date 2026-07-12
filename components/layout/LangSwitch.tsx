import Link from "next/link";
import type { Lang } from "@/lib/types";

/** EN / TH route switch used in the top bar. Active language is highlighted. */
export function LangSwitch({ lang }: { lang: Lang }) {
  const base =
    "cursor-pointer rounded px-1.5 py-0.5 font-bold tracking-[0.08em] transition-colors";
  return (
    <span className="flex items-center gap-1.5">
      <Link
        href="/en"
        hrefLang="en"
        aria-current={lang === "en" ? "true" : undefined}
        className={`${base} ${lang === "en" ? "text-white" : "text-[#C9D6CE] hover:text-white"}`}
      >
        EN
      </Link>
      <span className="opacity-35">/</span>
      <Link
        href="/th"
        hrefLang="th"
        aria-current={lang === "th" ? "true" : undefined}
        className={`${base} ${lang === "th" ? "text-white" : "text-[#C9D6CE] hover:text-white"}`}
      >
        TH
      </Link>
    </span>
  );
}
