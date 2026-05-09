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
        className="inline-flex min-w-0 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-background/70 px-4 py-2.5 text-sm font-medium text-primary backdrop-blur-sm transition hover:bg-primary/10 [&_*]:cursor-pointer"
        aria-label={copied ? "Correo copiado al portapapeles" : `Copiar correo electrónico (${CONTACT_EMAIL})`}
        title={CONTACT_EMAIL}
      >
        <MailGlyph size={16} className="shrink-0" />
        <span className="truncate">{copied ? "Copiado" : "Email"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 text-left transition hover:bg-surface md:gap-4 md:rounded-2xl md:p-6 backdrop-blur [&_*]:cursor-pointer"
      aria-label={copied ? "Correo copiado al portapapeles" : "Copiar correo electrónico"}
    >
      <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/15 text-primary md:h-12 md:w-12 md:rounded-xl">
        <MailGlyph size={18} className="shrink-0 md:hidden" />
        <MailGlyph size={22} className="shrink-0 hidden md:block" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">Email</p>
        <p
          className={`truncate text-sm font-medium md:mt-1 md:text-base ${copied ? "text-primary" : "text-foreground"}`}
        >
          {copied ? "Copiado al portapapeles" : CONTACT_EMAIL}
        </p>
      </div>
    </button>
  );
}
