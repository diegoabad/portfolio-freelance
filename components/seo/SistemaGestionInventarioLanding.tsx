import { ChevronDown, HelpCircle, Package } from "lucide-react";
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
import { motionFadeUpMs, motionH1Nudge } from "@/lib/site-motion";
const CATEGORY = "Gestión de inventario";

const HERO = {
  title: "Sistema de control de stock e inventario",
  subtitle:
    "Movimientos, entradas y salidas en un solo lugar: software de inventario para empresas, control de stock para consultorios o sistema de gestión de insumos médicos con varios puntos de uso. Sirve para depósito y ventas, gestión de stock automatizada en pymes o control de materiales médicos sin depender solo de Excel y anotaciones sueltas.",
};

const RELATED_LINKS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-procesos", label: "Automatización de procesos" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/aplicaciones-moviles", label: "Aplicaciones móviles" },
] as const;

const CONTEXTO_ITEMS = [
  "Stock anotado en Excel",
  "Productos registrados en distintos lugares",
  "Movimientos que no se actualizan",
  "Ventas que no impactan en el inventario",
  "Anotaciones manuales que se pierden",
  "Insumos o descartables en clínica sin trazabilidad entre gabinete, depósito y recepción",
] as const;

const RIESGO_ITEMS = [
  "Vendés productos que no tenés",
  "Acumulás stock sin darte cuenta",
  "Perdés productos o registros",
  "Tomás decisiones con información incorrecta",
  "Generás desorden operativo",
] as const;

const FORMAS = [
  { title: "Seguir usando Excel", body: "Limitado cuando crece el volumen y los movimientos.", highlight: false },
  { title: "Intentar ordenar manualmente", body: "No escala y sigue dependiendo de la memoria.", highlight: false },
  { title: "Usar herramientas genéricas", body: "A veces no reflejan tu flujo real de depósito y ventas.", highlight: false },
  {
    title: "Implementar un sistema de inventario",
    body: "Movimientos centralizados y stock que se actualiza con reglas claras.",
    highlight: true,
  },
] as const;

const PROPUESTA_ITEMS = [
  "Registrar productos y movimientos en un solo lugar",
  "Actualizar stock automáticamente",
  "Evitar errores manuales",
  "Tener visibilidad clara del inventario",
  "Soportar varias ubicaciones o consumo interno (p. ej. insumos por sector en centros de salud)",
] as const;

const BENEFICIOS = [
  "Control real del stock",
  "Menos errores",
  "Mejor organización",
  "Decisiones más claras",
  "Procesos más confiables",
] as const;

const SEÑALES = [
  "Los números no coinciden",
  "Usás Excel para controlar inventario",
  "Tenés anotaciones manuales",
  "Perdés productos o registros",
  "No sabés exactamente qué hay disponible",
] as const;

const MSG_HERO =
  "Hola Diego, quiero contarte mi proyecto: necesito ordenar el stock con un sistema de inventario. Me interesa un presupuesto sin cargo.";
const MSG_CASO =
  "Hola Diego, quiero contarte mi caso (stock / depósito / ventas) para ver cómo encaja y qué presupuesto podría ser.";

