// app/kontakt/page.tsx
import { makeMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = makeMetadata({
  title: "Kontakt",
  description: "Skicka ett meddelande så återkommer vi.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Kontakt</h1>
      <p className="mt-2 text-fg/70 max-w-2xl">
        Skicka ett meddelande så återkommer vi. Ju mer kontext du ger, desto
        snabbare kan vi hjälpa.
      </p>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>

      <div className="mt-10 text-sm text-fg/60">
        <p>
          Eller maila direkt:{" "}
          <a
            className="underline underline-offset-4"
            href="mailto:hej@media3d.se"
          >
            hej@media3d.se
          </a>
        </p>
      </div>
    </main>
  );
}
