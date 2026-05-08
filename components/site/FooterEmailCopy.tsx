"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckGlyph, MailGlyph } from "@/components/site/SimpleIcons";
import { CONTACT_EMAIL } from "@/lib/contact";

export function FooterEmailCopy() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const handleCopy = useCallback(async () => {
    clearTimers();
    setFailed(false);
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      timeoutRef.current = setTimeout(() => setCopied(false), 2600);
    } catch {
      setFailed(true);
      timeoutRef.current = setTimeout(() => setFailed(false), 4000);
    }
  }, [clearTimers]);

  return (
    <div className="relative inline-flex shrink-0">
      <button
        type="button"
        onClick={handleCopy}
        className="h-11 w-11 cursor-pointer rounded-xl border-2 border-primary bg-surface/60 grid place-items-center text-primary hover:text-primary-foreground hover:bg-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-9 md:w-9 md:rounded-[10px] [&_svg]:size-[22px] md:[&_svg]:size-[18px] [&_*]:cursor-pointer"
        aria-label={copied ? "Email copiado al portapapeles" : "Copiar correo electrónico"}
        title="Copiar email"
      >
        {copied ? <CheckGlyph size={22} /> : <MailGlyph size={22} />}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 max-w-[min(100vw-2rem,16rem)] -translate-x-1/2 text-center text-xs transition-opacity duration-200 sm:left-auto sm:right-0 sm:translate-x-0 sm:text-right ${
          copied ? "text-primary font-medium opacity-100" : failed ? "text-destructive opacity-100" : "opacity-0"
        }`}
      >
        {copied ? "Copiado al portapapeles" : failed ? "No se pudo copiar. Probá de nuevo." : "\u00a0"}
      </p>
    </div>
  );
}
