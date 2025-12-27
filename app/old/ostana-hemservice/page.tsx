import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://media3d.example"; // byt sen
const PAGE_URL = `${SITE_URL}/case/ostana-hemservice`;

export const metadata: Metadata = {
  title: "Östana Hemservice – teknisk översikt | Media3d",
  description:
    "Teknisk översikt: struktur, stack och designprinciper bakom Östana Hemservice. Byggt för snabb laddning och SEO-vänlig struktur.",
  openGraph: {
    title: "Östana Hemservice – teknisk översikt | Media3d",
    description:
      "Struktur, stack och principer bakom Östana Hemservice. Snabbt, rent och konverteringsfokuserat.",
    type: "article",
    url: PAGE_URL,
  },
};

export default function OstanaHemserviceCasePage() {
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Östana Hemservice",
    description:
      "Företagssajt med fokus på lokal SEO, tydliga tjänstesidor och ett enkelt kontaktflöde. Byggd för snabb laddning och bra struktur.",
    url: "https://ostanahemservice.se/",
    inLanguage: "sv-SE",
    creator: {
      "@type": "Organization",
      name: "Media3d",
      url: SITE_URL,
    },
    about: ["Hemservice", "Städ", "Lokala tjänster", "Företagssajt"],
    isPartOf: {
      "@type": "CollectionPage",
      name: "Media3d Case",
      url: `${SITE_URL}/case`,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case",
        item: `${SITE_URL}/case`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Östana Hemservice – teknisk översikt",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLd = [creativeWork, breadcrumbs];

  return (
    <article className="mx-auto max-w-4xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <p className="text-sm text-fg/70">
          <Link href="/case" className="text-primary hover:underline">
            Case
          </Link>{" "}
          <span className="text-fg/50">/</span> Teknisk översikt
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Östana Hemservice – teknisk översikt
        </h1>

        <p className="mt-3 text-fg/70">
          Företagssajt byggd för tydlig struktur, snabb laddning och lokal SEO.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Stack</h2>
          <ul className="mt-3 space-y-1 text-sm text-fg/70">
            <li>WordPress</li>
            <li>Elementor</li>
            <li>SEO + kontaktformulär (plugins)</li>
            <li>Optimerad för snabb laddning och lokal synlighet</li>
            <li>Optimering: bilder + prestanda</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Designprinciper</h2>
          <ul className="mt-3 space-y-1 text-sm text-fg/70">
            <li>Tydliga tjänstesidor + CTA</li>
            <li>Lokal SEO: rubriker + internlänkar</li>
            <li>Konsekvent typografi och spacing</li>
            <li>Snabba, enkla flöden</li>
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-fg/10 bg-bg p-6">
        <h2 className="text-base font-semibold">Struktur</h2>
        <p className="mt-2 text-sm text-fg/70">
          Sidan är uppbyggd för att göra det lätt att hitta tjänster, förstå
          erbjudandet snabbt och kontakta/boka utan friktion.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://ostanahemservice.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Besök sajten →
          </a>
        </div>
      </section>
    </article>
  );
}
