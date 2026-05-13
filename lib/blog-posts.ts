import type { BlogPost } from "@/lib/blog-types";
import { clinicasAutomationBlogArticles } from "@/lib/blog-posts-clinicas-automation-articles";
import { appsMovilesBlogArticles } from "@/lib/blog-posts-apps-moviles-articles";
import { stockClinicasBlogArticles } from "@/lib/blog-posts-stock-clinicas-articles";
import { softwareMedidaBlogArticles } from "@/lib/blog-posts-software-medida-articles";
import { turnosBlogArticles } from "@/lib/blog-posts-turnos-articles";

export type { BlogPost } from "@/lib/blog-types";

const posts: BlogPost[] = [
  {
    slug: "bot-whatsapp-negocios-argentina",
    topicTrack: "bots-whatsapp",
    title: "Bot de WhatsApp para negocios: cuándo ayuda de verdad y cuándo termina siendo humo",
    description:
      "Casos reales en Argentina: qué pasa cuando mirás el historial del número, cuándo alcanza ordenar respuestas y automatizar lo repetitivo, cuándo suma IA y errores típicos que no figuran en la propuesta comercial.",
    metaTitle: "Bot WhatsApp para negocios en Argentina | Automatización y atención 2026",
    metaDescription:
      "Muchos negocios en Argentina buscan automatizar WhatsApp para responder más rápido, ordenar turnos o bajar carga manual. Acá: cuándo conviene un bot, cuándo no, y qué vi en la práctica con números reales.",
    metaKeywords: [
      "bot WhatsApp",
      "automatización WhatsApp",
      "WhatsApp Business Argentina",
      "atención al cliente WhatsApp",
      "chatbot pymes",
      "reservas por WhatsApp",
    ],
    publishedAt: "2026-04-26",
    category: "WhatsApp y automatización",
    relatedPost: {
      slug: "como-crear-bot-whatsapp-empresas-argentina",
      title: "Cómo crear un bot de WhatsApp para empresas en Argentina y Latinoamérica paso a paso",
      description:
        "Enfoque informacional: requisitos, WhatsApp Business, diferencias entre bot simple e IA, integraciones y errores comunes.",
    },
    resourceLinks: [
      { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/blog/como-crear-bot-whatsapp-empresas-argentina", label: "Cómo crear un bot paso a paso" },
      { href: "/proyectos/bot-whatsapp-odontologia-soler", label: "Caso: Odontología Soler" },
    ],
    closingCta: {
      headline: "Si tu negocio ya vive del WhatsApp y el equipo no da abasto",
      supporting:
        "Muchas veces se puede ordenar el canal y automatizar lo repetitivo sin volver más compleja la operación ni prometer magia con IA. Si querés revisar tu caso con conversaciones reales, escribime y lo vemos.",
    },
    content: [
      {
        type: "paragraph",
        segments: [
          "Cada vez más negocios quieren automatizar WhatsApp. Tiene sentido: hoy una parte grande de las consultas pasa por ahí — horarios, precios, stock, turnos, ubicación, formas de pago. Entonces aparece rápido la idea de ‘necesitamos un bot con inteligencia artificial’. En muchos casos el problema no es la falta de IA: es que el negocio sigue respondiendo siempre las mismas preguntas a mano.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Hace un tiempo hablé con el dueño de un local de electrodomésticos en zona norte que quería un ‘bot inteligente’. Cuando miramos el historial del número, apareció algo muy simple: más de la mitad de los mensajes eran las mismas consultas — horario, si había stock de tal modelo, cómo pagar. No hacía falta un sistema complejo. No hacía falta modelo de lenguaje para eso; hacía falta orden: respuestas claras, automatizar lo repetitivo y que el equipo deje de perder tiempo con lo mismo todo el día.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En ese tipo de casos mido volumen antes de presupuestar: cuántos chats entran por día y cuántos son repetición. En uno parecido (salón + venta minorista), después de un menú fijo con respuestas cortas, quien atendía el mismo número pasó de ~140 respuestas manuales semanales a ~45 en las dos primeras semanas. El resto lo cubrió el flujo automático o quedó derivado con el contexto ya marcado para cuando intervenía una persona.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Opinión que no vende demos: el bot con IA está de moda, pero en pymes argentinas el mejor primer paso suele ser un flujo con pocas opciones bien redactadas y una forma clara de derivar la conversación a alguien del equipo. La IA suma cuando ya sabés qué preguntas son difíciles de encasillar y tenés datos para acotar el comportamiento; si no, solo acelerás respuestas incorrectas.",
        ],
      },
      {
        type: "h2",
        id: "problemas-comunes",
        text: "Problemas comunes que suelen aparecer",
      },
      {
        type: "ul",
        items: [
          "Clientes que esperan horas una respuesta.",
          "Dos personas contestando distinto desde el mismo número.",
          "Mensajes que se pierden fuera de horario.",
          "Consultas repetidas todo el día.",
          "Recepción o ventas respondiendo siempre lo mismo.",
          "Turnos tomados a mano por WhatsApp sin registro claro en la agenda.",
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
          "Las plantillas de Meta y los límites de conversación importan: un ‘bot infinito’ en el PDF choca con las reglas reales de uso y envío de la plataforma.",
          "Duplicar número personal y Business sin reglas = dos verdades distintas; el caos se llama ‘ya lo arreglamos en el grupo’.",
          "Medir solo ‘mensajes enviados’ es humo: necesitás tiempo hasta la primera respuesta útil y cuántos chats llegan a una persona con el contexto ya ordenado.",
        ],
      },
      {
        type: "h2",
        id: "como-funciona-automatizacion",
        text: "Cómo funciona normalmente una automatización de WhatsApp",
      },
      {
        type: "paragraph",
        segments: [
          "Cuando alguien escribe, el sistema puede identificar qué tipo de consulta está haciendo, si necesita hablar con una persona, si quiere sacar un turno o si solo busca información básica. Con eso se automatizan muchas tareas simples: horarios, ubicación, preguntas frecuentes, disponibilidad, confirmaciones y derivaciones. Si el negocio vende tiempo (turnos), puede conectarse con ",
          { href: "/sistema-turnos-online", label: "una agenda de turnos" },
          " y revisar horarios disponibles reales antes de prometer un hueco: si no hay lugar, inventarlo en el chat solo genera bronca. Cuando hace falta, la conversación pasa a una persona con el contexto ya organizado.",
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
          "El canal sirve para tres cosas que se pueden medir: contestar lo repetible fuera de horario, dejar marcada la intención antes de que entre alguien del equipo, y evitar que dos personas contesten distinto el mismo número. Todo lo demás —‘más conversiones’, ‘24/7’ en PowerPoint— depende de que esas tres estén resueltas. En salud sumá límites claros de qué no automatizás y cómo queda registrada la derivación cuando tiene que intervenir una persona.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Menú fijo vs IA no es religión: el primero gana cuando el historial muestra pocas consultas distintas con mucha repetición; la segunda cuando el texto varía pero el tema es acotable y hay alguien que revisa cuando el sistema duda. Qué mirar antes de armar el canal está en ",
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
          "Precio: depende de integraciones, volumen y si sumás IA que responde mensajes con texto libre; siempre hay implementación, mantenimiento y costo de plataforma. Para un desglose sobre tu caso usá el contacto del sitio o el WhatsApp al pie de la página.",
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
              "Sí, con la plataforma oficial de WhatsApp y reglas explícitas. Lo que no existe es ‘contestar todo sin límites’: plantillas y políticas de Meta mandan.",
          },
          {
            question: "¿Cuánto cuesta un bot de WhatsApp en Argentina?",
            answer:
              "Depende de si es menú + plantillas, integraciones con stock o agenda, y si sumás IA. Pedí desglose: implementación, mensual y costo de mensajes en la plataforma.",
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
      "Consultas repetidas y WhatsApp explotado no se arreglan solos con ‘más IA’. Caso real, orden de trabajo antes de automatizar, errores que vi en clientes y cuándo conviene WhatsApp Business sin romper la atención.",
    metaTitle: "Cómo crear un bot de WhatsApp | Empresas Argentina y LATAM",
    metaDescription:
      "Bot de WhatsApp para negocios y clínicas, atención automática por WhatsApp, chatbot para turnos y consultas frecuentes: errores reales y qué ordenar antes de pagar un proveedor.",
    metaKeywords: [
      "crear bot WhatsApp",
      "WhatsApp Business empresas",
      "bot WhatsApp Argentina",
      "chatbot turnos",
      "automatización atención cliente",
      "LATAM WhatsApp",
    ],
    publishedAt: "2026-05-07",
    category: "WhatsApp y automatización",
    relatedPost: {
      slug: "bot-whatsapp-negocios-argentina",
      title: "Bot de WhatsApp para negocios: cuándo ayuda de verdad y cuándo termina siendo humo",
      description: "Enfoque comercial: qué es un bot, tipos, rubros, costos y FAQs.",
    },
    resourceLinks: [
      { href: "/bots-whatsapp", label: "Bots de WhatsApp (servicio)" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/blog/bot-whatsapp-negocios-argentina", label: "Bot WhatsApp: cuándo sirve y cuándo no" },
      { href: "/proyectos/bot-whatsapp-odontologia-soler", label: "Caso: Odontología Soler" },
    ],
    closingCta: {
      headline: "¿Te llegan muchas consultas repetidas por WhatsApp?",
      supporting:
        "Si ya pasa seguido y querés ver qué se puede automatizar sin que el cliente sienta que habló con algo que inventa o se contradice con recepción, escribime y lo revisamos con ejemplos reales de tu número.",
    },
    content: [
      {
        type: "paragraph",
        segments: [
          "Cada vez más negocios quieren automatizar WhatsApp. Tiene sentido: consultas que se repiten, mensajes fuera de horario, turnos, precios, ubicación, seguimiento de clientes… El canal ya está ahí; lo que falta suele ser orden.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El problema es que muchos arrancan al revés: primero contratan ‘un bot con IA’, recién después miran cómo contesta hoy el equipo y qué respuestas son las correctas. Eso suele terminar igual: clientes frustrados, información vieja y recepcionistas corrigiendo lo que el sistema dijo.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Hace poco vi un caso muy claro. Un negocio pagaba un servicio carísimo de bot ‘inteligente’ que contestaba automáticamente por WhatsApp. En teoría resolvía todo solo. En la práctica, fallaba en precios, mandaba gente al número equivocado y mezclaba políticas que ya no aplicaban. Cuando revisamos un mes de conversaciones, casi siete de cada diez respuestas había que retocarlas o desmentirlas. El problema no era la inteligencia artificial en abstracto: era que nadie había trabajado los procesos reales del negocio —ni un historial de conversaciones reales para ver qué preguntan de verdad— antes de automatizar. Eso pasa muchísimo más de lo que parece.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "La métrica que a mí me importa no es cuántos mensajes mandó el bot: es cuántas consultas quedaron resueltas bien, sin que una persona tenga que entrar a arreglar el desorden. Si querés números, rubros y enfoque más comercial, está el otro post del blog sobre el ",
          { href: "/blog/bot-whatsapp-negocios-argentina", label: "bot de WhatsApp para negocios en Argentina" },
          ". Acá me concentro en lo que haría cualquier asesor que ya vio estos proyectos pinchar en la vida real.",
        ],
      },
      {
        type: "h2",
        id: "error-comun",
        text: "El error que se repite: comprar ‘inteligencia’ antes de ordenar el negocio",
      },
      {
        type: "paragraph",
        segments: [
          "Si no podés anotar a mano, en una tarde, qué tipo de consultas entran una y otra vez, no tenés material para automatizar con criterio: tenés ganas de tecnología. La tecnología después acompaña; primero va claridad: qué contestamos siempre igual, qué nunca puede decir una máquina sola, y cuál es el lugar donde el equipo realmente anota turnos y precios (si eso vive en tres lugares distintos, el bot solo va a elegir mal el lugar).",
        ],
      },
      {
        type: "h2",
        id: "que-funciona",
        text: "Lo que en la práctica sí mejora la atención",
      },
      {
        type: "ul",
        items: [
          "Responder lo repetible con textos cortos y opciones claras, conectados a los mismos datos que usa recepción (no a un PDF del 2023).",
          "Definir desde el día uno cuándo la conversación pasa a una persona —sin vueltas ni ‘escribí reformulando tu pregunta’ infinito.",
          "Si hay turnos, que lo que vea el cliente sea el mismo calendario que mira el equipo: si no, el bot promete huecos que no existen.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En muchos casos eso pasa por integrar el chat con un ",
          { href: "/sistema-turnos-online", label: "sistema de turnos online" },
          " que sea el mismo que usa el equipo; también está entre los enlaces útiles al final de esta nota.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Un menú de pocas opciones bien redactado suele ganarle a un modelo grande mal alimentado. Más IA no siempre es mejor atención: muchas veces es más superficie para equivocarse.",
        ],
      },
      {
        type: "h2",
        id: "donde-rinde",
        text: "Dónde más vi que rinda (sin prometer rubro mágico)",
      },
      {
        type: "paragraph",
        segments: [
          "En negocios que ya reciben volumen en el mismo número y pierden ventas o turnos por demora encaja bien un bot de WhatsApp para empresas que filtre lo repetible y deje listo el contexto antes de que entre un humano. En salud —bot de WhatsApp para clínicas, centros médicos, consultorios— suele funcionar automatizar consultas frecuentes (horarios, preparación, ubicación) y la atención automática por WhatsApp para confirmar o reprogramar, siempre con límites claros de lo que no puede decir solo una respuesta automática. Un chatbot para turnos solo suma si el calendario es único; si no, multiplicás broncas.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si casi nadie escribe al número, el cuello de botella no es el bot: es difusión u oferta. WhatsApp Business para empresas en Argentina tiene reglas y costos; conviene entrar con los ojos abiertos, no con el folleto del vendedor.",
        ],
      },
      {
        type: "h2",
        id: "antes-de-firmar",
        text: "Cosas que casi nadie te cuenta antes de firmar",
      },
      {
        type: "ul",
        items: [
          "Los mensajes tipo aviso o recordatorio por la vía oficial tienen costo según país y tipo de conversación: no es ‘gratis porque es WhatsApp’.",
          "La verificación del negocio en Meta puede tardar semanas; sin eso, muchas cosas quedan trabadas.",
          "Si te marcan spam o no respetás cómo la gente dio permiso para que le escribas, el número puede limitarse o cortarse: no siempre hay ‘segundo aviso’ negociable.",
          "Además del proveedor, casi siempre hay costo de plataforma y de conversación: el sticker ‘oficial’ no borra la cuenta corriente.",
        ],
      },
      {
        type: "h2",
        id: "errores-reales",
        text: "Errores reales que veo al implementar",
      },
      {
        type: "ul",
        items: [
          "Dos o tres personas y el bot contestando el mismo número sin reglas: el cliente recibe tres versiones distintas del mismo tema.",
          "Cuando algo falla, el flujo no ofrece salida humana clara: queda el loop de ‘reformulá tu pregunta’ y la gente se va enojada.",
          "Medir solo ‘mensajes enviados’: es humo. Sirve medir si la persona tuvo respuesta útil rápido y si el equipo dejó de repetir lo mismo cien veces por semana.",
        ],
      },
      {
        type: "h2",
        id: "detalle-tecnico",
        text: "¿Y lo técnico (mensajes, botones, servidor)?",
      },
      {
        type: "paragraph",
        segments: [
          "Se puede explicar con calma en otro texto o en documentación para quien vaya a implementar: cómo llega cada mensaje al servidor, qué pasa cuando alguien toca un botón de lista, etc. Para el dueño del negocio o quien decide presupuesto, lo urgente no es el JSON: es el orden de trabajo y las reglas de atención. Mezclar consultoría, tutorial de backend y folleto comercial en la misma nota confunde y aburre; por eso acá no metí payloads: si tu equipo necesita ese detalle, lo vemos aparte con capturas y ejemplos de tu propio número.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si ya estás recibiendo muchas consultas repetidas por WhatsApp y querés ver qué se puede automatizar sin romper la confianza del cliente, podés usar el contacto del sitio o el WhatsApp al pie de la página.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se puede automatizar WhatsApp Business sin inteligencia artificial?",
            answer:
              "Sí, y muchas veces es el mejor primer paso: respuestas claras, opciones fijas y reglas explícitas suelen resolver más que un modelo grande sin datos del negocio.",
          },
          {
            question: "¿Cuánto tarda en estar algo usable?",
            answer:
              "Cuando el número y los textos de aviso ya están aprobados, un flujo básico puede salir en pocos días. Lo que suele demorar es que el equipo pruebe de verdad y diga ‘esto sí’ y ‘esto no’ con ejemplos reales.",
          },
          {
            question: "¿Los bots de WhatsApp usan IA?",
            answer:
              "Pueden usarla o no. La IA suma cuando ya sabés qué preguntas no entran en menús y tenés forma de corregir cuando se equivoca; no es obligatoria para el primer paso útil.",
          },
          {
            question: "¿Qué negocios conviene que empiecen por un bot?",
            answer:
              "Los que ya reciben consultas repetidas por el mismo canal y pierden ventas o turnos por demora — no quien todavía no tiene tráfico en WhatsApp.",
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
