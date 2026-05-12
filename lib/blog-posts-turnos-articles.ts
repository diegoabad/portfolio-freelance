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
          "Me escribió quien administra un consultorio por Belgrano: agenda en papel alineada con el grupo de WhatsApp, y aun así huecos vacíos y pacientes que juraban no haber visto el aviso. El patrón no es mala fe: es doble registro, mensajes largos que nadie termina de leer y cero confirmación explícita.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Antes de tocar código pido cuántos turnos caen por mes y cuántos no aparecen. En un caso parecido, al pasar a ",
          { href: "/sistema-turnos-online", label: "una sola agenda con confirmación por WhatsApp" },
          " (avisos 24 h, texto corto, SI/NO), el ausentismo bajó de ~22% a ~11% en seis semanas. No hubo modelo de lenguaje: hubo una fila de verdad en la base y reglas de cancelación visibles antes del turno.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Cuando el dolor es estética, gimnasio o peluquería —donde el cliente reserva a las 22 hs sin llamar— el espejo útil es el post sobre ",
          { href: "/blog/turnos-online-whatsapp-reservas-negocio", label: "turnos por WhatsApp en negocios de servicios" },
          ". En consultorios el drama suele ser agenda desincronizada; un bot sin políticas solo acelera el quilombo.",
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
          "Recepción carga a mano y el paciente también reserva por chat: doble libro, discusiones internas y números que no cierran.",
          "Recordatorio sin acción clara (responder una palabra o tocar un botón) es casi decoración: se ignora en el ascensor.",
          "Párrafos largos en plantilla: en mobile no se leen; peor que nada porque generás la sensación de spam.",
          "Política de cancelación enterrada en un PDF: bronca de último minuto y más no-shows.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-flujo",
        text: "Flujo mínimo que sí baja no-shows",
      },
      {
        type: "paragraph",
        segments: [
          "24 h antes: hora, profesional, dirección, y dos salidas (SI / NO). En base eso es un estado confirmado o un slot liberado con tiempo para reasignar. No hace falta IA: hace falta que WhatsApp sea solo el tubo y la agenda la única fuente de verdad.",
        ],
      },
      {
        type: "h2",
        id: "por-que-ausentismo",
        text: "Por qué falla aunque “mandemos recordatorio”",
      },
      {
        type: "paragraph",
        segments: [
          "Olvido existe, pero en consultorios lo que más veo es fricción: cambio de horario que quedó en un hilo distinto, cancelar que requiere llamar en horario de recepción, o tres versiones de la agenda según quién contestó el teléfono. El paciente no ‘no quiere’: no puede coordinar sin esfuerzo.",
        ],
      },
      {
        type: "h2",
        id: "como-ayuda",
        text: "Qué cambia con turnos online bien armados",
      },
      {
        type: "paragraph",
        segments: [
          "Avisos programados con datos concretos del turno y ubicación, sin sumar trabajo manual a recepción. Confirmación y cancelación desde el mismo número que el paciente ya usa, siempre dentro de reglas que definís en el sistema — no ‘a criterio del mensaje libre’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Recepción deja de ser contestador de lo repetible: el canal queda para excepciones y para casos que necesitan criterio humano. El software centralizado evita la planilla paralela que nadie actualiza los viernes.",
        ],
      },
      {
        type: "h2",
        id: "integracion-agenda-bot",
        text: "Agenda, bot e IA (en ese orden)",
      },
      {
        type: "paragraph",
        segments: [
          "Primero movimientos de estado claros y lectura/escritura en la misma base. Después, si el volumen lo justifica, un bot que liste slots reales o confirme con plantillas. La IA entra cuando ya medís qué preguntas no entran en menú; si el equipo no puede escribir en una hoja qué debe responder el canal, un modelo grande solo encarece el desorden.",
        ],
      },
      { type: "h2", id: "ia", text: "¿Conviene integrar inteligencia artificial?" },
      {
        type: "paragraph",
        segments: [
          "Sí cuando hay variación real de lenguaje y gobernanza de respuestas. No como parche el día uno si todavía hay dos agendas vivas. En ese escenario, ‘IA’ es marketing; lo que falta es disciplina de datos.",
        ],
      },
      { type: "h2", id: "conclusion-clinicas", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Un canal de WhatsApp acotado sobre agenda única suele rendir más que la feature de moda. Si querés revisar números concretos de tu consultorio, usá el contacto del sitio o el enlace de WhatsApp en la caja de enlaces útiles más abajo.",
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
          ". Un flujo que lee slots reales y escribe en la misma base baja el caos; un chat que solo manda texto bonito sin bloquear el recurso multiplica el desorden.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu dolor es clínico (recordatorios, ausentismo, reglas médicas), el artículo sobre ",
          { href: "/blog/turnos-whatsapp-ausentismo-clinicas-argentina-2026", label: "ausentismo en consultorios y agenda única" },
          " va al hueso. Acá el foco es negocio de servicios: estética, gimnasio, peluquería, profesional independiente — donde el cliente quiere reservar a las 22 hs sin llamar.",
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
          "Un bot de WhatsApp que no escribe en la misma base que recepción es un altavoz suelto. La integración real es: mismo `appointment_id`, mismos estados, mismos bloqueos de recurso (sillón, cabina, profesional). Si no tenés eso, no automatizás: solo acelerás el quilombo.",
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
          "Para presupuesto o revisión de flujo usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
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
