import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  CircleAlert,
  Code2,
  HelpCircle,
  Layers,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  FaqBlocks,
  LandingWaCta,
  LANDING_ARTICLE_MAX_CLASS,
  SectionKicker,
  type FaqBlock,
} from "@/components/seo/landing-blocks";
import { EVALUATION_OFFER_FAQ, PRIMARY_CTA_LABEL, REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
const CATEGORY = "Software a medida";

const HERO = {
  title: "Desarrollo de software a medida",
  subtitle:
    "Diseño y desarrollo sistemas alineados a tu operación: reglas propias, integraciones y paneles en un mismo producto. Entregas por etapas para que veas avances reales desde el inicio.",
};

const MORE_SOLUTIONS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/software-para-clinicas", label: "Software para clínicas" },
  { href: "/sistema-gestion-inventario", label: "Gestión de inventario" },
] as const;

const CONTEXTO_ITEMS = [
  "los procesos se vuelven más complejos",
  "aparecen tareas manuales para compensar limitaciones",
  "la información queda dispersa",
  "se pierde eficiencia",
] as const;

const RIESGO_ITEMS = [
  "Pérdida de tiempo en tareas manuales",
  "Errores por procesos poco claros",
  "Dificultad para escalar",
  "Dependencia de múltiples herramientas",
  "Falta de control sobre la operación",
] as const;

const FORMAS = [
  { title: "Adaptar procesos a herramientas existentes", body: "Forzar la operación al molde del software.", highlight: false },
  { title: "Usar múltiples plataformas combinadas", body: "Más costo operativo y datos repartidos.", highlight: false },
  { title: "Implementar soluciones estándar más complejas", body: "A veces sigue sin calzar del todo.", highlight: false },
  {
    title: "Desarrollar software específico",
    body: "Pensado para cómo trabajás vos.",
    highlight: true,
  },
] as const;

const PROPUESTA_ITEMS = [
  "Centralizar procesos",
  "Automatizar tareas",
  "Integrar herramientas",
  "Trabajar con lógica específica del negocio",
] as const;

const BENEFICIOS = [
  "Procesos más claros y organizados",
  "Menos trabajo manual",
  "Mayor control de la operación",
  "Posibilidad de escalar sin fricciones",
  "Sistemas alineados al negocio",
] as const;

const SEÑALES = [
  "Usás varias herramientas que no se integran",
  "Hacés tareas manuales para “compensar” el sistema",
  "Tu operación no encaja en herramientas estándar",
  "Tenés procesos específicos difíciles de replicar",
  "Sentís que el sistema limita el crecimiento",
] as const;

const MSG_HERO =
  "Hola Diego, quiero contarte mi proyecto para ver si tiene sentido un sistema a medida. Me interesa un presupuesto sin cargo.";
const MSG_CASO =
  "Hola Diego, quiero contarte mi caso (software a medida) para ver encaje y qué presupuesto podría ser.";

