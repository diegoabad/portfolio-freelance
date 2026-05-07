import Image from "next/image";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";
import { EmailCopySurface } from "@/components/site/EmailCopySurface";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { LINKEDIN_PROFILE_URL } from "@/lib/site";

export function About() {
  return (
    <section id="sobre-mi" className="relative py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] aspect-square rounded-3xl bg-primary p-1 shadow-soft">
              <div className="relative h-full w-full min-h-0 rounded-[22px] overflow-hidden bg-surface">
                <Image
                  src="/avatar-about.png"
                  alt="Ilustración de Diego Abad trabajando como desarrollador"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 420px"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Sobre mí</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight">Diego Abad</h2>
            <p className="mt-2 text-lg text-muted-foreground">Desarrollo de software y automatizaciones</p>

            <div className="mt-5 md:mt-6 space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
              <p>
                Soy <span className="text-primary font-medium">desarrollador de software</span> con{" "}
                <span className="text-primary font-medium">más de 4 años de experiencia</span>, trabajando tanto de forma
                independiente como en equipos de desarrollo.
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

            <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-surface/60 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition"
              >
                <WhatsAppIcon size={16} className="shrink-0" aria-hidden />
                WhatsApp
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-surface/60 px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition"
              >
                <LinkedInGlyph size={16} /> LinkedIn
              </a>
              <EmailCopySurface variant="pill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
