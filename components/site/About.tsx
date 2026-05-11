import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";
import { LINKEDIN_PROFILE_URL } from "@/lib/site";

const aboutActionBtn =
  "inline-flex min-w-0 w-full items-center justify-center gap-2 rounded-[10px] border border-primary/45 bg-primary/[0.09] px-4 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)] transition hover:border-primary/80 hover:bg-primary/[0.15] hover:shadow-[0_0_26px_-10px_rgb(82_168_255_/0.42)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function About() {
  return (
    <section id="sobre-mi" className="relative py-9 md:py-[72px]">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Sobre mí</span>
        </div>

        <div className="relative mt-6 min-h-[300px] overflow-hidden rounded-2xl border border-border md:mt-8 md:min-h-[380px] lg:min-h-[420px]">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] md:opacity-[0.18] mask-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_18%,black_42%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_18%,black_42%,black_100%)] mask-size-[100%_100%]"
              aria-hidden
            >
              <Image
                src="/avatar-about.png"
                alt=""
                fill
                loading="lazy"
                fetchPriority="low"
                quality={60}
                sizes="(max-width:768px) 48vw, (max-width:1024px) 26vw, min(360px, 28vw)"
                className="object-cover object-[58%_center] md:object-[55%_center]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZkL/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2L/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgICAgEFAAAAAAAAAAAAAQIAAwQRBRIhBhMxYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABsRAAICAwEAAAAAAAAAAAAAAAECAAMRBBIx/9oADAMBAAIRAxEAPwCXq7OWIjZJaXGzdRIPWaotHtTM//Z"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 z-2 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_70%,transparent)_35%,color-mix(in_oklab,var(--background)_12%,transparent)_52%,transparent_70%)]"
            aria-hidden
          />

          <div className="relative z-10 px-5 py-8 sm:p-8 md:py-10 md:pl-8 md:pr-10 lg:py-12 lg:pl-10 lg:pr-12">
            <div className="max-w-xl md:max-w-120 lg:max-w-152 text-left">
              <div>
                <h2 className="text-left text-4xl md:text-5xl font-display font-semibold tracking-tight">
                  Diego Abad
                </h2>
                <p className="mt-2 text-left text-lg text-muted-foreground">Desarrollador de software y automatizaciones</p>
              </div>

              <div className="mt-5 md:mt-6 space-y-3 md:space-y-4 text-left text-base md:text-lg leading-relaxed text-foreground/90">
                <p>
                  Soy <span className="text-primary font-medium">desarrollador de software</span> y hace más de 4 años
                  trabajo creando soluciones para empresas, negocios y profesionales.
                </p>
                <p>
                  Actualmente participo en proyectos del{" "}
                  <span className="text-primary font-medium">sector salud en INECO</span>, desarrollando herramientas que
                  ayudan a optimizar procesos y mejorar el trabajo diario de equipos y profesionales.
                </p>
                <p>
                  Además, trabajo de forma independiente ayudando a distintos clientes a digitalizar y automatizar sus
                  negocios mediante páginas web, sistemas a medida, integraciones, automatizaciones y soluciones con{" "}
                  <span className="text-primary font-medium">inteligencia artificial</span>.
                </p>
                <p>
                  Me enfoco en crear herramientas simples, útiles y adaptadas a cada necesidad, buscando que la tecnología
                  realmente ayude a ahorrar tiempo, organizar procesos y mejorar la atención al cliente.
                </p>
              </div>

              <div className="mt-6 md:mt-8 grid w-full max-w-md grid-cols-2 gap-3">
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={aboutActionBtn}
                >
                  <LinkedInGlyph size={16} className="shrink-0 opacity-95" /> LinkedIn
                </a>
                <Link
                  href="/curriculum"
                  className={aboutActionBtn}
                >
                  <FileText size={16} className="shrink-0" aria-hidden />
                  Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
