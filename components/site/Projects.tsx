import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

/** Misma escala visual que los chips de la sección Servicios. */
const caseStudyChipClass =
  "inline-flex max-w-full items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-medium leading-tight text-primary/95 md:text-[11px]";

export function Projects() {
  const total = caseStudies.length;

  return (
    <section
      id="proyectos"
      className="relative bg-surface/30 py-9 md:py-[72px]"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Casos de éxito</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Del problema a la <span className="text-primary">solución</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
            {total} proyectos reales: resumen aquí; capturas y contexto ampliado en la página de cada caso.
          </p>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 grid lg:grid-cols-2 gap-5 md:gap-6">
          {caseStudies.map((p, i) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              aria-label={`Ver caso de éxito: ${p.title}`}
              className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border-2 border-border bg-linear-to-br from-primary/[0.07] via-background/90 to-background/70 p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300 hover:border-primary/50 hover:shadow-[0_20px_48px_-20px_oklch(0.55_0.14_250/0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-0 sm:p-7 md:p-8 [&_*]:cursor-pointer"
            >
              {/* Halo decorativo (misma idea que cards de servicios) */}
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full bg-linear-to-b from-primary via-primary/70 to-primary/25 opacity-90"
                aria-hidden
              />

              <div className="relative flex min-h-0 flex-1 flex-col pl-4 sm:pl-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="inline-flex max-w-[min(100%,14rem)] items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-3 py-1.5 text-xs font-semibold text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)] sm:max-w-[calc(100%-5rem)]">
                    <Sparkles className="h-3.5 w-3.5 shrink-0 opacity-90" strokeWidth={2.25} aria-hidden />
                    <span className="leading-tight">{p.tag}</span>
                  </span>
                  <span className="shrink-0 rounded-lg border border-primary/30 bg-background/80 px-2.5 py-1 font-mono text-[11px] font-bold tabular-nums tracking-wide text-primary shadow-sm sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                    <span className="font-medium text-muted-foreground">/</span>
                    {String(total).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary md:mt-6 md:text-2xl">
                  {p.title}
                </h3>

                <ul
                  className="mt-2.5 flex list-none flex-wrap gap-1.5 content-start md:mt-3"
                  aria-label="Ventajas destacadas del proyecto"
                >
                  {p.cardChips.map((chip, ci) => (
                    <li key={`${p.slug}-${ci}-${chip}`}>
                      <span className={caseStudyChipClass}>{chip}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:mt-3.5 md:text-[15px] md:leading-relaxed">
                  {p.cardSummary}
                </p>

                <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-primary/50 bg-primary/12 py-3 text-sm font-bold text-primary transition duration-200 group-hover:border-primary group-hover:bg-primary/18 group-hover:gap-2.5 sm:mt-7 sm:w-fit sm:px-6">
                  Ver caso completo
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
