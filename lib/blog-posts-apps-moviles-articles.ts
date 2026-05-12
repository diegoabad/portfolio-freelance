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
      { href: "/software-para-clinicas", label: "Software para clínicas" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_APPS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Una clínica me pasó analytics del ‘portal del paciente’: sesiones cortas, 60% abandonaba en la pantalla del PDF de indicaciones. No era diseño feo: era fricción real — nadie quiere hacer zoom a un A4 en el bondi. Ahí una app con la misma información en pantallas chicas y notificación push dejó de ser capricho y pasó a ser accesibilidad operativa, siempre que detrás haya datos vivos y no un archivo que ‘sube alguien los viernes’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Lo que no te venden en el pitch: si el backend sigue siendo Excel + mail, publicar en las tiendas solo empaqueta el caos. La app rinde cuando turnos, estudios permitidos y avisos leen de la misma API que ya usa recepción.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para stack, integraciones y dónde meter IA sin prometer milagros, está el post ",
          {
            href: "/blog/desarrollo-aplicaciones-moviles-clinicas-beneficios-ejemplos",
            label: "desarrollo de apps para clínicas: beneficios y ejemplos",
          },
          ". Acá me quedo en experiencia del paciente y en qué pedirle al proveedor sin humo.",
        ],
      },
      { type: "h2", id: "por-que-app", text: "¿Para qué sirve una app en salud hoy?" },
      {
        type: "paragraph",
        segments: [
          "No es reemplazar al médico por chat: es sacar del teléfono fijo y del ‘te paso el link por WhatsApp’ las cosas repetibles — reprogramar un turno contra la misma base que el calendario interno, ver estado de un estudio si la política lo permite, leer indicaciones en texto legible, avisar que el profesional se retrasó 20 minutos. Cada función tiene que bajar llamadas medibles a recepción; si no, es brochure digital.",
        ],
      },
      { type: "h2", id: "mvp", text: "MVP que sí se usa" },
      {
        type: "paragraph",
        segments: [
          "Login mínimo y política de datos visible; turnos y cambios con notificaciones transaccionales (confirmación, cambio, recordatorio), no newsletter disfrazado. Segundo release: lo que exija compliance. Primero que el paciente no tenga que llamarte para lo obvio.",
        ],
      },
      { type: "h2", id: "comunicacion", text: "Convivencia con WhatsApp" },
      {
        type: "paragraph",
        segments: [
          "El paciente va a seguir escribiendo al número conocido. La app y WhatsApp tienen que convivir con el mismo paciente_id, deep links y handoff cuando el flujo automático no alcanza. Si compiten sin integración, duplicás conversaciones y nadie sabe qué quedó vigente.",
        ],
      },
      { type: "h2", id: "a-medida", text: "¿A medida desde el día uno?" },
      {
        type: "paragraph",
        segments: [
          "Solo si ya tenés roles, datos sensibles y una API mínima. Si no, antes conviene ordenar dominio y endpoints que lanzar binarios a las tiendas. Una app mal alimentada es peor que un buen flujo web responsive conectado bien.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "La experiencia del paciente en 2026 es celular + expectativa de respuesta rápida. Si la institución no puede sostener datos detrás, no arregla una app; si puede, el canal móvil destraba recepción de verdad. Para alcance usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué va primero en una app de clínica?",
            answer:
              "Turnos y avisos transaccionales conectados a la agenda real. El resto se prioriza con métricas de soporte (cuántas llamadas por semana por tema X).",
          },
          {
            question: "¿Hace falta publicar en App Store el día uno?",
            answer:
              "Depende del público; a veces un PWA bien hecho alcanza para validar. Si necesitás push iOS o integraciones nativas, el store entra al plan.",
          },
          {
            question: "¿Las apps reemplazan la historia clínica?",
            answer:
              "No por defecto: exponen lo que normativa y consentimiento permitan; lo sensible sigue en el sistema de registro con permisos fuertes.",
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
      "El 80% de las clínicas que piden app nativa no la necesitan: caso Belgrano (90% mobile, uso cada 2 meses), PWA vs React Native vs nativo, costos típicos y ‘lo que no te dicen’ de App Store y push en iOS.",
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
      { href: "/software-para-clinicas", label: "Software para clínicas" },
      { href: "/sistema-turnos-online", label: "Sistema de turnos online" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_APPS, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "En la práctica, el 80% de las clínicas que me piden ‘una app’ no necesitan app nativa en tiendas: necesitan una web responsive bien hecha o un PWA. La app nativa tiene sentido para casos muy específicos (integración profunda con hardware, HealthKit, BLE, performance crítico offline). Para portal de pacientes, turnos y avisos, el PWA bien hecho gana nueve de cada diez veces a la nativa — mismo usuario, menos fricción de instalación.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Una clínica de neurología en Belgrano me pidió app. En analytics, ~90% del tráfico al portal era mobile pero el paciente entraba en promedio una vez cada dos meses. Nadie instala una app para usarla seis veces al año. App Store está saturada — tu clínica no es Instagram. Armamos un PWA que abre desde un link de WhatsApp y resolvió el caso por una fracción del presupuesto de nativa. Orden de magnitud que suelo ver en presupuestos en Argentina: nativa iOS+Android USD 6–12k; PWA equivalente funcional USD 1,5–3k. La tasa de instalación de apps de clínicas en población elegible suele quedar en 10–15%; el resto queda en la web aunque ‘tengan app’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El otro post del blog cubre ",
          {
            href: "/blog/aplicaciones-moviles-clinicas-consultorios-experiencia-paciente-2026",
            label: "experiencia del paciente y qué entra en un MVP",
          },
          ". Acá el foco es nativa vs PWA y costos ocultos de las tiendas.",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen de publicar en tiendas",
      },
      {
        type: "ul",
        items: [
          "Apple cobra programa de desarrollador (del orden de USD 99/año) y las compras in-app pasan por comisión de plataforma (históricamente hasta ~30% según categoría — revisá términos vigentes).",
          "Cada release en iOS puede pasar por revisión de Apple (típico de 1 a varios días hábiles): no es deploy instantáneo como en web.",
          "Mantener iOS + Android + web son tres superficies de producto, no una: triplicás bugs, releases y soporte.",
          "Los push en iOS requieren permiso explícito; la mayoría no lo concede salvo que el valor sea obvio. Mail y WhatsApp transaccional suelen superar a ‘push de marketing’ en clínicas.",
        ],
      },
      {
        type: "h2",
        id: "tabla",
        text: "PWA vs React Native vs nativo (resumen)",
      },
      {
        type: "code",
        code: `| Criterio              | PWA / web app       | React Native        | Nativo iOS/Android   |
|-----------------------|---------------------|---------------------|----------------------|
| Instalación           | Link / “Agregar”  | Store               | Store                |
| Actualizaciones       | Inmediata           | Build + store       | Build + store        |
| Push notifications    | Android OK; iOS limitado / vía web push según plataforma | Sí con config       | Sí                   |
| Integración hardware  | Limitada            | Media-alta          | Máxima               |
| Costo típico clínica  | Bajo                | Medio               | Alto                 |
| Cuándo                | Turnos, resultados, forms | App field + APIs | HealthKit, BLE, performance crítico |`,
      },
      {
        type: "h2",
        id: "que-puede",
        text: "Qué puede hacer el frente sin ser un mini-EMR",
      },
      {
        type: "paragraph",
        segments: [
          "Portal serio = identidad + permisos + catálogo de acciones permitidas (turnos, pagos si aplica, descargas). La historia clínica completa suele quedarse en el sistema de registro; el frente muestra vistas acotadas desde la API. Turnos: siempre contra ",
          { href: "/sistema-turnos-online", label: "agenda con locks reales" },
          ". Nadie instala una app para usarla seis veces al año: diseñá para eso.",
        ],
      },
      { type: "h2", id: "integracion", text: "Integración: checklist antes de pedir presupuesto" },
      {
        type: "ul",
        items: [
          "¿Tenés API del sistema actual o solo CSV los viernes?",
          "¿Quién es dueño del paciente_id entre laboratorio, clínica y facturador?",
          "¿Qué mostrás offline? (hint: último estado cacheado con timestamp, sin inventar datos nuevos).",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si el cruce es feo pero repetible, a veces conviene primero ordenar bus de eventos o jobs entre legacy y base nueva antes de invertir en sombras y animaciones en la tienda de apps.",
        ],
      },
      { type: "h2", id: "ia", text: "IA en apps de salud (sin humo)" },
      {
        type: "paragraph",
        segments: [
          "Casos que sí vi: resumir texto administrativo ya validado por humano, clasificar tickets de soporte, extraer campos de formularios. Lo que no prometo: diagnóstico libre. Si un vendor te vende lo segundo sin gobernanza, corrés riesgo legal y de reputación.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Un frente de clínica es capa fina sobre datos ordenados. Si el modelo y los endpoints no están, publicar en las tiendas solo empaqueta el caos. Para presupuesto usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles abajo.",
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
