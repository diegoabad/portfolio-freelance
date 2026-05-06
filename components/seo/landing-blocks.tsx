import type { ReactNode } from "react";
import Link from "next/link";
import { homeSection } from "@/lib/home-links";

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; intro?: string; items: string[] }
  | { type: "callout"; text: string }
  | { type: "calloutContact"; before: string; linkText: string; after: string };

/** Ancho del cuerpo alineado al contenedor del Nav (`max-w-7xl` + padding en la página). */
export const LANDING_ARTICLE_MAX_CLASS = "w-full";

export function SectionKicker({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="text-muted-foreground/80">{n}</span> · {children}
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
              className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-medium text-foreground"
            >
              {b.text}
            </p>
          );
        }
        if (b.type === "calloutContact") {
          return (
            <p
              key={i}
              className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-medium text-foreground"
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
  "inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary px-6 py-3.5 text-center text-[15px] font-semibold text-primary-foreground shadow-[0_8px_32px_-8px_var(--color-primary)] transition-[transform,opacity,box-shadow] hover:opacity-95 hover:shadow-[0_12px_36px_-10px_var(--color-primary)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-8 sm:text-base sm:hover:scale-[1.02]";
