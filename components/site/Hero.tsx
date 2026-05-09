import Image from "next/image";
import { BarChart3, Code2, Play, Share2, Zap } from "lucide-react";
import { HERO_NAV_CTA_LABEL, REL_WHATSAPP_EXTERNAL, whatsAppHref } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

/** Asset en `public/`. Si cambiás la foto y el navegador sigue mostrando la vieja, renombrá el archivo (el optimizador de Next cachea por URL). */
const HERO_DECOR_SRC = "/hero-decor.png";

const heroFeatures = [
  {
    icon: Code2,
    title: "Software a medida",
    description: "Soluciones adaptadas a tu negocio",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Procesos más eficientes, menos tareas manuales",
  },
  {
    icon: Share2,
    title: "Integraciones",
    description: "Conectá tus herramientas y sistemas",
  },
  {
    icon: BarChart3,
    title: "Resultados reales",
    description: "Tecnología que impacta tu negocio",
  },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-18 lg:pt-44 lg:pb-20 noise noise-motion"
    >
      {/* Imagen ancha hasta la derecha; máscara larga para que no “corte de golpe” con el texto */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-1 left-[28%] sm:left-[34%] md:left-[38%] lg:left-[40%] xl:left-[42%]"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-[0.28] max-md:opacity-[0.21] mask-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_12%,rgba(0,0,0,0.65)_32%,black_52%,black_88%,rgba(0,0,0,0.35)_100%),linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.2)_12%,rgba(0,0,0,0.65)_32%,black_52%,black_88%,rgba(0,0,0,0.35)_100%),linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] mask-intersect [-webkit-mask-composite:source-in] mask-[100%_100%,100%_100%]"
        >
          <Image
            src={HERO_DECOR_SRC}
            alt=""
            fill
            priority
            quality={68}
            className="object-cover object-[52%_44%] sm:object-[48%_48%] md:object-[6%_56%] lg:object-[4%_55%]"
            sizes="(max-width:767px) 72vw, (max-width:1536px) 42vw, 680px"
          />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.3)_28%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.38)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 z-3 h-[min(38vh,300px)] bg-linear-to-t from-background via-[color-mix(in_oklab,var(--background)_45%,transparent)] to-transparent"
          aria-hidden
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-2 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_88%,transparent)_28%,color-mix(in_oklab,var(--background)_35%,transparent)_46%,color-mix(in_oklab,var(--background)_8%,transparent)_62%,transparent_82%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-32 right-0 z-0 h-[420px] w-[min(55vw,520px)] opacity-[0.07] blur-[100px] md:opacity-[0.09]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-primary" />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-6 lg:px-10">
        <div className="min-w-0 max-w-4xl">
            <h1
              className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground text-pretty sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl motion-safe:animate-[hero-nudge-up_0.6s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
              style={{ animationDelay: "40ms" }}
            >
              Desarrollo de <span className="text-primary">software</span> a medida para negocios que quieren crecer.
            </h1>

            <p
              className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-7 md:text-xl motion-safe:animate-[fade-in-up_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
              style={{ animationDelay: "120ms" }}
            >
              Ayudo a empresas a automatizar procesos, integrar sistemas y construir soluciones que generan{" "}
              <span className="font-medium text-primary">resultados reales</span>.
            </p>

            <div
              className="mt-8 grid w-full grid-cols-1 gap-y-3 motion-safe:animate-[fade-in-up_0.65s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none sm:mt-10 sm:w-max sm:grid-cols-[auto_auto] sm:items-stretch sm:gap-x-4 sm:gap-y-2"
              style={{ animationDelay: "200ms" }}
            >
              <a
                href={homeSection("#proyectos")}
                className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-foreground/35 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-foreground transition hover:border-foreground/55 hover:bg-foreground/5 active:scale-[0.98] sm:col-start-2 sm:row-start-1 sm:w-auto sm:text-base"
                aria-label="Ver casos reales — ir a proyectos"
              >
                <Play className="size-4 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
                Ver casos reales
              </a>
              <div className="flex w-full flex-col items-stretch gap-0 sm:col-start-1 sm:row-start-1 sm:w-fit sm:items-start">
                <a
                  href={whatsAppHref()}
                  target="_blank"
                  rel={REL_WHATSAPP_EXTERNAL}
                  className="relative inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-8 sm:text-base"
                  aria-label={`${HERO_NAV_CTA_LABEL} — abrir WhatsApp`}
                >
                  <WhatsAppIcon size={22} className="shrink-0 text-primary-foreground" aria-hidden />
                  {HERO_NAV_CTA_LABEL}
                </a>
              </div>
            </div>
        </div>

        <ul
          className="mt-12 grid list-none grid-cols-1 gap-6 border-t border-border/60 pt-10 sm:grid-cols-2 sm:gap-8 md:mt-14 md:pt-12 lg:mt-16 lg:grid-cols-4 lg:gap-6 lg:pt-14"
          aria-label="En qué puedo ayudarte"
        >
          {heroFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="motion-safe:animate-[fade-in-up_0.55s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none"
                style={{ animationDelay: `${260 + i * 60}ms` }}
              >
                <div className="flex gap-3.5 sm:block sm:gap-0">
                  <Icon
                    className="size-5 shrink-0 text-primary sm:mb-3 sm:size-[22px]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground sm:text-[15px]">{item.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
