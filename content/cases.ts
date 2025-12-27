export type CaseItem = {
  slug: string;
  title: string;
  subtitle: string; // kort rad för CardDescription
  excerpt: string; // längre text i kortet
  externalUrl: string; // länken till riktiga sajten
};

export const cases: CaseItem[] = [
  {
    slug: "fl-studio-guide",
    title: "FL Studio Guide",
    subtitle: "Mini-guide + hub med workflow, övningar och resurser",
    excerpt:
      "Ett content-drivet projekt med tydlig struktur och undersidor. Fokus på enkel navigering, snabb laddning och en grund som är lätt att bygga ut.",
    externalUrl: "https://start-pkt.vercel.app/",
  },
  {
    slug: "ostana-hemservice",
    title: "Östana Hemservice",
    subtitle: "Företagssajt med fokus på lokal SEO och konvertering",
    excerpt:
      "En ren och snabb företagswebb med tydliga tjänstesidor, kontaktflöde och struktur som funkar för lokal synlighet.",
    externalUrl: "https://ostanahemservice.se/",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}