function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildFaqItems(region: PricingRegion): { q: string; blocks: FaqBlock[] }[] {
  return [
  {
    q: "¿Cuánto cuesta implementar un sistema de stock?",
    blocks: [
      {
        type: "p",
        text: "Depende del nivel de personalización, integraciones (ventas, facturación, depósitos), volumen de productos y movimientos.",
      },
      { type: "callout", text: serviceLandingPriceFaqCallout("control-de-stock", region) },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿Se puede adaptar a mi negocio?",
    blocks: [{ type: "p", text: "Sí, el sistema se ajusta según productos, volumen y forma de trabajo." }],
  },
  {
    q: "¿Se puede integrar con ventas o facturación?",
    blocks: [{ type: "p", text: "Sí, se puede automatizar la actualización del stock en función de ventas." }],
  },
  {
    q: "¿Funciona para negocios chicos?",
    blocks: [{ type: "p", text: "Sí, especialmente cuando el control manual empieza a fallar." }],
  },
  {
    q: "¿Vale la pena implementar un sistema de stock?",
    blocks: [{ type: "p", text: "Si tenés errores o desorganización, el impacto suele ser inmediato." }],
  },
  {
    q: "¿Sirve como software de inventario para empresas y control de insumos en clínicas?",
    blocks: [
      {
        type: "p",
        text: "Sí: el mismo enfoque de plataforma de control de inventario sirve para retail y depósitos, o para control de insumos para clínicas y stock en centros médicos con reglas por ubicación o sector. Si necesitás automatización de inventario empresarial conectada a ventas o consumo interno, se integra según tu operación.",
      },
    ],
  },
];
}

export function SistemaGestionInventarioLanding({ pricingRegion }: { pricingRegion: PricingRegion }) {
  const faqItems = buildFaqItems(pricingRegion);
  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary ${motionFadeUpMs(24)}`}
        >
          <Package className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {CATEGORY}
        </div>
        <h1
          className={`mt-4 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight ${motionH1Nudge()}`}
        >
          {HERO.title}
        </h1>
        <p className={`mt-4 text-base leading-relaxed text-muted-foreground md:text-lg ${motionFadeUpMs(44)}`}>
          {HERO.subtitle}
        </p>
        <ServiceLandingHeroOffer slug="control-de-stock" pricingRegion={pricingRegion} />
        <div className={`mt-6 flex flex-wrap gap-4 ${motionFadeUpMs(72)}`}>
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
              Tu stock es un caos entre Excel y anotaciones
            </h2>
            <div className="mt-8 space-y-4 border-l-2 border-primary/35 py-1 pl-5 text-lg font-medium leading-relaxed text-foreground md:pl-6 md:text-xl">
                <p>
                  Cuando el inventario se maneja con planillas, notas o registros manuales, es muy difícil tener claridad
                  real.
                </p>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  Los datos no coinciden, se pierden movimientos y el control se vuelve cada vez más complejo.
                </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="contexto-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <div className="mt-3 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>En el día a día esto suele verse así:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
                El sistema existe, pero no es confiable.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="riesgo-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="riesgo-heading"
              className={landingH2Class}
            >
              Qué pasa cuando no tenés control del stock
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {RIESGO_ITEMS.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              El problema no es el stock, es la falta de control.
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
              Cuando el negocio crece, el control manual deja de funcionar.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <h2 id="propuesta-heading" className={landingH2Class}>
              Cómo implemento sistemas de control de stock
            </h2>
            <div className={landingBodyClass}>
              <p className="text-foreground/95">Desarrollo sistemas que permiten:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {PROPUESTA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">Cada solución se adapta al tipo de operación del negocio.</p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="resultado-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2
              id="resultado-heading"
              className={landingH2Class}
            >
              Qué cambia cuando organizás tu inventario
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
              Señales de que necesitás un sistema de stock
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {SEÑALES.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium text-foreground md:pl-5 md:text-[15px]">
              Si te pasa esto, tu sistema actual no es suficiente.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="caso-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="caso-heading"
              className={landingH2Class}
            >
              Ejemplo de sistema implementado
            </h2>
            <div className={`${landingBodyClass} mt-8`}>
              <p className="text-base leading-relaxed text-foreground/95 md:text-lg">
                Un negocio manejaba su stock entre Excel y anotaciones manuales, lo que generaba diferencias constantes
                entre lo registrado y lo real.
              </p>
              <p className="text-muted-foreground md:text-[17px]">
                Se implementó un sistema que centraliza los movimientos y actualiza el inventario automáticamente.
              </p>
              <p className="border-l-2 border-primary/40 py-1 pl-4 font-medium text-foreground md:pl-5 md:text-[17px]">
                <span className="text-primary">Resultado:</span> control preciso del stock, menos errores y mejor
                organización.
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
                  name="faq-control-de-stock"
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
              Si tu stock está desordenado entre Excel y anotaciones, podemos ver cómo organizarlo en un sistema.
            </p>
            <div className="mt-8">
              <LandingWaCta href={waHref(MSG_CASO)} rel={REL_WHATSAPP_EXTERNAL} main={LANDING_CONSULT_CTA} />
            </div>
          </section>

          <LandingRelatedNav links={RELATED_LINKS} />
    </LandingReadingMain>
  );
}
