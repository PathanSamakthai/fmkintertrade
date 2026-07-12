import { company } from "@/data/company";

/**
 * Organization + WebSite JSON-LD (brief §12). ONLY verifiable fields are
 * included — no Review/Rating/Award/AggregateRating, no invented counts.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${company.url}/#organization`,
        name: company.legalName,
        url: company.url,
        logo: company.logo,
        email: company.email,
        telephone: company.phones[0],
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          postalCode: company.address.postalCode,
          addressCountry: company.address.country,
        },
        sameAs: company.social.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${company.url}/#website`,
        url: company.url,
        name: company.shortName,
        publisher: { "@id": `${company.url}/#organization` },
        inLanguage: ["en", "th"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline as structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
