import type { Metadata } from "next";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site";

export type ServiceInterlink = { href: string; label: string };

/** Trio SEO legacy: vacío; los enlaces salen solo de `moreInterlinks` por servicio. */
export const SEO_INTERLINK_TRIO: readonly ServiceInterlink[] = [];

/** Chip destacado (home + hero landing) — sin montos; foco en valor. */
export const HIGHLIGHT_CHIP_BOTS_WHATSAPP = "Bots con reglas · IA · 24/7 e integraciones";
export const HIGHLIGHT_CHIP_TURNOS = "Autogestión · reglas · equipo e IA";
export const HIGHLIGHT_CHIP_AUTOMATIZACION = "APIs, CRM y agentes de IA";
export const HIGHLIGHT_CHIP_SOFTWARE_MEDIDA = "Stack a medida · alineado a tu operación";
export const HIGHLIGHT_CHIP_CLINICAS = "Pacientes · historial digital · turnos";
export const HIGHLIGHT_CHIP_INVENTARIO = "Stock real · movimientos en un solo lugar";

const NBOTS: ServiceInterlink = { href: "/bots-whatsapp", label: "Bots de WhatsApp" };
const NTURNOS: ServiceInterlink = { href: "/sistema-turnos-online", label: "Turnos online" };
const NAUTO: ServiceInterlink = {
  href: "/automatizacion-negocios",
  label: "Automatización de procesos",
};
const NMEDIDA: ServiceInterlink = { href: "/desarrollo-software-medida", label: "Software a medida" };
const NCLINICAS: ServiceInterlink = { href: "/software-para-clinicas", label: "Software para clínicas" };
const NSTOCK: ServiceInterlink = {
  href: "/sistema-gestion-inventario",
  label: "Gestión de inventario",
};

