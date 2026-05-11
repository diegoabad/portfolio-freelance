import Link from "next/link";
import {
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  CircleAlert,
  HelpCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  FaqBlocks,
  LandingWaCta,
  LANDING_ARTICLE_MAX_CLASS,
  SectionKicker,
  type FaqBlock,
} from "@/components/seo/landing-blocks";
import { EVALUATION_OFFER_FAQ, LANDING_CONSULT_CTA, REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
const CATEGORY = "Turnos online";

const HERO = {
  title: "Sistema de turnos online: agenda médica y reservas",
  subtitle:
    "Un sistema de reservas online con autogestión, reglas claras y agenda online con recordatorios automáticos. Pensado para agenda médica online, turnos online para clínicas, software de agenda para consultorios o sistema de citas online para clínicas privadas; también centros de estética, profesionales independientes y plataforma de turnos online en Argentina cuando hace falta orden y trazabilidad. Coordiná turnos online con WhatsApp sin perder una sola fuente de verdad.",
};

const MORE_SOLUTIONS = [
  { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
  { href: "/automatizacion-negocios", label: "Automatización de procesos" },
  { href: "/desarrollo-software-medida", label: "Software a medida" },
  { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
  { href: "/sistema-gestion-inventario", label: "Gestión de inventario" },
] as const;

const CONTEXTO_CANALES = ["WhatsApp", "Llamadas", "Planillas", "Agendas manuales"] as const;

const CONTEXTO_EFECTOS = [
  "haya confusiones de horarios",
  "se superpongan turnos",
  "se pierdan reservas",
  "no haya seguimiento de cancelaciones",
] as const;

const RIESGO_ITEMS = [
  "Pérdida de ingresos por turnos vacíos",
  "Cancelaciones sin control",
  "Mala experiencia del cliente",
  "Desorganización interna",
  "Dependencia total de gestión manual",
] as const;

const FORMAS = [
  { title: "Gestión manual", body: "No escala cuando crece el volumen.", highlight: false },
  { title: "Agendas básicas o planillas", body: "Riesgo de errores y huecos.", highlight: false },
  { title: "Herramientas estándar con limitaciones", body: "A veces no cubren autogestión, reglas finas ni IA acoplada a tu operación.", highlight: false },
  {
    title: "Agenda unificada con reglas y autogestión",
    body: "El paciente reserva solo dentro de políticas claras; el equipo trabaja en el mismo sistema; opción de IA donde suma.",
    highlight: true,
  },
] as const;

const PROPUESTA_ITEMS = [
  "Definir reglas de agenda (duraciones, buffers, profesionales, servicios, políticas de cambio o cancelación)",
  "Habilitar autogestión del paciente o cliente: reserva y reprogramación acotadas a esas reglas",
  "Panel para empleados: disponibilidad, bloqueos, vista del día y seguimiento sin depender de mensajes sueltos",
  "Opcional: agentes de inteligencia artificial que sugieren turnos o responden sobre disponibilidad respetando las mismas reglas",
  "Automatizar confirmaciones y recordatorios",
  "Centralizar cancelaciones y métricas para mejorar la ocupación",
] as const;

const BENEFICIOS = [
  "Menos cancelaciones",
  "Pacientes que gestionan turnos solos sin romper tus reglas",
  "Equipo alineado: una agenda, menos WhatsApp interno",
  "Mejor uso del tiempo del personal",
  "Reglas aplicadas igual para humanos y para IA",
  "Más turnos efectivos",
] as const;

const SEÑALES = [
  "Se te superponen horarios",
  "Perdés turnos por falta de control",
  "No sabés cuántos turnos se cancelan",
  "Manejás todo manualmente",
  "Tu agenda depende de mensajes o llamadas",
  "El equipo pierde tiempo coordinando reservas que podrían ser autogestionadas",
  "Necesitás políticas claras (quién puede dar qué turno) pero solo vivís en planillas",
] as const;

const MSG_HERO =
  "Hola Diego, quiero contarte mi proyecto: necesito ordenar mis turnos con un sistema online. Me interesa un presupuesto sin cargo.";
const MSG_CASO =
  "Hola Diego, quiero contarte mi caso (turnos / agenda) para ver cómo lo podemos ordenar y qué presupuesto podría ser.";

function waHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const FAQ_ITEMS: { q: string; blocks: FaqBlock[] }[] = [
  {
    q: "¿Cuánto cuesta implementar un sistema de turnos?",
    blocks: [
      {
        type: "p",
        text: "Depende del nivel de automatización, integraciones y personalización: no es lo mismo una agenda básica que un sistema conectado con otras herramientas.",
      },
      { type: "p", text: EVALUATION_OFFER_FAQ },
    ],
  },
  {
    q: "¿Se puede adaptar a mi tipo de negocio?",
    blocks: [
      {
        type: "p",
        text: "Sí: el mismo enfoque de sistema de turnos online sirve para distintos rubros. Se ajusta según servicios, horarios y políticas—desde agenda médica online y software de turnos para consultorios hasta turnos online para clínicas con varios profesionales.",
      },
    ],
  },
  {
    q: "¿Se pueden automatizar recordatorios?",
    blocks: [
      {
        type: "p",
        text: "Sí: automatización de turnos y recordatorios (SMS, mail, WhatsApp u otros canales según política) para bajar cancelaciones y huecos. Es parte natural de un software de turnos online o de una agenda online con recordatorios automáticos alineada a tu operación.",
      },
    ],
  },
  {
    q: "¿Funciona con WhatsApp?",
    blocks: [
      {
        type: "p",
        text: "Sí: muchos equipos combinan agenda con turnos médicos por WhatsApp—recordatorios, confirmaciones o primer contacto—para que el paciente no quede colgado en el chat. La idea es que WhatsApp alimente o consulte el mismo sistema de reservas online, no un calendario paralelo sin reglas.",
      },
    ],
  },
  {
    q: "¿Vale la pena implementar un sistema de turnos?",
    blocks: [
      {
        type: "p",
        text: "Si tenés cancelaciones frecuentes o desorganización, el impacto suele ser inmediato.",
      },
    ],
  },
  {
    q: "¿Qué es la autogestión del paciente en la agenda?",
    blocks: [
      {
        type: "p",
        text: "Es que la persona reserve, reprograme o cancele desde un flujo online (web o integrado a otros canales) sin depender de que alguien del equipo conteste al momento—siempre dentro de reglas que vos definís: anticipación mínima, límites por servicio, profesional asignado, etc.",
      },
      {
        type: "p",
        text: "Así baja la carga del personal en ida y vuelta por mensaje y se reducen errores de interpretación.",
      },
    ],
  },
  {
    q: "¿Los empleados siguen usando la agenda?",
    blocks: [
      {
        type: "p",
        text: "Sí. El equipo suele tener un panel para cargar disponibilidad real, bloquear horarios, ver el día y intervenir cuando hace falta. La autogestión del paciente complementa eso; no la reemplaza en casos que necesitan criterio humano.",
      },
    ],
  },
  {
    q: "¿Qué hacen los agentes de inteligencia artificial en una agenda?",
    blocks: [
      {
        type: "p",
        text: "No “inventan” turnos por fuera de tus reglas: trabajan sobre la misma política de negocio—por ejemplo sugiriendo huecos válidos, aclarando opciones según tipo de consulta o ayudando a ordenar solicitudes cuando hay muchas variantes.",
      },
      {
        type: "p",
        text: "La combinación típica es reglas duras en el sistema + IA donde aporta lenguaje natural o priorización, siempre con posibilidad de derivación a una persona.",
      },
    ],
  },
];

export function SistemaTurnosOnlineLanding() {
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
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                <CalendarDays className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
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
                  main={LANDING_CONSULT_CTA}
                  hideWhatsAppIconMobile
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
              Agendas desordenadas y cancelaciones constantes
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-primary/6 px-6 py-8 md:px-8 md:py-9">
              <div
                className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-4 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                <p>
                  Gestionar turnos manualmente suele generar errores, desorganización y pérdida de tiempo—especialmente
                  cuando necesitás un <strong className="font-semibold text-foreground">sistema de turnos online</strong>{" "}
                  que no sea “otra planilla”.
                </p>
                <p className="border-t border-primary/20 pt-4 font-normal text-muted-foreground md:text-[17px]">
                  A medida que aumentan los clientes, la agenda se vuelve difícil de controlar—y si todo pasa por
                  mensajes, tu equipo termina coordinando huecos en lugar de atender. Un{" "}
                  <strong className="font-semibold text-foreground/95">sistema de reservas online</strong> con
                  autogestión y reglas claras libera ese tiempo; los empleados siguen controlando lo que corresponde
                  desde el mismo lugar, y la IA puede ayudar solo donde definís que encaje.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="contexto-heading">
            <SectionKicker n="02">Contexto</SectionKicker>
            <div className="mt-3 space-y-5 text-foreground/95 leading-relaxed md:text-[17px]">
              <p>Muchos negocios manejan sus turnos con:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_CANALES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="font-medium text-foreground">Esto hace que:</p>
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {CONTEXTO_EFECTOS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Agenda médica online, clínicas y consultorios
              </h3>
              <p className="mt-3">
                Un <strong className="font-semibold text-foreground">sistema de turnos online</strong> fuerte también
                funciona como <strong className="font-semibold text-foreground">sistema de reservas online</strong> para
                equipos con varios profesionales o consultorios: turnos online para clínicas,{" "}
                <strong className="font-semibold text-foreground">agenda médica online</strong> con políticas de
                cancelación y, en consultorios,{" "}
                <strong className="font-semibold text-foreground">software de turnos para consultorios</strong> que
                ordena la recepción sin depender solo del teléfono.
              </p>
              <p className="mt-4 text-muted-foreground">
                Si tu operación es mayoritariamente clínica, conviene revisar también{" "}
                <Link href="/software-para-clinicas" className="font-medium text-primary underline-offset-4 hover:underline">
                  aplicaciones móviles
                </Link>
                . Si el cuello de botella es el WhatsApp, los{" "}
                <Link href="/bots-whatsapp" className="font-medium text-primary underline-offset-4 hover:underline">
                  bots de WhatsApp
                </Link>{" "}
                ayudan a encaminar{" "}
                <strong className="font-semibold text-foreground">turnos médicos por WhatsApp</strong> hacia la misma
                agenda con reglas claras.
              </p>
            </div>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="riesgo-heading">
            <SectionKicker n="03">Riesgo</SectionKicker>
            <h2
              id="riesgo-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Qué pasa si no organizás tu sistema de turnos
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
              Cada turno perdido es dinero que no vuelve.
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

            <div className="mt-10 space-y-4">
              <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                Tres piezas que suelen ir juntas
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-surface/40 p-5 md:p-6">
                  <p className="font-display text-base font-semibold text-foreground">Autogestión del paciente</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    Reservas y cambios online dentro de reglas: anticipaciones, servicios, profesional, políticas de
                    cancelación. Menos llamadas y menos errores por mensaje suelto.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface/40 p-5 md:p-6">
                  <p className="font-display text-base font-semibold text-foreground">Agenda para empleados</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    El equipo marca disponibilidad real, bloquea horarios y opera el día desde un solo lugar—sin depender
                    de planillas paralelas que se desalinean con lo que ve el paciente.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/35 bg-primary/8 p-5 md:p-6">
                  <p className="font-display text-base font-semibold text-foreground">
                    Agentes de inteligencia artificial (opcional)
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90 md:text-[15px]">
                    Ayudan a conversar sobre opciones de turno o a priorizar solicitudes respetando las mismas reglas de
                    agenda (no sustituyen tus políticas). Útiles cuando hay muchas variantes de pedido o varios canales de
                    entrada.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm font-medium text-foreground leading-relaxed md:text-[15px]">
              Cuando el volumen crece, hace falta una agenda que una autogestión, trabajo del equipo y—si aplica—IA bajo
              las mismas reglas de negocio.
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
                  Cómo implemento sistemas de turnos
                </h2>
                <p className="mt-5 text-foreground/95 leading-relaxed md:text-[17px]">
                  Desarrollo sistemas que unen la experiencia del paciente, las herramientas del equipo y reglas de agenda
                  de punta a punta—incluyendo agentes de inteligencia artificial cuando el caso lo amerita:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/95 leading-relaxed marker:text-primary md:text-[17px]">
                  {PROPUESTA_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-muted-foreground leading-relaxed md:text-[17px]">
                  Cada solución se adapta al tipo de negocio y forma de trabajo.
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
              Qué cambia cuando organizás tu agenda
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
              Señales de que necesitás mejorar tu sistema de turnos
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
              Si te pasa esto, tu sistema de turnos ya no escala.
            </p>
          </section>

          <section className="mt-16 md:mt-20" aria-labelledby="caso-heading">
            <SectionKicker n="08">Caso</SectionKicker>
            <h2
              id="caso-heading"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]"
            >
              Ejemplo de sistema de turnos
            </h2>
            <figure className="relative mt-8 overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-surface/80 to-primary/4 p-6 md:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/15 blur-2xl"
                aria-hidden
              />
              <CalendarDays className="relative h-8 w-8 text-primary" aria-hidden />
              <div className="relative mt-4 space-y-4 text-base leading-relaxed text-foreground/95 md:text-lg">
                <p>
                  Un negocio gestionaba su agenda a través de WhatsApp y planillas, lo que generaba desorganización y
                  cancelaciones sin control; los pacientes pedían cambios por mensaje y el equipo perdía tiempo en
                  coordinación.
                </p>
                <p className="text-muted-foreground md:text-[17px]">
                  Se implementó un sistema con autogestión del paciente dentro de reglas, panel para empleados y
                  recordatorios automáticos; donde sumaba, un flujo con inteligencia artificial ayudó a orientar
                  disponibilidad sin saltarse las políticas de agenda.
                </p>
                <p className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 font-medium text-foreground md:text-[17px]">
                  <span className="text-primary">Resultado:</span> mejor organización, menos turnos perdidos, menos carga
                  en recepción y reglas aplicadas igual para reservas online y seguimiento del equipo.
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
                  name="faq-sistema-turnos-online"
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
              Si necesitás ordenar turnos con autogestión del paciente, herramientas claras para empleados y reglas de
              agenda—y valorás explorar si los agentes de inteligencia artificial encajan en tu operación—podemos ver el
              alcance juntos.
            </p>
            <div className="relative mt-8">
              <LandingWaCta href={waHref(MSG_CASO)} rel={REL_WHATSAPP_EXTERNAL} main={LANDING_CONSULT_CTA} />
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
