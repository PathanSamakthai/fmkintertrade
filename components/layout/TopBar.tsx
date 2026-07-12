import type { Dictionary } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { LangSwitch } from "./LangSwitch";

/** Corporate top bar — brand, region string, tagline, language switch (§01). */
export function TopBar({ dict, lang }: { dict: Dictionary; lang: Lang }) {
  return (
    <div className="bg-primary-950 text-xs tracking-[0.02em] text-[#C9D6CE]">
      <div className="mx-auto flex h-[38px] max-w-container items-center justify-between gap-4 px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="font-bold tracking-[0.14em] text-accent">
            FMK INTERTRADE
          </span>
          <span className="opacity-40">|</span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {dict.topbar.locations}
          </span>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3.5">
          <span className="hidden opacity-80 sm:inline">
            {dict.topbar.tagline}
          </span>
          <LangSwitch lang={lang} />
        </div>
      </div>
    </div>
  );
}
