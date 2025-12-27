export type CaseLink = { label: string; href: string };

export type CaseItem = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  externalUrl: string;

  // Bilder (ligger i /public)
  coverImage?: string; // visas på sidan
  ogImage?: string; // används för delning/SEO

  // Rikare teknisk översikt
  overviewIntro?: string;
  stack?: string[];
  principles?: string[];
  structureText?: string;

  // Extra knappar/länkar
  links?: CaseLink[];

  // JSON-LD about (valfritt)
  about?: string[];
};

export const cases: CaseItem[] = [
  {
    slug: "fl-studio-guide",
    title: "FL Studio Guide",
    subtitle: "Mini-guide + hub med workflow, övningar och resurser",
    excerpt:
      "Ett content-drivet projekt med tydlig struktur och undersidor. Fokus på enkel navigering, snabb laddning och en grund som är lätt att bygga ut.",
    externalUrl: "https://start-pkt.vercel.app/",
    // Bilder
    coverImage: "/case/fl-studio-guide/cover.png",
    ogImage: "/case/fl-studio-guide/og.png",

    // Bilder (lägg till senare om du vill)
    // coverImage: "/case/fl-studio-guide/cover.png",
    // ogImage: "/case/fl-studio-guide/og.png",

    overviewIntro:
      "Ett content-drivet projekt byggt för enkel navigering, snabb laddning och en struktur som är lätt att bygga ut.",
    stack: [
      "Next.js (App Router)",
      "Tailwind CSS + tokens (bg/fg/primary/accent)",
      "Komponentstruktur: UI + Sections",
      "Vercel hosting",
    ],
    principles: [
      "Låg kognitiv last: tydliga rubriker och korta block",
      "Konsekvent typografi och spacing",
      "Primary för actions, accent för highlights",
      "SEO: separata sidor + internlänkar",
    ],
    structureText:
      "Projektet är uppdelat i en guide-start, en hub för workflow/övningar och en resursdel, plus en kontaktsida. Detta gör innehållet lätt att scanna och lätt att expandera med fler guider.",
    links: [
      { label: "Besök sajten →", href: "https://start-pkt.vercel.app/" },
      { label: "Se hubben →", href: "https://start-pkt.vercel.app/fl-studio" },
    ],
    about: ["FL Studio", "Music Production", "Guide"],
  },

  {
    slug: "ostana-hemservice",
    title: "Östana Hemservice",
    subtitle: "Företagssajt med fokus på lokal SEO och konvertering",
    excerpt:
      "En ren och snabb företagswebb med tydliga tjänstesidor, kontaktflöde och struktur som funkar för lokal synlighet.",
    externalUrl: "https://ostanahemservice.se/",

    // Bilder
    coverImage: "/case/ostana-hemservice/cover.png",
    ogImage: "/case/ostana-hemservice/og.png",

    overviewIntro:
      "Företagssajt byggd för tydlig struktur, snabb laddning och lokal SEO.",
    stack: [
      "WordPress",
      "Elementor",
      "SEO + kontaktformulär (plugins)",
      "Optimerad för snabb laddning och lokal synlighet",
      "Optimering: bilder + prestanda",
    ],
    principles: [
      "Tydliga tjänstesidor + CTA",
      "Lokal SEO: rubriker + internlänkar",
      "Konsekvent typografi och spacing",
      "Snabba, enkla flöden",
    ],
    structureText:
      "Sidan är uppbyggd för att göra det lätt att hitta tjänster, förstå erbjudandet snabbt och kontakta/boka utan friktion.",
    links: [{ label: "Besök sajten →", href: "https://ostanahemservice.se/" }],
    about: ["Hemservice", "Städ", "Lokala tjänster", "Företagssajt"],
  },
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  return cases.find((c) => c.slug === slug);
}