export const SERVICE_LANDING_PAGES = [
  {
    slug: "bots-whatsapp",
    categoryHeading: "Bots de WhatsApp",
    homePainTitle: "Perdés clientes por no responder WhatsApp a tiempo",
    homeCardSubtitle:
      "Bots con flujos definidos o con inteligencia artificial: menos mensajes sin respuesta y menos presión sobre tu equipo.",
    homeCardBadge: HIGHLIGHT_CHIP_BOTS_WHATSAPP,
    homeCardCta: PRIMARY_CTA_LABEL,
    title: "Bots de WhatsApp",
    metaDescription:
      "Bots de WhatsApp con reglas o inteligencia artificial: automatización, flujos, CRM y agenda. Menos tiempo perdido y mejor uso de tu equipo.",
    subtitle:
      "Implementá bots con respuestas y reglas claras, o conversaciones apoyadas en inteligencia artificial cuando hace falta entender mejor al cliente. Todo integrado con CRM, agenda y tu operación—menos consultas perdidas y menos horas-hombre en lo repetitivo.",
    problem:
      "¿El WhatsApp explota y tu equipo no da más? Además del tiempo perdido, cada mensaje sin respuesta es venta o cliente que se enfría; y la alternativa de sumar gente suma sueldos, capacitación y gestión.",
    solution:
      "Diseñamos automatización con bots convencionales (menús, reglas, derivaciones) y, cuando corresponde, capas de inteligencia artificial para interpretar mejor lo que escribe la gente—siempre con espacio para la atención humana donde aporta.",
    benefits: [
      "Atención 24/7",
      "Menos carga y costo oculto en horas del equipo",
      "Mejora en la atención al cliente",
      "Más conversiones sin depender solo de contratar más",
    ],
    moreInterlinks: [NTURNOS, NAUTO, NMEDIDA, NCLINICAS, NSTOCK],
  },
  {
    slug: "sistema-turnos-online",
    categoryHeading: "Turnos online",
    homePainTitle: "Agendas desordenadas y cancelaciones constantes",
    homeCardSubtitle:
      "Agendas con autogestión del paciente, panel para tu equipo y—si hace falta—agentes de inteligencia artificial según reglas de disponibilidad.",
    homeCardBadge: HIGHLIGHT_CHIP_TURNOS,
    homeCardCta: "Coordinemos tu agenda",
    title: "Turnos online",
    metaDescription:
      "Turnos online: autogestión del paciente, reglas de agenda, uso por empleados y opción de agentes de IA. Confirmaciones, recordatorios e integraciones.",
    subtitle:
      "Centralizá reservas con agendas donde el paciente o cliente puede autogestionar turnos dentro de reglas claras, mientras tu equipo opera desde un mismo lugar. Cuando el caso lo amerita, sumamos inteligencia artificial para ayudar a elegir huecos, aplicar políticas de agenda y coordinar sin caos entre canales.",
    problem:
      "¿Los turnos viven repartidos entre WhatsApp, llamadas y planillas, con superposiciones y cancelaciones sin control—y tu equipo pierde tiempo en coordinar lo que el paciente podría resolver solo con reglas bien definidas?",
    solution:
      "Implemento sistemas de turnos con reglas de negocio visibles para todos: autogestión para quien reserva, herramientas para empleados y, si suma, agentes de inteligencia artificial que respetan esas reglas para sugerir horarios o responder sobre disponibilidad.",
    benefits: [
      "Menos cancelaciones y mejor ocupación",
      "Autogestión del paciente con límites claros (menos ida y vuelta)",
      "Equipo alineado en una sola agenda",
      "Reglas de agenda aplicadas de forma consistente",
      "Opción de IA donde simplifica la coordinación",
      "Más turnos efectivos",
    ],
    moreInterlinks: [NBOTS, NAUTO, NMEDIDA, NCLINICAS, NSTOCK],
  },
  {
    slug: "automatizacion-negocios",
    categoryHeading: "Automatización de procesos",
    homePainTitle: "Tareas manuales que te hacen perder horas",
    homeCardSubtitle:
      "Flujos con integraciones (CRM, APIs, planillas) y, cuando suma, inteligencia artificial y agentes acotados a tus reglas.",
    homeCardBadge: HIGHLIGHT_CHIP_AUTOMATIZACION,
    homeCardCta: "Revisamos tu caso",
    title: "Automatización de procesos",
    metaDescription:
      "Automatización de procesos con integraciones y flujos a medida; opción de inteligencia artificial y agentes para clasificar, resumir o decidir pasos dentro de reglas claras.",
    subtitle:
      "Conectá planillas, CRM, APIs y mensajería para que la información fluya sola. Donde el proceso lo permite, sumamos inteligencia artificial o agentes que ejecutan tareas repetibles bajo reglas que vos definís—menos carga manual y menos errores al copiar datos.",
    problem:
      "¿Seguís perdiendo horas en lo mismo cada semana? Mensajes, planillas, datos cargados a mano… y además aparecen tareas donde el texto no es 100% predecible y un simple “si/no” no alcanza.",
    solution:
      "Te propongo automatizaciones a medida que conectan tus herramientas y sacan lo repetitivo del medio: flujos clásicos (reglas, webhooks, n8n) y, cuando corresponde, capas de inteligencia artificial o agentes que respetan políticas claras para clasificar, extraer o preparar datos antes de que lleguen a un humano.",
    benefits: [
      "Menos trabajo manual",
      "Integraciones estables entre sistemas",
      "Inteligencia artificial opcional donde suma (siempre acotada)",
      "Agentes de automatización con reglas y auditoría",
      "Mayor productividad y menos errores",
    ],
    moreInterlinks: [NBOTS, NTURNOS, NMEDIDA, NCLINICAS, NSTOCK],
  },
  {
    slug: "desarrollo-software-medida",
    categoryHeading: "Software a medida",
    homePainTitle: "Los sistemas que usás no se adaptan a tu negocio",
    homeCardSubtitle:
      "Soluciones diseñadas para tu negocio cuando lo estándar ya no alcanza.",
    homeCardBadge: HIGHLIGHT_CHIP_SOFTWARE_MEDIDA,
    homeCardCta: "Definamos el alcance",
    title: "Software a medida",
    metaDescription:
      "Sistemas y software a medida alineados a tu operación: procesos centralizados, integraciones y paneles. Charlamos y te paso presupuesto sin cargo.",
    subtitle:
      "Diseño y desarrollo sistemas alineados a tu operación: reglas propias, integraciones y paneles en un mismo producto. Entregas por etapas para que veas avances reales desde el inicio.",
    problem:
      "¿Usás herramientas genéricas que no encajan con tu forma de trabajar y terminás compensando con planillas y tareas manuales?",
    solution:
      "Diseño y desarrollo sistemas adaptados a cómo funciona tu negocio: procesos centralizados, integraciones y lógica a medida.",
    benefits: [
      "Procesos más claros y organizados",
      "Menos trabajo manual",
      "Mayor control de la operación",
      "Escalar sin fricciones",
      "Sistemas alineados al negocio",
    ],
    moreInterlinks: [NBOTS, NTURNOS, NAUTO, NCLINICAS, NSTOCK],
  },
  {
    slug: "software-para-clinicas",
    categoryHeading: "Software para clínicas",
    homePainTitle: "Tu clínica sigue usando Excel y historias clínicas en papel",
    homeCardSubtitle:
      "Centralizá pacientes, turnos e historial en un solo sistema y evitá errores, desorganización y pérdida de información.",
    homeCardBadge: HIGHLIGHT_CHIP_CLINICAS,
    homeCardCta: "Charlemos de tu clínica",
    title: "Software para clínicas",
    metaDescription:
      "Gestión para clínicas: pacientes, historial digital y turnos en un solo sistema. Propuesta según módulos y alcance.",
    subtitle:
      "Pacientes, turnos e historia clínica en un solo lugar: acceso rápido a lo relevante, menos papeles y menos datos repartidos entre Excel y chats. Tu equipo atiende; el sistema ordena lo administrativo.",
    problem:
      "¿Gestionás pacientes en Excel, historias en papel y turnos por WhatsApp, con información dispersa y riesgo de errores o pérdida de datos?",
    solution:
      "Implemento sistemas de gestión adaptados a tu clínica: información centralizada, historial digital, turnos ordenados y automatización administrativa donde suma.",
    benefits: [
      "Toda la información en un solo lugar",
      "Acceso rápido a historiales",
      "Menos errores administrativos",
      "Mejor organización de turnos",
      "Mayor control de la operación",
    ],
    moreInterlinks: [NBOTS, NTURNOS, NAUTO, NMEDIDA, NSTOCK],
  },
  {
    slug: "sistema-gestion-inventario",
    categoryHeading: "Gestión de inventario",
    homePainTitle: "Tu control de stock es un caos entre Excel y anotaciones",
    homeCardSubtitle:
      "Organizá tu inventario en un solo sistema y evitá errores, pérdidas y desorden.",
    homeCardBadge: HIGHLIGHT_CHIP_INVENTARIO,
    homeCardCta: "Ordenemos tu stock",
    title: "Stock e inventario",
    metaDescription:
      "Control de stock e inventario centralizado: movimientos claros y menos errores. Alcance y presupuesto según tu operación.",
    subtitle:
      "Movimientos, stock y productos con reglas claras: sabés qué hay, qué se vendió y qué reponer, con menos diferencias entre depósito y ventas y sin depender solo de planillas o anotaciones sueltas.",
    problem:
      "¿El inventario está en Excel y anotaciones, los datos no coinciden y perdés claridad para comprar, vender o armar pedidos?",
    solution:
      "Implemento un sistema de inventario adaptado a tu operación: movimientos en un solo lugar, actualización automática del stock e integración con ventas cuando haga falta.",
    benefits: [
      "Control real del stock",
      "Menos errores",
      "Mejor organización",
      "Decisiones más claras",
      "Procesos más confiables",
    ],
    moreInterlinks: [NBOTS, NTURNOS, NAUTO, NMEDIDA, NCLINICAS],
  },
] as const;

