// lib/contact.ts
export const contact = {
  to: process.env.CONTACT_TO_EMAIL || "",
  from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
  subjectPrefix: process.env.CONTACT_SUBJECT_PREFIX || "[Contact]",
};

export function assertContactEnv() {
  if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  if (!contact.to) throw new Error("Missing CONTACT_TO_EMAIL");
}
