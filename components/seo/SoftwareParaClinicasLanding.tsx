import { ChevronDown, HelpCircle, Smartphone } from "lucide-react";
import {
  FaqBlocks,
  LandingReadingMain,
  LandingRelatedNav,
  LandingWaCta,
  LANDING_SECTION,
  SectionKicker,
  landingBodyClass,
  landingH2Class,
  type FaqBlock,
} from "@/components/seo/landing-blocks";
import { ServiceLandingHeroOffer } from "@/components/seo/ServiceLandingHeroOffer";
import { EVALUATION_OFFER_FAQ, LANDING_CONSULT_CTA, REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
import { serviceLandingPriceFaqCallout, type PricingRegion } from "@/lib/pricing-region";
const CATEGORY = "Desarrollo de aplicaciones móviles";

const HERO = {
  title: "Desarrollo de aplicaciones móviles",
  lead: "Apps móviles para empresas, clínicas y negocios",
  subtitle:
    "Tus clientes y tu equipo esperan resolver todo desde el celular. Desarrollo de aplicaciones móviles en Argentina para turnos, autogestión, app para gestión de pacientes o aplicación móvil para turnos médicos, con integración a APIs y sistemas existentes. Cuando conviene unificar Android e iPhone, evaluamos desarrollo multiplataforma (por ejemplo Flutter).",
  presupuesto: "Pedí tu presupuesto sin cargo",
};

const RELATED_LINKS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/sistema-gestion-inventario", label: "Gestión de inventario" },
] as const;

const PROBLEMA_BULLETS = [
  "consultas por WhatsApp",
  "reservas manuales",
  "seguimiento por mensajes",
  "información dispersa",
  "procesos que solo funcionan desde una computadora",
] as const;

const CONTEXTO_ITEMS = [
  "Clientes preguntando siempre lo mismo",
  "Procesos que requieren llamadas o mensajes",
  "Información distribuida entre sistemas",
  "Dificultad para acceder desde el celular",
  "Equipos resolviendo tareas manualmente",
] as const;

const RIESGO_ITEMS = [
  "Pérdida de tiempo operativo",
  "Demoras en respuestas",
  "Mala experiencia para clientes",
  "Dependencia de procesos manuales",
  "Errores administrativos",
  "Dificultad para escalar la operación",
] as const;

const FORMAS = [
  {
    title: "Seguir usando WhatsApp y planillas",
    body: "Funciona al principio, pero se vuelve limitado cuando crece la operación.",
    highlight: false,
  },
  {
    title: "Usar aplicaciones genéricas",
    body: "A veces no se adaptan a la forma real de trabajar del negocio.",
    highlight: false,
  },
  {
    title: "Resolver todo manualmente",
    body: "Genera más carga operativa y pérdida de tiempo.",
    highlight: false,
  },
  {
    title: "Desarrollar una aplicación móvil personalizada",
    body: "Adaptada a los procesos, clientes y necesidades reales de la empresa.",
    highlight: true,
  },
] as const;

const PROPUESTA_ITEMS = [
  "Autogestión de clientes",
  "Reservas y turnos online",
  "Seguimiento en tiempo real",
  "Notificaciones automáticas",
  "Integración con sistemas existentes",
  "Operaciones desde cualquier lugar",
] as const;

const BENEFICIOS = [
  "Mejor experiencia para clientes",
  "Menos tareas manuales",
  "Acceso rápido desde el celular",
  "Procesos más ágiles",
  "Mayor organización operativa",
  "Integración entre áreas y sistemas",
] as const;

const SEÑALES = [
  "Tus clientes dependen de WhatsApp para todo",
  "Hay demasiados procesos manuales",
  "Tu sistema no funciona bien desde el celular",
  "Se pierde tiempo organizando información",
  "Tu operación depende demasiado de personas",
  "Necesitás dar acceso rápido desde cualquier lugar",
] as const;

const MSG_HERO =
  "Hola Diego, quiero desarrollar una aplicación móvil (Android/iPhone) para mi negocio. Me interesa presupuesto sin cargo.";
const MSG_CASO =
  "Hola Diego, mi operación depende mucho de WhatsApp y procesos manuales. Quiero ver cómo llevarlo a una app móvil con integraciones.";

