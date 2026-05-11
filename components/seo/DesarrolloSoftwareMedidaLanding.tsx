import { ChevronDown, Code2, HelpCircle } from "lucide-react";
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
const CATEGORY = "Software a medida";

const HERO = {
  title: "Desarrollo de software a medida",
  subtitle:
    "Diseño y desarrollo de sistemas a medida y plataformas web personalizadas en Argentina: reglas propias, integraciones y paneles en un mismo producto. Pensado para empresas y pymes que necesitan software personalizado para negocios, software para clínicas a medida o desarrollo de software para salud cuando lo genérico no alcanza. Entregas por etapas para ver avances reales desde el inicio.",
};

const RELATED_LINKS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
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

function buildFaqItems(region: PricingRegion): { q: string; blocks: FaqBlock[] }[] {
  return [
  {
    q: "¿Cuánto cuesta desarrollar software a medida?",
    blocks: [
      {
        type: "p",
        text: "Depende del alcance, funcionalidades, integraciones y nivel de complejidad. No es lo mismo una herramienta simple que un sistema completo con múltiples módulos.",
      },
      { type: "callout", text: serviceLandingPriceFaqCallout("desarrollo-software-medida", region) },
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
  {
    q: "¿Trabajan desarrollo de software a medida en Argentina para pymes y consultorios?",
    blocks: [
      {
        type: "p",
        text: "Sí: desde sistemas internos personalizados y desarrollo de sistemas administrativos hasta soluciones de software empresariales con integraciones. Si el foco es salud o gestión médica, el alcance se define con reglas, roles y compliance acorde a tu caso.",
      },
    ],
  },
];
}

export function DesarrolloSoftwareMedidaLanding({ pricingRegion }: { pricingRegion: PricingRegion }) {
  const faqItems = buildFaqItems(pricingRegion);
  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          <Code2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {CATEGORY}
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
          {HERO.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{HERO.subtitle}</p>
        <ServiceLandingHeroOffer slug="desarrollo-software-medida" pricingRegion={pricingRegion} />
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
              Los sistemas que usás no se adaptan a tu negocio
            </h2>
            <div className="mt-8 space-y-4 border-l-2 border-primary/35 py-1 pl-5 text-lg font-medium leading-relaxed text-foreground md:pl-6 md:text-xl">
                <p>Muchos negocios terminan usando herramientas genéricas que no encajan del todo con su forma de trabajar.</p>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  Esto obliga a adaptar procesos, usar soluciones parciales o manejar información en múltiples sistemas.
                </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="contexto-heading">
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

          <section className={LANDING_SECTION} aria-labelledby="riesgo-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="riesgo-heading"
              className={landingH2Class}
            >
              Qué pasa si seguís con sistemas que no encajan
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {RIESGO_ITEMS.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              El negocio crece, pero el sistema no acompaña.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="enfoque-heading">
            <SectionKicker n="04">Enfoque</SectionKicker>
            <h2
              id="enfoque-heading"
              className={landingH2Class}
            >
              Cómo se suele resolver este problema
            </h2>
            <p className="mt-5 text-foreground/90 leading-relaxed md:text-[17px]">
              Existen distintas alternativas:
            </p>
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
              Cuando el negocio tiene necesidades particulares, las soluciones genéricas suelen quedarse cortas.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <h2 id="propuesta-heading" className={landingH2Class}>
              Cómo desarrollo software a medida
            </h2>
            <div className={landingBodyClass}>
              <p className="text-foreground/95">
                Diseño y desarrollo sistemas adaptados a la forma en que tu negocio realmente funciona.
              </p>
              <p className="font-medium text-foreground">Esto permite:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {PROPUESTA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">Cada solución se construye en base a tus necesidades reales.</p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="resultado-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2
              id="resultado-heading"
              className={landingH2Class}
            >
              Qué cambia con un software a medida
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {BENEFICIOS.map((b) => (
                <li key={b} className="text-foreground/95">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="senales-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2
              id="senales-heading"
              className={landingH2Class}
            >
              Señales de que necesitás software a medida
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {SEÑALES.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              Si te pasa esto, probablemente una solución a medida tenga sentido.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="caso-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="caso-heading"
              className={landingH2Class}
            >
              Ejemplo de desarrollo a medida
            </h2>
            <div className={`${landingBodyClass} mt-8`}>
              <p className="text-base leading-relaxed text-foreground/95 md:text-lg">
                Un negocio gestionaba su operación usando múltiples herramientas y planillas, lo que generaba
                desorganización y tareas manuales constantes.
              </p>
              <p className="text-muted-foreground md:text-[17px]">
                Se desarrolló un sistema a medida que centraliza procesos y automatiza tareas clave.
              </p>
              <p className="border-l-2 border-primary/40 py-1 pl-4 font-medium text-foreground md:pl-5 md:text-[17px]">
                <span className="text-primary">Resultado:</span> mejor organización, menos trabajo manual y mayor control
                sobre la operación.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="faq-heading">
            <SectionKicker n="09">FAQ</SectionKicker>
            <h2
              id="faq-heading"
              className={landingH2Class}
            >
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Abrí la pregunta que te interese; el contenido sigue indexable para buscadores.
            </p>
            <div className="mt-6 divide-y divide-border border-t border-border">
              {faqItems.map(({ q, blocks }) => (
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

          <section className={LANDING_SECTION}>
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
              Si sentís que los sistemas que usás hoy no acompañan tu negocio, podemos analizar tu caso y ver qué solución
              tiene sentido.
            </p>
            <div className="mt-8">
              <LandingWaCta href={waHref(MSG_CASO)} rel={REL_WHATSAPP_EXTERNAL} main={LANDING_CONSULT_CTA} />
            </div>
          </section>

          <LandingRelatedNav links={RELATED_LINKS} />
    </LandingReadingMain>
  );
}
