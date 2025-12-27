import type { MetadataRoute } from "next";

// ✅ Ändra till er riktiga domän
const siteUrl = "https://media3d.se";

// Exempel: om ni har case i en lista någonstans.
// Byt till er riktiga källa (t.ex. en lokal array, CMS, JSON, DB).
async function getCases() {
  // return [{ slug: "start-pkt", updatedAt: "2025-12-26" }, ...]
  return [
    { slug: "start-pkt", updatedAt: "2025-12-26" },
    // lägg fler...
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cases = await getCases();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/case`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // lägg till fler statiska sidor här om ni har:
    // { url: `${siteUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${siteUrl}/case/${c.slug}`,
    lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