function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildFaqItems(region: PricingRegion): { q: string; blocks: FaqBlock[] }[] {
  return [
  {
    q: "¿Desarrollás aplicaciones para Android y iPhone?",
    blocks: [
      {
        type: "p",
        text: "Sí. Las aplicaciones pueden orientarse a Android, iOS o ambos, según alcance y prioridad de negocio.",
      },
    ],
  },
  {
    q: "¿La app puede conectarse con mis sistemas actuales?",
    blocks: [
      {
        type: "p",
        text: "Sí. Se pueden integrar APIs, CRMs, sistemas internos y herramientas existentes cuando hay documentación o acceso técnico.",
      },
    ],
  },
  {
    q: "¿Las aplicaciones son personalizadas?",
    blocks: [{ type: "p", text: "Sí. Cada app se desarrolla según la operación y las necesidades del negocio." }],
  },
  {
    q: "¿Se pueden enviar notificaciones automáticas?",
    blocks: [
      {
        type: "p",
        text: "Sí. Las apps pueden incluir notificaciones push, recordatorios y alertas automáticas, con reglas y permisos acordados.",
      },
    ],
  },
  {
    q: "¿Conviene desarrollar una app para mi negocio?",
    blocks: [
      {
        type: "p",
        text: "Depende del tipo de operación, cantidad de clientes y procesos que quieras digitalizar. Lo evaluamos en una charla inicial sin compromiso.",
      },
      { type: "callout", text: serviceLandingPriceFaqCallout("software-para-clinicas", region) },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿La aplicación puede incluir turnos, pagos o seguimiento?",
    blocks: [
      {
        type: "p",
        text: "Sí. Las funcionalidades se adaptan según lo que necesite cada negocio: turnos, pagos, seguimiento, documentación y más.",
      },
    ],
  },
  {
    q: "¿Desarrollan apps para clínicas, pacientes y equipos internos?",
    blocks: [
      {
        type: "p",
        text: "Sí: aplicaciones móviles personalizadas para flujos reales—desde app para clínicas y consultorios hasta desarrollo de app para pacientes (avisos, turnos, formularios o enlaces a lo que ya tengas), siempre acotando alcance y permisos. También soluciones mobile para empresas que combinan operación y autogestión del cliente.",
      },
    ],
  },
];
}

export function SoftwareParaClinicasLanding({ pricingRegion }: { pricingRegion: PricingRegion }) {
  const faqItems = buildFaqItems(pricingRegion);
  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          <Smartphone className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {CATEGORY}
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
          {HERO.title}
        </h1>
        <p className="mt-3 text-lg font-semibold tracking-tight text-foreground md:text-xl">{HERO.lead}</p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{HERO.subtitle}</p>
        <ServiceLandingHeroOffer slug="software-para-clinicas" pricingRegion={pricingRegion} />
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">{HERO.presupuesto}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <LandingWaCta
            href={waHref(MSG_HERO)}
            rel={REL_WHATSAPP_EXTERNAL}
            main={LANDING_CONSULT_CTA}
            hideWhatsAppIconMobile
          />
        </div>
      </header>

          <section className={LANDING_SECTION} aria-labelledby="problema-heading">
            <SectionKicker n="01">Problema</SectionKicker>
            <h2
              id="problema-heading"
              className={landingH2Class}
            >
              Muchas operaciones siguen dependiendo de WhatsApp, llamadas y procesos manuales
            </h2>
            <div className="mt-8 space-y-4 border-l-2 border-primary/35 py-1 pl-5 text-lg font-medium leading-relaxed text-foreground md:pl-6 md:text-xl">
                <p>Muchos negocios todavía manejan:</p>
                <ul className="list-disc space-y-2 pl-6 text-base font-normal text-foreground/95 md:text-[17px] marker:text-primary">
                  {PROBLEMA_BULLETS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  Esto genera demoras, desorganización y dependencia constante del equipo.
                </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="contexto-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <h2
              id="contexto-heading"
              className={landingH2Class}
            >
              Cómo suele verse este problema en el día a día
            </h2>
            <div className="mt-6 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>Normalmente termina pasando algo así:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="font-medium text-foreground">
                A medida que crece la operación, sostener esto se vuelve cada vez más difícil.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="riesgo-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="riesgo-heading"
              className={landingH2Class}
            >
              Qué pasa cuando todo sigue siendo manual
            </h2>
            <p className="mt-5 text-foreground/95 leading-relaxed md:text-[17px]">
              Trabajar sin una aplicación móvil suele generar:
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {RIESGO_ITEMS.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              El negocio pierde agilidad y muchas tareas terminan dependiendo siempre de una persona.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="enfoque-heading">
            <SectionKicker n="04">Enfoque</SectionKicker>
            <h2
              id="enfoque-heading"
              className={landingH2Class}
            >
              Cómo suelen resolver esto las empresas
            </h2>
            <div className="mt-6 space-y-8">
              {FORMAS.map((f, i) => (
                <div
                  key={f.title}
                  className={
                    f.highlight
                      ? "border-l-2 border-primary/45 py-1 pl-5 md:pl-6"
                      : "border-l border-border/80 py-1 pl-5 md:pl-6"
                  }
                >
                  <p className="font-display text-base font-semibold text-foreground">
                    <span className="tabular-nums text-primary">{i + 1}.</span> {f.title}
                  </p>
                  <p
                    className={`mt-2 text-sm leading-relaxed md:text-[15px] ${
                      f.highlight ? "text-foreground/90" : "text-muted-foreground"
                    }`}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              Cuando la operación crece, la experiencia móvil deja de ser opcional.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <h2 id="propuesta-heading" className={landingH2Class}>
              Cómo desarrollo aplicaciones móviles a medida
            </h2>
            <div className={landingBodyClass}>
              <p className="text-foreground/95">Desarrollo apps móviles para Android y iPhone que permiten:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {PROPUESTA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">Cada aplicación se adapta al flujo real de trabajo del negocio.</p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="resultado-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2
              id="resultado-heading"
              className={landingH2Class}
            >
              Qué cambia con una aplicación móvil
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {BENEFICIOS.map((b) => (
                <li key={b} className="text-foreground/95">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l border-border/80 py-1 pl-4 text-sm font-medium text-muted-foreground md:pl-5 md:text-[15px]">
              La operación se vuelve más rápida, accesible y escalable.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="senales-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2
              id="senales-heading"
              className={landingH2Class}
            >
              Señales de que tu negocio necesita una app móvil
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {SEÑALES.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              Si esto pasa, probablemente ya necesitás una solución móvil adaptada a tu operación.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="caso-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="caso-heading"
              className={landingH2Class}
            >
              Ejemplo de aplicación móvil implementada
            </h2>
            <div className={`${landingBodyClass} mt-8`}>
              <p className="text-base leading-relaxed text-foreground/95 md:text-lg">
                Un negocio gestionaba reservas, seguimiento y comunicación completamente por WhatsApp y llamadas.
              </p>
              <p className="text-muted-foreground md:text-[17px]">
                Se desarrolló una aplicación móvil conectada a sus sistemas internos para centralizar operaciones y
                permitir autogestión desde el celular.
              </p>
              <div className="border-l-2 border-primary/40 py-1 pl-4 md:pl-5">
                <p className="font-medium text-foreground md:text-[17px]">
                  <span className="text-primary">Resultado:</span>
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground md:text-[17px] marker:text-primary">
                  <li>menos carga operativa</li>
                  <li>respuestas más rápidas</li>
                  <li>mejor experiencia para clientes</li>
                  <li>procesos más organizados</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="faq-heading">
            <SectionKicker n="09">FAQ</SectionKicker>
            <h2
              id="faq-heading"
              className={landingH2Class}
            >
              Preguntas frecuentes sobre aplicaciones móviles
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Abrí la pregunta que te interese; el contenido sigue indexable para buscadores.
            </p>
            <div className="mt-6 divide-y divide-border border-t border-border">
              {faqItems.map(({ q, blocks }) => (
                <details
                  key={q}
                  name="faq-apps-moviles"
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

          <section className={LANDING_SECTION}>
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
              Si tu operación depende demasiado de WhatsApp, llamadas o procesos manuales, podemos analizar cómo
              llevarlo a una aplicación móvil.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{HERO.presupuesto}</p>
            <div className="mt-8">
              <LandingWaCta href={waHref(MSG_CASO)} rel={REL_WHATSAPP_EXTERNAL} main={LANDING_CONSULT_CTA} />
            </div>
          </section>

          <LandingRelatedNav links={RELATED_LINKS} description="Otros servicios relacionados." />
    </LandingReadingMain>
  );
}
