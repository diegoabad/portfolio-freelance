import type { Metadata } from "next";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site";

export type ServiceInterlink = { href: string; label: string };

/** Trio SEO legacy: vacío; los enlaces salen solo de `moreInterlinks` por servicio. */
export const SEO_INTERLINK_TRIO: readonly ServiceInterlink[] = [];

/** Chip destacado (home + hero landing) — sin montos; foco en valor. */
export const HIGHLIGHT_CHIP_BOTS_WHATSAPP = "Atención 24/7 · flujos e integraciones";
export const HIGHLIGHT_CHIP_TURNOS = "Confirmaciones y recordatorios automáticos";
export const HIGHLIGHT_CHIP_AUTOMATIZACION = "APIs, CRM y menos trabajo manual";
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
      "Respondé consultas automáticamente y evitá perder clientes por no responder a tiempo.",
    homeCardBadge: HIGHLIGHT_CHIP_BOTS_WHATSAPP,
    homeCardCta: PRIMARY_CTA_LABEL,
    title: "Bots de WhatsApp",
    metaDescription:
      "Bots y automatización de WhatsApp: respuestas automáticas, flujos ordenados e integración con CRM y agenda.",
    subtitle:
      "Armá flujos que contestan lo repetitivo, ordenan conversaciones y conectan con tu CRM o agenda. Menos consultas perdidas por tiempo de respuesta y más seguimiento claro desde el primer mensaje.",
    problem:
      "¿El WhatsApp explota y ya no da para contestar todo a tiempo? Cada mensaje sin respuesta es una venta, un turno o un cliente que se enfría.",
    solution:
      "Armamos flujos que responden lo repetitivo, ordenan conversaciones y dejan historial útil para tu equipo—sin sacar el contacto humano donde suma.",
    benefits: ["Atención 24/7", "Menos carga operativa", "Mejora en la atención al cliente", "Más conversiones"],
    moreInterlinks: [NTURNOS, NAUTO, NMEDIDA, NCLINICAS, NSTOCK],
  },
  {
    slug: "sistema-turnos-online",
    categoryHeading: "Turnos online",
    homePainTitle: "Agendas desordenadas y cancelaciones constantes",
    homeCardSubtitle:
      "Organizá tu agenda, reducí cancelaciones y evitá el caos en la gestión de turnos.",
    homeCardBadge: HIGHLIGHT_CHIP_TURNOS,
    homeCardCta: "Coordinemos tu agenda",
    title: "Turnos online",
    metaDescription:
      "Agenda y turnos online con confirmaciones y recordatorios. Menos cancelaciones e integración con WhatsApp. Presupuesto según alcance.",
    subtitle:
      "Un solo lugar para reservas, disponibilidad, confirmaciones y recordatorios automáticos. Menos cancelaciones de último momento, menos confusiones entre canales y más claridad para tu equipo y tus clientes.",
    problem:
      "¿Gestionás turnos con WhatsApp, llamadas y planillas y aparecen confusiones, superposiciones o cancelaciones sin control?",
    solution:
      "Implemento un sistema de turnos online con reglas claras, confirmaciones y recordatorios para centralizar la agenda y recuperar tiempo de coordinación.",
    benefits: [
      "Menos cancelaciones",
      "Mejor uso del tiempo",
      "Mayor orden en la operación",
      "Mejor experiencia del cliente",
      "Más turnos efectivos",
    ],
    moreInterlinks: [NBOTS, NAUTO, NMEDIDA, NCLINICAS, NSTOCK],
  },
  {
    slug: "automatizacion-negocios",
    categoryHeading: "Automatización de procesos",
    homePainTitle: "Tareas manuales que te hacen perder horas",
    homeCardSubtitle:
      "Automatizá procesos repetitivos y liberá tiempo sin sumar más personal.",
    homeCardBadge: HIGHLIGHT_CHIP_AUTOMATIZACION,
    homeCardCta: "Revisamos tu caso",
    title: "Automatización de procesos",
    metaDescription:
      "Menos tareas manuales: automatización de procesos, integraciones (CRM, APIs, planillas) y flujos a medida para tu negocio.",
    subtitle:
      "Integrá planillas, CRM, APIs y mensajería para que la información fluya sola: menos carga manual, menos errores al copiar datos y procesos repetibles que escalan sin sumar personas.",
    problem:
      "¿Seguís perdiendo horas en lo mismo cada semana? Mensajes, planillas, datos cargados a mano… y el negocio no para de pedirte más velocidad.",
    solution:
      "Te propongo automatizaciones a medida que conectan tus herramientas y sacan esas tareas repetitivas del medio: menos copy-paste, más tiempo para vender y operar con claridad.",
    benefits: [
      "Menos trabajo manual",
      "Respuestas más rápidas",
      "Mayor productividad",
      "Menos errores humanos",
      "Mejor organización",
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
    "tareas manuales",
    "flujos de trabajo",
    "n8n",
    "API",
  ],
  "bots-whatsapp": [
    "bots de WhatsApp",
    "automatización WhatsApp",
    "WhatsApp Business",
    "respuestas automáticas",
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
    "gestión de turnos",
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
