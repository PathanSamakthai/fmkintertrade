import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { getDictionary, isLang, LANGS, DEFAULT_LANG } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import { company } from "@/data/company";
import { ConsultationProvider } from "@/components/providers/ConsultationProvider";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const canonicalLang = isLang(lang) ? lang : DEFAULT_LANG;

  return {
    metadataBase: new URL(company.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${canonicalLang}`,
      languages: { en: "/en", th: "/th" },
    },
    openGraph: {
      type: "website",
      siteName: company.shortName,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${company.url}/${canonicalLang}`,
      locale: canonicalLang === "th" ? "th_TH" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const resolved: Lang = isLang(lang) ? lang : DEFAULT_LANG;
  const dict = getDictionary(resolved);

  return (
    <html lang={resolved} className={fontVariables}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-2 focus:z-[2000] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.skip}
        </a>

        <ConsultationProvider lang={resolved} dict={dict}>
          <TopBar dict={dict} lang={resolved} />
          <Header dict={dict} lang={resolved} />
          {children}
          <Footer dict={dict} />
        </ConsultationProvider>

        <RevealObserver />
      </body>
    </html>
  );
}
