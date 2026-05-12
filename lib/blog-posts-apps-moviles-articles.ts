import type { BlogPost } from "@/lib/blog-types";
import { whatsAppHref } from "@/lib/contact";

const WA_APPS = whatsAppHref(
  "Hola Diego, leí el blog sobre apps móviles para clínicas. Quiero consultar por desarrollo / presupuesto.",
);

/** Blog: aplicaciones móviles para clínicas y salud. */
export const appsMovilesBlogArticles: BlogPost[] = [
  {
    slug: "aplicaciones-moviles-clinicas-consultorios-experiencia-paciente-2026",
    topicTrack: "apps-moviles",
    title:
      "Aplicaciones móviles para clínicas y consultorios: cómo mejorar la experiencia del paciente en 2026",
    description:
      "Consultorio donde el 60% de los pacientes no descargaba el PDF del portal; por qué la app falla si el backend sigue en Excel; qué función conviene en MVP y qué dejar para v2.",
    metaTitle: "Apps para clínicas y consultorios | Experiencia del paciente 2026 Argentina",
    metaDescription:
      "Aplicación móvil para clínicas, app para consultorios médicos y desarrollo de apps para clínicas en Argentina: turnos, pacientes, notificaciones e integración con agenda y WhatsApp.",
    publishedAt: "2026-04-24",
    category: "Apps móviles y salud",
    relatedPost: {
      slug: "desarrollo-aplicaciones-moviles-clinicas-beneficios-ejemplos",
      title:
        "Desarrollo de aplicaciones móviles para clínicas: beneficios, funciones y ejemplos reales",
      description: "Enfoque en beneficios, portal de pacientes, IA y nativa vs multiplataforma.",
    },
    resourceLinks: [
      { href: "/software-para-clinicas", label: "Aplicaciones móviles (servicio)" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
      { href: "/desarrollo-software-medida", label: "Software a medida" },
      { href: "/blog/desarrollo-aplicaciones-moviles-clinicas-beneficios-ejemplos", label: "Blog: desarrollo y stack" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_APPS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Una clínica me pasó analytics del ‘portal del paciente’: sesiones cortas, 60% abandonaba en la pantalla del PDF de indicaciones. No era diseño feo: era fricción real — nadie quiere hacer zoom a un A4 en el bondi. Ahí una ",
          { href: "/software-para-clinicas", label: "app nativa o multiplataforma" },
          " con la misma info en pantallas chicas y notificación push dejó de ser capricho y pasó a ser accesibilidad operativa.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Lo que no te venden en el pitch: si el backend sigue siendo Excel + mail, la app solo empaqueta el caos. La app brilla cuando turnos, estudios permitidos y avisos leen de la misma API que ya usa recepción — no de un archivo que ‘sube Mariana los viernes’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para decisiones de stack y roadmap comercial, está el post hermano ",
          {
            href: "/blog/desarrollo-aplicaciones-moviles-clinicas-beneficios-ejemplos",
            label: "desarrollo de apps para clínicas: beneficios y ejemplos",
          },
          ".",
        ],
      },
      { type: "h2", id: "por-que-app", text: "¿Para qué sirve una app en salud hoy?" },
      {
        type: "paragraph",
        segments: [
          "No es reemplazar al médico por chat: es sacar del teléfono fijo y del ‘te paso el link por WhatsApp’ las cosas repetibles — ",
          { href: "/sistema-turnos-online", label: "reprogramar un turno" },
          ", ver estado de un estudio si la política lo permite, leer indicaciones en texto legible, recibir aviso de que el profesional se retrasó 20 minutos. Cada función tiene que justificar menos llamadas a recepción; si no, es brochure digital.",
        ],
      },
      { type: "h2", id: "mvp", text: "MVP que sí se usa (y no es lista infinita)" },
      {
        type: "ul",
        items: [
          "Login + perfil mínimo y política de datos visible.",
          "Turnos contra la misma base que el calendario interno.",
          "Notificaciones transaccionales (confirmación, cambio, recordatorio) — no spam de marketing.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Segundo release: lo que pida tu compliance (documentos firmados, adjuntos, etc.). Primero que el paciente no tenga que llamarte para lo obvio.",
        ],
      },
      { type: "h2", id: "comunicacion", text: "Convivencia con WhatsApp" },
      {
        type: "paragraph",
        segments: [
          "El paciente va a seguir escribiendo al número conocido. La app y ",
          { href: "/bots-whatsapp", label: "WhatsApp" },
          " tienen que convivir: deep links, mismo paciente_id, handoff cuando el bot no alcanza. Si compiten sin integración, duplicás conversaciones y nadie sabe qué quedó vigente.",
        ],
      },
      { type: "h2", id: "a-medida", text: "¿A medida desde el día uno?" },
      {
        type: "paragraph",
        segments: [
          "Solo si ya tenés claros roles, datos sensibles y una API mínima. Si no, antes conviene ",
          { href: "/desarrollo-software-medida", label: "ordenar dominio y endpoints" },
          " que lanzar binarios a las tiendas. Una app mal alimentada es peor que un buen flujo web responsive conectado bien.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "La experiencia del paciente en 2026 es celular + expectativa de respuesta rápida. Si la institución no puede sostener datos detrás, no arregla una app; si puede, el canal móvil destraba recepción de verdad.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para alcance: ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_APPS, label: "WhatsApp", external: true },
          ".",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué va primero en una app de clínica?",
            answer:
              "Lo que más llame genera: turnos y avisos transaccionales conectados a la agenda real. El resto se prioriza con métricas de soporte (cuántas llamadas caen por semana por tema X).",
          },
          {
            question: "¿Hace falta publicar en App Store el día uno?",
            answer:
              "Depende del público; a veces un PWA bien hecho alcanza para validar. Si necesitás push iOS o integraciones nativas, el store entra al plan.",
          },
          {
            question: "¿Las apps reemplazan la historia clínica?",
            answer:
              "No por defecto: exponen lo que normativa y consentimiento permitan; lo sensible sigue en el sistema de registro clínico con permisos fuertes.",
          },
        ],
      },
    ],
  },
  {
    slug: "desarrollo-aplicaciones-moviles-clinicas-beneficios-ejemplos",
    topicTrack: "apps-moviles",
    title: "Desarrollo de aplicaciones móviles para clínicas: beneficios, funciones y ejemplos reales",
    description:
      "Qué entra en un portal de pacientes serio, cuándo Flutter vs nativo, IA solo para back-office acotado y checklist de integraciones antes de pedir presupuesto.",
    metaTitle: "Desarrollo de apps para clínicas | Beneficios y ejemplos Argentina",
    metaDescription:
      "Desarrollo de apps para clínicas, aplicaciones móviles para salud y app para pacientes en Argentina: funciones, beneficios, IA, multiplataforma y enlaces a servicios del sitio.",
    publishedAt: "2026-05-05",
    category: "Apps móviles y salud",
    relatedPost: {
      slug: "aplicaciones-moviles-clinicas-consultorios-experiencia-paciente-2026",
      title:
        "Aplicaciones móviles para clínicas y consultorios: cómo mejorar la experiencia del paciente en 2026",
      description: "Enfoque en experiencia del paciente, funciones típicas y automatización.",
    },
    resourceLinks: [
      { href: "/software-para-clinicas", label: "Desarrollo de aplicaciones móviles" },
      { href: "/sistema-turnos-online", label: "Turnos online" },
      { href: "/bots-whatsapp", label: "Bots de WhatsApp" },
      { href: "/automatizacion-procesos-clinicas", label: "Automatización" },
      { href: "/blog/aplicaciones-moviles-clinicas-consultorios-experiencia-paciente-2026", label: "Blog: experiencia del paciente" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_APPS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "En un laboratorio chico el ‘portal’ era un sitio responsive que nadie del equipo actualizaba: los resultados ‘llegaban cuando llegaban’ por mail. Cuando definimos qué iba en la ",
          { href: "/software-para-clinicas", label: "app de pacientes" },
          " (solo estados + PDF cuando el LIS ya cerró el caso), el soporte telefónico bajó porque la gente dejó de llamar para ‘ver si ya está’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El otro post del blog va a ",
          {
            href: "/blog/aplicaciones-moviles-clinicas-consultorios-experiencia-paciente-2026",
            label: "experiencia del paciente y MVP",
          },
          ". Acá meto mano a stack, integraciones y dónde meto IA sin meterme en quilombos legales.",
        ],
      },
      { type: "h2", id: "que-puede", text: "Qué puede hacer la app sin ser un mini-EMR" },
      {
        type: "paragraph",
        segments: [
          "Portal serio = identidad + permisos + catálogo de acciones permitidas (turnos, pagos si aplica, descargas). La historia clínica completa suele quedarse en el sistema de registro; la app muestra vistas acotadas que vienen de la API, no copia pegada de PDFs.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Turnos: siempre contra ",
          { href: "/sistema-turnos-online", label: "agenda online" },
          " con locks reales. Notificaciones: push transaccional, no newsletter disfrazado. Complemento: ",
          { href: "/bots-whatsapp", label: "WhatsApp" },
          " para primer contacto y deep link a la app cuando hace falta contexto persistente.",
        ],
      },
      { type: "h2", id: "integracion", text: "Integración: checklist antes de pedir presupuesto" },
      {
        type: "ul",
        items: [
          "¿Tenés API del sistema actual o solo exportaciones CSV los viernes?",
          "¿Quién es dueño del paciente_id entre laboratorio, clínica y facturador?",
          "¿Qué pasa offline? (hint: no mentir; mostrar último estado cacheado con timestamp).",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si el cruce es feo pero repetible, a veces entra ",
          { href: "/automatizacion-procesos-clinicas", label: "automatización" },
          " entre legacy y bus de eventos antes de tocar UI móvil.",
        ],
      },
      { type: "h2", id: "ia", text: "IA en apps de salud (sin humo)" },
      {
        type: "paragraph",
        segments: [
          "Uso que sí vi: resumir texto administrativo ya humano-validado, clasificar tickets de soporte, extraer campos de formularios. Uso que no prometo: diagnóstico por chat libre. Si tu vendor te vende lo segundo sin gobernanza, corrés.",
        ],
      },
      { type: "h2", id: "nativa-multi", text: "Flutter / multiplataforma vs nativo" },
      {
        type: "paragraph",
        segments: [
          "Multiplataforma gana cuando el 80% es formularios, listas y notificaciones y no necesitás BLE raro ni cámara clínica custom. Nativo gana cuando el performance o SDK del fabricante es crítico. La decisión sale de medir pantallas críticas, no del logo del framework.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Una app de clínica es frente fino sobre datos feos si no invertís en modelo y API. Arreglá primero el flujo de datos; después peleá por sombras y animaciones.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para presupuesto: ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_APPS, label: "WhatsApp", external: true },
          ".",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué funciones puede tener una app para clínicas?",
            answer:
              "Las que tu API pueda sostener con permisos claros: turnos, estados de estudios, documentación permitida y avisos operativos suelen ir primero.",
          },
          {
            question: "¿Conviene desarrollar una aplicación médica a medida?",
            answer:
              "Cuando el genérico no cubre integraciones o reglas; si el dolor es solo de notificaciones, a veces alcanza mejorar backend + web responsive.",
          },
          {
            question: "¿Las apps reducen carga administrativa?",
            answer:
              "Sí si autogestión reemplaza llamadas repetidas; no si solo duplicás lo que ya está en el sitio mal conectado.",
          },
          {
            question: "¿Qué clínicas suelen publicar app?",
            answer:
              "Las que ya tienen volumen de pacientes recurrentes y datos digitalizados — no como primer paso de digitalización.",
          },
        ],
      },
    ],
  },
];
