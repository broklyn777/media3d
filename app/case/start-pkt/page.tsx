import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://media3d.example"; // byt sen
const PAGE_URL = `${SITE_URL}/case/start-pkt`;

export const metadata: Metadata = {
  title: "FL Studio Guide – teknisk översikt | Media3d",
  description:
    "Teknisk översikt: struktur, stack och designprinciper bakom FL Studio Guide. Byggt för snabb laddning och SEO-vänlig sidstruktur.",
  openGraph: {
    title: "FL Studio Guide – teknisk översikt | Media3d",
    description:
      "Struktur, stack och principer bakom FL Studio Guide. Snabbt, rent och skalbart.",
    type: "article",
    url: PAGE_URL,
  },
};

export default function StartPktCasePage() {
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "FL Studio Guide",
    description:
      "En mini-guide och hub med workflow/övningar och resurser. Byggd för tydlig struktur, snabb laddning och skalbar content-struktur.",
    url: "https://start-pkt.vercel.app/",
    inLanguage: "sv-SE",
    creator: {
      "@type": "Organization",
      name: "Media3d",
      url: SITE_URL,
    },
    about: ["FL Studio", "Music Production", "Guide"],
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
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case",
        item: `${SITE_URL}/case`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "FL Studio Guide – teknisk översikt",
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
          FL Studio Guide – teknisk översikt
        </h1>

        <p className="mt-3 text-fg/70">
          Ett content-drivet projekt byggt för enkel navigering, snabb laddning
          och en struktur som är lätt att bygga ut.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Stack</h2>
          <ul className="mt-3 space-y-1 text-sm text-fg/70">
            <li>Next.js (App Router)</li>
            <li>Tailwind CSS + tokens (bg/fg/primary/accent)</li>
            <li>Komponentstruktur: UI + Sections</li>
            <li>Vercel hosting</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Designprinciper</h2>
          <ul className="mt-3 space-y-1 text-sm text-fg/70">
            <li>Låg kognitiv last: tydliga rubriker och korta block</li>
            <li>Konsekvent typografi och spacing</li>
            <li>Primary för actions, accent för highlights</li>
            <li>SEO: separata sidor + internlänkar</li>
          </ul>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-fg/10 bg-bg p-6">
        <h2 className="text-base font-semibold">Struktur</h2>
        <p className="mt-2 text-sm text-fg/70">
          Projektet är uppdelat i en guide-start, en hub för workflow/övningar
          och en resursdel, plus en kontaktsida. Detta gör innehållet lätt att
          scanna och lätt att expandera med fler guider.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://start-pkt.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Besök sajten →
          </a>
          <a
            href="https://start-pkt.vercel.app/fl-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
          >
            Se hubben →
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-fg/10 bg-primary/8 p-6">
        <h2 className="text-base font-semibold">Nästa steg</h2>
        <p className="mt-2 text-sm text-fg/70">
          Vill du ha en liknande struktur för ditt företag (snabb, skalbar och
          SEO-vänlig)? Hör av dig så tar vi fram ett upplägg.
        </p>
        <div className="mt-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Kontakta Media3d →
          </Link>
        </div>
      </section>
    </article>
  );
}
