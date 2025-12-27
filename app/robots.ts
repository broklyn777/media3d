import type { MetadataRoute } from "next";

// ✅ Ändra till er riktiga domän
const siteUrl = "https://media3d.se";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // blocka interna/oviktiga paths om ni har såna:
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
