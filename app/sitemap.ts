import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { LANGS } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((lang) => ({
    url: `${company.url}/${lang}`,
    changeFrequency: "monthly",
    priority: lang === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        LANGS.map((l) => [l, `${company.url}/${l}`]),
      ),
    },
  }));
}
