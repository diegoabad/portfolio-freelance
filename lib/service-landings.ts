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
export const HIGHLIGHT_CHIP_AUTOMATIZACION = "APIs, CRM y agentes de IA";
export const HIGHLIGHT_CHIP_SOFTWARE_MEDIDA =
  "Software a medida · reglas propias, integraciones · un solo producto";
export const HIGHLIGHT_CHIP_CLINICAS =
  "Apps móviles · Android y iPhone · Notificaciones · Autogestión";
export const HIGHLIGHT_CHIP_INVENTARIO =
  "Stock en tiempo real · Movimientos · Inventario · Control · Clínicas e insumos";

const NBOTS: ServiceInterlink = { href: "/bots-whatsapp", label: "Bots de WhatsApp" };
const NTURNOS: ServiceInterlink = { href: "/sistema-turnos-online", label: "Turnos online" };
const NAUTO: ServiceInterlink = {
  href: "/automatizacion-negocios",
  label: "Automatización de procesos",
};
const NMEDIDA: ServiceInterlink = { href: "/desarrollo-software-medida", label: "Software a medida" };
const NCLINICAS: ServiceInterlink = { href: "/software-para-clinicas", label: "Aplicaciones móviles" };
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
      "Desarrollo e implementación de bot de WhatsApp con IA e integración con agendas y CRM: chatbot para atención al cliente, consultas por WhatsApp y menos carga para tu equipo (empresas, pymes y clínicas en Argentina).",
    homeCardBadge: HIGHLIGHT_CHIP_BOTS_WHATSAPP,
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
    slug: "automatizacion-negocios",
    categoryHeading: "Automatización de procesos",
    homePainTitle: "Tareas manuales que te hacen perder tiempo y recursos",
    homeCardSubtitle:
      "Automatización de procesos y workflows en Argentina: integración de sistemas, n8n cuando encaja, IA acotada y menos tareas administrativas repetitivas (clínicas, recepción, CRM, reportes).",
    homeCardBadge: HIGHLIGHT_CHIP_AUTOMATIZACION,
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
    slug: "sistema-gestion-inventario",
    categoryHeading: "Gestión de inventario",
    homePainTitle: "Tu stock es un caos entre Excel y anotaciones",
    homeCardSubtitle:
      "Software de inventario y control de stock: movimientos centralizados para depósito, ventas o insumos en clínicas y consultorios, con menos errores y pérdidas.",
    homeCardBadge: HIGHLIGHT_CHIP_INVENTARIO,
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

/** Texto del enlace en cada card de servicios en el home. */
export function getHomeCardCta(page: ServiceLandingPageData): string {
  const withCta = page as ServiceLandingPageData & { homeCardCta?: string };
  return typeof withCta.homeCardCta === "string" ? withCta.homeCardCta : "Ver solución";
}

