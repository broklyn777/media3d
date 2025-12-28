// app/actions/contact.ts
"use server";

import { Resend } from "resend";
import { assertContactEnv, contact } from "@/lib/contact";

type ContactState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function clean(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

// Minimal, enkel “rate limit” (per server instance).
// Bra som baseline; vill du ha “riktig” rate-limit i prod kan vi koppla KV/Upstash senare.
const lastSent = new Map<string, number>();
function canSend(key: string, cooldownMs = 30_000) {
  const now = Date.now();
  const last = lastSent.get(key) ?? 0;
  if (now - last < cooldownMs) return false;
  lastSent.set(key, now);
  return true;
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    assertContactEnv();

    // Honeypot (bot-fälla): om denna fylls i -> avbryt “tyst”
    const company = String(formData.get("company") || "");
    if (company.trim().length > 0) {
      return { ok: true, message: "Tack! Vi återkommer snart." };
    }

    const name = clean(String(formData.get("name") || ""));
    const email = clean(String(formData.get("email") || ""));
    const message = clean(String(formData.get("message") || ""));

    const fieldErrors: Record<string, string> = {};
    if (!name) fieldErrors.name = "Skriv ditt namn.";
    if (!email || !isEmail(email))
      fieldErrors.email = "Skriv en giltig e-postadress.";
    if (!message || message.length < 5)
      fieldErrors.message = "Skriv ett meddelande (minst 5 tecken).";

    if (Object.keys(fieldErrors).length) {
      return {
        ok: false,
        message: "Kolla fälten och försök igen.",
        fieldErrors,
      };
    }

    // Rate limit per email (och fallback per IP har vi inte i Server Actions utan headers-setup)
    const key = email.toLowerCase();
    if (!canSend(key)) {
      return {
        ok: false,
        message: "Du skickade nyss ett meddelande. Vänta lite och försök igen.",
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const subject = `${contact.subjectPrefix} Nytt meddelande från ${name}`;

    const text = [`Namn: ${name}`, `E-post: ${email}`, "", message].join("\n");

    await resend.emails.send({
      from: `Kontakt – Media3d <${contact.from}>`,

      to: contact.to,
      replyTo: email, // så du kan svara direkt
      subject,
      text,
    });

    return { ok: true, message: "Tack! Ditt meddelande är skickat." };
  } catch (err) {
    return {
      ok: false,
      message:
        err instanceof Error
          ? `Något gick fel: ${err.message}`
          : "Något gick fel. Försök igen.",
    };
  }
}
