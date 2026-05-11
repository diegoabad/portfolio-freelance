import type { ReactNode } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { homeSection } from "@/lib/home-links";

/** Separación entre bloques (mismo ritmo que blog / casos de éxito). */
export const LANDING_SECTION =
  "mt-10 md:mt-12 border-t border-border pt-10 md:pt-12 scroll-mt-28";

export const landingH2Class =
  "mt-3 font-display text-xl font-semibold tracking-tight text-pretty text-foreground md:text-2xl";

export const landingBodyClass = "mt-6 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]";

/** Contenedor principal alineado a artículos del blog y fichas de proyecto. */
export function LandingReadingMain({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 border-b border-border bg-background">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">{children}</div>
      </div>
    </main>
  );
}

/** Lista de enlaces relacionados sin “caja” pesada. */
export function LandingRelatedNav({
  heading = "Explorá más soluciones",
  description = "Otros enfoques que suelen ir de la mano con lo que estás buscando.",
  links,
}: {
  heading?: string;
  description?: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <section className={`${LANDING_SECTION}`} aria-labelledby="landing-related-heading">
      <h2 id="landing-related-heading" className={landingH2Class}>
        {heading}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <ul className="mt-6 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              prefetch={false}
              className="group inline-flex py-2 text-sm font-medium text-foreground transition-colors hover:text-primary md:text-[15px]"
            >
              <span className="border-b border-transparent group-hover:border-primary/50">{l.label}</span>
              <span className="ml-1 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; intro?: string; items: string[] }
  | { type: "callout"; text: string }
  | { type: "calloutContact"; before: string; linkText: string; after: string };

/** @deprecated Prefer `<LandingReadingMain>`; se mantiene por si algún import legacy. */
export const LANDING_ARTICLE_MAX_CLASS = "mx-auto w-full max-w-3xl";

export function SectionKicker({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      <span className="text-primary">{n}</span>
      <span className="text-muted-foreground/70"> · </span>
      {children}
    </p>
  );
}

export function FaqBlocks({ blocks, className = "" }: { blocks: FaqBlock[]; className?: string }) {
  return (
    <div className={`space-y-4 text-sm leading-relaxed text-muted-foreground md:text-[15px] ${className}`}>
      {blocks.map((b, i) => {
        if (b.type === "p") {
          return (
            <p key={i} className="text-foreground/90">
              {b.text}
            </p>
          );
        }
        if (b.type === "ul") {
          return (
            <div key={i}>
              {b.intro && <p className="mb-2 font-medium text-foreground">{b.intro}</p>}
              <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
        if (b.type === "callout") {
          return (
            <p
              key={i}
              className="border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:text-[15px]"
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "calloutContact") {
          return (
            <p
              key={i}
              className="border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:text-[15px]"
            >
              {b.before}
              <Link href={homeSection("#contacto")} className="text-primary underline-offset-4 hover:underline">
                {b.linkText}
              </Link>
              {b.after}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

export const landingPrimaryCtaClass =
  "inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-6 py-3.5 text-center text-[15px] font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_var(--color-primary)] transition-[transform,opacity,box-shadow] hover:opacity-95 hover:shadow-[0_12px_36px_-10px_var(--color-primary)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-8 sm:text-base sm:hover:scale-[1.02]";

/** CTA principal de landings (WhatsApp o ruta interna). Pasá `sub` solo si querés una línea bajo el botón. */
export function LandingWaCta({
  href,
  rel,
  main,
  sub,
  hideWhatsAppIconMobile,
}: {
  href: string;
  rel?: string;
  main: string;
  /** Si no se pasa, no se muestra texto debajo del botón. */
  sub?: string;
  /** Oculta el ícono de WhatsApp debajo de `md` (útil en el hero en móvil). */
  hideWhatsAppIconMobile?: boolean;
}) {
  return (
    <div className="inline-flex w-full max-w-full flex-col items-center gap-1.5 self-start sm:w-fit sm:max-w-[min(100%,28rem)]">
      <Link href={href} rel={rel} className={landingPrimaryCtaClass} aria-label={`${main} — contacto`}>
        <WhatsAppIcon
          size={20}
          className={`shrink-0 text-primary-foreground ${hideWhatsAppIconMobile ? "hidden md:block" : ""}`}
          aria-hidden
        />
        {main}
      </Link>
      {sub ? (
        <p className="w-full text-center text-xs font-medium text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}
