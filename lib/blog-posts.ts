import type { BlogPost } from "@/lib/blog-types";
import { clinicasAutomationBlogArticles } from "@/lib/blog-posts-clinicas-automation-articles";
import { appsMovilesBlogArticles } from "@/lib/blog-posts-apps-moviles-articles";
import { stockClinicasBlogArticles } from "@/lib/blog-posts-stock-clinicas-articles";
import { softwareMedidaBlogArticles } from "@/lib/blog-posts-software-medida-articles";
import { turnosBlogArticles } from "@/lib/blog-posts-turnos-articles";
import { whatsAppHref } from "@/lib/contact";

export type { BlogPost } from "@/lib/blog-types";

const WA_BLOG = whatsAppHref(
  "Hola Diego, te escribo desde el blog. Quiero consultarte por un bot de WhatsApp / automatización.",
);

const posts: BlogPost[] = [
  {
    slug: "bot-whatsapp-negocios-argentina",
    topicTrack: "bots-whatsapp",
    title: "Bot de WhatsApp para negocios en Argentina: cómo automatizar consultas, ventas y turnos en 2026",
    description:
      "Guía práctica: qué es un bot de WhatsApp, tipos (básico vs IA), beneficios para empresas y pymes en Argentina, rubros que más lo usan y qué tener en cuenta al presupuestar.",
    metaTitle: "Bot de WhatsApp para negocios en Argentina | Automatización y atención 2026",
    metaDescription:
      "Descubrí cómo funcionan los bots de WhatsApp para empresas en Argentina y LATAM. Automatizá consultas, ventas y turnos con inteligencia artificial.",
    keywords: [
      "bot de whatsapp para negocios en argentina",
      "automatización de whatsapp para empresas",
      "bot de whatsapp para atención al cliente",
      "chatbot para whatsapp argentina",
      "bot de whatsapp para turnos online",
      "automatizar mensajes de whatsapp negocio",
      "chatbot para clínicas y consultorios",
      "bot de whatsapp con inteligencia artificial",
      "sistema de turnos por whatsapp",
      "automatización de whatsapp para pymes",
      "chatbot para ventas por whatsapp",
      "bots de whatsapp para empresas en latam",
    ],
    publishedAt: "2026-04-26",
    category: "WhatsApp y automatización",
    relatedPost: {
      slug: "como-crear-bot-whatsapp-empresas-argentina",
      title: "Cómo crear un bot de WhatsApp para empresas en Argentina y Latinoamérica paso a paso",
      description:
        "Enfoque informacional: requisitos, API oficial, diferencias entre bot simple e IA, integraciones y errores comunes.",
    },
    resourceLinks: [
      { href: "/bots-whatsapp", label: "Servicio: bots de WhatsApp" },
      { href: "/sistema-turnos-online", label: "Turnos online y agenda" },
      { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
      { href: "/automatizacion-negocios", label: "Automatización de procesos" },
      { href: "/desarrollo-software-medida", label: "Desarrollo a medida" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_BLOG, label: "Escribir por WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Hoy muchas empresas reciben decenas o cientos de mensajes por día en WhatsApp. Consultas repetidas, pedidos de precios, horarios, ",
          { href: "/sistema-turnos-online", label: "turnos online" },
          " o seguimiento de clientes terminan consumiendo tiempo y generando demoras.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para negocios" },
          " permite automatizar gran parte de esas conversaciones, responder más rápido y mejorar la ",
          { href: "/bots-whatsapp", label: "atención al cliente" },
          " sin necesidad de tener una persona disponible las 24 horas.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En este artículo te muestro cómo funcionan los ",
          { href: "/bots-whatsapp", label: "bots de WhatsApp" },
          ", qué beneficios tienen la ",
          { href: "/automatizacion-negocios", label: "automatización de WhatsApp para empresas" },
          " y por qué cada vez más negocios en Argentina y Latinoamérica suman ",
          { href: "/bots-whatsapp", label: "chatbot para WhatsApp en Argentina" },
          ", a veces con ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp con inteligencia artificial" },
          ". Si preferís una guía paso a paso, está el artículo ",
          { href: "/blog/como-crear-bot-whatsapp-empresas-argentina", label: "cómo crear un bot de WhatsApp" },
          ".",
        ],
      },
      { type: "h2", id: "que-es", text: "¿Qué es un bot de WhatsApp y cómo funciona?" },
      {
        type: "paragraph",
        segments: [
          "Un bot de WhatsApp es un sistema que responde o guía conversaciones dentro del mismo canal. Suele combinarse con ",
          { href: "/automatizacion-negocios", label: "automatización de mensajes de WhatsApp" },
          " e integraciones (CRM, ",
          { href: "/sistema-turnos-online", label: "agenda / sistema de turnos por WhatsApp" },
          ", etc.).",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Puede funcionar con respuestas automáticas simples, menús, flujos guiados, integración con sistemas externos o ",
          { href: "/bots-whatsapp", label: "inteligencia artificial" },
          " cuando el texto no es 100% predecible.",
        ],
      },
      {
        type: "ul",
        items: [
          "Responder preguntas frecuentes o mostrar precios y servicios",
          "Tomar o coordinar turnos y enviar recordatorios",
          "Derivar a una persona o equipo con contexto",
          "Clasificar intención (ventas, soporte, turnos, reclamos)",
        ],
      },
      { type: "h2", id: "ventajas", text: "Ventajas de automatizar WhatsApp en un negocio" },
      { type: "h3", id: "atencion-24", text: "Atención automática 24/7" },
      {
        type: "paragraph",
        segments: [
          "Los clientes reciben respuesta aunque sea fuera de horario. Es la base del ",
          { href: "/bots-whatsapp", label: "WhatsApp automatizado para negocios" },
          " que no depende solo de “estar conectado”.",
        ],
      },
      { type: "h3", id: "menos-repetido", text: "Menos tiempo en consultas repetidas" },
      {
        type: "paragraph",
        segments: [
          "Horarios, ubicación, precios, medios de pago o disponibilidad: lo repetible vuelve al bot. En ",
          { href: "/automatizacion-negocios", label: "automatización de WhatsApp para pymes" },
          ", eso suele ser el primer ROI medible.",
        ],
      },
      { type: "h3", id: "organizacion", text: "Mejor organización de conversaciones" },
      {
        type: "paragraph",
        segments: [
          "Podés ordenar por intención (ventas, soporte, turnos, presupuestos). Complementa bien un ",
          { href: "/bots-whatsapp", label: "chatbot para ventas por WhatsApp" },
          " cuando el embudo empieza en el mismo número.",
        ],
      },
      { type: "h3", id: "conversion", text: "Más conversiones" },
      {
        type: "paragraph",
        segments: [
          "Responder rápido en WhatsApp suele aumentar la probabilidad de cerrar. Un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para atención al cliente" },
          " no reemplaza el criterio humano: lo prepara para cuando hace falta.",
        ],
      },
      { type: "h2", id: "tipos", text: "Tipos de bots de WhatsApp para empresas" },
      { type: "h3", id: "bot-basico", text: "Bot básico con opciones" },
      {
        type: "paragraph",
        segments: [
          "Ideal para negocios chicos, consultorios, restaurantes o centros de estética. Encaja como ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para turnos online" },
          " cuando el flujo es claro (menú → horario → confirmación).",
        ],
      },
      { type: "h3", id: "bot-ia", text: "Bot con inteligencia artificial" },
      {
        type: "paragraph",
        segments: [
          "Conversaciones más flexibles: mejor interpretación de variaciones, más contexto y handoff a humano cuando corresponde. Si tu caso es clínica u hospitalidad, mirá también ",
          { href: "/software-para-clinicas", label: "software para clínicas" },
          " y cómo encaja el canal con la operación.",
        ],
      },
      { type: "h2", id: "rubros", text: "Empresas que más aprovechan los bots en Argentina" },
      {
        type: "ul",
        items: [
          "Clínicas, consultorios y odontologías — chatbot para clínicas y consultorios",
          "Centros de estética, gimnasios, restaurantes",
          "Inmobiliarias, concesionarias, ecommerce",
          "Estudios jurídicos y equipos con alto volumen de primera respuesta",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para ",
          { href: "/software-para-clinicas", label: "clínicas" },
          ", el bot suele convivir con políticas de datos y turnos: conviene definir reglas y qué queda fuera del automatismo.",
        ],
      },
      { type: "h2", id: "precio", text: "¿Cuánto cuesta un bot de WhatsApp en Argentina?" },
      {
        type: "paragraph",
        segments: [
          "Depende de la complejidad, integraciones, volumen de conversaciones y si hay ",
          { href: "/bots-whatsapp", label: "IA" },
          ". Suele haber implementación, mantenimiento y costos de plataforma/API. Para una charla concreta, ",
          { href: "/#contacto", label: "contactame" },
          " o ",
          { href: WA_BLOG, label: "escribime por WhatsApp", external: true },
          ".",
        ],
      },
      { type: "h2", id: "conviene-2026", text: "¿Conviene implementar un bot de WhatsApp en 2026?" },
      {
        type: "paragraph",
        segments: [
          "En Argentina y LATAM, WhatsApp sigue siendo un canal principal. La ",
          { href: "/automatizacion-negocios", label: "automatización de WhatsApp para empresas" },
          " ayuda a responder más rápido, perder menos oportunidades y ordenar mensajes sin inflar solo la nómina. Los ",
          { href: "/bots-whatsapp", label: "bots de WhatsApp para empresas en LATAM" },
          " ya no son exclusivos de grandes compañías.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Implementar un bot ya no es “solo para grandes”. Podés empezar con un flujo acotado y medir. Si necesitás algo que no entra en plantillas, ",
          { href: "/desarrollo-software-medida", label: "desarrollo a medida" },
          " o integraciones más profundas son el siguiente paso.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business?",
            answer:
              "Sí: con bots y automatizaciones podés responder de forma automática y conectar WhatsApp con CRM, agenda u otros sistemas, según políticas y reglas de tu negocio.",
          },
          {
            question: "¿Cuánto cuesta un bot de WhatsApp en Argentina?",
            answer:
              "Depende de la complejidad, integraciones y volumen de conversaciones mensuales. Lo habitual es separar implementación, mantenimiento y costos de plataforma o API.",
          },
          {
            question: "¿Los bots de WhatsApp usan inteligencia artificial?",
            answer:
              "Algunos sí. Hay bots simples con menús y flujos, y soluciones con IA para respuestas más naturales cuando el caso lo amerita.",
          },
          {
            question: "¿Qué negocios pueden usar bots de WhatsApp?",
            answer:
              "Prácticamente cualquier negocio con consultas frecuentes por WhatsApp: desde pymes hasta equipos de atención más grandes.",
          },
        ],
      },
    ],
  },
  {
    slug: "como-crear-bot-whatsapp-empresas-argentina",
    topicTrack: "bots-whatsapp",
    title: "Cómo crear un bot de WhatsApp para empresas en Argentina y Latinoamérica paso a paso",
    description:
      "Guía informacional: requisitos, API oficial, diferencias entre bot simple e IA, integraciones con CRM y turnos, costos y errores comunes al automatizar WhatsApp Business.",
    metaTitle: "Cómo crear un bot de WhatsApp | Empresas Argentina y LATAM",
    metaDescription:
      "Pasos para crear un chatbot en WhatsApp Business: API, automatización, IA opcional e integración con turnos y CRM. Enlaces a servicios y contacto.",
    keywords: [
      "como crear un bot de whatsapp",
      "crear chatbot para whatsapp business",
      "bot de whatsapp para empresas argentina",
      "automatizar whatsapp business",
      "chatbot whatsapp con inteligencia artificial",
      "whatsapp automation argentina",
      "bot para responder mensajes de whatsapp",
      "chatbot para atención al cliente whatsapp",
      "integrar whatsapp con sistema de turnos",
      "bot de whatsapp para ventas",
    ],
    publishedAt: "2026-05-07",
    category: "WhatsApp y automatización",
    relatedPost: {
      slug: "bot-whatsapp-negocios-argentina",
      title: "Bot de WhatsApp para negocios en Argentina: cómo automatizar consultas, ventas y turnos en 2026",
      description: "Enfoque comercial: qué es un bot, tipos, rubros, costos y FAQs.",
    },
    resourceLinks: [
      { href: "/bots-whatsapp", label: "Bots de WhatsApp (servicio)" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/automatizacion-negocios", label: "Automatización de procesos" },
      { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
      { href: "/desarrollo-software-medida", label: "Desarrollo a medida" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_BLOG, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Si estás buscando ",
          { href: "/blog/bot-whatsapp-negocios-argentina", label: "cómo encarar un bot de WhatsApp para negocios en Argentina" },
          " desde el lado comercial, tenés la otra guía del blog. Acá el foco es ",
          { href: "/bots-whatsapp", label: "crear un bot de WhatsApp" },
          " con criterio técnico y operativo: qué pedir, qué evitar y cómo integrarlo.",
        ],
      },
      { type: "h2", id: "paso-1", text: "1. Definir el objetivo y el alcance" },
      {
        type: "paragraph",
        segments: [
          "Antes de ",
          { href: "/automatizacion-negocios", label: "automatizar WhatsApp Business" },
          ", conviene listar qué debe resolver el bot: FAQs, ",
          { href: "/sistema-turnos-online", label: "integrar WhatsApp con sistema de turnos" },
          ", derivación a vendedores, etc. Sin eso, el ",
          { href: "/bots-whatsapp", label: "bot para responder mensajes de WhatsApp" },
          " crece sin control.",
        ],
      },
      { type: "h2", id: "paso-2", text: "2. API oficial y canal correcto" },
      {
        type: "paragraph",
        segments: [
          "Para un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para empresas en Argentina" },
          " serio, lo habitual es trabajar sobre la API oficial de Meta (WhatsApp Business Platform), con proveedor o stack acordado. Eso habilita ",
          { href: "/bots-whatsapp", label: "WhatsApp automation" },
          " estable y medible.",
        ],
      },
      { type: "h2", id: "paso-3", text: "3. Bot simple vs chatbot con IA" },
      {
        type: "paragraph",
        segments: [
          "Un flujo con menús resuelve gran parte del volumen. Un ",
          { href: "/bots-whatsapp", label: "chatbot de WhatsApp con inteligencia artificial" },
          " suma cuando hay muchas formas de decir lo mismo o necesitás clasificación más flexible. En muchos proyectos se combina con ",
          { href: "/automatizacion-negocios", label: "automatización de procesos" },
          " detrás (CRM, planillas, etc.).",
        ],
      },
      { type: "h2", id: "paso-4", text: "4. Integraciones: CRM, agenda y datos" },
      {
        type: "paragraph",
        segments: [
          "El ",
          { href: "/bots-whatsapp", label: "chatbot para atención al cliente en WhatsApp" },
          " gana mucho si no queda aislado: reservas en ",
          { href: "/sistema-turnos-online", label: "agenda" },
          ", tickets en CRM o alertas internas. Para clínicas, revisá ",
          { href: "/software-para-clinicas", label: "software para clínicas" },
          " si además necesitás historia o reglas clínicas.",
        ],
      },
      { type: "h2", id: "paso-5", text: "5. Bot de WhatsApp para ventas" },
      {
        type: "paragraph",
        segments: [
          "Si el embudo arranca en el mismo número, el ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para ventas" },
          " puede calificar leads y pasar contexto a humanos. Si el flujo es muy particular, a veces conviene ",
          { href: "/desarrollo-software-medida", label: "desarrollo a medida" },
          " para reglas o paneles propios.",
        ],
      },
      { type: "h2", id: "errores", text: "Errores comunes" },
      {
        type: "ul",
        items: [
          "Automatizar sin políticas claras (privacidad, escenarios límite, handoff a humano)",
          "No medir: sin métricas no sabés si el bot alivia o suma fricción",
          "Ignorar capacitación del equipo: el bot cambia cómo entran las consultas",
        ],
      },
      { type: "h2", id: "siguiente", text: "Siguiente paso" },
      {
        type: "paragraph",
        segments: [
          "Si querés presupuesto o revisión de tu caso, ",
          { href: "/#contacto", label: "contacto desde el sitio" },
          " o ",
          { href: WA_BLOG, label: "WhatsApp directo", external: true },
          ". También podés ver la landing de ",
          { href: "/bots-whatsapp", label: "bots de WhatsApp" },
          " para el enfoque completo del servicio.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business?",
            answer:
              "Sí, con bots y flujos conectados a tus sistemas. La implementación depende del volumen, del tipo de mensajes y de las integraciones que necesites.",
          },
          {
            question: "¿Cuánto cuesta un bot de WhatsApp en Argentina?",
            answer:
              "Depende de complejidad, integraciones y conversaciones mensuales. Suele haber costo de implementación y costos recurrentes de plataforma o proveedor.",
          },
          {
            question: "¿Los bots usan inteligencia artificial?",
            answer:
              "Algunos sí: hay bots con menús fijos y otros con IA para interpretar mejor al usuario, siempre con límites y supervisión donde haga falta.",
          },
          {
            question: "¿Qué negocios pueden usar bots?",
            answer:
              "Cualquiera con consultas recurrentes por WhatsApp: pymes, clínicas, ecommerce, servicios, etc.",
          },
        ],
      },
    ],
  },
  ...clinicasAutomationBlogArticles,
  ...softwareMedidaBlogArticles,
  ...appsMovilesBlogArticles,
  ...stockClinicasBlogArticles,
  ...turnosBlogArticles,
];

/** Más reciente primero */
export const blogPostsSorted: readonly BlogPost[] = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatBlogDate(isoDate: string): string {
  const d = new Date(isoDate + "T12:00:00");
  return d.toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getFaqItemsFromPost(post: BlogPost): { question: string; answer: string }[] {
  const out: { question: string; answer: string }[] = [];
  for (const block of post.content) {
    if (block.type === "faq") {
      out.push(...block.items);
    }
  }
  return out;
}

/** `lastModified` por slug para `sitemap.xml` (fecha de publicación del post). */
export function getBlogSitemapEntries(): { slug: string; lastModified: Date }[] {
  return posts.map((p) => ({
    slug: p.slug,
    lastModified: new Date(`${p.publishedAt}T12:00:00`),
  }));
}

/** Última actualización del índice `/blog` (post más reciente). */
export function getBlogIndexLastModified(): Date {
  if (posts.length === 0) return new Date();
  const latest = blogPostsSorted[0]!;
  return new Date(`${latest.publishedAt}T12:00:00`);
}
