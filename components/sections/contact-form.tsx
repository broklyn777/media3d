// components/sections/contact-form.tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type State =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

const initialState: State = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.ok) formRef.current?.reset();
  }, [state.ok]);

  const fe = state.ok ? {} : state.fieldErrors || {};

  return (
    <form ref={formRef} action={action} className="space-y-4">
      {/* Honeypot (anti-spam): ska vara tomt */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-fg/80">Namn</label>
        <Input name="name" placeholder="Ditt namn" autoComplete="name" />
        {fe.name && <p className="text-sm text-red-400">{fe.name}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm text-fg/80">E-post</label>
        <Input
          name="email"
          type="email"
          placeholder="namn@företag.se"
          autoComplete="email"
        />
        {fe.email && <p className="text-sm text-red-400">{fe.email}</p>}
      </div>

      <div className="space-y-1">
        <label className="text-sm text-fg/80">Meddelande</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Berätta kort om projektet…"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
        />
        {fe.message && <p className="text-sm text-red-400">{fe.message}</p>}
      </div>

      <div className="pt-2 flex items-center gap-3">
        <Button type="submit" disabled={pending}>
          {pending ? "Skickar…" : "Skicka"}
        </Button>

        {state.message ? (
          <p
            className={`text-sm ${state.ok ? "text-green-400" : "text-fg/70"}`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
