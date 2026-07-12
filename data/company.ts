/**
 * Verified, language-neutral FMK Intertrade facts (brief §15).
 * Source: fmkintertrade.com. Do NOT add unverified figures, awards or
 * certifications here — those belong only after FMK confirms them.
 */
export const company = {
  legalName: "FMK Intertrade Company Limited",
  shortName: "FMK Intertrade",
  brandMark: "FM",
  url: "https://fmkintertrade.com",
  logo: "https://fmkintertrade.com/logo.png", // PLACEHOLDER — replace with the real logo asset URL
  address: {
    street: "142/36 Suksawitthaya Soi, Silom, Bangrak",
    city: "Bangkok",
    postalCode: "10500",
    country: "TH",
    full: "142/36 Suksawitthaya Soi, Silom, Bangrak, Bangkok 10500",
  },
  phones: ["+66 2 268 1681-2", "+66 98 498 9939"],
  /** Tel: hrefs (E.164-ish, digits only) matching the display numbers above. */
  phoneHrefs: ["+6622681681", "+66984989939"],
  email: "support@fmkintertrade.com",
  /** Verified social/contact channels (brief §12 sameAs). */
  social: [
    { key: "facebook", label: "Facebook", href: "https://www.facebook.com/fmkinter/" },
    { key: "youtube", label: "YouTube", href: "https://www.youtube.com/@fmkintertrade" },
    { key: "line", label: "LINE Official", href: "https://lin.ee/TO6iB48" },
    { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/message/QB6V7P56ZZEKL1" },
  ],
  /** Verified stats — derived only from the confirmed office list. */
  stats: {
    officesTH: 4,
    countries: 3,
  },
} as const;

export type Company = typeof company;
