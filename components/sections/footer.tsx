import Link from "next/link";

const links = [
  { href: "/case", label: "Case" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/fargsystem", label: "Färgsystem" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-fg/8 bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold">
                M
              </span>
              <div>
                <div className="text-sm font-semibold tracking-tight">
                  Media3d
                </div>
                <div className="text-xs text-fg/60">
                  Webbdesign & utveckling
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm text-fg/70">
              Vi bygger snabba, eleganta webbplatser med tydliga tokens,
              skalbart UI och fokus på prestanda.
            </p>

            <div className="mt-4 text-sm text-fg/70">
              <span className="text-fg/60">E-post:</span>{" "}
              <a
                className="text-primary hover:underline"
                href="mailto:hej@media3d.se"
              >
                hej@media3d.se
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold">Sidor</div>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-fg/70 hover:text-fg"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Small CTA / meta */}
          <div>
            <div className="text-sm font-semibold">Kontakt</div>

            <div className="mt-4 rounded-2xl border border-fg/10 bg-primary/8 p-4">
              <div className="text-sm font-medium">Redo att komma igång?</div>
              <p className="mt-1 text-sm text-fg/70">
                Skicka en rad så återkommer vi med ett upplägg.
              </p>

              <div className="mt-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Kontakta oss →
                </Link>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-fg/60">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Byggt med Next.js + Tailwind</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-fg/8 pt-6 text-sm text-fg/60 md:flex-row md:items-center md:justify-between">
          <div>© {year} Media3d. Alla rättigheter förbehållna.</div>
          <div className="flex gap-4">
            <Link href="/fargsystem" className="hover:text-fg">
              Tokens
            </Link>
            <a className="hover:text-fg" href="#">
              Integritet
            </a>
            <a className="hover:text-fg" href="#">
              Villkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
