"use client";

import { useState } from "react";
import { z } from "zod";
import { Linkedin } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { LINKEDIN_PROFILE_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { EmailCopySurface } from "@/components/site/EmailCopySurface";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { RevealStagger } from "@/components/site/RevealStagger";

const schema = z.object({
  name: z.string().trim().min(1, "Ingresá tu nombre").max(100),
  need: z.string().trim().min(1, "Contame qué necesitás resolver").max(1000),
});

export function Contact() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse({ name, need });
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Revisá los datos");
      return;
    }
    setError(null);
    const text = `Hola Diego, soy ${r.data.name}. Quiero resolver lo siguiente: ${r.data.need}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setName("");
    setNeed("");
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-border pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-16"
    >
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/12 blur-[130px]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Contacto</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight text-pretty">
              ¿Tenés una <span className="text-primary">idea o problema</span> que querés resolver?
            </h2>
            <p className="mt-4 md:mt-5 text-lg text-muted-foreground leading-relaxed">
              Contame qué necesitás y te propongo una solución concreta con próximos pasos claros.
            </p>
          </div>
        </RevealOnScroll>

        <RevealStagger className="mt-10 md:mt-12 grid md:grid-cols-5 gap-5 md:gap-6">
          <div className="md:col-span-2 space-y-3 md:space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 md:p-6 hover:bg-surface transition backdrop-blur [&_p]:cursor-pointer"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center shrink-0">
                <WhatsAppIcon size={22} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Más rápido</p>
                <p className="font-display font-semibold text-lg text-foreground">WhatsApp</p>
              </div>
            </a>

            <a
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 md:p-6 hover:bg-surface transition backdrop-blur [&_p]:cursor-pointer"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center shrink-0">
                <Linkedin size={22} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Profesional</p>
                <p className="font-display font-semibold text-lg text-foreground">LinkedIn</p>
              </div>
            </a>

            <EmailCopySurface variant="card" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 rounded-2xl border border-border bg-surface/60 backdrop-blur p-5 sm:p-6 md:p-8 space-y-4 md:space-y-5"
            noValidate
          >
            <div>
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
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Contame qué necesitás</label>
              <textarea
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                maxLength={1000}
                rows={4}
                placeholder="Ej.: automatizar consultas por WhatsApp, un sistema interno, integrar herramientas…"
                className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none"
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button
              type="submit"
              disabled={!name.trim() || !need.trim()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow hover:opacity-95 transition disabled:opacity-45 disabled:pointer-events-none disabled:cursor-not-allowed"
            >
              <WhatsAppIcon size={18} className="shrink-0 text-primary-foreground" />
              Hablar por WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Respuesta directa, sin compromiso.
            </p>
          </form>
        </RevealStagger>
      </div>
    </section>
  );
}