export type ServiceLandingPageData = (typeof SERVICE_LANDING_PAGES)[number];
export type ServiceLandingSlug = ServiceLandingPageData["slug"];

export const SERVICE_SLUGS: ServiceLandingSlug[] = SERVICE_LANDING_PAGES.map((p) => p.slug);

const PAGE_MAP = Object.fromEntries(SERVICE_LANDING_PAGES.map((p) => [p.slug, p])) as Record<
  ServiceLandingSlug,
  ServiceLandingPageData
>;

export function getServiceLanding(slug: string): ServiceLandingPageData | undefined {
  return PAGE_MAP[slug as ServiceLandingSlug];
}

/** Texto del enlace en cada card de servicios en el home. */
export function getHomeCardCta(page: ServiceLandingPageData): string {
  const withCta = page as ServiceLandingPageData & { homeCardCta?: string };
  return typeof withCta.homeCardCta === "string" ? withCta.homeCardCta : "Ver solución";
}

/** Palabras clave extra para landings principales (metadata `keywords`). */
const SERVICE_SEO_KEYWORDS: Partial<Record<ServiceLandingSlug, readonly string[]>> = {
  "automatizacion-negocios": [
    "automatización de procesos",
    "integración de sistemas",
    "inteligencia artificial para empresas",
    "agentes de automatización",
    "tareas manuales",
    "flujos de trabajo",
    "n8n",
    "API",
    "CRM",
  ],
  "bots-whatsapp": [
    "bots de WhatsApp",
    "bots con inteligencia artificial",
    "automatización WhatsApp",
    "WhatsApp Business",
    "respuestas automáticas",
    "agentes de IA",
    "CRM",
    "atención al cliente",
  ],
  "desarrollo-software-medida": [
    "software a medida",
    "desarrollo a medida",
    "sistemas a medida",
    "integración",
    "paneles administrativos",
  ],
  "sistema-turnos-online": [
    "turnos online",
    "agenda online",
    "autogestión de turnos",
    "gestión de turnos",
    "agenda con inteligencia artificial",
    "agentes de IA para turnos",
    "recordatorios automáticos",
    "cancelaciones",
    "WhatsApp",
  ],
  "software-para-clinicas": [
    "software para clínicas",
    "gestión de pacientes",
    "historia clínica digital",
    "turnos",
    "Excel",
    "consultorio",
  ],
  "sistema-gestion-inventario": [
    "control de stock",
    "inventario",
    "gestión de productos",
    "movimientos",
    "Excel",
    "depósito",
  ],
};

export function buildServicePageMetadata(slug: ServiceLandingSlug): Metadata {
  const p = PAGE_MAP[slug];
  const base = getSiteUrl();
  const canonical = base ? new URL(`/${slug}`, base).toString() : undefined;
  const keywords = SERVICE_SEO_KEYWORDS[slug];

  return {
    title: p.title,
    description: p.metaDescription,
    ...(keywords ? { keywords: [...keywords] } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: p.title,
      description: p.metaDescription,
      type: "website",
      locale: "es_AR",
      siteName: "Diego Abad",
      ...(canonical ? { url: canonical } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.metaDescription,
    },
  };
}

export function mergedInterlinks(page: ServiceLandingPageData): ServiceInterlink[] {
  const selfPath = `/${page.slug}`;
  const trio = [...SEO_INTERLINK_TRIO].filter((x) => x.href !== selfPath);
  const extras = page.moreInterlinks ?? [];
  const seen = new Set<string>();
  const out: ServiceInterlink[] = [];
  for (const item of [...trio, ...extras]) {
    if (item.href === selfPath || seen.has(item.href)) continue;
    seen.add(item.href);
    out.push(item);
  }
  return out;
}
