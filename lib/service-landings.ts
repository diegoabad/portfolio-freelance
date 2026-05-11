import type { Metadata } from "next";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site";

export type ServiceInterlink = { href: string; label: string };

/** Trio SEO legacy: vacío; los enlaces salen solo de `moreInterlinks` por servicio. */
export const SEO_INTERLINK_TRIO: readonly ServiceInterlink[] = [];

/** Chip destacado (home + hero landing) — sin montos; foco en valor. */
export const HIGHLIGHT_CHIP_BOTS_WHATSAPP =
  "Bot de WhatsApp · inteligencia artificial · integraciones";
export const HIGHLIGHT_CHIP_TURNOS = "Agendas online · Autogestión · Recordatorios";
export const HIGHLIGHT_CHIP_AUTOMATIZACION = "APIs de terceros · CRM · Agentes de IA";
export const HIGHLIGHT_CHIP_SOFTWARE_MEDIDA =
  "Software a medida · Reglas propias · Integraciones";
export const HIGHLIGHT_CHIP_CLINICAS =
  "Apps móviles · Android y iPhone · Autogestión";
export const HIGHLIGHT_CHIP_INVENTARIO =
  "Stock en tiempo real · Inventario · Control";

const NBOTS: ServiceInterlink = { href: "/bots-whatsapp", label: "Bots de WhatsApp" };
const NTURNOS: ServiceInterlink = { href: "/sistema-turnos-online", label: "Turnos online" };
const NAUTO: ServiceInterlink = {
  href: "/automatizacion-procesos-clinicas",
  label: "Automatización de procesos",
};
const NMEDIDA: ServiceInterlink = { href: "/desarrollo-software-medida", label: "Software a medida" };
const NCLINICAS: ServiceInterlink = { href: "/software-para-clinicas", label: "Aplicaciones móviles" };
const NSTOCK: ServiceInterlink = {
  href: "/control-stock-clinicas",
  label: "Control de stock",
};

