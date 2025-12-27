"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/case", label: "Case" },
  { href: "/om", label: "Om" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/fargsystem", label: "Färgsystem" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // stäng mobilmeny vid navigering
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur border-b border-fg/8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold">
              W
            </span>
            <span className="text-sm font-semibold tracking-tight">
              WebMall
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition",
                    active ? "text-fg font-medium" : "text-fg/70 hover:text-fg"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="ghost">Logga in</Button>
            <Button>Kontakta oss</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Öppna meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-fg/15 bg-bg/70"
          >
            <span className="sr-only">Meny</span>
            <div className="relative h-4 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-4 bg-fg transition",
                  open && "top-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-4 bg-fg transition",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-4 bg-fg transition",
                  open && "top-1.5 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-fg/8 bg-bg">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm transition",
                      active
                        ? "bg-fg/5 text-fg font-medium"
                        : "text-fg/80 hover:bg-fg/5 hover:text-fg"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 grid gap-2">
              <Button variant="secondary" className="w-full">
                Logga in
              </Button>
              <Button className="w-full">Kontakta oss</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
