import type { BlogPost } from "@/lib/blog-types";
import { whatsAppHref } from "@/lib/contact";

const WA_MEDIDA = whatsAppHref(
  "Hola Diego, leí el blog sobre software a medida. Quiero consultar por un sistema personalizado.",
);

/** Artículos blog: software a medida (clínicas y enfoque comercial). */
export const softwareMedidaBlogArticles: BlogPost[] = [
  {
    slug: "software-a-medida-clinicas-consultorios-sistema-personalizado",
    topicTrack: "software-medida",
    title:
      "Software a medida para clínicas y consultorios: ventajas de desarrollar un sistema personalizado",
    description:
      "Historia de consultorio con tres Excels ‘oficiales’, un número sobre tiempo perdido en cruces de datos, por qué a veces conviene NO comprar el ERP más grande y qué desarrollar primero cuando encarás software a medida en salud.",
    metaTitle: "Software a medida para clínicas y consultorios | Sistema personalizado Argentina",
    metaDescription:
      "Software a medida para clínicas en Argentina: sistema personalizado para consultorios, errores típicos vs paquetes genéricos, integraciones con agenda y WhatsApp y cuándo tiene sentido desarrollar propio.",
    publishedAt: "2026-04-23",
    category: "Software a medida y salud",
    relatedPost: {
      slug: "cuando-conviene-software-a-medida-vs-sistemas-genericos",
      title: "Cuándo conviene desarrollar software a medida en lugar de usar sistemas genéricos",
      description:
        "Señales comerciales y operativas: Excel, integraciones, escalabilidad y cuándo tiene sentido un sistema propio.",
    },
    resourceLinks: [
      { href: "/desarrollo-software-medida", label: "Desarrollo a medida" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_MEDIDA, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "El mes pasado una administrativa de un consultorio multidisciplinario en CABA me mandó captura de tres planillas distintas con ‘la misma’ agenda: una para médicos, otra para facturación y una tercera que inventaron para coordinar por WhatsApp. Cuando fallaba algo, nadie sabía cuál era la verdad.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Les pedí una métrica simple antes de hablar de código: cuántas horas por semana iban a cruces manuales. Salió ~12 entre dos personas solo en conciliar turnos vs cobros. Después de centralizar en un módulo propio mínimo (agenda + estados + export contable), bajaron a ~4 horas en el primer mes — no porque el software sea mágico, sino porque dejaron de mantener tres fuentes.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Sentido común del rubro: ‘compramos el sistema más completo y listo’. Yo invierto la frase: en consultorios medianos el riesgo es pagar diez módulos que nadie usa y seguir con Excel para lo que importa. A medida tiene sentido cuando el proceso es el diferencial, no el logo del proveedor. El marco genérico vs propio está en ",
          {
            href: "/blog/cuando-conviene-software-a-medida-vs-sistemas-genericos",
            label: "cuándo conviene software a medida vs sistema genérico",
          },
          ".",
        ],
      },
      {
        type: "h2",
        id: "errores-comunes",
        text: "Errores comunes al pedir ‘un sistema para la clínica’",
      },
      {
        type: "ul",
        items: [
          "Pedir pantalla para todo el día uno: termina en proyecto eterno y equipo cansado.",
          "Ignorar permisos y auditoría: en salud eso no es ‘detalle legal’, es diseño.",
          "Integrar WhatsApp sin modelo de datos: solo movés el caos al chat.",
          "Confundir ‘personalizado’ con ‘sin especificación’: a medida necesita reglas escritas, no solo buenas intenciones.",
        ],
      },
      {
        type: "h2",
        id: "ejemplo-modelo",
        text: "Modelo mínimo: entidades antes que pantallas",
      },
      {
        type: "paragraph",
        segments: [
          "Pensá `Paciente`, `Profesional`, `Turno` con estados (solicitado / confirmado / atendido / facturado), `Prestación`, movimientos contables. Una API expone `GET /turnos?fecha=&profesional_id=` y `PATCH /turnos/:id`; ",
          { href: "/sistema-turnos-online", label: "la agenda online" },
          " y los canales de mensajería consumen esos mismos endpoints. Si no existe esa capa común, cada canal inventa su versión y volvés al Excel con pasos extra.",
        ],
      },
      {
        type: "h2",
        id: "que-resolver-primero",
        text: "Qué resolver primero (sin catálogo de ‘módulos’)",
      },
      {
        type: "paragraph",
        segments: [
          "Software a medida acá no es un listado de features: es alcance cerrado por etapas sobre lo que el equipo usa todos los días — turnos y excepciones, liquidación real (honorarios, copagos, obras sociales), historias con plantillas y permisos fuertes, paneles que dirección entienda. Los paquetes genéricos suelen inflar menús que recepción ignora; a medida podés mostrar tres botones al administrativo y veinte al médico, no al revés.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Cuando conviven laboratorios, WhatsApp y legados, el valor está en una API común y en jobs entre sistemas, no en reescribir todo el día uno. El primer ROI suele estar en facturación y cruces con agenda, no en el décimo tablero decorativo.",
        ],
      },
      { type: "h2", id: "conviene-2026", text: "¿Conviene en 2026?" },
      {
        type: "paragraph",
        segments: [
          "Conviene cuando el costo del trabajo manual o del desorden ya se ve en plata o en bronca semanal. Muchas clínicas privadas llegan a ese punto antes que multinacionales: pocas personas hacen muchas cosas y Excel no escala.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Alinear proceso y sistema es negociar menos con la realidad. Si tenés números de horas perdidas o errores recurrentes, mandalos por el contacto del sitio o por el WhatsApp de la caja de enlaces útiles más abajo y armamos un alcance que no sea fantasía de PowerPoint.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un software a medida en una clínica?",
            answer:
              "Algo construido alrededor de roles, turnos y cobros con entregas por etapas. Sin procesos escritos, primero hay que ordenarlos.",
          },
          {
            question: "¿Qué ventajas tiene frente a un sistema genérico?",
            answer:
              "Menos menú que nadie usa y reglas que reflejan cómo cobrás de verdad — a cambio de ownership y mantenimiento del producto.",
          },
          {
            question: "¿Conviene desarrollar software propio?",
            answer:
              "Cuando el genérico te obliga a trabajar mal o cuando las planillas ya cuestan más que una primera etapa bien acotada.",
          },
          {
            question: "¿Qué empresas suelen necesitar software a medida?",
            answer:
              "Consultorios y clínicas con reglas propias de liquidación o integraciones que el paquete no prioriza en su roadmap.",
          },
        ],
      },
    ],
  },
  {
    slug: "cuando-conviene-software-a-medida-vs-sistemas-genericos",
    topicTrack: "software-medida",
    title: "Cuándo conviene desarrollar software a medida en lugar de usar sistemas genéricos",
    description:
      "La pregunta no es ‘enlatado vs a medida’ en abstracto: ¿qué proceso es tu diferencial? Caso estudio contable Recoleta, ERP USD 32k + USD 12k/año y tres planillas a los 6 meses, TCO a 36 meses y stack mínimo ~USD 30/mes de infra.",
    metaTitle: "¿Cuándo conviene software a medida? | Argentina vs sistemas genéricos",
    metaDescription:
      "Desarrollo de software a medida Argentina: software personalizado para empresas, sistemas internos, señales de que conviene lo personalizado y cuándo el genérico alcanza. Incluye software para clínicas a medida.",
    publishedAt: "2026-05-04",
    category: "Software a medida",
    relatedPost: {
      slug: "software-a-medida-clinicas-consultorios-sistema-personalizado",
      title:
        "Software a medida para clínicas y consultorios: ventajas de desarrollar un sistema personalizado",
      description: "Enfoque en salud: gestión médica, pacientes, historias y facturación a medida.",
    },
    resourceLinks: [
      { href: "/desarrollo-software-medida", label: "Desarrollo a medida" },
      { href: "/software-para-clinicas", label: "Software para clínicas" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_MEDIDA, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Nadie debería comparar ‘enlatado vs a medida’ en abstracto. La pregunta correcta es: ¿qué proceso de tu negocio es tu diferencial y te hace ganar? Si ese proceso es lo que te diferencia, no podés tercerizarlo a un menú genérico sin pelear — o aceptás el costo de adaptarte al software, o construís la pieza que refleja tus reglas.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Un estudio contable en Recoleta había comprado un ERP de ~USD 4.000 por puesto × 8 puestos ≈ USD 32.000 de setup más ~USD 12.000/año de mantenimiento. A los seis meses tenían tres planillas paralelas porque el ERP no soportaba bien cómo facturaban por especialidad y obra social. Pagaban licencias para no usar el sistema en lo que más importaba. El enlatado es barato hasta que descubrís cómo factura tu obra social; pagar licencias para no usar el sistema es la versión moderna del archivero vacío.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "El enlatado suele ser barato al firmar el contrato y caro cuando descubrís que no se adapta. A medida es al revés: caro al inicio, más barato a 24–36 meses si tu negocio es complejo y el genérico te obliga a Excel paralelo. Si tu mundo es salud, el caso con modelo de datos y Excels paralelos está en ",
          {
            href: "/blog/software-a-medida-clinicas-consultorios-sistema-personalizado",
            label: "software a medida para clínicas y consultorios",
          },
          ".",
        ],
      },
      {
        type: "h2",
        id: "lo-que-no-te-dicen",
        text: "Lo que no te dicen del ‘solo configuramos el ERP’",
      },
      {
        type: "ul",
        items: [
          "La ‘personalización’ de un enlatado (consultores, campos custom, integraciones) muchas veces termina costando más que un desarrollo a medida acotado desde cero para el 20% del flujo que te diferencia.",
          "Migrar de un enlatado a otro suele ser tan caro como un proyecto nuevo: no es ‘export CSV y listo’.",
          "Los módulos que no usás siguen costando licencia; el menú grande es un impuesto.",
          "Cuando el proveedor se vende o cierra el producto, te quedás colgado: contratos largos no reemplazan roadmap ajeno.",
        ],
      },
      {
        type: "h2",
        id: "tco",
        text: "TCO a 36 meses (orden de magnitud, consultorio 5 profesionales)",
      },
      {
        type: "paragraph",
        segments: [
          "No hay tabla universal: depende de cantidad de usuarios, integraciones y si el enlatado ya cubre el 80% de tu operación. Igual sirve armar números explícitos en lugar de fe. Un ejemplo de cómo lo anoto en hoja (valores ilustrativos — reemplazá con tus cotizaciones reales):",
        ],
      },
      {
        type: "code",
        code: `| Rubro (36 meses)     | Enlatado “suite” | A medida acotado |
|----------------------|------------------|------------------|
| Licencias / SaaS     | USD A            | USD 0 o bajo     |
| Implementación     | USD B            | USD C (build)    |
| Personalización      | USD D (suele subir) | USD E (iterativo) |
| Mantenimiento / mes  | USD F            | USD G (host + soporte) |
| Horas internas Excel | USD H (!)        | USD I (menor si el flujo calza) |

// Stack mínimo frecuente para un a medida web + API:
// Next.js + Node + Postgres en Vercel/Render u homólogo
// → infra fija típica del orden de ~USD 30/mes + dominio y backups
// (sumar observabilidad, mails transaccionales, etc.).`,
      },
      { type: "h2", id: "diferencias", text: "Genérico vs a medida (sin marketing)" },
      {
        type: "paragraph",
        segments: [
          "El genérico optimiza el 80% de empresas parecidas; vos pagás el menú entero. A medida optimiza el 20% que te hace distinto. El error caro es pedir a medida para lo que ya resuelve un SaaS maduro, y comprar suite para tres reglas que el proveedor jamás va a priorizar.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu proceso es tu diferencial, no podés tercerizarlo a un menú genérico sin asumir el costo. En la práctica, a medida es dominio propio y APIs que hablan con lo legacy; el genérico trae tablas prefabricadas y, cuando tu realidad no entra, aparece el Excel paralelo.",
        ],
      },
      { type: "h2", id: "senales", text: "Señales de que el genérico ya no alcanza" },
      {
        type: "ul",
        items: [
          "Más de una ‘fuente de verdad’ para el mismo dato y juntas fijas para conciliarlas.",
          "Cada pedido de cambio al vendor entra en backlog de trimestres mientras el negocio ya cambió.",
          "Onboarding del nuevo empleado = ‘te paso el Excel que usaba María’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Cuando aparecen esas juntas, muchas veces conviene ",
          { href: "/automatizacion-procesos-clinicas", label: "automatizar e integrar lo que ya existe" },
          " y recién después un pedazo de producto propio donde el genérico choca.",
        ],
      },
      { type: "h2", id: "cuando-no", text: "Cuándo NO conviene a medida" },
      {
        type: "paragraph",
        segments: [
          "Si el dolor es solo volumen de mensajes o agenda desordenada, a veces alcanza con ordenar datos y automatizar entre herramientas que ya tenés. A medida tiene sentido cuando el costo de adaptarte al software supera el costo de construir la pieza chica que te falta — se ve con horas perdidas y riesgo, no con ego de ‘quiero lo mío’.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Elegir entre genérico y propio es matemática de TCO y de riesgo operativo, no religión. Si tenés números aproximados de licencias, horas en Excel y costo de cambios al vendor, el alcance deja de ser charla abstracta. Para revisar tu caso, usá el contacto del sitio o el WhatsApp de la caja de enlaces útiles más abajo.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un software a medida en la práctica?",
            answer:
              "Un sistema construido alrededor de tus reglas y datos, con entregas por etapas y una API que puedas evolucionar sin depender del roadmap de un tercero.",
          },
          {
            question: "¿Qué ventaja tiene frente al genérico?",
            answer:
              "Menos compromiso con módulos que no vas a usar y más control sobre el flujo que te diferencia — a cambio de ownership del producto y del mantenimiento.",
          },
          {
            question: "¿Conviene desarrollar software propio siendo chico?",
            answer:
              "A veces sí, cuando el genérico te obliga a operar mal; a veces no, cuando el problema es solo integración o disciplina de datos. Se decide con números, no con ego.",
          },
          {
            question: "¿Qué empresas suelen ir a medida?",
            answer:
              "Operaciones con reglas propias (salud, logística, industria), muchas integraciones o límites claros del SaaS que ya probaste.",
          },
        ],
      },
    ],
  },
];
