import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { motionFadeUpMs } from "@/lib/site-motion";

export function Projects() {
  const total = caseStudies.length;

  return (
    <section
      id="proyectos"
      className="relative bg-surface/30 py-9 md:py-[72px]"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className={`max-w-3xl ${motionFadeUpMs(20)}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Casos de éxito</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Del problema a la <span className="text-primary">solución</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
            {total} proyectos reales: resumen aquí; capturas y contexto ampliado en la página de cada caso.
          </p>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 grid lg:grid-cols-2 gap-5 md:gap-6">
          {caseStudies.map((p, i) => {
            const coverSrc = p.images[0] ?? "";
            return (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                aria-label={`Ver caso de éxito: ${p.title}`}
                className={`group relative flex min-w-0 w-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-linear-to-br from-primary/[0.06] via-background to-background/95 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-300 hover:border-primary/50 hover:shadow-[0_20px_48px_-20px_oklch(0.55_0.14_250/0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_*]:cursor-pointer ${motionFadeUpMs(32 + i * 48)}`}
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/18 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                  aria-hidden
                />

                {/* Cabecera: solo la captura (etiqueta e índice en esquinas, sin tapar el centro) */}
                <div className="relative isolate h-[min(52vw,220px)] w-full shrink-0 overflow-hidden bg-[oklch(0.08_0.02_260)] sm:h-[200px] md:h-[220px]">
                  {coverSrc ? (
                    <Image
                      src={coverSrc}
                      alt={`Captura de interfaz: ${p.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, min(720px, 50vw)"
                      className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                      quality={70}
                    />
                  ) : null}

                  <span className="absolute left-3 top-3 z-10 inline-flex max-w-[min(calc(100%-5rem),16rem)] items-center gap-1.5 rounded-full border-2 border-primary/55 bg-zinc-950 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-xs">
                    <Sparkles className="h-3 w-3 shrink-0 text-primary" strokeWidth={2.25} aria-hidden />
                    <span className="leading-tight text-white">{p.tag}</span>
                  </span>

                  <span className="absolute right-3 top-3 z-10 rounded-lg border-2 border-primary/55 bg-zinc-950 px-2 py-1 font-mono text-[10px] font-bold tabular-nums tracking-wide text-white shadow-md sm:right-4 sm:top-4 sm:px-2.5 sm:text-[11px]">
                    {String(i + 1).padStart(2, "0")}
                    <span className="font-medium text-zinc-400">/</span>
                    {String(total).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex w-full min-w-0 flex-1 flex-col border-t border-border/60 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 md:px-7 md:pb-7">
                  <h3 className="w-full min-w-0 max-w-full font-display text-lg font-semibold leading-snug tracking-tight text-wrap text-foreground transition-colors duration-200 group-hover:text-primary sm:text-xl md:text-balance md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 w-full min-w-0 max-w-full text-sm leading-relaxed text-muted-foreground sm:mt-3 md:text-[15px] md:leading-relaxed">
                    {p.cardSummary}
                  </p>

                  <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-primary/50 bg-primary/12 px-4 py-3 text-sm font-bold text-primary transition duration-200 group-hover:border-primary group-hover:bg-primary/18 group-hover:gap-2.5 sm:mt-6 sm:w-fit sm:justify-start sm:px-6">
                    Ver caso completo
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
