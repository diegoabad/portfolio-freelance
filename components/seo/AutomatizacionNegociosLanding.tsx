import Link from "next/link";
import { ChevronDown, HelpCircle, Zap } from "lucide-react";
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
import { EVALUATION_OFFER_FAQ, LANDING_CONSULT_CTA } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { serviceLandingPriceFaqCallout, type PricingRegion } from "@/lib/pricing-region";
import { motionFadeUpMs, motionH1Nudge } from "@/lib/site-motion";
const CATEGORY = "Automatización de procesos";

const HERO = {
  title: "Automatización de procesos para empresas",
  subtitle:
    "Automatización empresarial en Argentina con integración y automatización de sistemas (planillas, CRM, APIs, mensajería): menos automatización de tareas repetitivas a mano y más flujos auditables. Cuando encaja, automatización de procesos con n8n, webhooks o conectores; y donde suma, automatización con IA o agentes bajo reglas. Aplicable a automatización administrativa para empresas, recepción, clínicas y automatización de tareas administrativas en salud.",
};

const RELATED_LINKS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
  { href: "/control-stock-clinicas", label: "Control de stock" },
] as const;

const EJEMPLOS_TAREAS = [
  "Cargar datos manualmente en Excel o sistemas",
  "Copiar información entre herramientas que no se integran",
  "Responder siempre las mismas consultas",
  "Clasificar o resumir texto entrante (mails, tickets, notas) con inteligencia artificial bajo reglas fijas",
  "Gestionar turnos o clientes de forma manual",
  "Revisar procesos uno por uno sin automatización",
  "Automatización de procesos administrativos: conciliaciones, reportes para dirección o auditoría",
  "Facturación de profesionales o liquidaciones entre agenda, prestaciones y facturación",
] as const;

const CONSECUENCIAS = [
  "Se pierde tiempo operativo todos los días",
  "Aumentan los errores humanos",
  "Se vuelve difícil escalar el negocio",
  "Se genera desorganización interna",
  "La experiencia del cliente empeora",
] as const;

const BENEFICIOS = [
  "Menos trabajo manual",
  "Flujos con integraciones confiables",
  "Inteligencia artificial donde encaja (con límites claros)",
  "Agentes que ejecutan pasos repetibles bajo tus reglas",
  "Mayor productividad",
  "Menos errores humanos",
] as const;

const CUANDO = [
  "Cuando tu equipo pierde tiempo en tareas repetitivas",
  "Cuando manejás información en múltiples herramientas",
  "Cuando tu operación depende demasiado de procesos manuales",
  "Cuando querés escalar sin sumar más personal",
  "Cuando hay texto o datos semiestructurados y una automatización “rígida” no alcanza sin un poco de inteligencia artificial",
] as const;

