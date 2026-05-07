import { SparklesGlyph } from "@/components/site/SimpleIcons";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";

const heroMetrics = [
  { value: "4+", label: "Años de experiencia" },
  { value: "15+", label: "Proyectos" },
  { value: "-45%", label: "Tareas manuales" },
  { value: "+30%", label: "Eficiencia operativa" },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-40 md:pb-16 lg:pt-44 lg:pb-18 noise noise-motion"
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[130px] motion-safe:animate-[float-blob-a_24s_ease-in-out_infinite] motion-reduce:animate-none"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="motion-safe:animate-[fade-in-up_0.55s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none inline-block">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary bg-primary/20 px-2.5 py-1 pr-3 text-xs font-medium text-foreground backdrop-blur-sm">
              <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
              <span className="inline-flex shrink-0" aria-hidden>
                <SparklesGlyph size={13} className="text-primary" />
              </span>
              <span>
                Disponible para <span className="text-primary">nuevos proyectos</span>
              </span>
            </div>
          </div>

          <h1
            className="mt-6 md:mt-8 font-display max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl font-semibold text-foreground tracking-tight leading-[1.08] text-pretty motion-safe:animate-[hero-nudge-up_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
            style={{ animationDelay: "40ms" }}
          >
            Desarrollo{" "}
            <span className="text-primary">software a medida</span> para negocios que necesitan ir más allá
          </h1>

          <p
            className="mt-5 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed motion-safe:animate-[fade-in-up_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
            style={{ animationDelay: "140ms" }}
          >
            Trabajo como <span className="text-foreground/90 font-medium">partner técnico</span> ayudando a automatizar
            procesos, integrar sistemas y construir soluciones reales.
          </p>

          <div
            className="mt-8 md:mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 motion-safe:animate-[fade-in-up_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
            style={{ animationDelay: "210ms" }}
          >
            <a
              href={homeSection("#contacto")}
              className="relative inline-flex w-full min-h-12 items-center justify-center gap-2.5 rounded-full border-2 border-primary bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-[transform,opacity] duration-200 hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-8 sm:text-base sm:hover:scale-[1.02]"
              aria-label={`${PRIMARY_CTA_LABEL} — ir a contacto`}
            >
              <WhatsAppIcon size={22} className="shrink-0 text-primary-foreground" aria-hidden />
              {PRIMARY_CTA_LABEL}
            </a>
            <a
              href={homeSection("#proyectos")}
              className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border-2 border-primary bg-surface/60 px-6 py-3 text-sm font-medium text-primary transition duration-300 backdrop-blur hover:border-primary/60 hover:bg-primary/10 active:scale-[0.98] sm:w-auto sm:min-h-0 sm:hover:-translate-y-0.5"
            >
              Ver casos reales
            </a>
          </div>
        </div>

        <dl className="mt-10 md:mt-14 lg:mt-16 grid max-w-6xl grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {heroMetrics.map((item, i) => (
            <div
              key={`${item.value}-${item.label}`}
              className="group relative flex min-h-22 flex-col justify-center gap-1 rounded-xl border border-border bg-surface/45 p-3.5 shadow-[inset_0_1px_0_0_rgb(255_255_255/4%)] transition-all duration-300 hover:border-primary/35 hover:bg-surface/70 motion-safe:animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none sm:min-h-0 sm:gap-1 sm:rounded-2xl sm:p-5 sm:hover:-translate-y-1"
              style={{ animationDelay: `${280 + i * 75}ms` }}
            >
              <div
                className="pointer-events-none absolute inset-x-3 top-0 h-px bg-primary/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:inset-x-5"
                aria-hidden
              />
              <dt className="font-display text-2xl font-bold tabular-nums tracking-tight text-primary leading-none sm:text-3xl md:text-4xl">
                {item.value}
              </dt>
              <dd className="text-xs leading-snug text-muted-foreground sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