/** Palabras clave extra para landings principales (metadata `keywords`). */
const SERVICE_SEO_KEYWORDS: Partial<Record<ServiceLandingSlug, readonly string[]>> = {
  "automatizacion-negocios": [
    "automatización de procesos para clínicas",
    "automatización administrativa para empresas",
    "automatización de tareas repetitivas",
    "automatización de procesos internos",
    "automatización para consultorios médicos",
    "automatización de tareas administrativas en salud",
    "automatización empresarial en argentina",
    "integración y automatización de sistemas",
    "automatización de workflows empresariales",
    "automatización con inteligencia artificial",
    "automatización de procesos manuales",
    "automatización de gestión administrativa",
    "optimización de procesos empresariales",
    "automatización de carga de datos",
    "automatización para centros médicos",
    "automatización de tareas operativas",
    "digitalización y automatización empresarial",
    "automatización de procesos con n8n",
    "automatización de tareas de recepción",
    "automatización de procesos médicos",
    "facturación de profesionales",
    "API",
    "CRM",
  ],
  "bots-whatsapp": [
    "bot de whatsapp para clínicas en argentina",
    "desarrollo de bot de whatsapp para empresas",
    "chatbot para atención al cliente por whatsapp",
    "automatización de whatsapp para negocios",
    "bot de whatsapp con inteligencia artificial",
    "implementación de chatbot para empresas",
    "bot de whatsapp para consultorios médicos",
    "chatbot para centros de estética",
    "automatizar respuestas de whatsapp business",
    "sistema de atención automática por whatsapp",
    "bot de whatsapp para ventas y soporte",
    "desarrollo de chatbot en argentina",
    "automatización de consultas por whatsapp",
    "chatbot para turnos y atención al cliente",
    "servicio de automatización de whatsapp",
    "bot de whatsapp para pymes",
    "chatbot empresarial en argentina",
    "integración de whatsapp con sistemas",
    "bot de whatsapp para atención médica",
    "soluciones de whatsapp automation para empresas",
    "integración con agendas",
    "CRM",
  ],
  "desarrollo-software-medida": [
    "desarrollo de software a medida argentina",
    "software personalizado para empresas",
    "desarrollo de sistemas a medida",
    "software para clínicas a medida",
    "desarrollo de software para consultorios",
    "empresa de software a medida",
    "desarrollo de sistemas empresariales",
    "software personalizado para negocios",
    "desarrollo de plataformas web a medida",
    "sistema de gestión personalizado",
    "desarrollo de software para salud",
    "soluciones de software empresariales",
    "desarrollo de sistemas administrativos",
    "software para automatizar procesos",
    "desarrollo fullstack para empresas",
    "desarrollo de aplicaciones empresariales",
    "sistemas internos personalizados",
    "software para gestión médica",
    "desarrollo de software para pymes",
    "empresa de desarrollo de software argentina",
  ],
  "sistema-turnos-online": [
    "sistema de turnos online para clínicas",
    "agenda online para consultorios médicos",
    "software de turnos online argentina",
    "sistema de reservas online para empresas",
    "agenda digital para centros médicos",
    "turnos online con whatsapp",
    "software para gestión de turnos médicos",
    "sistema de citas online para clínicas",
    "agenda online para profesionales",
    "automatización de turnos y recordatorios",
    "sistema de reservas para centros de estética",
    "agenda médica online personalizada",
    "desarrollo de sistema de turnos a medida",
    "plataforma de turnos online argentina",
    "software de agenda para consultorios",
    "sistema de gestión de turnos médicos",
    "turnos online para negocios",
    "solución de reservas online para empresas",
    "agenda online con recordatorios automáticos",
    "software de citas para clínicas privadas",
    "autogestión de turnos",
    "agentes de IA para turnos",
  ],
  "software-para-clinicas": [
    "desarrollo de aplicaciones móviles argentina",
    "app para clínicas y consultorios",
    "desarrollo de apps para empresas",
    "aplicaciones móviles para negocios",
    "desarrollo de app para pacientes",
    "desarrollo de apps para salud",
    "aplicación móvil para centros médicos",
    "desarrollo mobile a medida",
    "crear app para empresa",
    "aplicaciones móviles personalizadas",
    "desarrollo de apps android y iphone",
    "empresa de desarrollo mobile argentina",
    "app para gestión de pacientes",
    "desarrollo de aplicaciones para clínicas",
    "software mobile para empresas",
    "aplicación móvil para turnos médicos",
    "desarrollo de apps multiplataforma",
    "app personalizada para negocios",
    "desarrollo flutter argentina",
    "soluciones mobile para empresas",
    "notificaciones push",
  ],
  "sistema-gestion-inventario": [
    "sistema de control de stock para clínicas",
    "software de inventario para empresas",
    "control de stock para consultorios",
    "sistema de gestión de insumos médicos",
    "software de stock a medida",
    "control de inventario para negocios",
    "sistema de stock para centros médicos",
    "software para control de insumos",
    "gestión de stock automatizada",
    "desarrollo de sistema de inventario",
    "control de materiales médicos",
    "software para stock e inventario",
    "sistema de inventario personalizado",
    "control de stock para pymes",
    "automatización de inventario empresarial",
    "software de gestión de depósitos",
    "control de insumos para clínicas",
    "sistema de inventario en argentina",
    "software administrativo de stock",
    "plataforma de control de inventario",
    "stock en tiempo real",
  ],
};

export function buildServicePageMetadata(slug: ServiceLandingSlug): Metadata {
  const p = PAGE_MAP[slug];
  const base = getSiteUrl();
  const canonical = base ? new URL(`/${slug}`, base).toString() : undefined;
  const keywords = SERVICE_SEO_KEYWORDS[slug];
  const defaultOg = base ? new URL("/opengraph-image", base).toString() : undefined;

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
      ...(defaultOg ? { images: [{ url: defaultOg, alt: p.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.metaDescription,
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