function buildFaqItems(region: PricingRegion): { q: string; blocks: FaqBlock[] }[] {
  return [
  {
    q: "¿Cuánto cuesta automatizar procesos en un negocio?",
    blocks: [
      {
        type: "p",
        text: "El costo depende del tipo de automatización y la complejidad del proceso: no es lo mismo automatizar tareas simples que integrar varios sistemas o flujos más complejos.",
      },
      { type: "callout", text: serviceLandingPriceFaqCallout("automatizacion-procesos-clinicas", region) },
      {
        type: "ul",
        intro: "En general, el valor se define según:",
        items: [
          "Cantidad de procesos a automatizar",
          "Nivel de integración entre sistemas",
          "Complejidad de la lógica",
        ],
      },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿Cuánto tiempo lleva implementar una automatización?",
    blocks: [
      { type: "p", text: "Depende del proyecto." },
      {
        type: "ul",
        items: [
          "Automatizaciones simples: pueden resolverse en pocos días",
          "Procesos más completos: pueden llevar algunas semanas",
        ],
      },
      {
        type: "p",
        text: "El tiempo varía según la cantidad de sistemas involucrados y el nivel de personalización.",
      },
    ],
  },
  {
    q: "¿Se puede integrar con mis sistemas actuales?",
    blocks: [
      { type: "p", text: "Sí, en la mayoría de los casos." },
      {
        type: "ul",
        intro: "Se pueden conectar:",
        items: ["CRM", "Sistemas internos", "WhatsApp", "Herramientas de gestión", "APIs externas"],
      },
      {
        type: "p",
        text: "Si algo no tiene integración directa, se puede evaluar una solución alternativa o un paso intermedio (incluso con inteligencia artificial) para adaptar formatos o datos.",
      },
    ],
  },
  {
    q: "¿Necesito cambiar mi forma de trabajar?",
    blocks: [
      {
        type: "p",
        text: "No necesariamente. El objetivo de la automatización es adaptarse a tu operación actual y mejorarla, no obligarte a cambiar todo desde cero.",
      },
      {
        type: "p",
        text: "En muchos casos, se mantiene el flujo de trabajo pero eliminando tareas manuales.",
      },
    ],
  },
  {
    q: "¿Qué tipo de procesos se pueden automatizar?",
    blocks: [
      { type: "p", text: "Cualquier tarea repetitiva o que siga reglas claras." },
      {
        type: "ul",
        intro: "Algunos ejemplos:",
        items: [
          "Atención de consultas",
          "Carga de datos",
          "Seguimiento de clientes",
          "Gestión de turnos",
          "Generación de reportes",
          "Integración entre sistemas",
          "Pasos con inteligencia artificial (clasificar, extraer campos, redactar borradores) siempre dentro de reglas acordadas",
        ],
      },
      { type: "callout", text: "Si es repetitivo, probablemente se pueda automatizar." },
    ],
  },
  {
    q: "¿Esto sirve para negocios chicos o solo empresas grandes?",
    blocks: [
      { type: "p", text: "Sirve para ambos." },
      {
        type: "p",
        text: "De hecho, en negocios chicos suele tener mucho impacto porque permite crecer sin necesidad de sumar más personal.",
      },
    ],
  },
  {
    q: "¿La automatización de procesos administrativos aplica a clínicas y facturación de profesionales?",
    blocks: [
      {
        type: "p",
        text: "Sí. En consultorios y clínicas suele haber mucha automatización de tareas repetitivas “invisible”: cruces entre turnos, prestaciones, códigos y facturación de profesionales. Ahí la automatización de procesos administrativos reduce errores y retrabajo si se definen reglas y sistemas fuente de verdad.",
      },
      {
        type: "p",
        text: "Cuando además necesitás producto propio (historia clínica, reglas muy específicas), conviene evaluar software para clínicas o desarrollo a medida además de integraciones.",
      },
    ],
  },
  {
    q: "¿Qué pasa si mi proceso es muy específico?",
    blocks: [
      {
        type: "p",
        text: "En esos casos es donde más sentido tiene una solución a medida. Las herramientas estándar suelen quedarse cortas cuando el flujo es particular o requiere integraciones específicas.",
      },
    ],
  },
  {
    q: "¿Qué pasa después de implementar la automatización?",
    blocks: [
      {
        type: "p",
        text: "Las automatizaciones se pueden ajustar, mejorar o ampliar según cómo evolucione el negocio. La idea es que la solución acompañe el crecimiento y no quede limitada.",
      },
    ],
  },
  {
    q: "¿Vale la pena automatizar procesos?",
    blocks: [
      { type: "p", text: "Si estás perdiendo tiempo en tareas repetitivas, la respuesta suele ser sí." },
      { type: "ul", intro: "Pero el impacto no es solo en tiempo:", items: [
        "Reducís la necesidad de tareas administrativas manuales",
        "Evitás tener que contratar más personal para escalar",
        "Bajás costos operativos a largo plazo",
        "Mantenés procesos funcionando de forma constante",
      ]},
      {
        type: "callout",
        text: "Automatizar no solo ahorra tiempo, también permite crecer sin aumentar la estructura del negocio.",
      },
    ],
  },
  {
    q: "¿Cómo sé si esto aplica a mi negocio?",
    blocks: [
      { type: "p", text: "Cada caso es distinto." },
      {
        type: "p",
        text: "Si sentís que estás repitiendo tareas, perdiendo tiempo o que tu operación no escala, probablemente haya algo que se pueda automatizar.",
      },
      {
        type: "calloutContact",
        before: "Podés ",
        linkText: "contarme tu caso",
        after: " y vemos qué tiene sentido hacer.",
      },
    ],
  },
  {
    q: "¿La automatización de procesos incluye inteligencia artificial?",
    blocks: [
      {
        type: "p",
        text: "No siempre es obligatorio. Muchos procesos se resuelven con integraciones, reglas y disparadores clásicos (por ejemplo conectando CRM, planillas y APIs).",
      },
      {
        type: "p",
        text: "La inteligencia artificial entra cuando suma: texto variable, clasificación de intención, extracción de datos de párrafos libres o preparación de borradores—siempre con límites, validaciones y revisión humana donde corresponde.",
      },
    ],
  },
  {
    q: "¿Qué son los agentes de automatización en este contexto?",
    blocks: [
      {
        type: "p",
        text: "Son piezas de software que ejecutan una secuencia de pasos (consultar un sistema, transformar datos, llamar a una API, invocar un modelo de lenguaje) según reglas que definimos para tu negocio.",
      },
      {
        type: "p",
        text: "No es “magia”: el agente sigue el guion del flujo; si incluye inteligencia artificial, el modelo actúa dentro de ese guion y con controles para no salirse de lo acordado.",
      },
    ],
  },
  {
    q: "¿Usan n8n u otras herramientas para integrar y automatizar sistemas?",
    blocks: [
      {
        type: "p",
        text: "Sí cuando encaja el stack: n8n, webhooks y APIs son opciones habituales para automatización de workflows empresariales y digitalización operativa, con logs y responsables claros. No es obligatorio: a veces conviene código propio o un mix según compliance y criticidad del proceso.",
      },
    ],
  },
];
}

export function AutomatizacionNegociosLanding({ pricingRegion }: { pricingRegion: PricingRegion }) {
  const faqItems = buildFaqItems(pricingRegion);
  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <div
          className={`inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary ${motionFadeUpMs(24)}`}
        >
          <Zap className="h-3.5 w-3.5 shrink-0" aria-hidden />
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
        <ServiceLandingHeroOffer slug="automatizacion-procesos-clinicas" pricingRegion={pricingRegion} />
        <div className={`mt-6 flex flex-wrap gap-4 ${motionFadeUpMs(72)}`}>
          <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} hideWhatsAppIconMobile />
        </div>
      </header>

          <section className={LANDING_SECTION} aria-labelledby="problema-heading">
            <SectionKicker n="01">El problema</SectionKicker>
            <h2
              id="problema-heading"
              className={landingH2Class}
            >
              Tareas manuales que te hacen perder tiempo y recursos en tu negocio
            </h2>
            <div className="mt-8 space-y-4 border-l-2 border-primary/35 py-1 pl-5 text-lg font-medium leading-relaxed text-foreground md:pl-6 md:text-xl">
                <p>¿Seguís perdiendo tiempo todas las semanas haciendo lo mismo?</p>
                <p className="font-normal text-foreground/90 md:text-[17px]">
                  Responder mensajes, cargar datos en planillas, copiar información entre sistemas o coordinar tareas
                  manualmente—típico de la automatización de tareas repetitivas que todavía hace el equipo en lugar del
                  sistema. A veces el texto o los pedidos no entran en una tabla fija: ahí la automatización con IA puede
                  ayudar, siempre con reglas y revisión humana donde corresponde.
                </p>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  La automatización para empresas no es solo “tecnología”: es ordenar la automatización empresarial para
                  que la automatización de procesos administrativos (pagos, facturación de profesionales, reportes) no
                  frene el crecimiento.
                </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="ejemplos-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <h2 id="ejemplos-heading" className={landingH2Class}>
              Ejemplos de tareas manuales comunes
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {EJEMPLOS_TAREAS.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="clinicas-admin-heading">
            <SectionKicker n="02b">Rubros</SectionKicker>
            <h2
              id="clinicas-admin-heading"
              className={landingH2Class}
            >
              Clínicas, consultorios y administración
            </h2>
            <div className="mt-5 space-y-4 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>
                En <strong className="font-semibold text-foreground">clínicas y consultorios</strong>, la{" "}
                <strong className="font-semibold text-foreground">automatización de procesos administrativos</strong>{" "}
                suele convivir con turnos, autorizaciones y{" "}
                <strong className="font-semibold text-foreground">facturación de profesionales</strong>: muchas veces
                los mismos datos pasan por recepción, prestaciones y facturación sin integración clara.
              </p>
              <p className="text-muted-foreground">
                Podés combinar esta automatización de procesos con{" "}
                <Link prefetch={false} href="/software-para-clinicas" className="font-medium text-primary underline-offset-4 hover:underline">
                  aplicaciones móviles
                </Link>{" "}
                o con{" "}
                <Link prefetch={false} href="/sistema-turnos-online" className="font-medium text-primary underline-offset-4 hover:underline">
                  sistema de turnos online
                </Link>{" "}
                para sumar autogestión y notificaciones sin depender solo de llamadas y mensajes sueltos.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="consecuencias-heading">
            <SectionKicker n="03">Riesgos</SectionKicker>
            <h2
              id="consecuencias-heading"
              className={landingH2Class}
            >
              Qué pasa cuando todo depende de tareas manuales
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {CONSECUENCIAS.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="formas-heading">
            <SectionKicker n="04">Enfoques</SectionKicker>
            <h2
              id="formas-heading"
              className={landingH2Class}
            >
              Formas de reducir tareas manuales en un negocio
            </h2>
            <p className="mt-5 text-foreground/90 leading-relaxed md:text-[17px]">
              Existen distintas formas de abordar este problema, dependiendo del nivel de complejidad:
            </p>
            <div className="mt-6 space-y-8">
              <div className="border-l border-border/80 py-1 pl-5 md:pl-6">
                <p className="font-display text-base font-semibold text-foreground">
                  <span className="tabular-nums text-muted-foreground">1.</span> Opción 1: Procesos manuales optimizados
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Organizar mejor tareas y flujos puede ayudar, pero tiene un límite.
                </p>
              </div>
              <div className="border-l border-border/80 py-1 pl-5 md:pl-6">
                <p className="font-display text-base font-semibold text-foreground">
                  <span className="tabular-nums text-muted-foreground">2.</span> Opción 2: Herramientas estándar
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Existen plataformas que automatizan partes del proceso, pero muchas veces no se adaptan completamente.
                </p>
              </div>
              <div className="border-l-2 border-primary/45 py-1 pl-5 md:pl-6">
                <p className="font-display text-base font-semibold text-foreground">
                  <span className="tabular-nums text-primary">3.</span> Opción 3: Automatización de procesos
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/95 md:text-[15px]">
                  Conecta sistemas y elimina lo repetitivo con integraciones y reglas; cuando el caso lo pide, incorpora
                  inteligencia artificial o agentes que ejecutan pasos acotados (por ejemplo clasificar pedidos o preparar
                  datos antes de que un humano valide).
                </p>
              </div>
              <div className="border-l border-border/80 py-1 pl-5 md:pl-6">
                <p className="font-display text-base font-semibold text-foreground">
                  <span className="tabular-nums text-muted-foreground">4.</span> Opción 4: Software a medida
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Cuando el negocio tiene necesidades específicas, desarrollar una solución personalizada es la mejor
                  alternativa.
                </p>
              </div>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <h2 id="propuesta-heading" className={landingH2Class}>
              Cómo automatizo procesos en negocios
            </h2>
            <div className={landingBodyClass}>
              <p className="text-foreground/95">
                Desarrollo automatizaciones a medida que conectan tus herramientas y eliminan tareas repetitivas:
                webhooks, APIs, planillas, CRM y mensajería en un mismo flujo.
              </p>
              <p className="text-foreground/95">
                Cuando el proceso tiene variación en el lenguaje o en los datos de entrada, evaluamos si conviene sumar{" "}
                <strong className="font-semibold text-foreground">inteligencia artificial</strong> (por ejemplo para
                clasificar, extraer campos o armar borradores) o{" "}
                <strong className="font-semibold text-foreground">agentes de automatización</strong> que encadenan pasos con
                reglas y validaciones—siempre con auditoría y revisión humana donde aplica.
              </p>
              <p className="text-foreground/95">
                Desde flujos simples hasta procesos más complejos, el objetivo es reducir el trabajo manual y dejar criterio
                humano para lo que realmente lo necesita.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="beneficios-heading">
            <SectionKicker n="06">Resultados</SectionKicker>
            <h2
              id="beneficios-heading"
              className={landingH2Class}
            >
              Beneficios de automatizar procesos
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {BENEFICIOS.map((b) => (
                <li key={b} className="text-foreground/95">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="cuando-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2
              id="cuando-heading"
              className={landingH2Class}
            >
              Cuándo tiene sentido automatizar procesos
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary md:text-[17px]">
              {CUANDO.map((text) => (
                <li key={text} className="text-foreground/95">
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="ejemplo-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="ejemplo-heading"
              className={landingH2Class}
            >
              Ejemplo de automatización
            </h2>
            <div className={`${landingBodyClass} mt-8`}>
              <p className="text-base leading-relaxed text-foreground/95 md:text-lg">
                Un negocio registraba sus ventas en una planilla de Excel y luego tenía que generar las facturas
                manualmente, copiando los datos en el sistema de facturación.
              </p>
              <p className="text-muted-foreground md:text-[17px]">
                Esto generaba pérdida de tiempo, errores y retrabajo.
              </p>
              <p className="text-foreground/95 md:text-[17px]">
                Se implementó una automatización que toma los datos desde la planilla y genera las facturas automáticamente;
                en otro flujo del mismo negocio se usó inteligencia artificial solo para normalizar descripciones libres
                antes de validar con una persona.
              </p>
              <p className="border-l-2 border-primary/40 py-1 pl-4 font-medium text-foreground md:pl-5 md:text-[17px]">
                <span className="text-primary">Resultado:</span> eliminación del trabajo manual repetitivo, menos errores,
                facturación más rápida y pasos con IA acotados a lo que el equipo revisa.
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
                  name="faq-automatizacion-procesos"
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
              Si estás en esta situación, podemos analizar tu caso: integraciones puras, flujos híbridos o dónde tiene
              sentido sumar inteligencia artificial y agentes sin perder control de la operación.
            </p>
            <div className="mt-8">
              <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} />
            </div>
          </section>

          <LandingRelatedNav links={RELATED_LINKS} />
    </LandingReadingMain>
  );
}
