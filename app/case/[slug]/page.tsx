import type { Metadata } from "next";

const siteUrl = "https://media3d.se";

// Byt till er källa
async function getCaseBySlug(slug: string) {
  return {
    slug,
    title: "Start PKT",
    excerpt: "En snabb landningssida med fokus på tydlig konvertering.",
    coverImage: "/case/start-pkt/og.jpg",
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseBySlug(slug);

  const url = `${siteUrl}/case/${slug}`;

  return {
    title: c.title,
    description: c.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: c.title,
      description: c.excerpt,
      url,
      images: c.coverImage ? [{ url: c.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.excerpt,
      images: c.coverImage ? [c.coverImage] : undefined,
    },
  };
}
