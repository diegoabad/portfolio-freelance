import type { BlogPost } from "@/lib/blog-types";
import { whatsAppHref } from "@/lib/contact";

const WA_TURNOS = whatsAppHref(
  "Hola Diego, leí el blog sobre turnos y WhatsApp. Quiero consultar por reducción de ausentismo / agenda.",
);

/** Artículos blog: turnos + WhatsApp + clínicas (importados en `blog-posts.ts`). */
export const turnosBlogArticles: BlogPost[] = [
  {
    slug: "turnos-whatsapp-ausentismo-clinicas-argentina-2026",
    topicTrack: "agendas-online",
    title:
      "Sistema de turnos online y WhatsApp: cómo reducir el ausentismo en clínicas y consultorios en 2026",
    description:
      "Recordatorio sin política de cancelación es teatro: caso Caballito 28%→9%, 60% avisa con anticipación pero el hueco queda vacío sin lista de espera ni seña, flujo webhook y por qué el ausentismo es incentivos, no solo tecnología.",
    metaTitle: "Turnos online y WhatsApp | Reducir ausentismo en clínicas Argentina 2026",
    metaDescription:
      "Ausentismo en clínicas Argentina: recordatorio sin política de cancelación, caso Caballito 28%→9%, lista de espera, seña, webhook de cancelación y por qué el problema es de incentivos.",
    publishedAt: "2026-05-02",
    category: "Turnos, clínicas y WhatsApp",
    relatedPost: {
      slug: "turnos-online-whatsapp-reservas-negocio",
      title: "Turnos online por WhatsApp: cómo automatizar reservas y recordatorios en tu negocio",
      description: "Enfoque comercial: agenda online con WhatsApp, reservas automáticas y negocios de servicios.",
    },
    resourceLinks: [
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_TURNOS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "El recordatorio sin política de cancelación es teatro. El bot que solo dice ‘no faltes’ no reduce ausentismo: reduce excusas. Reducir ausentismo no es problema de tecnología sola; es problema de incentivos, de ventana para reaccionar y de qué pasa con el hueco cuando alguien avisa tarde pero avisa.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Una clínica odontológica en Caballito medía ~28% de ausentismo. Mandaban tres recordatorios por WhatsApp. Cuando bajamos los datos, el 60% de los no-shows avisaban entre 2 y 6 horas antes — pero esos huecos quedaban vacíos: no había lista de espera automática, política de anticipación mínima clara ni seña (Mercado Pago u otro cobro simbólico). El que avisa dos horas antes te está regalando la oportunidad; si no la usás, perdés vos.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Con reglas explícitas, recordatorios en horario útil y reasignación, el mismo consultorio bajó a ~9% de ausentismo en tres meses. No fue ‘más IA’: fue anticipación mínima, lista de espera y cobrar seña donde tenía sentido. En ese orden de magnitud, los sillones vacíos sin reasignar eran varios miles de USD al mes en producción no aprovechada — plata que no aparece en el Excel de ‘recordatorios enviados’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Mucha gente cree que con un bot de recordatorios se acaba el ausentismo. Falso. Sin política de cancelación con anticipación mínima + lista de espera + seña cuando el negocio lo tolera, el bot es decoración. El recordatorio sin reglas es teatro.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu dolor es estética o gimnasio —donde la seña ya baja el no-show y el drama es otra cosa— leé ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "turnos por WhatsApp en negocios de servicios" },
          ". Acá el foco es consultorio/clínica donde el paciente sí necesita avisar y reprogramar con reglas.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen del recordatorio",
      },
      {
        type: "ul",
        items: [
          "Mandar aviso a las 21:00 suele ser inútil: la persona no puede actuar (reprogramar, buscar transporte, liberar el hueco con sentido). La ventana útil que más vi en la práctica argentina es entre 9 y 11 de la mañana, cuando alguien puede contestar y recepción puede reasignar.",
          "Cobrar seña (aunque sea simbólica) suele bajar no-shows más que cinco recordatorios juntos — siempre con transparencia y normativa aplicable.",
          "Tres recordatorios sin acción concreta (confirmar / cancelar / entrar en lista) solo entrenan al paciente a ignorar el canal.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-flujo",
        text: "Flujo técnico: cancelación → lista de espera → WhatsApp",
      },
      {
        type: "paragraph",
        segments: [
          "El flujo que funciona: la agenda marca `cancelled` con horas de anticipación → tu backend recibe un webhook → consulta lista de espera ordenada → dispara plantilla o mensaje al siguiente candidato con slot y link para confirmar. Sin ese pipeline, el cancelado es un agujero negro.",
        ],
      },
      {
        type: "code",
        code: `// Ejemplo: payload que tu agenda (o capa intermedia) emite al cancelar un turno
// POST /webhooks/appointment-cancelled
{
  "event": "appointment.cancelled",
  "appointment_id": "apt_8k2j",
  "location_id": "caballito-1",
  "starts_at": "2026-05-12T14:00:00-03:00",
  "patient_phone": "54911XXXXXXXX",
  "hours_notice": 3.5,
  "reason": "patient",
  "fee_paid": false
}

// Siguiente paso (pseudo): waitlist.popEligible(location_id, starts_at) → waSendTemplate(...)`,
      },
      {
        type: "h2",
        id: "agenda-unica",
        text: "Agenda única y política visible",
      },
      {
        type: "paragraph",
        segments: [
          "Todo lo anterior apoya sobre ",
          { href: "/sistema-turnos-online", label: "una sola agenda fuente de verdad" },
          ". Si recepción, WhatsApp y el profesional escriben en lugares distintos, el webhook más lindo del mundo solo digitaliza el caos.",
        ],
      },
      { type: "h2", id: "conclusion-clinicas", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "En consultorio, el que avisa tarde pero avisa merece un sistema que reaccione: lista, seña y reglas claras. Si tu dolor es estética o peluquería —donde el drama es fricción fuera de horario— el espejo es ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "el post de reservas en negocios de servicios" },
          ". Si querés revisar números concretos de tu caso, usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles más abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Un bot de recordatorios basta para bajar ausentismo?",
            answer:
              "Casi nunca solo. Hacen falta reglas de cancelación, ventana para reasignar y, en muchos casos, seña o lista de espera. Sin eso, el bot decora el problema.",
          },
          {
            question: "¿A qué hora conviene el recordatorio?",
            answer:
              "Lo que más vi funcionar es mañana (9–11), cuando la persona puede confirmar o cancelar y recepción puede mover la agenda. Tarde en la noche suele ser ruido.",
          },
          {
            question: "¿Lista de espera automática es difícil de armar?",
            answer:
              "Es un flujo de datos: cancelación → webhook → siguiente en cola → mensaje con link de confirmación. La complejidad está en definir prioridades y políticas, no en el ‘chat’.",
          },
          {
            question: "¿Se pueden sacar turnos directamente por WhatsApp?",
            answer:
              "Sí, si el canal escribe en la misma base que recepción. Si no, tenés dos agendas y peor ausentismo encubierto.",
          },
        ],
      },
    ],
  },
  {
    slug: "turnos-online-whatsapp-reservas-negocio",
    topicTrack: "agendas-online",
    title: "Turnos online por WhatsApp: cómo automatizar reservas y recordatorios en tu negocio",
    description:
      "En estética, gimnasios y peluquerías el problema suele ser fricción de reserva fuera de horario, no ausentismo: caso Palermo ~40 consultas/semana de noche, 30–40% se va si respondés al día siguiente, flujo bot → seña Mercado Pago → confirmación.",
    metaTitle: "Turnos online por WhatsApp | Reservas y recordatorios Argentina",
    metaDescription:
      "Reservas por WhatsApp en estética y servicios: fricción fuera de horario, caso Palermo, seña Mercado Pago, ventana de respuesta y flujo bot → pago → confirmación.",
    publishedAt: "2026-04-21",
    category: "Turnos, clínicas y WhatsApp",
    relatedPost: {
      slug: "turnos-whatsapp-ausentismo-clinicas-argentina-2026",
      title:
        "Sistema de turnos online y WhatsApp: cómo reducir el ausentismo en clínicas y consultorios en 2026",
      description: "Enfoque en clínicas y consultorios: ausentismo, confirmaciones y agenda médica.",
    },
    resourceLinks: [
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_TURNOS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "En estética, gimnasios y peluquerías el problema muchas veces no es ausentismo: la seña ya lo baja. El problema es fricción de reserva fuera de horario. El cliente no quiere conversar: quiere agendar. Reservar a las 23:00 es la nueva normalidad; si tu sistema pide ‘mandanos un mensaje y te confirmamos’, perdiste antes de empezar.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Un centro de estética en Palermo medía unas 40 consultas por WhatsApp fuera de horario cada semana. Las respondían al día siguiente: para entonces el 30–40% ya había reservado en otro lado. Son del orden de 12 a 15 clientes perdidos por semana sin que aparezca en un KPI lindo — ‘consultas contestadas’ puede estar verde mientras la conversión está roja.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si el ticket promedio ronda USD 80 y perdés ~12 turnos/semana por latencia, estás hablando de decenas de miles de USD al año en demanda que nunca entró a tu agenda. WhatsApp es donde están los clientes, pero no siempre es donde quieren cerrar: ahí entra un link de reserva o pago que no dependa de que recepción esté despierta.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu dolor es clínico (ausentismo, reglas, reasignación), el artículo sobre ",
          { href: "/blog/turnos-whatsapp-ausentismo-clinicas-argentina-2026", label: "ausentismo en consultorios y política de cancelación" },
          " va al hueso. Acá el foco es negocio de servicios donde la seña ya filtra y el cuello de botella es velocidad.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen",
      },
      {
        type: "ul",
        items: [
          "Cobrar seña al momento de reservar suele bajar no-shows más del 60% frente a ‘solo recordatorio’ — en la práctica suele pesar más que cualquier cantidad de avisos.",
          "La ventana de oro para responder un lead caliente es minutos, no horas: después de ~5 minutos la conversión cae brutalmente (orden 50% menos en lo que vi en campañas similares).",
          "Un bot que solo charla sin bloquear recurso en la agenda única acelera el caos: el cliente cree que reservó y el sillón sigue libre para otro.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "La agenda tiene que ser una sola fuente de verdad: ",
          { href: "/sistema-turnos-online", label: "sistema de turnos online" },
          " con estados claros; el chat es solo la puerta de entrada.",
        ],
      },
      {
        type: "h2",
        id: "flujo-mp",
        text: "Flujo técnico: bot → checkpoint Mercado Pago → confirmación",
      },
      {
        type: "paragraph",
        segments: [
          "Patrón que funciona: el bot en WhatsApp ofrece slots reales → al elegir, generás preferencia o pago en Mercado Pago → el webhook de MP confirma el pago → recién ahí el turno pasa a `confirmed` y mandás recordatorio. Sin el checkpoint, el ‘sí’ del chat no es compromiso.",
        ],
      },
      {
        type: "code",
        code: `// Punto de integración típico: preferencia Checkout Pro (simplificado)
// POST https://api.mercadopago.com/checkout/preferences
// Headers: Authorization: Bearer YOUR_ACCESS_TOKEN
{
  "items": [
    { "title": "Seña turno — cabina 2", "quantity": 1, "currency_id": "ARS", "unit_price": 15000 }
  ],
  "payer": { "email": "cliente@ejemplo.com" },
  "back_urls": {
    "success": "https://tu-dominio.com/reservas/confirmada",
    "failure": "https://tu-dominio.com/reservas/fallo"
  },
  "notification_url": "https://tu-dominio.com/api/webhooks/mercadopago",
  "external_reference": "apt_8k2j",
  "metadata": { "slot_id": "slot_991", "wa_phone": "54911XXXXXXXX" }
}

// Tu backend: al recibir payment.approved → marca appointment confirmed → envía WA template.`,
      },
      {
        type: "h2",
        id: "seña-recordatorio",
        text: "Seña > recordatorio",
      },
      {
        type: "paragraph",
        segments: [
          "Primero que el calendario sea verdad; después cobrar seña donde el mercado lo tolera; después recordatorios cortos. El cliente no quiere conversar: quiere agendar. Para presupuesto o revisión de flujo usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿WhatsApp alcanza para reservar?",
            answer:
              "Sirve como entrada, pero el cierre debería apoyarse en link de agenda o pago. Si todo pasa por ‘te confirmamos mañana’, perdés a quien ya está reservando en otro lado a las 23 hs.",
          },
          {
            question: "¿Mercado Pago es obligatorio?",
            answer:
              "No: es el patrón más común en Argentina para seña. Lo importante es el checkpoint antes de confirmar el recurso.",
          },
          {
            question: "¿Necesito IA?",
            answer:
              "Casi nunca para el primer release: menús, slots reales y pago resuelven el grueso. IA entra cuando medís preguntas que no entran en caja.",
          },
          {
            question: "¿Qué ventaja tiene una agenda online?",
            answer:
              "Reservas a cualquier hora sin depender de recepción, historial claro y menos doble libro entre chat y planilla.",
          },
        ],
      },
    ],
  },
];
