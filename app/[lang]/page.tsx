import { getDictionary } from "@/lib/i18n";
import { StructuredData } from "@/components/seo/StructuredData";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { About } from "@/components/home/About";
import { Solutions } from "@/components/home/Solutions";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyFMK } from "@/components/home/WhyFMK";
import { RegionalNetwork } from "@/components/home/RegionalNetwork";
import { Knowledge } from "@/components/home/Knowledge";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Partners / Client Trust section is intentionally disabled until FMK confirms
 * real client/partner logos, certifications or distribution rights (brief §10).
 */
const SHOW_PARTNERS = false;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <StructuredData />
      <span id="top" />
      <main id="main">
        <Hero dict={dict} />
        <TrustBar dict={dict} />
        <About dict={dict} />
        <Solutions dict={dict} />
        <FeaturedProjects dict={dict} />
        <WhyFMK dict={dict} />
        <RegionalNetwork dict={dict} />
        {/*
          Partners / Client Trust — add <PartnersSection dict={dict} /> here and
          flip SHOW_PARTNERS once real logos/certifications are confirmed.
        */}
        {SHOW_PARTNERS ? <section aria-label="Partners" /> : null}
        <Knowledge dict={dict} />
        <FinalCTA dict={dict} />
      </main>
    </>
  );
}
