import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

export type ServiceInterlink = { href: string; label: string };

/** Trio SEO legacy: vacío; los enlaces salen solo de `moreInterlinks` por servicio. */
export const SEO_INTERLINK_TRIO: readonly ServiceInterlink[] = [];

/** Banda típica — bots / automatización WhatsApp (card home + landing). */
export const AUTOMATIZACION_WHATSAPP_PRECIO_REFERENCIA = "Entre $450.000 y $900.000 ARS";

/** Banda típica — automatización de procesos (card home + landing). */
export const AUTOMATIZACION_PROCESOS_PRECIO_REFERENCIA = "Entre $300.000 y $600.000 ARS";

/** Precio desde — sistema de turnos online (card home + landing). */
export const TURNOS_ONLINE_PRECIO_DESDE = "Desde $700.000 ARS";

/** Precio desde — sistema de stock / inventario (card home + landing). */
export const INVENTARIO_STOCK_PRECIO_DESDE = "Desde $900.000 ARS";

/** Precio desde — software de gestión para clínicas (card home + landing). */
export const CLINICAS_GESTION_PRECIO_DESDE = "Desde $1.100.000 ARS";

/** Precio referencia software a medida (cards home + landing extendida). */
export const SOFTWARE_MEDIDA_PRECIO_DESDE = "Desde $1.500.000 ARS";
/** Banda típica para FAQ / hero (evita que “desde” se interprete como precio fijo). */
export const SOFTWARE_MEDIDA_PRECIO_RANGO =
  "Proyectos típicos entre $1,5M y $4M ARS según alcance.";

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
    homeCardBadge: AUTOMATIZACION_WHATSAPP_PRECIO_REFERENCIA,
    title: "Bots de WhatsApp",
    metaDescription:
      "Bots y automatización de WhatsApp: respuestas automáticas, flujos ordenados e integración con CRM y agenda.",
    subtitle:
      "Respondé consultas automáticamente y evitá perder clientes por no responder a tiempo.",
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
    homeCardBadge: TURNOS_ONLINE_PRECIO_DESDE,
    title: "Turnos online",
    metaDescription:
      "Agenda y turnos online con confirmaciones y recordatorios. Menos cancelaciones; integración con WhatsApp. Desde $700.000 ARS.",
    subtitle:
      "Organizá tu agenda, reducí cancelaciones y evitá el caos en la gestión de turnos.",
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
    homeCardBadge: AUTOMATIZACION_PROCESOS_PRECIO_REFERENCIA,
    title: "Automatización de procesos",
    metaDescription:
      "Menos tareas manuales: automatización de procesos, integraciones (CRM, APIs, planillas) y flujos a medida para tu negocio.",
    subtitle: "Reducí tareas manuales, optimizá tu operación y automatizá tu negocio sin sumar más personal.",
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
    homeCardBadge: SOFTWARE_MEDIDA_PRECIO_DESDE,
    title: "Software a medida",
    metaDescription:
      "Sistemas y software a medida alineados a tu operación: procesos centralizados, integraciones y paneles. Presupuesto según alcance.",
    subtitle:
      "Soluciones diseñadas específicamente para tu negocio cuando lo estándar ya no alcanza.",
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
    homeCardBadge: CLINICAS_GESTION_PRECIO_DESDE,
    title: "Software para clínicas",
    metaDescription:
      "Gestión para clínicas: pacientes, historial digital y turnos en un solo sistema. Desde $1.100.000 ARS.",
    subtitle:
      "Organizá pacientes, turnos e historial en un solo sistema y dejá atrás Excel y registros en papel.",
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
    homeCardBadge: INVENTARIO_STOCK_PRECIO_DESDE,
    title: "Stock e inventario",
    metaDescription:
      "Control de stock e inventario centralizado: movimientos claros y menos errores. Entre $900.000 y $1.500.000 ARS.",
    subtitle:
      "Organizá tu stock, centralizá la información y evitá errores en la gestión de productos.",
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

/** Texto del enlace en cada card de servicios en el home (por defecto «Ver solución»). */
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
