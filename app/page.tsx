import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const SITE_URL = "https://media3d.example"; // byt sen

export const metadata: Metadata = {
  title: "Media3d – Webbdesign & utveckling",
  description:
    "Media3d bygger snabba, eleganta webbplatser med fokus på design, SEO och prestanda.",
  openGraph: {
    title: "Media3d – Webbdesign & utveckling",
    description:
      "Snabba, eleganta webbplatser med fokus på design, SEO och prestanda.",
    type: "website",
    url: SITE_URL,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Media3d",
      url: SITE_URL,
      email: "hej@media3d.se",
      sameAs: [], // lägg sociala länkar senare
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Media3d",
      url: SITE_URL,
      inLanguage: "sv-SE",
      publisher: {
        "@type": "Organization",
        name: "Media3d",
        url: SITE_URL,
      },
    },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <p className="inline-flex items-center rounded-full border border-fg/10 bg-bg/60 px-3 py-1 text-xs text-fg/70">
          Media3d • Webbutveckling & design
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Vi bygger snabba, eleganta webbplatser som konverterar.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg/75">
          Media3d hjälper företag med design, utveckling och innehåll. Tydlig
          process, stabilt UI och fokus på prestanda.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button size="lg">Boka möte</Button>
          <Link
            href="/case"
            className="inline-flex items-center rounded-xl border border-fg/15 px-5 py-3 text-sm font-medium text-fg hover:bg-fg/5"
          >
            Se case →
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center rounded-xl bg-primary/8 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/12"
          >
            Kontakta oss →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-fg/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Designsystem & UI</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>SEO & prestanda</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span>Next.js & skalbar kodbas</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Webbdesign</CardTitle>
              <CardDescription>Struktur, typografi och känsla.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-fg/75">
              Genomtänkta grids, tydlig hierarki och ett uttryck som känns
              premium utan att bli trendigt.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Utveckling</CardTitle>
              <CardDescription>Snabbt, stabilt, skalbart.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-fg/75">
              Next.js + komponentbaserat UI. Du får en kodbas som är lätt att
              vidareutveckla och underhålla.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Innehåll & SEO</CardTitle>
              <CardDescription>Synlighet och konvertering.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-fg/75">
              Teknisk SEO, struktur och copy som gör att du laddar snabbt och
              blir lättare att hitta.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-fg/10 bg-primary/8 p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Vill du ha en snygg och snabb webbplats?
            </h2>
            <p className="mt-2 text-fg/75">
              Berätta kort vad du behöver, så återkommer vi med ett upplägg.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Kontakta Media3d →
              </Link>
              <Link
                href="/fargsystem"
                className="inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
              >
                Se tokens →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
