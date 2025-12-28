// lib/seo.ts
import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title?: string; // "Case"
  description?: string; // page description
  path?: string; // "/case/slug"
  image?: string; // "/og.jpg"
  noIndex?: boolean;
};

export function makeMetadata(input: SeoInput = {}): Metadata {
  const titleText = input.title ?? site.title;
  const description = input.description ?? site.description;

  // Behåll din template-beteende: "%s | Media3d"
  const title: Metadata["title"] = input.title
    ? `${input.title} | ${site.name}`
    : {
        default: site.title,
        template: `%s | ${site.name}`,
      };

  const canonical = input.path
    ? new URL(input.path, site.url)
    : new URL(site.url);
  const imagePath = input.image ?? site.ogImage;
  const imageUrl = new URL(imagePath, site.url);

  return {
    metadataBase: new URL(site.url),

    title,
    description,
    alternates: { canonical },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title: titleText,
      description,
      locale: site.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [imageUrl.toString()],
      creator: site.twitterHandle || undefined,
      title: titleText,
      description,
    },

    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
