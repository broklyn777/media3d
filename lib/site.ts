// lib/site.ts
const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "Media3d",
  url: envUrl || "https://media3d.vercel.app",
  title: "Media3d – Webbyrå för maximal design & SEO",
  description:
    "Vi bygger snabba Next.js-webbar med maximal design, konvertering och SEO.",
  locale: "sv_SE",
  ogImage: "/og.jpg",
  themeColor: "#0B0B0F",
  twitterHandle: "", // valfritt, kan vara tom
};
