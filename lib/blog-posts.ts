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
          "En ese tipo de casos mido volumen antes de presupuestar: cuántos chats entrantes por día y cuántos son repetición. En uno parecido (salón + venta minorista), después de un menú fijo con respuestas cortas, la persona que atendía el mismo número pasó de ~140 respuestas manuales semanales a ~45 en las dos primeras semanas. El resto quedó cubierto por el flujo o derivado con etiqueta.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Opinión que no vende demos: el bot con IA está de moda, pero en pymes argentinas el mejor primer paso suele ser un flujo con pocas opciones bien redactadas y un handoff claro a humano. La IA suma cuando ya sabés qué preguntas son ‘sucias’ y tenés datos para acotar el comportamiento; si no, solo acelerás respuestas incorrectas.",
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
          "Medir solo ‘mensajes enviados’ es humo: necesitás tiempo hasta primera respuesta útil y cuántos chats llegan a humano con contexto.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-tecnico",
        text: "Qué hace el webhook en una frase larga",
      },
      {
        type: "paragraph",
        segments: [
          "La API de WhatsApp Business te pega un POST cuando entra un mensaje: teléfono, tipo (texto, botón, lista) y payload. Con eso alcanza para ‘1 → horarios, 2 → ubicación’ sin modelo generativo. Si el negocio vende tiempo (turnos), el mismo handler puede consultar ",
          { href: "/sistema-turnos-online", label: "slots reales en la agenda" },
          " y responder solo si hay disponibilidad — si no, inventás huecos en el chat.",
        ],
      },
      {
        type: "h2",
        id: "de-donde-sale-el-valor",
        text: "De dónde sale el valor (sin capítulo de ‘ventajas’ genéricas)",
      },
      {
        type: "paragraph",
        segments: [
          "El canal sirve para tres cosas que se pueden medir: contestar lo repetible fuera de horario, etiquetar intención antes de que entre un humano, y evitar que dos personas contesten distinto el mismo número. Todo lo demás —‘más conversiones’, ‘24/7’ en PowerPoint— depende de que esas tres estén resueltas. En salud sumá límites claros de qué no automatizás y cómo queda registrado el handoff.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Menú fijo vs IA no es religión: el primero gana cuando el historial muestra pocas intenciones con mucha repetición; la segunda cuando el texto varía pero el dominio es acotable y hay revisión cuando el modelo duda. La guía técnica paso a paso está en ",
          { href: "/blog/como-crear-bot-whatsapp-empresas-argentina", label: "cómo crear un bot de WhatsApp paso a paso" },
          ".",
        ],
      },
      {
        type: "h2",
        id: "cuando-tiene-sentido",
        text: "Cuándo tiene sentido en Argentina (y cuándo no)",
      },
      {
        type: "paragraph",
        segments: [
          "Tiene sentido cuando ya hay tráfico en el mismo número y perdés ventas o turnos por demora. No tiene sentido cuando el problema es que casi nadie escribe: antes conviene difusión u oferta clara. Rubros donde más vi ROI: retail que repite las mismas tres preguntas, servicios con agenda, clínicas con confirmación y derivación. Inmobiliaria o concesionaria suele funcionar como primer filtro si el equipo después puede seguir el ritmo.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Precio: depende de integraciones, volumen y si metés modelo generativo; siempre hay implementación, mantenimiento y costo de plataforma. Para un desglose sobre tu caso usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Un bot bien acotado ordena el canal sin mitología. Si el flujo no entra en caja o el calendario no es único, el problema no lo arregla ni el modelo más grande: hay que alinear datos y reglas primero.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business?",
            answer:
              "Sí, con API oficial y reglas explícitas. Lo que no existe es ‘contestar todo sin límites’: plantillas y políticas de Meta mandan.",
          },
          {
            question: "¿Cuánto cuesta un bot de WhatsApp en Argentina?",
            answer:
              "Depende de si es menú + plantillas, integraciones con stock o agenda, y si sumás IA. Pedí desglose: implementación, mensual y costo de mensajes/API.",
          },
          {
            question: "¿Los bots de WhatsApp usan inteligencia artificial?",
            answer:
              "Pueden no usarla y aun así ser útiles. La IA entra cuando ya medís qué no entra en menú y podés acotar respuestas y errores.",
          },
          {
            question: "¿Qué negocios pueden usar bots de WhatsApp?",
            answer:
              "Los que ya reciben mensajes recurrentes en el mismo número. Si casi no escriben, el cuello de botella no es el bot.",
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
      "No empieces por plataforma: clasificá cientos de mensajes reales. Caso ARS ~200k/mes en ‘IA’ sin datos (70% mal), costos de plantillas Meta, webhooks text/interactive/button y handoff a humano.",
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
          "No empieces por elegir plataforma. Empezá clasificando al menos trescientos o quinientos mensajes reales de tu número. Si no podés categorizarlos a mano (intención, resultado, si hizo falta humano), no podés automatizar con criterio: solo vas a comprar humo con API.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Un cliente llegó con un proveedor que le vendía ‘el mejor bot con IA’ por ~ARS 200.000 al mes. Cuando pedí los logs de un mes, el bot respondía mal alrededor del 70% de las consultas porque nunca lo entrenaron con datos del negocio: precios viejos, políticas inventadas, derivaciones al número equivocado. Estaba pagando varios millones de pesos al año para un loro caro; el tiempo real ahorrado en recepción fue cero. El bot con IA sin datos de tu negocio es un asistente genérico: si lo único que ‘sabe’ es lo que suena en Internet, muchas veces vas a tener mejores resultados con un menú fijo de cinco opciones.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "La métrica importante no es ‘mensajes enviados’: es casos resueltos sin humano, con trazabilidad y sin inventar. Si querés el enfoque comercial con rubros y costos, está el post sobre el ",
          { href: "/blog/bot-whatsapp-negocios-argentina", label: "bot de WhatsApp para negocios en Argentina" },
          ". Acá queda lo técnico-operativo para no fundirte antes del primer deploy.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen del canal oficial",
      },
      {
        type: "ul",
        items: [
          "Las plantillas de WhatsApp Business API tienen costo por conversación/mensaje que depende del país y categoría (órdenes de USD 0,005 a ~0,08 por unidad según tipo y región — revisá la grilla vigente de Meta).",
          "WhatsApp puede limitar o suspender el número si te marcan spam o si violás políticas de opt-in; no siempre hay ‘segundo aviso’ negociable.",
          "La verificación de negocio en Meta suele tardar semanas (típico 2–4): sin eso, muchas plantillas y límites quedan trabados.",
          "‘API oficial’ no es gratis: sumás costo de BSP/plataforma + conversaciones + lo que cobre quien implementa. El sticker ‘oficial’ no borra la matemática.",
        ],
      },
      { type: "h2", id: "paso-1", text: "1. Inventario de intents (antes del código)" },
      {
        type: "paragraph",
        segments: [
          "Exportá conversaciones, etiquetá intención y resultado. Si el 60% cae en cinco buckets (precio, turno, ubicación, obra social, hablar con persona), tu roadmap ya está escrito. Si no sale eso, el problema no es el modelo de lenguaje: es que el negocio no tiene respuestas canónicas.",
        ],
      },
      { type: "h2", id: "paso-2", text: "2. API oficial y cumplimiento" },
      {
        type: "paragraph",
        segments: [
          "En producción casi siempre es WhatsApp Business Platform: número de negocio, token, verificación de empresa y plantillas para hablar fuera de la ventana de 24 h. Eso define si el recordatorio sale o queda en cola; no es un trámite de más.",
        ],
      },
      {
        type: "h2",
        id: "webhook-tipos",
        text: "3. Webhook entrante: text, interactive, botones",
      },
      {
        type: "paragraph",
        segments: [
          "Tu servidor recibe un POST con `entry[].changes[].value.messages[]`. El campo `type` te dice cómo parsear: `text` trae `text.body`; `interactive` trae `button_reply` o `list_reply` con `id` estable (mejor que parsear texto libre). Las respuestas a botones de plantillas suelen llegar como `interactive`. Unificar todo a ‘acción interna’ antes de contestar reduce sorpresas.",
        ],
      },
      {
        type: "code",
        code: `// Payload simplificado (Meta Cloud API): tres formas típicas de entrada
{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [
          {
            "from": "54911XXXXXXXX",
            "type": "text",
            "text": { "body": "quiero reprogramar el martes" }
          },
          {
            "from": "54911XXXXXXXX",
            "type": "interactive",
            "interactive": {
              "type": "button_reply",
              "button_reply": { "id": "intent_turnos", "title": "Turnos" }
            }
          },
          {
            "from": "54911XXXXXXXX",
            "type": "interactive",
            "interactive": {
              "type": "list_reply",
              "list_reply": { "id": "svc_cardio", "title": "Cardiología" }
            }
          }
        ]
      }
    }]
  }]
}

// Handoff a humano: si confidence < umbral OR intent === "humano"
// → crear ticket en CRM con transcript + dejar de autoresponder.`,
      },
      { type: "h2", id: "paso-3", text: "4. Menú fijo vs modelo generativo" },
      {
        type: "paragraph",
        segments: [
          "Menús interactivos y respuestas atadas a tu base = menos tokens y menos ‘el bot inventó un precio’. La IA suma cuando ya medís qué no entra en menú y tenés dataset y revisiones humanas. Si no podés clasificar mensajes a mano, no hay magia: solo riesgo.",
        ],
      },
      { type: "h2", id: "paso-4", text: "5. Integraciones que valen la pena" },
      {
        type: "paragraph",
        segments: [
          "El bot es tubería: tiene que leer y escribir donde mira recepción — ",
          { href: "/sistema-turnos-online", label: "agenda con locks reales" },
          ", CRM o tickets. Si el calendario vive en Excel paralelo al chat, primero unificá fuente de verdad.",
        ],
      },
      { type: "h2", id: "paso-5", text: "6. Errores que veo una y otra vez" },
      {
        type: "ul",
        items: [
          "Dos humanos y el bot contestando el mismo número sin protocolo: respuestas contradictorias.",
          "Flujo de error indefinido: loop de ‘¿podés reformular?’ sin oferta clara de hablar con persona.",
          "Dashboard de vanidad: ‘mensajes enviados’ no paga sueldos; importan casos resueltos sin humano y tiempo hasta primera respuesta útil.",
        ],
      },
      { type: "h2", id: "siguiente", text: "Siguiente paso" },
      {
        type: "paragraph",
        segments: [
          "Si ya tenés muestra de mensajes, intents y número en Business API, se puede armar alcance en una llamada corta. Escribime con esos datos desde el contacto del sitio o por WhatsApp usando el enlace de la caja de abajo.",
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
