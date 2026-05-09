import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";
import { LINKEDIN_PROFILE_URL } from "@/lib/site";

export function About() {
  return (
    <section id="sobre-mi" className="relative py-20 md:py-28 lg:py-32">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Sobre mí</span>
        </div>

        <div className="relative mt-6 min-h-[300px] overflow-hidden rounded-2xl border border-border md:mt-8 md:min-h-[380px] lg:min-h-[420px]">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 md:opacity-35 mask-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_18%,black_42%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.45)_18%,black_42%,black_100%)] mask-size-[100%_100%]"
              aria-hidden
            >
              <Image
                src="/avatar-about.png"
                alt=""
                fill
                loading="eager"
                quality={65}
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
                  Soy <span className="text-primary font-medium">desarrollador de software</span> con{" "}
                  <span className="text-primary font-medium">más de 4 años de experiencia</span>, trabajando tanto de forma
                  independiente como en empresas.
                </p>
                <p>
                  Actualmente participo en proyectos del{" "}
                  <span className="text-primary font-medium">sector salud en INECO</span>, donde desarrollo soluciones que
                  impactan en la <span className="text-primary font-medium">operación diaria</span> de profesionales y
                  equipos.
                </p>
                <p>
                  En paralelo, realizo <span className="text-primary font-medium">desarrollos freelance</span> para
                  distintos clientes, enfocándome en{" "}
                  <span className="text-primary font-medium">sistemas a medida, automatizaciones e integraciones</span>.
                </p>
                <p>
                  A nivel técnico, trabajo principalmente con{" "}
                  <span className="text-primary font-medium">JavaScript/TypeScript, Next.js, Node.js y PostgreSQL</span>, y
                  utilizo herramientas como <span className="text-primary font-medium">n8n</span> y{" "}
                  <span className="text-primary font-medium">Docker</span> para automatizar procesos e integrar sistemas.
                </p>
              </div>

              <div className="mt-6 md:mt-8 grid w-full max-w-md grid-cols-2 gap-3">
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-0 w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-surface/40 px-4 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur-sm transition hover:border-primary/40 hover:bg-surface/70 hover:text-primary"
                >
                  <LinkedInGlyph size={16} /> LinkedIn
                </a>
                <Link
                  href="/curriculum"
                  className="inline-flex min-w-0 w-full items-center justify-center gap-2 rounded-[10px] border border-border bg-surface/40 px-4 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur-sm transition hover:border-primary/40 hover:bg-surface/70 hover:text-primary"
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
