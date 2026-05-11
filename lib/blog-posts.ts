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
      "Qué vi en la práctica al armar bots en Argentina: volumen real de mensajes, cuándo alcanza un menú simple vs IA, números de ROI y errores que nadie te lista en el PDF comercial.",
    metaTitle: "Bot de WhatsApp para negocios en Argentina | Automatización y atención 2026",
    metaDescription:
      "Bot de WhatsApp para empresas en Argentina: automatización real de consultas, turnos y ventas; cuándo conviene IA y errores típicos al implementar en pymes y clínicas.",
    publishedAt: "2026-04-26",
    category: "WhatsApp y automatización",
    relatedPost: {
      slug: "como-crear-bot-whatsapp-empresas-argentina",
      title: "Cómo crear un bot de WhatsApp para empresas en Argentina y Latinoamérica paso a paso",
      description:
        "Enfoque informacional: requisitos, API oficial, diferencias entre bot simple e IA, integraciones y errores comunes.",
    },
    resourceLinks: [
      { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_BLOG, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Hace unas semanas me escribió el dueño de un local de electrodomésticos en zona norte: querían ‘un bot con IA que entienda todo’. Cuando exportamos el historial del número, más del 60% eran tres preguntas: horario, si hay stock de tal modelo y cómo pagan. No hacía falta modelo de lenguaje para eso; hacía falta orden.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En ese tipo de casos mido volumen antes de presupuestar: cuántos chats entrantes por día y cuántos son repetición. En uno parecido (salón + venta minorista), después de un ",
          { href: "/bots-whatsapp", label: "menú fijo + respuestas cortas" },
          ", la persona que atendía el mismo número pasó de ~140 respuestas manuales semanales a ~45 en las dos primeras semanas. El resto quedó cubierto por el flujo o derivado con etiqueta.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Opinión que no vende demos: el ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp con IA" },
          " está de moda, pero en pymes argentinas el mejor primer paso suele ser un flujo con pocas opciones bien redactadas y un handoff claro a humano. La IA suma cuando ya sabés qué preguntas son ‘sucias’ y tenés datos para entrenar o limitar el comportamiento; si no, solo acelerás respuestas incorrectas.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-cuentan",
        text: "Lo que no te cuentan en la propuesta comercial del bot",
      },
      {
        type: "ul",
        items: [
          "Si no definís qué pasa cuando el bot no entiende, el cliente se queda colgado y culpa al negocio, no al proveedor.",
          "Las plantillas de Meta y los límites de conversación importan: un ‘bot infinito’ en papel choca con la API real.",
          "Duplicar número personal y Business sin reglas = dos verdades distintas; el caos se llama ‘ya lo arreglamos en el grupo’.",
          "Medir solo ‘mensajes enviados’ es humo: necesitás tiempo hasta primera respuesta y cuántos chats llegan humano con contexto.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-tecnico",
        text: "Ejemplo técnico mínimo (webhook)",
      },
      {
        type: "paragraph",
        segments: [
          "En la práctica el WhatsApp Business API te pega un POST cuando entra un mensaje. Un handler puede devolver texto o pasar a un estado interno. Esquema simplificado del cuerpo que suele importar: `from` (teléfono), `message.type` (text, interactive…), y el payload del botón o del texto. Con eso alcanza para ‘si escribió 1 → horarios, si 2 → ubicación’ sin IA. Si después querés ",
          { href: "/sistema-turnos-online", label: "turnos enlazados a agenda" },
          ", el mismo evento dispara una consulta a tu API de slots y responde solo si hay disponibilidad real.",
        ],
      },
      { type: "h2", id: "que-es", text: "¿Qué es un bot de WhatsApp y cómo funciona?" },
      {
        type: "paragraph",
        segments: [
          "Es software que responde o encamina conversaciones en el mismo canal donde ya te escribe la gente. Lo podés armar con menús, reglas o integraciones (CRM, ",
          { href: "/sistema-turnos-online", label: "agenda" },
          ", stock). La guía paso a paso va aparte: ",
          { href: "/blog/como-crear-bot-whatsapp-empresas-argentina", label: "cómo crear un bot de WhatsApp" },
          ".",
        ],
      },
      {
        type: "ul",
        items: [
          "FAQ, precios y políticas en texto corto",
          "Turnos y recordatorios si hay sistema de respaldo",
          "Derivación con resumen para la persona que sigue la charla",
          "Etiquetas por intención (venta, reclamo, turno perdido)",
        ],
      },
      { type: "h2", id: "ventajas", text: "Ventajas de automatizar WhatsApp en un negocio" },
      { type: "h3", id: "atencion-24", text: "Atención automática 24/7" },
      {
        type: "paragraph",
        segments: [
          "Fuera de horario al menos contestás algo útil: horario, link o ‘te derivamos mañana’. Eso ya filtra gente que solo curiosea.",
        ],
      },
      { type: "h3", id: "menos-repetido", text: "Menos tiempo en consultas repetidas" },
      {
        type: "paragraph",
        segments: [
          "Lo repetible no debería pasar por una persona. Ahí está el ROI más fácil de mostrar en números internos.",
        ],
      },
      { type: "h3", id: "organizacion", text: "Mejor organización de conversaciones" },
      {
        type: "paragraph",
        segments: [
          "Si cada chat llega etiquetado, el equipo humano no empieza de cero. En ventas por WhatsApp eso se nota en cierres.",
        ],
      },
      { type: "h3", id: "conversion", text: "Más conversiones" },
      {
        type: "paragraph",
        segments: [
          "Responder rápido ayuda; responder bien ayuda más. El bot prepara; no reemplaza el criterio cuando el caso es sensible o caro.",
        ],
      },
      { type: "h2", id: "tipos", text: "Tipos de bots de WhatsApp para empresas" },
      { type: "h3", id: "bot-basico", text: "Bot básico con opciones" },
      {
        type: "paragraph",
        segments: [
          "Para consultorios, gastronomía o retail chico suele alcanzar: menú → respuesta → opción de hablar con alguien. Encaja bien como ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para turnos online" },
          " cuando el calendario ya existe y solo falta el canal.",
        ],
      },
      { type: "h3", id: "bot-ia", text: "Bot con inteligencia artificial" },
      {
        type: "paragraph",
        segments: [
          "Sirve cuando el lenguaje varía mucho y tenés forma de acotar dominio (base de conocimiento, herramientas, revisión humana). Sin eso es juguete caro.",
        ],
      },
      { type: "h2", id: "rubros", text: "Empresas que más aprovechan los bots en Argentina" },
      {
        type: "ul",
        items: [
          "Clínicas y consultorios (confirmación y derivación)",
          "Estética, gimnasios, restaurantes (disponibilidad y FAQs)",
          "Inmobiliarias y concesionarias (primer filtro)",
          "Equipos con mucha primera respuesta y pocas personas",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En salud el bot tiene que convivir con responsabilidad sobre datos y límites de lo automatizable: mejor menos promesas y más claridad.",
        ],
      },
      { type: "h2", id: "precio", text: "¿Cuánto cuesta un bot de WhatsApp en Argentina?" },
      {
        type: "paragraph",
        segments: [
          "Depende de integraciones, volumen mensual y si hay modelo generativo. Siempre hay implementación + mantenimiento + costo de plataforma/API. Para números sobre tu caso, ",
          { href: "/#contacto", label: "contactame" },
          " o ",
          { href: WA_BLOG, label: "WhatsApp", external: true },
          ".",
        ],
      },
      { type: "h2", id: "conviene-2026", text: "¿Conviene implementar un bot de WhatsApp en 2026?" },
      {
        type: "paragraph",
        segments: [
          "Sí si ya tenés volumen y mensajes repetitivos. No si todavía no sabés qué querés que pase cuando alguien escribe ‘quiero hablar con una persona’. Empezá chico, medí, y recién ahí subí complejidad.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp para negocios" },
          " bien acotado ordena el canal sin mitología. Si el flujo no entra en caja, ahí entra desarrollo o integraciones más profundas; lo charlamos cuando tengas el mapa de conversaciones.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business?",
            answer:
              "Sí, con API oficial y reglas claras. Lo que no podés es prometer magia sin límites de plantillas ni políticas de uso.",
          },
          {
            question: "¿Cuánto cuesta un bot de WhatsApp en Argentina?",
            answer:
              "Variable: flujo simple vs integraciones vs IA. Pedí siempre desglose implementación / mensual / mensajes.",
          },
          {
            question: "¿Los bots de WhatsApp usan inteligencia artificial?",
            answer:
              "Algunos sí; muchos no lo necesitan al inicio. Menús bien escritos suelen resolver más de lo que se admite en LinkedIn.",
          },
          {
            question: "¿Qué negocios pueden usar bots de WhatsApp?",
            answer:
              "Cualquiera con tráfico recurrente en el mismo número. Si recibís cinco mensajes por semana, probablemente antes necesitás difusión que automatización.",
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
      { href: "/automatizacion-procesos-clinicas", label: "Automatización de procesos" },
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
          { href: "/automatizacion-procesos-clinicas", label: "automatizar WhatsApp Business" },
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
          { href: "/automatizacion-procesos-clinicas", label: "automatización de procesos" },
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

const MONTHS_ES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

/** Fecha legible idéntica en servidor y cliente (evita mismatch de hidratación con `toLocaleDateString`). */
export function formatBlogDate(isoDate: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!m) return isoDate;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  const monthName = MONTHS_ES[month - 1];
  if (!monthName || day < 1 || day > 31) return isoDate;
  return `${day} de ${monthName} de ${year}`;
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
