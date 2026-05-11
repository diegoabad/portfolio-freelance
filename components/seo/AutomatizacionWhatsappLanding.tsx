import {
  ChevronDown,
  CheckCircle2,
  CircleAlert,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
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
import { serviceLandingPriceFaqCallout } from "@/lib/service-landings";
const CATEGORY = "Bots de WhatsApp";

const RELATED_LINKS = [
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
  { href: "/sistema-gestion-inventario", label: "Gestión de inventario" },
] as const;

const HERO = {
  title: "Bots de WhatsApp para negocios",
  subtitle:
    "Automatización de mensajes y chatbot de WhatsApp con inteligencia artificial cuando hace falta, integrado con agendas y CRM. Pensado para empresas y pymes en Argentina que viven del canal: chatbot para atención al cliente por WhatsApp, automatización de consultas y opción de automatizar respuestas en WhatsApp Business sin perder control humano. También bot de WhatsApp para consultorios médicos, clínicas o centros de estética cuando el volumen lo justifica.",
};

const CONTEXTO_DIFICULTADES = [
  "mensajes fuera de horario",
  "consultas repetidas",
  "múltiples conversaciones al mismo tiempo",
  "muchas horas del equipo (y su costo en sueldos) solo contestando lo mismo",
  "presión por contratar más personas solo para el canal de WhatsApp",
] as const;

const CONSECUENCIAS = [
  "Perdés ventas todos los días",
  "Baja la conversión de consultas",
  "Dependés de estar siempre disponible",
  "La atención se vuelve desorganizada",
  "El cliente elige a quien responde primero",
  "Escalar solo con más empleados encarece sueldos, capacitación y gestión",
  "El equipo queda atrapado en tareas repetitivas de bajo valor",
] as const;

const FORMAS = [
  { title: "Responder manualmente", body: "No escala.", highlight: false },
  { title: "Usar respuestas rápidas", body: "Limitado.", highlight: false },
  { title: "Organizar mejor la atención", body: "Mejora parcial.", highlight: false },
  {
    title: "Automatizar el flujo de mensajes",
    body: "Eliminá la dependencia de responder todo a mano.",
    highlight: true,
  },
] as const;

const PROPUESTA_ITEMS = [
  "Definir inteligencia artificial, flujos guiados o una combinación según tu negocio e integraciones (agenda, CRM…)",
  "Responder consultas frecuentes automáticamente (atención, ventas o soporte según el caso)",
  "Organizar conversaciones y dejar historial útil para humanos",
  "Derivar clientes según el tipo de consulta o la intención del mensaje",
  "Integración de WhatsApp con sistemas: CRM, agenda, internos u otros que ya uses",
] as const;

const BENEFICIOS = [
  "Respuestas inmediatas",
  "Atención 24/7",
  "Más consultas convertidas en clientes",
  "Menos carga operativa y mejor uso de horas del equipo",
  "Menos necesidad de escalar solo con más contrataciones",
  "Mejor organización del canal",
] as const;

const SEÑALES = [
  "No llegás a responder todos los mensajes",
  "Respondés tarde o fuera de horario",
  "Repetís siempre las mismas respuestas",
  "Perdés consultas sin seguimiento",
  "Dependés totalmente de estar conectado",
  "Pagás muchas horas de sueldo solo en mensajes que podrían estar automatizados",
  "Evaluás contratar alguien más principalmente para “bajar” el WhatsApp",
] as const;

const FAQ_ITEMS: { q: string; blocks: FaqBlock[] }[] = [
  {
    q: "¿Cuánto cuesta automatizar WhatsApp?",
    blocks: [
      {
        type: "p",
        text: "Depende del nivel de automatización, volumen de mensajes, integraciones (CRM, agenda, etc.) y complejidad del flujo de atención.",
      },
      { type: "callout", text: serviceLandingPriceFaqCallout("bots-whatsapp") },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿Se puede automatizar completamente WhatsApp?",
    blocks: [
      {
        type: "p",
        text: "Se pueden automatizar muchas partes del proceso, especialmente respuestas iniciales y consultas frecuentes.",
      },
    ],
  },
  {
    q: "¿Voy a perder el contacto humano con los clientes?",
    blocks: [
      {
        type: "p",
        text: "No. La automatización complementa la atención humana y permite intervenir cuando es necesario.",
      },
    ],
  },
  {
    q: "¿Funciona para cualquier negocio?",
    blocks: [
      {
        type: "p",
        text: "En la práctica suma mucho donde hay consultas repetidas y volumen por WhatsApp: comercios, servicios, equipos de atención al cliente y operaciones que coordinan por el mismo canal. También se usa como bot de WhatsApp para clínicas cuando hace falta ordenar primeras respuestas y turnos sin saturar recepción.",
      },
    ],
  },
  {
    q: "¿Se puede integrar con otros sistemas?",
    blocks: [
      {
        type: "p",
        text: "Sí: CRM, agendas, herramientas internas y lo que ya uses en la operación, para que el chatbot no quede aislado y el mensaje se traduzca en acción (reserva, caso en CRM, derivación, etc.).",
      },
    ],
  },
  {
    q: "¿Qué diferencia hay entre un bot ‘normal’ y uno con inteligencia artificial?",
    blocks: [
      {
        type: "p",
        text: "Un bot convencional sigue flujos definidos: menús, respuestas guardadas, reglas y derivaciones. Es muy efectivo para lo repetitivo y para ordenar el ingreso de consultas.",
      },
      {
        type: "p",
        text: "Un bot con inteligencia artificial ayuda a interpretar mejor lo que escribe la persona (intención, variaciones del lenguaje) y mantener conversaciones más flexibles cuando el caso lo permite—siempre con límites y, si hace falta, paso a un humano.",
      },
      {
        type: "p",
        text: "En la práctica muchas implementaciones combinan ambos: reglas claras para lo masivo y IA donde suma para no frustrar al cliente ni sobrecargar al equipo.",
      },
    ],
  },
  {
    q: "¿Hacen desarrollo e implementación de chatbot en Argentina para empresas?",
    blocks: [
      {
        type: "p",
        text: "Sí: desde flujos guiados y un sistema de atención automática por WhatsApp hasta bots con IA para ventas y soporte, con integración de WhatsApp con sistemas que ya usás (agenda, CRM, internos). El alcance se define según volumen, riesgos y qué querés que resuelva el bot de WhatsApp para atención médica o comercial en cada caso.",
      },
    ],
  },
];

export function AutomatizacionWhatsappLanding() {
  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {CATEGORY}
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
          {HERO.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{HERO.subtitle}</p>
        <ServiceLandingHeroOffer slug="bots-whatsapp" />
        <div className="mt-6 flex flex-wrap gap-4">
          <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} hideWhatsAppIconMobile />
        </div>
      </header>

          <section className={LANDING_SECTION} aria-labelledby="problema-heading">
            <SectionKicker n="01">Problema</SectionKicker>
            <h2 id="problema-heading" className={landingH2Class}>
              Perdés ventas y sobrecargás al equipo cuando WhatsApp no escala
            </h2>
            <div className={`${landingBodyClass} mt-6 border-l-2 border-primary/35 pl-4 md:pl-5`}>
              <p className="font-medium text-foreground md:text-lg">Hoy la mayoría de las consultas llegan por WhatsApp.</p>
              <p>
                Si no respondés rápido, el cliente sigue buscando y elige otra opción. Pero el problema no es solo
                “tiempo de respuesta”: también es el costo oculto en horas de tu gente, los sueldos asociados y la
                tentación de resolver todo contratando más personal para un canal que debería ser más eficiente.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="contexto-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <div className="mt-3 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>A medida que tu negocio crece, también lo hace la cantidad de mensajes.</p>
              <p className="font-display text-lg font-semibold text-foreground md:text-xl">
                Responder todo manualmente se vuelve difícil:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_DIFICULTADES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Esto termina en demoras, consultas sin seguimiento y un uso caro de recursos humanos en tareas que se
                repiten todos los días.
              </p>
              <h3
                id="chatbot-empresas-argentina"
                className="mt-8 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl scroll-mt-28"
              >
                Chatbot de WhatsApp para empresas en Argentina
              </h3>
              <p className="mt-3 text-foreground/95 leading-relaxed md:text-[17px]">
                La automatización WhatsApp empresas suele arrancar por el mismo problema: muchas consultas y un solo
                número. Un chatbot para atención al cliente ordena respuestas frecuentes y deja registro de lo que pasó,
                mientras un bot con inteligencia artificial en WhatsApp ayuda cuando las preguntas no entran en menús
                rígidos.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed md:text-[17px]">
                Es WhatsApp automatizado para negocios sin sacrificar el criterio humano: derivás al equipo cuando el
                caso lo pide. También encaja como bot de WhatsApp para clínicas—primeras respuestas, recordatorios y
                coordinación con agenda—y como automatización de mensajes WhatsApp cuando el volumen ya no cierra solo
                con el celular.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="consecuencias-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2 id="consecuencias-heading" className={landingH2Class}>
              Qué pasa si no resolvés esto
            </h2>
            <ul className="mt-6 space-y-3 text-foreground/95 md:text-[17px]">
              {CONSECUENCIAS.map((text) => (
                <li key={text} className="flex gap-3">
                  <CircleAlert className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="formas-heading">
            <SectionKicker n="04">Enfoque</SectionKicker>
            <h2 id="formas-heading" className={landingH2Class}>
              Cómo se puede resolver
            </h2>
            <p className="mt-5 text-foreground/90 leading-relaxed md:text-[17px]">
              Existen distintas formas de manejar WhatsApp en un negocio:
            </p>
            <ol className="mt-6 space-y-5 md:text-[17px]">
              {FORMAS.map((f, i) => (
                <li
                  key={f.title}
                  className={
                    f.highlight
                      ? "border-l-2 border-primary/50 pl-4 md:pl-5"
                      : "border-l border-border pl-4 md:pl-5 text-muted-foreground"
                  }
                >
                  <span className="font-display font-semibold text-foreground">
                    {i + 1}. {f.title}
                  </span>
                  <p className="mt-1 leading-relaxed">{f.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 space-y-5">
              <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                Dos formas de automatizar (a veces combinadas)
              </h3>
              <div className={`${landingBodyClass} space-y-6`}>
                <div>
                  <p className="font-display font-semibold text-foreground">Bots con flujos convencionales</p>
                  <p className="mt-2 text-muted-foreground">
                    Menús, respuestas guardadas, reglas y derivaciones: ideal para lo repetitivo, para ordenar el ingreso
                    de mensajes y para que el cliente llegue rápido a la información correcta sin depender de que alguien
                    esté libre en ese momento.
                  </p>
                </div>
                <div className="border-l-2 border-primary/35 pl-4 md:pl-5">
                  <p className="font-display font-semibold text-foreground">Bots con inteligencia artificial</p>
                  <p className="mt-2">
                    Cuando hay muchas formas de preguntar lo mismo o conversaciones menos predecibles, la IA ayuda a
                    interpretar mejor la intención y a responder con más flexibilidad—siempre con límites claros y con
                    opción de pasar a un humano cuando el caso lo requiere.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium leading-relaxed text-foreground md:text-[15px] md:pl-5">
              La diferencia está en dejar de resolver el volumen solo con más horas humanas: automatizás lo repetible y
              liberás al equipo para vender, operar o casos que realmente necesitan criterio.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <h2 id="propuesta-heading" className={landingH2Class}>
              Automatización de WhatsApp para empresas: cómo lo encaro
            </h2>
            <div className={landingBodyClass}>
              <p className="font-medium text-foreground">
                Implemento automatizaciones con bots “clásicos”, con apoyo de inteligencia artificial o mixtas, según tu
                volumen y tipo de consultas:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {PROPUESTA_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">Cada solución se adapta al tipo de negocio y volumen de mensajes.</p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="beneficios-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2 id="beneficios-heading" className={landingH2Class}>
              Qué cambia cuando automatizás WhatsApp
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary text-foreground/95 md:text-[17px]">
              {BENEFICIOS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="cuando-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2 id="cuando-heading" className={landingH2Class}>
              Señales de que necesitás automatizar
            </h2>
            <ul className="mt-6 space-y-3 text-foreground/95 md:text-[17px]">
              {SEÑALES.map((text) => (
                <li key={text} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary/40 py-1 pl-4 text-sm font-medium leading-relaxed md:pl-5 md:text-[15px]">
              Si te pasa alguno de estos puntos, probablemente tenga sentido automatizar.
            </p>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="ejemplo-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2 id="ejemplo-heading" className={landingH2Class}>
              Ejemplo de automatización
            </h2>
            <div className={`${landingBodyClass} mt-6`}>
              <p>
                Un negocio en Argentina recibía muchas consultas por WhatsApp y no lograba responder a tiempo,
                especialmente fuera del horario laboral. La automatización de mensajes estaba ausente: el equipo dedicaba
                demasiadas horas a lo repetitivo y se evaluaba sumar gente solo para el canal.
              </p>
              <p className="text-muted-foreground">
                Se implementó una automatización que responde lo frecuente con flujos claros y usa inteligencia artificial
                donde ayuda a clasificar o interpretar mejor, dejando a las personas para los casos que importan.
              </p>
              <p className="border-l-2 border-primary/40 py-1 pl-4 font-medium md:pl-5">
                <span className="text-primary">Resultado:</span> respuestas más rápidas, mejor organización, más consultas
                aprovechadas y menos presión sobre sueldos y disponibilidad del equipo.
              </p>
            </div>
          </section>

          <section className={LANDING_SECTION} aria-labelledby="faq-heading">
            <SectionKicker n="09">FAQ</SectionKicker>
            <h2 id="faq-heading" className={landingH2Class}>
              Preguntas frecuentes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Abrí la pregunta que te interese; el contenido sigue indexable para buscadores.
            </p>
            <div className="mt-6 divide-y divide-border border-t border-border">
              {FAQ_ITEMS.map(({ q, blocks }) => (
                <details
                  key={q}
                  name="faq-bots-whatsapp"
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
              Si buscás WhatsApp automatizado para negocios—con bot con inteligencia artificial en WhatsApp o flujos
              guiados, integrado a agenda y CRM—podemos ver juntos qué encaja con tu volumen y cómo ordenar la atención
              sin inflar costos en tiempo y equipo.
            </p>
            <div className="mt-8">
              <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} />
            </div>
          </section>

          <LandingRelatedNav links={RELATED_LINKS} />
    </LandingReadingMain>
  );
}
