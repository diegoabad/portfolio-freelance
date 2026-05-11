import Link from "next/link";
import {
  ChevronDown,
  CheckCircle2,
  CircleAlert,
  HelpCircle,
  MessageCircle,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import {
  FaqBlocks,
  LandingWaCta,
  LANDING_ARTICLE_MAX_CLASS,
  SectionKicker,
  type FaqBlock,
} from "@/components/seo/landing-blocks";
import { EVALUATION_OFFER_FAQ, LANDING_CONSULT_CTA } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
const CATEGORY = "Bots de WhatsApp";

const HERO = {
  title: "Bots de WhatsApp para negocios",
  subtitle:
    "Automatización de mensajes y chatbot de WhatsApp con inteligencia artificial cuando hace falta, integrado con agendas y CRM. Pensado para empresas y pymes en Argentina que viven del canal: chatbot para atención al cliente por WhatsApp, automatización de consultas y opción de automatizar respuestas en WhatsApp Business sin perder control humano. También bot de WhatsApp para consultorios médicos, clínicas o centros de estética cuando el volumen lo justifica.",
};

const MORE_SOLUTIONS = [
  { href: "/sistema-turnos-online", label: "Turnos online" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
  { href: "/sistema-gestion-inventario", label: "Gestión de inventario" },
] as const;

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
    <div className="relative flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/12 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[320px] w-[min(100%,520px)] -translate-x-1/2 rounded-full bg-primary/8 blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-site px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
        <article className={LANDING_ARTICLE_MAX_CLASS}>
          <header className="relative overflow-hidden rounded-3xl border border-border/90 bg-linear-to-b from-surface/90 via-surface/50 to-background/30 p-8 shadow-[inset_0_1px_0_0_rgb(255_255_255/6%),0_24px_64px_-32px_rgb(0_0_0/0.45)] md:p-10">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                <MessageCircle className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                <span className="text-primary">{CATEGORY}</span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground sm:text-4xl md:text-[2.65rem] md:leading-[1.12]">
                {HERO.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">{HERO.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} hideWhatsAppIconMobile />
              </div>
            </div>
          </header>

          <section className="mt-16 md:mt-20" aria-labelledby="problema-heading">
            <SectionKicker n="01">Problema</SectionKicker>
            <h2
              id="problema-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Perdés ventas y sobrecargás al equipo cuando WhatsApp no escala
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-primary/6 px-6 py-8 md:px-8 md:py-9">
              <div
                className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-4 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                <p>Hoy la mayoría de las consultas llegan por WhatsApp.</p>
                <p className="font-normal text-foreground/90 md:text-[17px]">
                  Si no respondés rápido, el cliente sigue buscando y elige otra opción. Pero el problema no es solo
                  “tiempo de respuesta”: también es el costo oculto en horas de tu gente, los sueldos asociados y la
                  tentación de resolver todo contratando más personal para un canal que debería ser más eficiente.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="contexto-heading">
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

          <section className="mt-16 md:mt-20" aria-labelledby="consecuencias-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="consecuencias-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Qué pasa si no resolvés esto
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {CONSECUENCIAS.map((text) => (
                <div
                  key={text}
                  className="flex gap-3 rounded-xl border border-border/90 bg-background/40 px-4 py-4 backdrop-blur-sm"
                >
                  <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-snug text-foreground/95 md:text-[15px]">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="formas-heading">
            <SectionKicker n="04">Enfoque</SectionKicker>
            <h2
              id="formas-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Cómo se puede resolver
            </h2>
            <p className="mt-5 text-foreground/90 leading-relaxed md:text-[17px]">
              Existen distintas formas de manejar WhatsApp en un negocio:
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

            <div className="mt-10 space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                Dos formas de automatizar (a veces combinadas)
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-surface/40 p-5 md:p-6">
                  <p className="font-display text-base font-semibold text-foreground">Bots con flujos convencionales</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    Menús, respuestas guardadas, reglas y derivaciones: ideal para lo repetitivo, para ordenar el ingreso
                    de mensajes y para que el cliente llegue rápido a la información correcta sin depender de que alguien
                    esté libre en ese momento.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/35 bg-primary/8 p-5 md:p-6">
                  <p className="font-display text-base font-semibold text-foreground">
                    Bots con inteligencia artificial
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-[15px]">
                    Cuando hay muchas formas de preguntar lo mismo o conversaciones menos predecibles, la IA ayuda a
                    interpretar mejor la intención y a responder con más flexibilidad—siempre con límites claros y con
                    opción de pasar a un humano cuando el caso lo requiere.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground leading-relaxed md:text-[15px]">
              La diferencia está en dejar de resolver el volumen solo con más horas humanas: automatizás lo repetible y
              liberás al equipo para vender, operar o casos que realmente necesitan criterio.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="propuesta-heading">
            <SectionKicker n="05">Propuesta</SectionKicker>
            <div className="mt-3 rounded-2xl border border-border bg-surface/35 p-6 md:flex md:items-start md:gap-8 md:p-8">
              <div className="mx-auto flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary md:mx-0">
                <MessagesSquare className="h-7 w-7" aria-hidden />
              </div>
              <div className="mt-6 w-full min-w-0 flex-1 md:mt-0">
                <h2
                  id="propuesta-heading"
                  className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
                >
                  Automatización de WhatsApp para empresas: cómo lo encaro
                </h2>
                <p className="mt-5 font-medium text-foreground md:text-[17px]">
                  Implemento automatizaciones con bots “clásicos”, con apoyo de inteligencia artificial o mixtas, según tu
                  volumen y tipo de consultas:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/95 leading-relaxed marker:text-primary md:text-[17px]">
                  {PROPUESTA_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-muted-foreground leading-relaxed md:text-[17px]">
                  Cada solución se adapta al tipo de negocio y volumen de mensajes.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="beneficios-heading">
            <SectionKicker n="06">Resultado</SectionKicker>
            <h2
              id="beneficios-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Qué cambia cuando automatizás WhatsApp
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

          <section className="mt-16 md:mt-20" aria-labelledby="cuando-heading">
            <SectionKicker n="07">Señales</SectionKicker>
            <h2
              id="cuando-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Señales de que necesitás automatizar
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
              Si te pasa alguno de estos puntos, probablemente tenga sentido automatizar.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="ejemplo-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="ejemplo-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Ejemplo de automatización
            </h2>
            <figure className="relative mt-8 overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-surface/80 to-primary/4 p-6 md:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/15 blur-2xl"
                aria-hidden
              />
              <MessageCircle className="relative h-8 w-8 text-primary" aria-hidden />
              <div className="relative mt-4 space-y-4 text-base leading-relaxed text-foreground/95 md:text-lg">
                <p>
                  Un negocio en Argentina recibía muchas consultas por WhatsApp y no lograba responder a tiempo,
                  especialmente fuera del horario laboral. La automatización de mensajes estaba ausente: el equipo dedicaba
                  demasiadas horas a lo repetitivo y se evaluaba sumar gente solo para el canal.
                </p>
                <p className="text-muted-foreground md:text-[17px]">
                  Se implementó una automatización que responde lo frecuente con flujos claros y usa inteligencia
                  artificial donde ayuda a clasificar o interpretar mejor, dejando a las personas para los casos que
                  importan.
                </p>
                <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-medium text-foreground md:text-[17px]">
                  <span className="text-primary">Resultado:</span> respuestas más rápidas, mejor organización, más
                  consultas aprovechadas y menos presión sobre sueldos y disponibilidad del equipo.
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

          <section className="relative mt-16 overflow-hidden rounded-3xl border border-primary/40 bg-linear-to-br from-primary/14 via-primary/6 to-transparent px-6 py-10 md:mt-20 md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <p className="relative text-lg font-medium leading-relaxed text-foreground md:text-xl">
              Si buscás WhatsApp automatizado para negocios—con bot con inteligencia artificial en WhatsApp o flujos
              guiados, integrado a agenda y CRM—podemos ver juntos qué encaja con tu volumen y cómo ordenar la atención
              sin inflar costos en tiempo y equipo.
            </p>
            <div className="relative mt-8">
              <LandingWaCta href={homeSection("#contacto")} main={LANDING_CONSULT_CTA} />
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
                      className="group flex items-center gap-4 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface md:px-5 md:py-4 md:text-[15px]"
                    >
                      <span className="group-hover:text-primary transition-colors">{l.label}</span>
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