function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const FAQ_ITEMS: { q: string; blocks: FaqBlock[] }[] = [
  {
    q: "¿Cuánto cuesta desarrollar software a medida?",
    blocks: [
      {
        type: "p",
        text: "Depende del alcance, funcionalidades, integraciones y nivel de complejidad. No es lo mismo una herramienta simple que un sistema completo con múltiples módulos.",
      },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿Cuánto tiempo lleva desarrollarlo?",
    blocks: [
      {
        type: "p",
        text: "Puede ir desde algunas semanas hasta varios meses, según el tamaño del sistema.",
      },
    ],
  },
  {
    q: "¿Se puede integrar con sistemas existentes?",
    blocks: [
      {
        type: "p",
        text: "Sí, la mayoría de los desarrollos se diseñan para integrarse con herramientas ya utilizadas.",
      },
    ],
  },
  {
    q: "¿Es solo para empresas grandes?",
    blocks: [
      {
        type: "p",
        text: "No. Muchos negocios medianos o en crecimiento necesitan soluciones a medida cuando lo estándar no alcanza.",
      },
    ],
  },
  {
    q: "¿Qué pasa después de desarrollar el sistema?",
    blocks: [
      {
        type: "p",
        text: "El sistema puede seguir evolucionando según crezca el negocio.",
      },
    ],
  },
];

export function DesarrolloSoftwareMedidaLanding() {
  return (
    <div className="relative flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[min(100%,520px)] -translate-x-1/2 rounded-full bg-primary/8 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
        <article className={LANDING_ARTICLE_MAX_CLASS}>
          <header className="relative overflow-hidden rounded-3xl border border-border/90 bg-linear-to-b from-surface/90 via-surface/50 to-background/30 p-8 shadow-[inset_0_1px_0_0_rgb(255_255_255/6%),0_24px_64px_-32px_rgb(0_0_0/0.45)] md:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
              aria-hidden
            />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                <Code2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                <span className="text-primary">{CATEGORY}</span>
              </div>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
                {HERO.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{HERO.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LandingWaCta
                  href={waHref(MSG_HERO)}
                  rel={REL_WHATSAPP_EXTERNAL}
                  main={PRIMARY_CTA_LABEL}
                />
              </div>
            </div>
          </header>

          <section className="mt-16 md:mt-20" aria-labelledby="problema-heading">
            <SectionKicker n="01">Problema</SectionKicker>
            <h2
              id="problema-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Los sistemas que usás no se adaptan a tu negocio
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-primary/6 px-6 py-8 md:px-8 md:py-9">
              <div
                className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-4 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                <p>Muchos negocios terminan usando herramientas genéricas que no encajan del todo con su forma de trabajar.</p>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  Esto obliga a adaptar procesos, usar soluciones parciales o manejar información en múltiples sistemas.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="contexto-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <div className="mt-3 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>Al principio puede funcionar, pero a medida que el negocio crece:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="font-medium text-foreground">Lo que parecía una solución termina siendo un problema.</p>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="riesgo-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="riesgo-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Qué pasa si seguís con sistemas que no encajan
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {RIESGO_ITEMS.map((text) => (
                <div
                  key={text}
                  className="flex gap-3 rounded-xl border border-border/90 bg-background/40 px-4 py-4 backdrop-blur-sm"
                >
                  <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-snug text-foreground/95 md:text-[15px]">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground leading-relaxed md:text-[15px]">
              El negocio crece, pero el sistema no acompaña.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="enfoque-heading">
            <SectionKicker n="04">Enfoque</SectionKicker>
            <h2
              id="enfoque-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Cómo se suele resolver este problema
            </h2>
            <p className="mt-5 text-foreground/90 leading-relaxed md:text-[17px]">
              Existen distintas alternativas:
            </p>
            <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2">
              {FORMAS.map((f, i) => (
                <div
                  key={f.title}
                  className={
                    f.highlight
                      ? "relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-primary/50 bg-linear-to-br from-primary/12 via-primary/6 to-transparent p-5 shadow-[0_0_0_1px_rgb(var(--color-primary)/0.12)] md:p-6 ring-1 ring-primary/20"
                      : "flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-5 md:p-6"
                  }
                >
                  {f.highlight && (
                    <div
                      className="pointer-events-none absolute -right-6 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl"
                      aria-hidden
                    />
                  )}
                  <p className="relative flex items-baseline gap-2 font-display text-base font-semibold text-foreground">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                        f.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {f.title}
                  </p>
                  <p
                    className={`relative mt-3 flex-1 pl-9 text-sm leading-relaxed md:text-[15px] ${
                      f.highlight ? "text-foreground/95" : "text-muted-foreground"
                    }`}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground leading-relaxed md:text-[15px]">
              Cuando el negocio tiene necesidades particulares, las soluciones genéricas suelen quedarse cortas.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <div className="mt-3 rounded-2xl border border-border bg-surface/35 p-6 md:flex md:items-start md:gap-8 md:p-8">
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary md:mx-0">
                <Layers className="h-7 w-7" aria-hidden />
              </div>
              <div className="mt-6 w-full min-w-0 flex-1 md:mt-0">
                <h2
                  id="propuesta-heading"
                  className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
                >
                  Cómo desarrollo software a medida
                </h2>
                <p className="mt-5 text-foreground/95 leading-relaxed md:text-[17px]">
                  Diseño y desarrollo sistemas adaptados a la forma en que tu negocio realmente funciona.
                </p>
                <p className="mt-4 font-medium text-foreground md:text-[17px]">Esto permite:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/95 leading-relaxed marker:text-primary md:text-[17px]">
                  {PROPUESTA_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-muted-foreground leading-relaxed md:text-[17px]">
                  Cada solución se construye en base a tus necesidades reales.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="resultado-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2
              id="resultado-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Qué cambia con un software a medida
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {BENEFICIOS.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255/8%)]"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                  {b}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="senales-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2
              id="senales-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Señales de que necesitás software a medida
            </h2>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {SEÑALES.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 rounded-xl border border-border bg-background/30 px-4 py-3.5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm leading-snug text-foreground/95 md:text-[15px]">{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground leading-relaxed md:text-[15px]">
              Si te pasa esto, probablemente una solución a medida tenga sentido.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="caso-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="caso-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Ejemplo de desarrollo a medida
            </h2>
            <figure className="relative mt-8 overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-surface/80 to-primary/4 p-6 md:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/15 blur-2xl"
                aria-hidden
              />
              <MessageCircle className="relative h-8 w-8 text-primary" aria-hidden />
              <div className="relative mt-4 space-y-4 text-base leading-relaxed text-foreground/95 md:text-lg">
                <p>
                  Un negocio gestionaba su operación usando múltiples herramientas y planillas, lo que generaba
                  desorganización y tareas manuales constantes.
                </p>
                <p className="text-muted-foreground md:text-[17px]">
                  Se desarrolló un sistema a medida que centraliza procesos y automatiza tareas clave.
                </p>
                <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-medium text-foreground md:text-[17px]">
                  <span className="text-primary">Resultado:</span> mejor organización, menos trabajo manual y mayor
                  control sobre la operación.
                </p>
              </div>
            </figure>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="faq-heading">
            <SectionKicker n="09">FAQ</SectionKicker>
            <h2
              id="faq-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Preguntas frecuentes
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Abrí la pregunta que te interese; el contenido sigue indexable para buscadores.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface/40 shadow-[inset_0_1px_0_0_rgb(255_255_255/5%)]">
              {FAQ_ITEMS.map(({ q, blocks }) => (
                <details
                  key={q}
                  name="faq-desarrollo-software-medida"
                  className="group border-b border-border last:border-b-0 open:bg-muted/15 transition-colors"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4 pr-3 text-left transition-colors hover:bg-muted/20 md:px-5 md:py-[1.05rem] [&::-webkit-details-marker]:hidden marker:content-none">
                    <HelpCircle
                      className="h-5 w-5 shrink-0 text-primary opacity-90 group-open:opacity-100"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 font-display text-[15px] font-semibold leading-snug text-foreground md:text-base">
                      {q}
                    </span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-primary"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-border/70 bg-background/25 px-4 pb-4 pt-1 md:px-5 md:pb-5 md:pt-2">
                    <FaqBlocks blocks={blocks} />
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="relative mt-16 overflow-hidden rounded-3xl border border-primary/40 bg-linear-to-br from-primary/14 via-primary/6 to-transparent px-6 py-10 md:mt-20 md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <p className="relative text-lg font-medium leading-relaxed text-foreground md:text-xl">
              Si sentís que los sistemas que usás hoy no acompañan tu negocio, podemos analizar tu caso y ver qué
              solución tiene sentido.
            </p>
            <div className="relative mt-8">
              <LandingWaCta href={waHref(MSG_CASO)} rel={REL_WHATSAPP_EXTERNAL} main="Contame tu caso" />
            </div>
          </section>

          <section className="mt-16 border-t border-border pt-12 md:mt-20">
            <h2 className="font-display text-lg font-semibold text-foreground">Explorá más soluciones</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Otros enfoques que suelen ir de la mano con lo que estás buscando.
            </p>
            <nav
              aria-label="Soluciones relacionadas"
              className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/60 shadow-[inset_0_1px_0_0_rgb(255_255_255/5%)]"
            >
              <ul className="divide-y divide-border">
                {MORE_SOLUTIONS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface md:px-5 md:py-4 md:text-[15px]"
                    >
                      <span className="group-hover:text-primary transition-colors">{l.label}</span>
                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </article>
      </div>
    </div>
  );
}
