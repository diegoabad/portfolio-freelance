"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MailGlyph } from "@/components/site/SimpleIcons";
import { CONTACT_EMAIL } from "@/lib/contact";

type Variant = "card" | "pill";

/**
 * Copia el correo al portapapeles al tocar (evita que `mailto:` abra una pestaña nueva en muchos móviles).
 */
export function EmailCopySurface({ variant }: { variant: Variant }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => () => clearTimer(), [clearTimer]);

  const handleCopy = useCallback(async () => {
    clearTimer();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }, [clearTimer]);

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-w-0 max-w-full cursor-pointer items-center gap-2 rounded-full border-2 border-primary bg-surface/60 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/10 [&_*]:cursor-pointer"
        aria-label={copied ? "Correo copiado al portapapeles" : "Copiar correo electrónico"}
      >
        <MailGlyph size={16} className="shrink-0" />
        <span className="min-w-0 truncate">{copied ? "Copiado al portapapeles" : CONTACT_EMAIL}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 text-left transition hover:bg-surface md:p-6 backdrop-blur [&_*]:cursor-pointer"
      aria-label={copied ? "Correo copiado al portapapeles" : "Copiar correo electrónico"}
    >
      <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/15 text-primary grid place-items-center">
        <MailGlyph size={22} className="shrink-0" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
        <p className={`mt-1 truncate font-medium ${copied ? "text-primary" : "text-foreground"}`}>
          {copied ? "Copiado al portapapeles" : CONTACT_EMAIL}
        </p>
      </div>
    </button>
  );
}
