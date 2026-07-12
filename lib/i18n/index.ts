import { en, type Dictionary } from "./en";
import { th } from "./th";
import type { Lang } from "@/lib/types";

export const LANGS: Lang[] = ["en", "th"];
export const DEFAULT_LANG: Lang = "en";

const dictionaries: Record<Lang, Dictionary> = { en, th };

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

/** Resolve the content dictionary for a language, falling back to the default. */
export function getDictionary(lang: string): Dictionary {
  return isLang(lang) ? dictionaries[lang] : dictionaries[DEFAULT_LANG];
}

export type { Dictionary };
