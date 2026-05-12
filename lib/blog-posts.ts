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
      "Guía técnica-operativa: API de Meta, plantillas y webhooks, cuándo alcanza un menú fijo vs IA, integración con agenda real y errores típicos antes del primer deploy.",
    metaTitle: "Cómo crear un bot de WhatsApp | Empresas Argentina y LATAM",
    metaDescription:
      "API de Meta, plantillas y webhooks, menú vs IA, integración con agenda real y errores típicos antes del primer deploy. Enlaces a servicios y contacto.",
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
      { href: "/#contacto", label: "Contacto" },
      { href: WA_BLOG, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Una pyme de servicios en CABA me pidió ‘el bot con IA ya’ con el número todavía en modo personal. El cuello de botella no era el modelo: era verificación de empresa, plantillas aprobadas y definir quién atiende cuando el flujo se rompe. Dos semanas se fueron solo en trámites y pruebas con Meta, cero líneas de ‘inteligencia’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si querés el enfoque comercial con números y rubros, está el otro post del blog sobre el ",
          { href: "/blog/bot-whatsapp-negocios-argentina", label: "bot de WhatsApp para negocios en Argentina" },
          ". Acá queda lo técnico-operativo: cómo llegar a producción sin que el canal se te venga abajo a la segunda semana.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En el kickoff les pido una hoja con cinco intents concretos (horario, precio, ubicación, turno, hablar con humano). Si no salen, no hay bot que salve: hay ganas de meter IA antes de saber qué contestar. En la práctica, la mayoría de lo que entra por WhatsApp en retail y servicios cae en menos de diez respuestas templadas bien escritas.",
        ],
      },
      { type: "h2", id: "paso-1", text: "1. Objetivo y alcance (sin humo)" },
      {
        type: "paragraph",
        segments: [
          "Definí si el canal resuelve FAQs, deriva con contexto o consulta ",
          { href: "/sistema-turnos-online", label: "turnos contra la misma agenda que usa recepción" },
          ". Si el calendario vive en un Excel paralelo al chat, primero unificá fuente de verdad y recién después automatizá respuestas; si no, el bot va a ofrecer huecos que no existen o a pisar reservas hechas a mano.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Medí mensajes entrantes por día hábil y cuántos son la misma pregunta con distinta redacción. Por debajo de unas treinta conversaciones útiles por día, muchas veces conviene plantillas + ventana humana antes de invertir en flujos complejos o en modelo generativo.",
        ],
      },
      { type: "h2", id: "paso-2", text: "2. API oficial y qué implica en la práctica" },
      {
        type: "paragraph",
        segments: [
          "En producción casi siempre es WhatsApp Business Platform (Cloud API o BSP): número de negocio, token, verificación de empresa y plantillas para hablar fuera de la ventana de 24 h. Eso define si el recordatorio de turno sale o queda en cola; no es un trámite de más.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El webhook recibe un JSON (texto, lista o botón) y respondés con otro POST a la API. Con un menú 1/2/3 ya filtrás buena parte del ruido. La IA entra cuando ese esquema está estable y tenés plan para cuando el modelo alucina o se va de tema.",
        ],
      },
      { type: "h2", id: "paso-3", text: "3. Menú fijo vs modelo generativo" },
      {
        type: "paragraph",
        segments: [
          "Menús interactivos y respuestas cortas = menos tokens, menos ‘el bot inventó un precio’ y menos sorpresas con políticas de Meta. Si el usuario escribe muy libre pero el dominio es acotado (tipos de estudio, planes), puede sumar un clasificador — siempre atado a tu base o a jobs propios que lean datos reales, no a texto suelto que suene convincente.",
        ],
      },
      { type: "h2", id: "paso-4", text: "4. Integraciones que valen la pena" },
      {
        type: "paragraph",
        segments: [
          "El bot es un altavoz: si no escribe donde mira recepción, sumás ruido. CRM, tickets y agenda tienen que ser la fuente de verdad; WhatsApp solo dispara lecturas y escrituras acotadas. Si las reglas son tan particulares que ningún SaaS las banca, la etapa dos puede ser un módulo propio — nunca el día uno sin volumen y sin intents claros.",
        ],
      },
      { type: "h2", id: "paso-5", text: "5. Errores que veo una y otra vez" },
      {
        type: "ul",
        items: [
          "Dos humanos y el bot contestando el mismo número sin protocolo: respuestas contradictorias y el cliente cree que el negocio no tiene cabeza.",
          "Flujo de error indefinido: el peor caso no es el silencio, es el loop de ‘¿podés reformular?’ sin oferta de hablar con persona.",
          "Dashboard de vanidad: ‘mensajes enviados’ no paga sueldos; importan tiempo hasta primera respuesta útil y cuántos chats llegan a humano con resumen útil.",
        ],
      },
      { type: "h2", id: "siguiente", text: "Siguiente paso" },
      {
        type: "paragraph",
        segments: [
          "Si ya tenés intents, volumen y número en Business API, se puede armar alcance en una llamada corta. Escribime con esos tres datos desde el contacto del sitio o por WhatsApp usando el enlace de la caja de abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business sin IA?",
            answer:
              "Sí, y muchas veces es lo recomendable al inicio: menús, plantillas aprobadas y reglas claras suelen resolver más que un modelo grande mal acotado.",
          },
          {
            question: "¿Cuánto tarda en estar un bot mínimo?",
            answer:
              "Con número verificado y plantillas aprobadas, un flujo básico puede estar en días; lo que suele demorar es definición de negocio y pruebas con el equipo que atiende.",
          },
          {
            question: "¿Los bots usan inteligencia artificial?",
            answer:
              "Pueden usarla o no. La IA suma cuando ya hay volumen y mensajes que no entran en menús; no es requisito para el primer release útil.",
          },
          {
            question: "¿Qué negocios conviene que empiecen por bot?",
            answer:
              "Los que ya reciben consultas repetidas por el mismo canal y pierden ventas por demora — no quien todavía no tiene tráfico en WhatsApp.",
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
