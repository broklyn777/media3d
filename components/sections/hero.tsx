import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="inline-flex items-center rounded-full border border-fg/10 bg-bg/60 px-3 py-1 text-xs text-fg/70">
            Klassisk design • Snabb leverans • Skalbar mall
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Bygg en elegant webbplats som funkar för nästan allt.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-fg/75">
            En proffsig start med UI-byggstenar, sections och tokens. Byt
            färger, text och innehåll — behåll strukturen.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg">Boka möte</Button>
            <Button size="lg" variant="secondary">
              Se case
            </Button>
            <Button size="lg" variant="ghost">
              Läs mer →
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-fg/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Designsystem-tänk</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>SEO- och prestandafokus</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Redo för dark mode</span>
            </div>
          </div>
        </div>

        {/* “Mock preview”-kort */}
        <div className="rounded-2xl border border-fg/10 bg-bg/60 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Projektöversikt</div>
            <div className="text-xs text-fg/60">v0.1</div>
          </div>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-fg/10 bg-bg p-4">
              <div className="text-xs text-fg/60">Status</div>
              <div className="mt-1 font-medium">Pågående</div>
              <div className="mt-3 h-2 rounded-full bg-fg/10">
                <div className="h-2 w-2/3 rounded-full bg-primary/70" />
              </div>
            </div>

            <div className="rounded-xl border border-fg/10 bg-bg p-4">
              <div className="text-xs text-fg/60">Nästa steg</div>
              <div className="mt-1 text-sm text-fg/80">
                Lägg till sections + forms, sen theme toggle.
              </div>
            </div>

            <div className="rounded-xl border border-fg/10 bg-bg p-4">
              <div className="text-xs text-fg/60">Highlight</div>
              <div className="mt-1 text-sm">
                <span className="text-accent font-medium">Accent</span> används
                sparsamt för elegans.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
