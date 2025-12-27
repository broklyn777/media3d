import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Kontakt</h1>
      <p className="mt-2 text-fg/70">Skicka ett meddelande så återkommer vi.</p>

      <div className="mt-8 max-w-xl space-y-3">
        <Input placeholder="Namn" />
        <Input type="email" placeholder="E-post" />
        <Input placeholder="Meddelande (lägg Textarea sen)" />

        <div className="pt-2">
          <Button>Skicka</Button>
        </div>
      </div>
    </main>
  );
}
