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
      "Historia real de consultorio, números de ausentismo, errores típicos al armar agenda + WhatsApp y cómo lo encaro cuando me llaman para ordenar turnos en clínicas en Argentina.",
    metaTitle: "Turnos online y WhatsApp | Reducir ausentismo en clínicas Argentina 2026",
    metaDescription:
      "Turnos online y WhatsApp en clínicas Argentina: agenda única, confirmación por mensaje, errores típicos y cómo bajar ausentismo sin humo de IA.",
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
          "La semana pasada me escribió una persona que administra un consultorio por Belgrano: tenían la agenda “ordenada” en papel y WhatsApp, pero seguían con huecos vacíos y pacientes que juraban no haber visto el recordatorio. No era mala fe; era fricción pura.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En ese tipo de proyectos suelo pedir un número antes de tocar código: cuántos turnos caen por mes y cuántos no aparecen. En un caso reciente, después de meter ",
          { href: "/sistema-turnos-online", label: "agenda única con confirmación por WhatsApp" },
          " y avisos a las 24 h, el ausentismo pasó de ~22% a ~11% en seis semanas. No fue magia: fue confirmación explícita + reglas de cancelación visibles.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Mi opinión impopular: mucha gente cree que con un bot “inteligente” alcanza. En consultorios chicos el problema real suele ser la ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "agenda desincronizada" },
          " y los recordatorios genéricos que nadie lee. El bot ayuda cuando ya hay políticas claras; si no, solo automatiza el caos.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-cuentan",
        text: "Lo que no te cuentan al cerrar “agenda + WhatsApp”",
      },
      {
        type: "ul",
        items: [
          "Si recepción sigue cargando turnos a mano y el paciente también reserva por WhatsApp, vas a tener doble libro tarde o temprano.",
          "Un recordatorio sin botón o palabra clara de confirmación es casi decoración: la gente ignora el mensaje.",
          "Plantillas demasiado largas peor que ninguna: en mobile nadie lee cinco párrafos.",
          "Política de cancelación escondida en PDF = bronca del paciente y más no-shows de último momento.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-flujo",
        text: "Ejemplo concreto de flujo (sin humo)",
      },
      {
        type: "paragraph",
        segments: [
          "Imaginá un mensaje 24 h antes: hora, profesional, dirección, y dos opciones: responder SI o NO. En sistema, eso se traduce en un estado `confirmado` o `liberado` en la base y una ventana para reasignar el hueco. No hace falta IA para eso; hace falta que la agenda sea la fuente de verdad y que WhatsApp solo sea el canal.",
        ],
      },
      { type: "h2", id: "por-que-ausentismo", text: "¿Por qué ocurre tanto ausentismo en los turnos?" },
      {
        type: "paragraph",
        segments: ["En turnos online para consultorios y clínicas, las causas suelen repetirse:"],
      },
      {
        type: "ul",
        items: [
          "El paciente olvida el turno o no recibe recordatorios a tiempo",
          "Cambios de horario mal comunicados",
          "Dificultad para cancelar o reprogramar sin fricción",
          "Mala organización administrativa y exceso de mensajes manuales",
        ],
      },
      {
        type: "h2",
        id: "como-ayuda",
        text: "Cómo un sistema de turnos online ayuda a reducir inasistencias",
      },
      {
        type: "h3",
        id: "recordatorios-wa",
        text: "Recordatorios automáticos y recordatorio de turnos por WhatsApp",
      },
      {
        type: "paragraph",
        segments: [
          "Una gestión de turnos online seria programa avisos: por ejemplo 24 hs antes, con datos del turno y ubicación. Eso es automatización de turnos médicos en la práctica: menos “me olvidé” sin sumar trabajo a recepción.",
        ],
      },
      {
        type: "ul",
        items: [
          "Recordatorios automáticos de turnos (texto claro y personalizable)",
          "Confirmación de turnos por WhatsApp cuando el paciente responde sí/no",
          "Mensajes con hora, profesional y dirección",
        ],
      },
      { type: "h3", id: "confirmacion-cancelacion", text: "Confirmación y cancelación automática" },
      {
        type: "paragraph",
        segments: [
          "El paciente puede confirmar asistencia, cancelar o pedir reprogramación desde ",
          { href: "/bots-whatsapp", label: "WhatsApp" },
          ", siempre dentro de reglas que definís en la agenda. Así mejorás la tasa de asistencia y recuperás huecos con anticipación.",
        ],
      },
      { type: "h3", id: "menos-carga", text: "Menos carga administrativa" },
      {
        type: "paragraph",
        segments: [
          "Recepción deja de contestar cientos de mensajes repetitivos: el canal queda para excepciones. Un sistema de agenda para consultorios centralizado evita doble reserva y “versiones” de la agenda en planillas.",
        ],
      },
      {
        type: "h2",
        id: "integracion-agenda-bot",
        text: "Integración entre agenda online y bot de WhatsApp",
      },
      {
        type: "paragraph",
        segments: [
          "En 2026 lo que más suma es unir agenda médica online con bots de WhatsApp e IA cuando hace falta: por ejemplo un chatbot para confirmar turnos o derivar a humano, siempre con límites claros.",
        ],
      },
      {
        type: "ul",
        items: [
          "El paciente escribe por WhatsApp",
          "El bot muestra horarios disponibles (turnos online con WhatsApp)",
          "El usuario elige día y hora y el sistema agenda",
          "Luego siguen recordatorios automáticos de turnos",
        ],
      },
      { type: "h2", id: "ventajas-wa", text: "Ventajas de automatizar turnos con WhatsApp" },
      {
        type: "h3",
        id: "experiencia",
        text: "Mejor experiencia para el paciente",
      },
      {
        type: "paragraph",
        segments: [
          "WhatsApp es el canal donde ya está la gente; combinarlo con turnos online por ese medio suele subir la tasa de lectura de avisos frente a solo mail.",
        ],
      },
      { type: "h3", id: "confirmacion", text: "Mayor tasa de confirmación" },
      {
        type: "paragraph",
        segments: [
          "La confirmación de turnos por WhatsApp y los recordatorios suelen bajar inasistencias de último momento.",
        ],
      },
      { type: "h3", id: "huecos", text: "Menos turnos perdidos y organización centralizada" },
      {
        type: "paragraph",
        segments: [
          "Las cancelaciones anticipadas liberan huecos. Toda la información queda en el mismo software para centros médicos que usás para turnos de profesionales.",
        ],
      },
      { type: "h2", id: "rubros", text: "¿Qué negocios pueden usar turnos online?" },
      {
        type: "ul",
        items: [
          "Clínicas y consultorios médicos · odontologías · psicólogos",
          "Centros de estética, peluquerías, spas, gimnasios",
          "Nutricionistas, veterinarias y otros servicios por cita",
        ],
      },
      { type: "h2", id: "ia", text: "¿Conviene integrar inteligencia artificial?" },
      {
        type: "paragraph",
        segments: [
          "Yo lo uso cuando ya hay volumen y mensajes que no entran en menús fijos. Para confirmar un turno o reprogramar dentro de reglas, muchas veces alcanza con flujos simples. La IA suma cuando hay variaciones de lenguaje real; si la clínica ni sabe qué debe responder el bot, meter modelo grande primero es tirar plata.",
        ],
      },
      { type: "h2", id: "conclusion-clinicas", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Si llegaste hasta acá: un ",
          { href: "/sistema-turnos-online", label: "sistema de turnos online" },
          " con WhatsApp bien acotado suele dar más resultado que la última feature de moda. Si querés que mire tu caso con números en la mano, ",
          { href: "/#contacto", label: "mandame por la web" },
          " o ",
          { href: WA_TURNOS, label: "por WhatsApp", external: true },
          " y vemos si tiene sentido.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se pueden sacar turnos directamente por WhatsApp?",
            answer:
              "Sí, si el WhatsApp habla con la misma base que recepción. Si no, terminás con dos agendas y discusiones internas.",
          },
          {
            question: "¿Cómo reducir el ausentismo en consultorios?",
            answer:
              "Regla práctica: recordatorio corto + confirmación fácil + política de cancelación que el paciente vea antes, no después.",
          },
          {
            question: "¿Qué ventajas tiene una agenda online?",
            answer:
              "Menos Excel paralelo, menos ‘¿tenés el turno en el otro grupo?’ y más huecos recuperables cuando alguien cancela con tiempo.",
          },
          {
            question: "¿Los turnos online sirven para pequeños negocios?",
            answer:
              "Sí; de hecho ahí el ROI se nota rápido porque cada hora perdida pesa más.",
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
      "Cómo funcionan los turnos online por WhatsApp, ventajas para estética, gimnasios y profesionales, y qué mirar antes de implementar agenda digital con reservas automáticas.",
    metaTitle: "Turnos online por WhatsApp | Reservas y recordatorios Argentina",
    metaDescription:
      "Agenda online con WhatsApp: sistema de reservas online en Argentina, automatizar turnos por WhatsApp, chatbot para reservas y recordatorios automáticos por WhatsApp.",
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
          "Este artículo apunta a negocios de servicios —estética, gimnasios, peluquerías y profesionales independientes— que quieren ",
          { href: "/sistema-turnos-online", label: "turnos online por WhatsApp" },
          " sin caos en la agenda.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu caso es más clínico, el post ",
          { href: "/blog/turnos-whatsapp-ausentismo-clinicas-argentina-2026", label: "sobre ausentismo en clínicas y consultorios" },
          " va directo a recordatorios, confirmación y agenda médica.",
        ],
      },
      { type: "h2", id: "como-funcionan", text: "Cómo funcionan los turnos online por WhatsApp" },
      {
        type: "paragraph",
        segments: [
          "Un sistema de citas conecta tu agenda con WhatsApp: el cliente ve disponibilidad, reserva y recibe recordatorios automáticos. El staff opera desde un solo lugar con reglas claras.",
        ],
      },
      { type: "h2", id: "ventajas-reservas", text: "Ventajas de automatizar reservas y citas" },
      {
        type: "ul",
        items: [
          "Menos ida y vuelta manual: reservas automáticas vía WhatsApp dentro de reglas",
          "Mejor ocupación: cancelaciones con tiempo para reasignar",
          "Agenda digital para negocios: histórico y menos errores que planillas sueltas",
        ],
      },
      { type: "h2", id: "reducir-cancelaciones", text: "Cómo reducir cancelaciones y ausencias" },
      {
        type: "paragraph",
        segments: [
          "La clave es combinar software de turnos con chatbot o mensajes programados: el cliente confirma y el hueco se libera si no.",
        ],
      },
      {
        type: "h2",
        id: "bot-agenda",
        text: "Bot de WhatsApp + agenda online: la combinación más usada en 2026",
      },
      {
        type: "paragraph",
        segments: [
          "Para automatizar turnos por WhatsApp, lo habitual es un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp" },
          " que habla con la misma agenda que usa recepción. Así evitás doble libro y podés sumar ofertas o promos en el mismo canal.",
        ],
      },
      {
        type: "h2",
        id: "antes-implementar",
        text: "Qué tener en cuenta antes de implementar un sistema de turnos",
      },
      {
        type: "ul",
        items: [
          "Reglas de cancelación y reprogramación (anticipación mínima, penalidades si aplica)",
          "Quién puede ver qué (roles: recepción, profesional, admin)",
          "Integración real con WhatsApp (oficial) y volumen de mensajes esperado",
        ],
      },
      {
        type: "h2",
        id: "costo-argentina",
        text: "Cuánto cuesta implementar una agenda online en Argentina",
      },
      {
        type: "paragraph",
        segments: [
          "Depende de módulos, integraciones y si incluís bot con IA. Un sistema de reservas chico no es lo mismo que multi-sede con automatización profunda. Pedí presupuesto en ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_TURNOS, label: "WhatsApp", external: true },
          ".",
        ],
      },
      {
        type: "h2",
        id: "estetica",
        text: "Turnos online para centros de estética y rubros similares",
      },
      {
        type: "paragraph",
        segments: [
          "En ",
          { href: "/sistema-turnos-online", label: "turnos online para centros de estética" },
          ", los recordatorios y las reservas automáticas por WhatsApp suelen ser el primer paso para recuperar tiempo del equipo y bajar no-shows.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se pueden sacar turnos directamente por WhatsApp?",
            answer:
              "Sí: con un flujo conectado a tu agenda, el cliente puede reservar, confirmar o cancelar desde WhatsApp y el sistema actualiza disponibilidad al instante.",
          },
          {
            question: "¿Cómo reducir el ausentismo en consultorios?",
            answer:
              "Recordatorios automáticos por WhatsApp y confirmación explícita suelen bajar inasistencias; conviene definir políticas claras de reprogramación.",
          },
          {
            question: "¿Qué ventajas tiene una agenda online?",
            answer:
              "Organiza turnos, automatiza recordatorios y mejora la atención sin depender solo de llamadas o mensajes sueltos.",
          },
          {
            question: "¿Los turnos online sirven para pequeños negocios?",
            answer:
              "Sí: profesionales independientes y pymes usan agenda digital integrada con WhatsApp para no perder reservas.",
          },
        ],
      },
    ],
  },
];
