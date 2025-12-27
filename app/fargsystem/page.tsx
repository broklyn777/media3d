import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function FargsystemPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Färgsystem</h1>
      <p className="mt-2 text-fg/70">
        Tokens, opacity och exempel på användning (Alt A).
      </p>

      {/* Del 1: “Gamla startsidan” – hur färgerna används */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Tokens i praktiken</h2>
        <p className="mt-2 max-w-2xl text-fg/70">
          Basen är enkel: <span className="font-medium text-fg">bg/fg</span> för
          läsbarhet, <span className="font-medium text-primary">primary</span>{" "}
          för actions och{" "}
          <span className="font-medium text-accent">accent</span> för
          highlights.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button>Primary CTA</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-primary/8 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/12"
          >
            Till startsidan →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Background / Foreground</CardTitle>
              <CardDescription>Lugn bas + tydlig typografi.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border border-fg/10 bg-bg p-4">
                <div className="text-fg font-medium">Text (fg)</div>
                <div className="mt-1 text-sm text-fg/70">Muted (fg/70)</div>
                <div className="mt-3 h-2 rounded-full bg-fg/10" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Primary
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  actions
                </span>
              </CardTitle>
              <CardDescription>Knappar, länkar, fokus.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">Primary CTA</Button>
              <div className="rounded-xl border border-primary/20 bg-primary/10 p-4 text-primary">
                Subtil yta (primary/10)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Accent
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                  highlight
                </span>
              </CardTitle>
              <CardDescription>Sparsam värme som sticker ut.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border border-accent/25 bg-accent/10 p-4">
                <div className="text-sm font-medium text-accent">
                  Accent highlight
                </div>
                <div className="mt-1 text-sm text-fg/70">
                  Bra för badges, callouts och små detaljer.
                </div>
              </div>
              <div className="h-1 w-full rounded-full bg-accent/60" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Del 2: Din “tydliga demo” */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">
          Färgpalett (Alt A) – tydlig demo
        </h2>
        <p className="mt-2 text-fg/70">
          Samma tokens, men visade på ett sätt som gör skillnaderna synliga.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-fg/10 bg-bg p-6">
            <div className="text-sm font-semibold">Background (bg-bg)</div>
            <div className="mt-3 rounded-xl border border-fg/10 bg-bg p-6">
              <div className="text-fg font-medium">Text: text-fg</div>
              <div className="mt-1 text-fg/70 text-sm">Muted: text-fg/70</div>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-fg/10 px-3 py-1 text-xs text-fg">
                  fg/10 pill
                </span>
                <span className="rounded-full border border-fg/15 px-3 py-1 text-xs text-fg">
                  border-fg/15
                </span>
              </div>
            </div>
            <div className="mt-3 text-xs text-fg/70">
              rgb(247 247 245) • #f7f7f5
            </div>
          </div>

          <div className="rounded-2xl border border-fg/10 bg-bg p-6">
            <div className="text-sm font-semibold">Foreground (fg)</div>
            <div className="mt-3 rounded-xl bg-fg p-6 text-white">
              <div className="font-medium">Text on fg (white)</div>
              <div className="mt-1 text-white/80 text-sm">White/80</div>
            </div>
            <div className="mt-3 text-xs text-fg/70">
              rgb(31 41 51) • #1f2933
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-fg/10 bg-bg p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Primary</div>
              <div className="text-xs text-fg/70">rgb(30 58 138) • #1e3a8a</div>
            </div>

            <div className="mt-4 rounded-xl bg-primary p-6 text-white">
              <div className="font-medium">bg-primary (100%)</div>
              <div className="mt-1 text-white/80 text-sm">CTA / stark yta</div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 text-primary">
                <div className="text-sm font-medium">/10</div>
                <div className="text-xs opacity-80">highlight</div>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-primary">
                <div className="text-sm font-medium">/5</div>
                <div className="text-xs opacity-80">subtle</div>
              </div>
              <div className="rounded-xl border border-primary/30 bg-bg p-4 text-primary">
                <div className="text-sm font-medium">border</div>
                <div className="text-xs opacity-80">outline</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-fg/10 bg-bg p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Accent</div>
              <div className="text-xs text-fg/70">rgb(180 83 9) • #b45309</div>
            </div>

            <div className="mt-4 rounded-xl border border-accent/25 bg-accent/10 p-6 text-accent">
              <div className="font-medium">bg-accent/10 + text-accent</div>
              <div className="mt-1 text-sm text-fg/70">
                Accent funkar bäst som highlight, inte som hel bakgrund.
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs text-accent">
                  badge
                </span>
                <span className="rounded-full border border-accent/25 px-3 py-1 text-xs text-accent">
                  border
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  primary tint
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-accent p-6 text-white">
              <div className="font-medium">bg-accent (100%)</div>
              <div className="mt-1 text-white/85 text-sm">
                Bra för små callouts (men använd sparsamt).
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-fg/10 bg-bg p-6">
          <div className="text-sm font-semibold">Kombination i praktiken</div>
          <p className="mt-2 text-fg/70">
            Primary för actions, accent för highlight, fg för text och bg som
            bas.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded-xl bg-primary px-5 py-3 text-white shadow-sm hover:opacity-90">
              Primary CTA
            </a>
            <a className="rounded-xl border border-fg/15 px-5 py-3 text-fg hover:bg-fg/5">
              Secondary
            </a>
            <a className="rounded-xl bg-accent/10 px-5 py-3 text-accent hover:bg-accent/15">
              Accent highlight
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
