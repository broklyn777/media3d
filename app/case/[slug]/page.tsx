import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { cases, getCaseBySlug } from "@/content/cases";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://media3d.example";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);

  if (!c) {
    return {
      title: "Case saknas | Media3d",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${SITE_URL}/case/${c.slug}`;

  return {
    title: `${c.title} – teknisk översikt`,
    description: c.excerpt,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${c.title} – teknisk översikt | Media3d`,
      description: c.excerpt,
      type: "article",
      url: pageUrl,
      images: c.ogImage
        ? [{ url: c.ogImage, width: 1200, height: 630, alt: c.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.title} – teknisk översikt | Media3d`,
      description: c.excerpt,
      images: c.ogImage ? [c.ogImage] : undefined,
    },
  };
}

export default async function CaseSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return notFound();

  const pageUrl = `${SITE_URL}/case/${c.slug}`;

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: c.title,
    description: c.excerpt,
    url: c.externalUrl,
    inLanguage: "sv-SE",
    creator: { "@type": "Organization", name: "Media3d", url: SITE_URL },
    about: c.about ?? [],
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
        name: `${c.title} – teknisk översikt`,
        item: pageUrl,
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
          {c.title} – teknisk översikt
        </h1>

        <p className="mt-3 text-fg/70">{c.overviewIntro ?? c.excerpt}</p>
      </header>

      {c.coverImage ? (
        <div className="mt-8 overflow-hidden rounded-2xl border border-fg/10">
          <Image
            src={c.coverImage}
            alt={c.title}
            className="w-full h-auto"
            priority
            width={1200}
            height={600}
          />
        </div>
      ) : null}

      {c.stack?.length || c.principles?.length ? (
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {c.stack?.length ? (
            <div className="rounded-2xl border border-fg/10 bg-bg p-6">
              <h2 className="text-base font-semibold">Stack</h2>
              <ul className="mt-3 space-y-1 text-sm text-fg/70">
                {c.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {c.principles?.length ? (
            <div className="rounded-2xl border border-fg/10 bg-bg p-6">
              <h2 className="text-base font-semibold">Designprinciper</h2>
              <ul className="mt-3 space-y-1 text-sm text-fg/70">
                {c.principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {c.structureText ? (
        <section className="mt-6 rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Struktur</h2>
          <p className="mt-2 text-sm text-fg/70">{c.structureText}</p>

          {c.links?.length ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {c.links.map((l) => {
                const isExternal = l.href.startsWith("http");
                return isExternal ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      l.href === c.externalUrl
                        ? "inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                        : "inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
                    }
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </section>
      ) : (
        <section className="mt-6 rounded-2xl border border-fg/10 bg-bg p-6">
          <h2 className="text-base font-semibold">Länkar</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={c.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Besök sajten →
            </a>
          </div>
        </section>
      )}

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
