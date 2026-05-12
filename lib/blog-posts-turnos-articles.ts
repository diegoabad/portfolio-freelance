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
      "Caso de estética con doble agenda, por qué el bot sin calendario real empeora el no-show, flujo mínimo de reserva y qué medir antes de pagar integraciones.",
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
          "Un centro de estética en Córdoba me mostró tres capturas del mismo día: la agenda del software, un grupo de WhatsApp con la dueña pidiendo ‘quién puede a las 17’ y un papel en recepción tachado a mano. Cuando sumamos cuántos turnos se pisaban por mes, no eran ‘unos pocos’: eran ~14% de los slots con doble asignación o huecos fantasmas.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Ahí el problema no era ‘falta de bot’: era falta de ",
          { href: "/sistema-turnos-online", label: "una sola agenda fuente de verdad" },
          ". Un bot que lee slots de una API y escribe reservas en la misma base baja el caos; un bot que solo manda texto bonito sin bloquear el horario multiplica el desorden.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu dolor es clínico (recordatorios, ausentismo, reglas médicas), leé ",
          { href: "/blog/turnos-whatsapp-ausentismo-clinicas-argentina-2026", label: "turnos y ausentismo en consultorios" },
          ". Acá el foco es negocio de servicios: estética, gimnasio, peluquería, profesional independiente — donde el cliente quiere reservar a las 22 hs sin llamar.",
        ],
      },
      { type: "h2", id: "como-funcionan", text: "Cómo funcionan los turnos por WhatsApp sin mentirte" },
      {
        type: "paragraph",
        segments: [
          "Flujo mínimo que funciona: el cliente pide disponibilidad → el sistema consulta slots reales → elige → recibe confirmación con política de cancelación en dos líneas → 24 h antes un mensaje corto con SI/NO. Todo eso es máquina de estados + plantillas; no hace falta modelo de lenguaje para el 80% de los casos.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si querés ofertas o upsell en el mismo canal, sumalo después de que la reserva sea estable. Primero que no se caiga el calendario; después marketing.",
        ],
      },
      {
        type: "h2",
        id: "bot-agenda",
        text: "Bot + agenda: la única combinación que cuenta",
      },
      {
        type: "paragraph",
        segments: [
          "Un ",
          { href: "/bots-whatsapp", label: "bot de WhatsApp" },
          " que no escribe en la misma base que recepción es un altavoz suelto. La integración real es: mismo `appointment_id`, mismos estados, mismos bloqueos de recurso (sillón, cabina, profesional). Si no tenés eso, no automatizás: solo acelerás el quilombo.",
        ],
      },
      { type: "h2", id: "reducir-cancelaciones", text: "No-shows: qué sí baja números" },
      {
        type: "paragraph",
        segments: [
          "Mensaje largo con cinco párrafos = nadie lo lee en el ascensor. Aviso corto + confirmación en un toque + política visible antes de reservar suele bajar ausencias más que ‘recordatorio inteligente’ sin métrica. Medí: % confirmados y huecos liberados con más de 12 h de anticipación.",
        ],
      },
      {
        type: "h2",
        id: "antes-implementar",
        text: "Antes de firmar con nadie",
      },
      {
        type: "ul",
        items: [
          "¿Quién es dueño del calendario cuando hay conflicto: WhatsApp, recepción o el profesional?",
          "¿Qué pasa si el cliente escribe ‘me cancelo’ fuera de horario? ¿El sistema libera el slot solo o pasa a humano?",
          "¿Cuántos mensajes por día estimás? Ahí definís plantillas vs conversación libre.",
        ],
      },
      {
        type: "h2",
        id: "costo-argentina",
        text: "Sobre precio (sin tablas mágicas)",
      },
      {
        type: "paragraph",
        segments: [
          "Una sola sede con una cabina y reglas simples no paga lo mismo que multi-sede con comisiones por profesional. Lo que sí puedo decir sin ver tu caso: si el presupuesto no incluye prueba de carga humana (recepción usando el sistema dos semanas), vas a pagar dos veces.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para presupuesto o revisión de flujo: ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_TURNOS, label: "WhatsApp", external: true },
          ".",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Se pueden sacar turnos por WhatsApp?",
            answer:
              "Sí, si el bot consulta y escribe en la misma agenda que usa el negocio. Si no, solo movés el caos de voz a chat.",
          },
          {
            question: "¿Sirve para peluquería o gimnasio?",
            answer:
              "Sí: donde hay cupos, recursos y cancelaciones frecuentes, la automatización bien acotada recupera tiempo y huecos.",
          },
          {
            question: "¿Necesito IA?",
            answer:
              "Casi nunca para el primer release. Menús y estados resuelven la mayoría; la IA entra cuando ya medís qué preguntas no entran en caja.",
          },
          {
            question: "¿Qué ventaja tiene una agenda online?",
            answer:
              "Historial, reglas aplicadas igual para todos y menos ‘¿me guardaste el lugar por privado?’.",
          },
        ],
      },
    ],
  },
];
