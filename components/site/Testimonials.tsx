import Image from "next/image";
import { Linkedin, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Matias Papasso",
    role: "Team leader de infraestructura en Charles Taylor Insurtech",
    imageSrc: "/testimonials/testimonial-matias-papasso.png",
    linkedInUrl: "https://www.linkedin.com/in/matias-papasso-37108b15/",
    projectName: "Cogniare",
    quote:
      "Diego es un excelente profesional; realizó un proyecto desde cero tal como se le fue pidiendo: estética, funcionalidad y practicidad. Sin dudas alguien a quien recomendar: de confianza y comprometido.",
  },
  {
    name: "José Contreras Márquez",
    role: "Instructor certificado ASME · Director en mantenimientoeficiente.com",
    roleLine2: "LinkedIn Top Plant Operations Voice",
    imageSrc: "/testimonials/testimonial-jose-contreras.png",
    linkedInUrl: "https://www.linkedin.com/in/jose-contreras-marquezuez",
    projectNames: ["Optim", "Remaint"] as const,
    quote:
      "Desde principios de 2025 he tenido la oportunidad de trabajar con Diego Abad en el desarrollo de software. Afortunadamente he conseguido en Diego a un extraordinario profesional en el campo de la programación y de la informática en general. Sin lugar a dudas puedo dar fe de la responsabilidad y calidad del trabajo de Diego Abad.",
  },
] as const;

function Avatar({ imageSrc, name }: { imageSrc: string; name: string }) {
  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-primary/35 bg-muted/40 ring-2 ring-background">
      <Image
        src={imageSrc}
        alt={`Foto de perfil de ${name}`}
        width={56}
        height={56}
        className="h-full w-full object-cover"
        sizes="56px"
        loading="lazy"
        fetchPriority="low"
        decoding="async"
      />
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-20 md:py-28 lg:py-32 border-t border-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Testimonios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Lo que dicen quienes <span className="text-primary">trabajaron conmigo</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
            Referencias reales de clientes sobre proyectos entregados: calidad, comunicación y resultado en producción.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid gap-4 md:gap-5 lg:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background/60 p-5 sm:p-6 md:p-8 backdrop-blur transition hover:border-primary/40"
            >
              {/* Una sola fila flex: foto + nombre pegados (gap mínimo). Rol bajo el nombre en desktop; en móvil rol aparte a ancho completo más abajo. */}
              <div className="w-full min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 md:items-start">
                  <Avatar imageSrc={t.imageSrc} name={t.name} />
                  <div className="min-w-0 flex-1 text-left">
                    <a
                      href={t.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-[7px] font-display text-base font-semibold leading-snug text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm sm:text-lg"
                    >
                      <span className="min-w-0 wrap-break-word">{t.name}</span>
                      <Linkedin
                        className="h-4 w-4 shrink-0 text-primary/80 group-hover:text-primary"
                        aria-hidden
                      />
                      <span className="sr-only">(abre perfil de LinkedIn en una pestaña nueva)</span>
                    </a>
                    <p className="mt-1 hidden text-sm leading-snug text-muted-foreground md:block">
                      {t.role}
                      {"roleLine2" in t ? (
                        <>
                          <br />
                          {t.roleLine2}
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-left text-sm leading-snug text-muted-foreground md:hidden">
                  {t.role}
                  {"roleLine2" in t ? (
                    <>
                      <br />
                      {t.roleLine2}
                    </>
                  ) : null}
                </p>
              </div>

              <div className="relative mt-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                  {"projectName" in t ? "Proyecto realizado" : "Proyectos realizados"}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {"projectName" in t ? (
                    <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t.projectName}
                    </span>
                  ) : (
                    t.projectNames.map((name) => (
                      <span
                        key={name}
                        className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {name}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <blockquote className="mt-5 flex gap-2.5 text-foreground/90 sm:gap-3 md:text-[17px]">
                <Quote
                  className="mt-0.5 h-6 w-6 shrink-0 text-primary/25 sm:h-7 sm:w-7"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <p className="min-w-0 flex-1 border-l-2 border-primary/35 pl-3 leading-relaxed text-pretty sm:pl-4">
                  {t.quote}
                </p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
