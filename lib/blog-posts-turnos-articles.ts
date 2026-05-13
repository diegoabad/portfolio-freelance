import type { BlogPost } from "@/lib/blog-types";

/** Artículos blog: turnos + WhatsApp + clínicas (importados en `blog-posts.ts`). */
export const turnosBlogArticles: BlogPost[] = [
  {
    slug: "turnos-whatsapp-ausentismo-clinicas-argentina-2026",
    topicTrack: "agendas-online",
    title: "Cómo reducir el ausentismo en clínicas y consultorios",
    description:
      "Turnos vacíos, plata perdida y recordatorios que no alcanzan: caso Caballito 28%→9%, lista de espera y seña, por qué el ausentismo es incentivos y qué hacer cuando el paciente cancela sobre la hora.",
    metaTitle: "Turnos y WhatsApp: reducir ausentismo en clínicas Argentina 2026",
    metaDescription:
      "Ausentismo en clínicas Argentina, sistema de turnos online y recordatorios por WhatsApp: cancelaciones, lista de espera, seña y ocupación de agenda sin depender solo del bot.",
    metaKeywords: [
      "ausentismo clínicas",
      "turnos WhatsApp",
      "recordatorios pacientes",
      "lista de espera turnos",
      "seña consultorio",
      "agenda médica Argentina",
    ],
    publishedAt: "2026-05-02",
    category: "Turnos, clínicas y WhatsApp",
    relatedPost: {
      slug: "turnos-online-whatsapp-reservas-negocio",
      title:
        "Cómo automatizar reservas y turnos por WhatsApp sin perder clientes fuera de horario",
      description: "Enfoque comercial: agenda online con WhatsApp, reservas automáticas y negocios de servicios.",
    },
    resourceLinks: [
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/aplicaciones-moviles", label: "Software para clínicas" },
      { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "Reservas por WhatsApp (negocios de servicios)" },
      { href: "/proyectos/cogniare-gestion-clinicas", label: "Caso: gestión en clínicas" },
    ],
    closingCta: {
      headline: "¿Muchos huecos en la agenda o cancelaciones a último momento?",
      supporting:
        "Si tu clínica ya tiene problemas de ausentismo, cancelaciones sobre la hora o demasiada carga manual para reorganizar turnos, muchas veces se pueden ordenar reglas y automatizar partes del proceso sin volver más compleja la operación. Escribime y lo vemos con números reales de tu consultorio.",
    },
    content: [
      {
        type: "paragraph",
        segments: [
          "Uno de los problemas más caros en clínicas y consultorios no siempre se ve en el balance: los turnos vacíos. No es solo ‘un paciente que no vino’: es tiempo perdido, profesional con espacio muerto, recepción rearmando la agenda a las apuradas y horas que ya no se pueden volver a vender. Muchas clínicas hoy buscan implementar sistemas de turnos online o automatizar recordatorios por WhatsApp para bajar ausencias y mejorar la ocupación; está bien. El riesgo es creer que el único problema es que ‘no le avisamos suficiente’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "En la práctica, muchas veces el paciente sí recibe mensajes… pero igual queda un hueco. Porque un aviso solo casi nunca alcanza si no hay política clara de cancelación, ventana para reaccionar y algo que haga con el horario liberado. Reducir ausentismo no es solo tema de tecnología: es de incentivos, de reglas visibles y de qué hace la institución cuando alguien avisa tarde pero avisa.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Trabajé con un consultorio odontológico en Caballito que medía alrededor del 28% de ausentismo. Mandaban varios recordatorios por WhatsApp. Cuando ordenamos los datos, apareció algo importante: una parte grande de los ausentes había avisado con pocas horas de anticipación — pero los espacios quedaban vacíos igual, porque no había lista de espera que entre en juego automáticamente ni reglas claras de anticipación ni seña donde tenía sentido. Ahí se entiende otra cosa: el problema no era solo recordar el turno; era qué hacía la clínica cuando alguien cancelaba. El que avisa dos horas antes te está regalando la oportunidad; si no la usás, perdés vos.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El recordatorio sin política de cancelación es teatro. El bot que solo dice ‘no faltes’ reduce excusas, no ausentismo. Mucha gente cree que con más mensajes se acaba el problema; sin anticipación mínima, lista de espera y —cuando el negocio lo tolera— una seña clara, el canal es decoración. El recordatorio sin reglas es teatro.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Con reglas explícitas, avisos en horario útil y una forma de reasignar, el mismo consultorio bajó a alrededor del 9% en tres meses. No fue ‘más IA’: fue ordenar incentivos y ocupar el hueco. Los sillones vacíos sin recuperar eran, en ese orden de magnitud, varios miles de dólares al mes de producción que no volvía — plata que no aparece en el Excel de ‘recordatorios enviados’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu dolor es estética o gimnasio —donde la seña ya baja el no-show y el drama suele ser otro— leé ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "turnos por WhatsApp en negocios de servicios" },
          ". Acá el foco es consultorio o clínica donde el paciente tiene que poder avisar, cancelar y reprogramar con reglas que recepción pueda defender.",
        ],
      },
      {
        type: "h2",
        id: "situaciones",
        text: "Situaciones que suelen empujar el ausentismo",
      },
      {
        type: "ul",
        items: [
          "Cancelaciones sobre la hora sin mecanismo para ofrecer el lugar a otra persona.",
          "Huecos que quedan vacíos aunque había gente esperando, porque la lista vive en un papel o en la cabeza de una sola persona.",
          "Recepción llamando uno por uno para rellenar agenda en lugar de un flujo repetible.",
          "Profesionales con tramos muertos que podrían haberse ocupado con una política clara.",
          "Pacientes que nunca confirman y el equipo no sabe si asumir ausencia o no.",
          "Varias agendas distintas conviviendo: WhatsApp, planilla y sistema dicen cosas distintas.",
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
          "Mandar aviso a la noche suele ser poco útil: la persona no puede actuar con sentido (reprogramar, moverse, liberar el hueco). Lo que más vi funcionar es una ventana por la mañana, cuando alguien puede contestar y recepción puede reaccionar.",
          "Cobrar seña (aunque sea simbólica) suele bajar no-shows más que cinco recordatorios juntos — siempre con transparencia y normativa aplicable.",
          "Tres avisos sin acción concreta (confirmar, cancelar o entrar en lista) solo entrenan al paciente a ignorar el canal.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-flujo",
        text: "Qué tiene que pasar cuando alguien cancela con tiempo",
      },
      {
        type: "paragraph",
        segments: [
          "Cuando alguien cancela un turno y todavía queda margen, el sistema puede —de forma automática— ofrecer ese espacio a otra persona en lista de espera: se libera el horario, otra persona recibe un mensaje por WhatsApp (o el canal que uses), confirma, y el hueco vuelve a ocuparse. El objetivo no es mandar más mensajes: es que el horario no quede vacío. Sin ese encadenamiento, el cancelado es pérdida aunque el paciente haya avisado bien.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Eso se apoya en reglas y datos ordenados, no en magia del chat. La parte fea de definir prioridades de lista, anticipación mínima y textos la tenés que hacer igual; la tecnología solo no se cansa de aplicarla igual para todos.",
        ],
      },
      {
        type: "h2",
        id: "agenda-unica",
        text: "Una sola agenda y reglas visibles",
      },
      {
        type: "paragraph",
        segments: [
          "Todo lo anterior descansa en ",
          { href: "/sistema-turnos-online", label: "una sola agenda centralizada" },
          " que recepción, profesional y el canal del paciente lean y escriban de la misma forma. Si cada uno mantiene su propio ‘verdadero’, el flujo automático más prolijo del mundo solo empaca el caos.",
        ],
      },
      {
        type: "h2",
        id: "conclusion-clinicas",
        text: "Conclusión",
      },
      {
        type: "paragraph",
        segments: [
          "En consultorio, quien avisa tarde pero avisa merece un sistema que reaccione: lista, seña donde corresponda y reglas que el equipo pueda explicar sin rubor. Si tu dolor es estética o peluquería, el espejo es ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "el post de reservas en negocios de servicios" },
          ". Si tu clínica ya tiene problemas de ausentismo, cancelaciones sobre la hora o demasiada carga manual para reorganizar turnos, muchas veces se pueden automatizar partes del proceso sin volver más compleja la operación: usá el contacto del sitio o el WhatsApp al pie de la página.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Un bot de recordatorios basta para bajar ausentismo?",
            answer:
              "Casi nunca solo. Hacen falta reglas de cancelación, forma de reasignar y, en muchos casos, seña o lista de espera. Sin eso, el bot decora el problema.",
          },
          {
            question: "¿A qué hora conviene el recordatorio?",
            answer:
              "Lo que más vi funcionar es por la mañana, cuando la persona puede confirmar o cancelar y recepción puede mover la agenda. Muy tarde en la noche suele ser ruido.",
          },
          {
            question: "¿Lista de espera automática es difícil de armar?",
            answer:
              "Lo complejo es definir prioridades y políticas. En la práctica es encadenar: cancelación → siguiente en lista → mensaje con opción de confirmar. El chat es solo el tubo.",
          },
          {
            question: "¿Se pueden sacar turnos directamente por WhatsApp?",
            answer:
              "Sí, si el canal escribe en la misma agenda que usa recepción. Si no, tenés dos realidades y peor ausentismo encubierto.",
          },
        ],
      },
    ],
  },
  {
    slug: "turnos-online-whatsapp-reservas-negocio",
    topicTrack: "agendas-online",
    title:
      "Cómo automatizar reservas y turnos por WhatsApp sin perder clientes fuera de horario",
    description:
      "Fricción fuera de horario en estética y servicios: Palermo ~40 consultas nocturnas por semana, 30–40% que ya reservó en otro lado si respondés al día siguiente, seña y una sola agenda que sea verdad operativa.",
    metaTitle: "Reservas por WhatsApp y turnos online | Negocios Argentina",
    metaDescription:
      "Muchos negocios buscan automatizar reservas por WhatsApp para no perder clientes fuera de horario y bajar trabajo manual en la agenda. Acá: velocidad, seña, recordatorios y qué ordenar primero.",
    metaKeywords: [
      "reservas WhatsApp",
      "turnos online",
      "agenda online",
      "recordatorios turnos",
      "estética peluquería",
      "confirmación con seña",
    ],
    publishedAt: "2026-04-21",
    category: "Turnos, clínicas y WhatsApp",
    relatedPost: {
      slug: "turnos-whatsapp-ausentismo-clinicas-argentina-2026",
      title: "Cómo reducir el ausentismo en clínicas y consultorios",
      description: "Enfoque en clínicas y consultorios: ausentismo, confirmaciones, lista de espera y agenda.",
    },
    resourceLinks: [
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
      { href: "/blog/turnos-whatsapp-ausentismo-clinicas-argentina-2026", label: "Ausentismo en clínicas y consultorios" },
      { href: "/#proyectos", label: "Casos de éxito" },
    ],
    closingCta: {
      headline: "Si perdés reservas porque contestás tarde o todo pasa por recepción a mano",
      supporting:
        "Cuando la agenda está ordenada y el cliente puede confirmar con seña sin esperar a que alguien lea el chat, el negocio deja de depender tanto de estar enchufado al teléfono todo el día. Si querés revisar números de tu caso, escribime.",
    },
    content: [
      {
        type: "paragraph",
        segments: [
          "En muchos negocios de servicios el problema no es la falta de consultas: es la demora para responder. Estética, peluquerías, gimnasios, centros de belleza: la mayoría de las reservas empieza desde el celular y mucha gente escribe fuera de horario — a las 22, a las 23, incluso de madrugada. Ahí aparece algo muy común: el negocio responde recién al día siguiente.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Hace un tiempo trabajé con un centro de estética en Palermo que medía alrededor de 40 consultas por WhatsApp fuera de horario por semana. Las contestaban al día siguiente; para entonces el 30–40% ya había reservado en otro lado. No porque el servicio fuera malo: porque otro negocio les permitió cerrar más rápido. Son del orden de 12 a 15 clientes perdidos por semana sin que lo veas en un reporte lindo — ‘consultas contestadas’ puede lucir bien mientras la conversión está roja. El cliente no quiere conversar: quiere agendar. Si tu flujo pide ‘mandanos un mensaje y te confirmamos’, perdiste antes de empezar.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si el ticket promedio ronda USD 80 y perdés ~12 turnos por semana por latencia, estás hablando de decenas de miles de USD al año en demanda que nunca entró a tu agenda. WhatsApp es donde están los clientes, pero no siempre es donde quieren cerrar: ahí entra un link de reserva o de seña que no dependa de que recepción esté despierta.",
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
        id: "problemas-comunes",
        text: "Problemas comunes que suelen aparecer",
      },
      {
        type: "ul",
        items: [
          "Mensajes fuera de horario que nadie responde a tiempo.",
          "Clientes preguntando disponibilidad a mano en cada ida y vuelta.",
          "Reservas tomadas ‘por chat’ sin bloquear horario real en la agenda.",
          "Turnos duplicados o huecos que se pelean entre recepción y WhatsApp.",
          "Recepción revisando WhatsApp todo el día para no ‘perderse’ un mensaje.",
          "Clientes que creen que reservaron pero nunca quedaron agendados.",
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
          "La ventana de oro para responder un lead caliente es minutos, no horas: después de ~5 minutos la conversión cae brutalmente (del orden de 50% menos en lo que vi en campañas similares).",
          "Un flujo en WhatsApp que solo charla sin reservar horario real en la agenda única acelera el caos: el cliente cree que reservó y el sillón sigue libre para otro.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Primero que el calendario sea verdad: ",
          { href: "/sistema-turnos-online", label: "una sola agenda centralizada" },
          " con estados claros; el chat es solo la puerta de entrada.",
        ],
      },
      {
        type: "h2",
        id: "reserva-automatica",
        text: "Cómo suele funcionar una reserva automática",
      },
      {
        type: "paragraph",
        segments: [
          "El esquema más habitual es simple: el cliente elige un horario que está realmente disponible, recibe un link para dejar una seña (en Argentina suele ser Mercado Pago u otra pasarela que ya use el negocio), y cuando el pago se acredita el turno queda reservado en el sistema y se disparan recordatorios. El objetivo no es ‘hablar más por WhatsApp’: es que la reserva quede confirmada sin depender de que alguien lea el chat a mano.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Sin ese paso de confirmación con seña (o con reglas equivalentes), el ‘sí’ en el chat no es compromiso: es intención. Integrar pagos y mensajes tiene sentido cuando detrás hay una agenda única; si no, solo movés el cuello de botella.",
        ],
      },
      {
        type: "h2",
        id: "seña-recordatorio",
        text: "Seña > recordatorio",
      },
      {
        type: "paragraph",
        segments: [
          "Cobrá seña donde el mercado lo tolera y mandá recordatorios cortos; pero nada de eso compensa una agenda que no refleja la realidad. Cuando la agenda está bien organizada y las reservas pueden confirmarse solas, el negocio deja de depender de que alguien esté pendiente del teléfono todo el día. El cliente no quiere conversar: quiere agendar. Para presupuesto o revisión de flujo usá el contacto del sitio o el WhatsApp al pie de la página.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿WhatsApp alcanza para reservar?",
            answer:
              "Sirve como entrada, pero el cierre conviene apoyarlo en link de agenda o de seña. Si todo pasa por ‘te confirmamos mañana’, perdés a quien ya está reservando en otro lado a las 23 hs.",
          },
          {
            question: "¿Mercado Pago es obligatorio?",
            answer:
              "No: es el patrón más común en Argentina para seña. Lo importante es que haya confirmación mediante seña (o regla clara equivalente) antes de bloquear el horario.",
          },
          {
            question: "¿Necesito IA?",
            answer:
              "Casi nunca para el primer paso: menús claros, horarios realmente disponibles y pago o confirmación resuelven el grueso. IA entra cuando medís preguntas que no entran en caja.",
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