export const SERVICE_LANDING_PAGES = [
  {
    slug: "bots-whatsapp",
    categoryHeading: "Bots de WhatsApp",
    homePainTitle: "Perdés clientes por no responder WhatsApp a tiempo",
    homeCardSubtitle:
      "Desarrollo e implementación de bot de WhatsApp con IA e integración con agendas y CRM: chatbot para atención al cliente, consultas por WhatsApp y menos carga para tu equipo (empresas, pymes y clínicas en Argentina).",
    homeCardBadge: HIGHLIGHT_CHIP_BOTS_WHATSAPP,
    /** Precio orientativo en home (detalle en landing / FAQ). */
    homeCardPriceTeaser: "Desde ARS 600.000",
    homeCardPriceBenefit: "Respuestas 24/7 sin sumar personal dedicado solo al WhatsApp.",
    homeCardCta: PRIMARY_CTA_LABEL,
    title: "Bots de WhatsApp para negocios",
    metaDescription:
      "Bots de WhatsApp para negocios en Argentina: desarrollo de bot y chatbot para atención al cliente por WhatsApp, automatización de WhatsApp para pymes, bot con IA e integración de WhatsApp con sistemas. Consultorios médicos, clínicas y centros de estética. Implementación y soporte.",
    subtitle:
      "Implementá bots de WhatsApp con inteligencia artificial para interpretar mejor cada consulta, integrados con agendas y CRM. Chatbot para atención al cliente, automatización de consultas y espacio para la atención humana donde aporta (empresas, pymes y salud en Argentina).",
    problem:
      "¿El WhatsApp explota y tu equipo no da más? Además del tiempo perdido, cada mensaje sin respuesta es venta o cliente que se enfría; y la alternativa de sumar gente suma sueldos, capacitación y gestión.",
    solution:
      "Diseñamos automatización en WhatsApp con inteligencia artificial cuando corresponde, integración con agendas y CRM, y derivaciones claras—siempre con espacio para la atención humana donde aporta.",
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
      "Sistema de turnos online y agenda digital con autogestión, recordatorios automáticos e integración con WhatsApp: reservas y coordinación en un solo lugar (clínicas, consultorios y negocios).",
    homeCardBadge: HIGHLIGHT_CHIP_TURNOS,
    homeCardPriceTeaser: "Desde ARS 900.000",
    homeCardPriceBenefit: "Menos cancelaciones y agenda ordenada en un solo lugar.",
    homeCardCta: "Coordinemos tu agenda",
    title: "Sistema de turnos online",
    metaDescription:
      "Sistema de turnos online y agenda médica online en Argentina: software de turnos para clínicas y consultorios, sistema de citas online, agenda digital con recordatorios automáticos, turnos online con WhatsApp y desarrollo de sistema de turnos a medida.",
    subtitle:
      "Un sistema de reservas online centraliza la agenda: autogestión con reglas, recordatorios automáticos y turnos online con WhatsApp cuando el canal convive con la agenda—desde clínicas y consultorios hasta centros de estética y equipos en Argentina.",
    problem:
      "¿Tu agenda vive entre WhatsApp, llamadas y planillas, con superposiciones y cancelaciones? Sin un sistema de turnos online o un software de turnos para consultorios bien definido, el equipo pierde tiempo coordinando lo que el paciente podría resolver con autogestión y reglas claras.",
    solution:
      "Implemento sistemas de turnos online con reglas visibles: turnos online para clínicas, agenda médica online o sistema de reservas online para equipos. Autogestión, panel para empleados, recordatorios y—si suma—IA y coordinación de turnos médicos por WhatsApp con integraciones a bots.",
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
    slug: "automatizacion-procesos-clinicas",
    categoryHeading: "Automatización de procesos",
    homePainTitle: "Tareas manuales que te hacen perder tiempo y recursos",
    homeCardSubtitle:
      "Automatización de procesos y workflows en Argentina: integración de sistemas, n8n cuando encaja, IA acotada y menos tareas administrativas repetitivas (clínicas, recepción, CRM, reportes).",
    homeCardBadge: HIGHLIGHT_CHIP_AUTOMATIZACION,
    homeCardPriceTeaser: "Desde ARS 300.000",
    homeCardPriceBenefit: "Ahorrá horas de trabajo manual cada semana.",
    homeCardCta: "Revisamos tu caso",
    title: "Automatización de procesos para empresas",
    metaDescription:
      "Automatización de procesos para empresas y clínicas en Argentina: automatización administrativa, tareas repetitivas, workflows, integración y automatización de sistemas, n8n donde aplica, recepción y procesos médicos administrativos. IA acotada a reglas.",
    subtitle:
      "Integración y automatización de sistemas (planillas, CRM, APIs, mensajería): menos tareas repetitivas a mano y más flujos auditables; n8n u otros conectores cuando encajan. IA opcional y acotada—menos carga administrativa en empresas, recepción y centros médicos.",
    problem:
      "¿Tu equipo sigue perdiendo horas en lo mismo cada semana? Mensajes, planillas, datos cargados a mano y procesos administrativos que no escalan—en consultorios y clínicas también aparece facturación de profesionales, autorizaciones y reportes que deberían ser automatización de procesos administrativos, no copy-paste eterno.",
    solution:
      "Diseño automatización empresarial a medida: integraciones (n8n, webhooks, APIs), reglas claras y—cuando suma—automatización con IA o agentes que preparan información antes de un humano. Aplicable a operaciones generales y a automatización de procesos en clínicas cuando la prioridad es orden administrativo sin romper compliance.",
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
    homePainTitle: "El software enlatado no se ajusta a tu clínica ni a tu operación",
    homeCardSubtitle:
      "Desarrollo de software a medida en Argentina: sistemas personalizados con integraciones y entregas por etapas, para pymes, empresas y operación en salud cuando el genérico no alcanza.",
    homeCardBadge: HIGHLIGHT_CHIP_SOFTWARE_MEDIDA,
    homeCardPriceTeaser: "Proyectos desde ARS 1.500.000",
    homeCardPriceBenefit: "Un sistema que encaja en tu operación; el alcance define el resto.",
    homeCardCta: "Definamos el alcance",
    title: "Software a medida",
    metaDescription:
      "Desarrollo de software a medida en Argentina: sistemas y plataformas web personalizadas para empresas y pymes, software para clínicas y consultorios, gestión médica, fullstack e integraciones. Presupuesto sin cargo.",
    subtitle:
      "Desarrollo de plataformas web a medida y sistemas internos personalizados: reglas propias, integraciones y paneles en un mismo producto. Entregas por etapas para pymes, empresas y operación en salud.",
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
    categoryHeading: "Desarrollo de aplicaciones móviles",
    homePainTitle: "Tus clientes esperan resolver todo desde el celular",
    homeCardSubtitle:
      "Desarrollo de apps móviles para empresas y clínicas: turnos, pacientes, autogestión y notificaciones; Android, iPhone o multiplataforma cuando conviene.",
    homeCardBadge: HIGHLIGHT_CHIP_CLINICAS,
    homeCardPriceTeaser: "Desde ARS 2.000.000",
    homeCardPriceBenefit:
      "Fidelizá clientes con tu app: autogestión, recordatorios, turnos y más.",
    homeCardCta: "Coordinemos tu app",
    title: "Desarrollo de aplicaciones móviles",
    metaDescription:
      "Desarrollo de aplicaciones móviles en Argentina: apps para clínicas y consultorios, pacientes y turnos médicos, Android e iPhone, multiplataforma (p. ej. Flutter), integración con sistemas y soluciones mobile para empresas.",
    subtitle:
      "Desarrollo de aplicaciones móviles para Android e iPhone (o multiplataforma cuando conviene): turnos, pacientes, autogestión y operación en tiempo real, con integración a lo que ya usás.",
    problem:
      "¿Seguís con consultas por WhatsApp, reservas manuales, seguimiento por mensajes e información dispersa? Eso genera demoras, desorganización y dependencia constante del equipo.",
    solution:
      "Desarrollo aplicaciones móviles a medida para Android e iPhone: autogestión, reservas y turnos, seguimiento en tiempo real, notificaciones automáticas e integración con APIs, CRMs o sistemas internos. Cada app se adapta al flujo real del negocio.",
    benefits: [
      "Mejor experiencia para clientes y equipo",
      "Menos tareas manuales",
      "Acceso rápido desde el celular",
      "Procesos más ágiles y organizados",
      "Integración entre áreas y sistemas",
      "Operación más escalable",
    ],
    moreInterlinks: [NBOTS, NTURNOS, NAUTO, NMEDIDA, NSTOCK],
  },
  {
    slug: "control-stock-clinicas",
    categoryHeading: "Control de stock",
    homePainTitle: "Tu stock es un caos entre Excel y anotaciones",
    homeCardSubtitle:
      "Software de inventario y control de stock: movimientos centralizados para depósito, ventas o insumos en clínicas y consultorios, con menos errores y pérdidas.",
    homeCardBadge: HIGHLIGHT_CHIP_INVENTARIO,
    homeCardPriceTeaser: "Desde ARS 800.000",
    homeCardPriceBenefit: "Stock claro: menos errores entre depósito, ventas y sucursales.",
    homeCardCta: "Ordenemos tu stock",
    title: "Stock e inventario",
    metaDescription:
      "Sistema de control de stock e inventario: software para empresas y pymes, clínicas y consultorios, insumos médicos, depósitos, gestión automatizada y plataforma de inventario a medida en Argentina.",
    subtitle:
      "Software de inventario con movimientos y stock bajo reglas claras: depósito, ventas, consumo interno o insumos médicos en clínicas y consultorios, sin vivir del Excel.",
    problem:
      "¿El inventario está en Excel y anotaciones, los datos no coinciden entre depósito, recepción o sucursales, y perdés claridad para comprar, vender o armar pedidos —incluso con insumos críticos en salud?",
    solution:
      "Implemento un sistema de inventario adaptado a tu operación: movimientos en un solo lugar, actualización del stock en tiempo real, entradas y salidas auditables e integración con ventas o consumo interno cuando haga falta.",
    benefits: [
      "Control real del stock",
      "Menos errores entre depósito, ventas y consumo interno",
      "Mejor organización (retail, depósito o insumos en clínicas)",
      "Decisiones más claras",
      "Procesos más confiables y auditables",
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

/** Palabras clave del chip de la home (separador medio ·). */
export function splitHomeCardBadge(badge: string): string[] {
  return badge
    .split(/\s*·\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Texto del enlace en cada card de servicios en el home. */
export function getHomeCardCta(page: ServiceLandingPageData): string {
  const withCta = page as ServiceLandingPageData & { homeCardCta?: string };
  return typeof withCta.homeCardCta === "string" ? withCta.homeCardCta : "Ver solución";
}

export function buildServicePageMetadata(slug: ServiceLandingSlug): Metadata {
  const p = PAGE_MAP[slug];
  const base = getSiteUrl();
  const canonical = base ? new URL(`/${slug}`, base).toString() : undefined;
  const defaultOg = base ? new URL("/opengraph-image", base).toString() : undefined;

  return {
    title: p.title,
    description: p.metaDescription,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: p.title,
      description: p.metaDescription,
      type: "website",
      locale: "es_AR",
      siteName: "Diego Abad",
      ...(canonical ? { url: canonical } : {}),
      ...(defaultOg ? { images: [{ url: defaultOg, alt: p.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.metaDescription,
      ...(defaultOg ? { images: { url: defaultOg, alt: p.title } } : {}),
    },
    robots: { index: true, follow: true },
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
