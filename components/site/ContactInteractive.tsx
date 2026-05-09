"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
import { LINKEDIN_PROFILE_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { EmailCopySurface } from "@/components/site/EmailCopySurface";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";

function contactValidationError(name: string, need: string): string | null {
  const n = name.trim();
  const q = need.trim();
  if (!n) return "Ingresá tu nombre";
  if (n.length > 100) return "Nombre demasiado largo";
  if (!q) return "Contame qué necesitás resolver";
  if (q.length > 1000) return "El texto es demasiado largo";
  return null;
}

/** Isla cliente del bloque contacto (formulario + copiar email); el resto va en `Contact.tsx` servidor. */
export function ContactInteractive() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err = contactValidationError(name, need);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    const n = name.trim();
    const q = need.trim();
    const text = `Hola Diego, soy ${n}. Quiero resolver lo siguiente: ${q}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setName("");
    setNeed("");
  }

  return (
    <div className="mt-10 md:mt-12 grid md:grid-cols-5 md:items-stretch gap-5 md:gap-6">
      <div className="md:col-span-2 space-y-2.5 md:space-y-4">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel={REL_WHATSAPP_EXTERNAL}
          className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition hover:bg-surface md:gap-4 md:rounded-2xl md:p-6 backdrop-blur [&_p]:cursor-pointer"
        >
          <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/15 text-primary md:h-12 md:w-12 md:rounded-xl">
            <WhatsAppIcon size={18} className="md:hidden" />
            <WhatsAppIcon size={22} className="hidden md:block" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">WhatsApp</p>
            <p className="font-display font-semibold text-sm text-foreground truncate md:text-lg">+54 9 11 4149 9723</p>
          </div>
        </a>

        <a
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition hover:bg-surface md:gap-4 md:rounded-2xl md:p-6 backdrop-blur [&_p]:cursor-pointer"
        >
          <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/15 text-primary md:h-12 md:w-12 md:rounded-xl">
            <LinkedInGlyph size={18} className="md:hidden" />
            <LinkedInGlyph size={22} className="hidden md:block" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">LinkedIn</p>
            <p className="font-display font-semibold text-sm text-foreground truncate md:text-lg">/in/diegoabad-fullstack</p>
          </div>
        </a>

        <EmailCopySurface variant="card" />

        <div
          className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 backdrop-blur md:gap-4 md:rounded-2xl md:p-6"
          role="group"
          aria-label="Ubicación: Buenos Aires, Argentina"
        >
          <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/15 text-primary md:h-12 md:w-12 md:rounded-xl">
            <MapPin className="h-[18px] w-[18px] md:h-[22px] md:w-[22px]" strokeWidth={2} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">Ubicación</p>
            <p className="font-display font-semibold text-sm text-foreground text-pretty md:text-lg">
              Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:col-span-3 flex min-h-0 flex-col gap-4 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur sm:p-6 md:h-full md:gap-5 md:p-8"
        noValidate
      >
        <div className="shrink-0">
          <label className="text-xs uppercase tracking-wider text-muted-foreground">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            placeholder="Tu nombre"
            className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
          />
        </div>
        <div className="flex min-h-52 flex-1 flex-col gap-2 md:min-h-0">
          <label htmlFor="contact-mensaje" className="text-xs uppercase tracking-wider text-muted-foreground">
            Contame en qué puedo ayudarte
          </label>
          <div className="relative min-h-44 flex-1 md:min-h-0">
            <textarea
              id="contact-mensaje"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              maxLength={1000}
              placeholder="Ej.: automatizar consultas, un sistema interno, integrar herramientas…"
              className="absolute inset-0 box-border min-h-0 w-full resize-none rounded-xl bg-background/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition"
            />
          </div>
        </div>
        {error && <p className="shrink-0 text-sm text-destructive">{error}</p>}
        <button
          type="submit"
          disabled={!name.trim() || !need.trim()}
          className="mt-auto inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-95 transition disabled:opacity-45 disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          <WhatsAppIcon size={18} className="shrink-0 text-primary-foreground" />
          Charlemos
        </button>
      </form>
    </div>
  );
}
