import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/cases";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Case | Media3d",
  description:
    "Projekt och exempel på hur Media3d bygger design och SEO i praktiken.",
};

export default function CasePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Case</h1>
      <p className="mt-2 max-w-2xl text-fg/70">
        Projekt och experiment som visar hur vi jobbar med struktur, design och
        SEO.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <Card key={c.slug}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{c.subtitle}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-fg/75">{c.excerpt}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={c.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Besök sajten →
                </a>

                <Link
                  href={`/case/${c.slug}`}
                  className="inline-flex items-center rounded-xl border border-fg/15 px-4 py-2 text-sm font-medium text-fg hover:bg-fg/5"
                >
                  Teknisk översikt →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
