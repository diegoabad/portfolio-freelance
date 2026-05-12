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
          "El mes pasado una administrativa de un consultorio multidisciplinario en CABA me mandó captura de tres planillas distintas con ‘la misma’ agenda: una para médicos, otra para facturación y una tercera que armaron para ",
          { href: "/bots-whatsapp", label: "WhatsApp" },
          ". Cuando fallaba algo, nadie sabía cuál era la verdad.",
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
          "Sentido común del rubro: ‘compramos el sistema más completo y listo’. Yo invierto la frase: en consultorios medianos el riesgo es pagar diez módulos que nadie usa y seguir con Excel para lo que importa. El software a medida para clínicas tiene sentido cuando el proceso es el diferencial, no el logo del proveedor. El marco general también está en ",
          {
            href: "/blog/cuando-conviene-software-a-medida-vs-sistemas-genericos",
            label: "cuándo conviene software a medida vs genérico",
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
        text: "Ejemplo concreto: modelo de datos mínimo",
      },
      {
        type: "paragraph",
        segments: [
          "Un esquema útil para arrancar es pensar entidades, no pantallas: `Paciente`, `Profesional`, `Turno` (con estado: solicitado / confirmado / atendido / facturado), `Prestación`, `Movimiento` contable. Una API REST típica expone algo como `GET /turnos?fecha=&profesional_id=` y `PATCH /turnos/:id` para cambiar estado; ",
          { href: "/sistema-turnos-online", label: "la agenda online" },
          " y WhatsApp solo consumen esos mismos endpoints. Si no existe esa capa común, cada canal inventa su versión.",
        ],
      },
      { type: "h2", id: "que-es", text: "¿Qué es un software a medida?" },
      {
        type: "paragraph",
        segments: [
          "Es un software personalizado para clínicas u otras instituciones: alcance cerrado por etapas, roles claros e integraciones explícitas. Priorizás lo que el equipo usa todos los días y dejás afuera módulos que estorban.",
        ],
      },
      {
        type: "ul",
        items: [
          "Flujo real de pacientes y excepciones (autorizaciones, sobreturnos)",
          "Administración y facturación acorde a cómo cobran en la práctica",
          "Laboratorios, APIs o legados — sin heroísmo en la primera entrega",
          "Métricas operativas (tiempo, errores, ocupación) desde el diseño",
        ],
      },
      { type: "h2", id: "problemas-genericos", text: "Problemas frecuentes de los sistemas genéricos en clínicas" },
      { type: "h3", id: "funciones-basura", text: "Funciones que no se utilizan" },
      {
        type: "paragraph",
        segments: [
          "Los paquetes grandes llenan menús que confunden en recepción. Un software de gestión médica a medida puede mostrar tres botones al administrativo y veinte al médico, no al revés.",
        ],
      },
      { type: "h3", id: "personalizacion", text: "Falta de personalización" },
      {
        type: "paragraph",
        segments: [
          "Cada institución liquida distinto: honorarios, copagos, obras sociales. El software médico personalizado refleja esas reglas en lugar de forzar el flujo único del proveedor.",
        ],
      },
      { type: "h3", id: "integraciones", text: "Dificultad para integrar sistemas" },
      {
        type: "paragraph",
        segments: [
          "En la práctica conviven WhatsApp, agendas, laboratorios y sistemas viejos. El desarrollo de software para salud con foco en una API común evita cargar lo mismo tres veces.",
        ],
      },
      { type: "h2", id: "que-desarrollar", text: "Qué se puede desarrollar con software a medida" },
      { type: "h3", id: "gestion-medica", text: "Sistemas de gestión médica y pacientes" },
      {
        type: "paragraph",
        segments: [
          "Desde un software para gestión de pacientes hasta paneles de operación: lo importante es definir qué es sistema de registro y qué puede resolverse con ",
          { href: "/automatizacion-procesos-clinicas", label: "automatización" },
          " entre APIs.",
        ],
      },
      { type: "h3", id: "historias", text: "Historias clínicas digitales a medida" },
      {
        type: "paragraph",
        segments: [
          "Un sistema de historias clínicas a medida prioriza plantillas, permisos y auditoría según tu práctica. No es lo mismo un consultorio que un ",
          { href: "/software-para-clinicas", label: "centro con varias sedes" },
          ".",
        ],
      },
      { type: "h3", id: "facturacion", text: "Facturación, liquidaciones y administración" },
      {
        type: "paragraph",
        segments: [
          "Módulos de software administrativo para clínicas para honorarios, copagos y reportes suelen ser el primer ROI cuando hoy vivís en planillas.",
        ],
      },
      { type: "h3", id: "dashboards", text: "Dashboards, reportes y automatizaciones" },
      {
        type: "paragraph",
        segments: [
          "Reportes para dirección, tableros de ocupación o automatizaciones administrativas pueden formar parte del mismo producto o conectarse por integraciones.",
        ],
      },
      { type: "h2", id: "ventajas", text: "Ventajas de desarrollar un sistema personalizado" },
      {
        type: "ul",
        items: [
          "Menos fricción en recepción: menos ‘pasame el otro Excel’",
          "Automatizar lo repetible sin arrastrar módulos que nadie tocó",
          "Reglas de negocio explícitas en el código en lugar de ‘como hacía María’",
          "Sumar sede o especialidad sin renegociar todo el paquete cada vez",
          "Integraciones nuevas contra tu API, no contra Parchelandia",
        ],
      },
      { type: "h2", id: "conviene-2026", text: "¿Conviene desarrollar software propio en 2026?" },
      {
        type: "paragraph",
        segments: [
          "Conviene cuando el costo del trabajo manual o del desorden ya se ve en plata o en bronca semanal. Muchas clínicas privadas y consultorios llegan a ese punto antes que multinacionales: pocas personas hacen muchas cosas y Excel no escala.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "El desarrollo de sistemas médicos a medida es alinear proceso y sistema. Si tenés números de horas perdidas o errores recurrentes, mandalos por contacto en el sitio o ",
          { href: WA_MEDIDA, label: "WhatsApp", external: true },
          " y armamos un alcance que no sea fantasía de PowerPoint.",
        ],
      },
      {
        type: "faq",
        items: [
          {
            question: "¿Qué es un software a medida en una clínica?",
            answer:
              "Algo construido alrededor de tus roles, turnos y cobros — no al revés. Si no hay procesos escritos, primero hay que ordenarlos.",
          },
          {
            question: "¿Qué ventajas tiene frente a un sistema genérico?",
            answer:
              "Pagás por lo que usás, integrás lo que ya tenés y evitás menús infinitos que el equipo ignora.",
          },
          {
            question: "¿Conviene desarrollar software propio?",
            answer:
              "Cuando el genérico te obliga a trabajar mal o cuando mantener planillas sale más caro que una primera etapa bien acotada.",
          },
          {
            question: "¿Qué empresas suelen necesitar software a medida?",
            answer:
              "Clínicas y consultorios con reglas propias, pero también cualquier operación donde el ‘estándar’ sea más obstáculo que ayuda.",
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
      "Historia de ERP sobre-dimensionado, números de horas en cruces manuales, genérico vs a medida sin slogans y cuándo alcanza con automatizar lo que ya tenés.",
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
      { href: "/software-para-clinicas", label: "Aplicaciones móviles" },
      { href: "/automatizacion-procesos-clinicas", label: "Automatización de procesos" },
      { href: "/blog/software-a-medida-clinicas-consultorios-sistema-personalizado", label: "Blog: software a medida en clínicas" },
      { href: "/#contacto", label: "Contacto" },
      { href: WA_MEDIDA, label: "WhatsApp", external: true },
    ],
    content: [
      {
        type: "paragraph",
        segments: [
          "Una logística mediana me mostró el presupuesto de un ERP ‘todo en uno’: licencias para veinte usuarios, ocho módulos y tres consultores externos. Cuando les pedí cuántos módulos usaban de verdad, la respuesta fue dos y medio; el resto era aspiración de PowerPoint. Ahí no falló el software genérico: falló la fantasía de que un paquete grande ordena solo.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Les propuse una cuenta simple: horas-mujer por mes en cruces entre planilla de despacho, sistema de facturación y correos a proveedores. Salieron ~35 horas solo en ‘arreglar números que no cierran’. Cuatro meses después, un módulo propio de despacho + API al facturador bajó eso a ~12 — no porque el código sea magia, sino porque dejaron de pelear contra el flujo del ERP.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Opinión impopular: el ",
          { href: "/desarrollo-software-medida", label: "software a medida" },
          " no compite con el genérico en lista de features; compite en encajar en el proceso que te diferencia. Si tu diferencial es velocidad de despacho o reglas de liquidación raras, el genérico te va a pedir que cambies el proceso; a medida es al revés.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Si tu mundo es salud, el caso detallado está en ",
          {
            href: "/blog/software-a-medida-clinicas-consultorios-sistema-personalizado",
            label: "software a medida para clínicas y consultorios",
          },
          ": modelo de datos, Excels paralelos y qué construir primero.",
        ],
      },
      { type: "h2", id: "diferencias", text: "Genérico vs a medida (sin marketing)" },
      {
        type: "paragraph",
        segments: [
          "El genérico optimiza el 80% de empresas parecidas; vos pagás el 100% del menú. A medida optimiza el 20% que te hace distinto; pagás solo lo que alguien va a usar todos los días. El error es pedir a medida para cosas que ya resuelve un SaaS maduro (email transaccional, facturación estándar) y comprar ERP para reglas que son tres líneas de negocio.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Técnicamente, a medida suele ser un producto con dominio propio (`Pedido`, `Lote`, `ReglaDeBonificación`) y APIs que hablan con lo legacy. El genérico te da tablas prefabricadas; cuando tu realidad no entra, aparece el Excel paralelo.",
        ],
      },
      { type: "h2", id: "senales", text: "Señales de que el genérico ya no alcanza" },
      {
        type: "ul",
        items: [
          "Tenés más de una ‘fuente de verdad’ para el mismo dato y reuniones semanales para conciliarlas.",
          "Cada pedido de cambio al proveedor entra en backlog de trimestres mientras el negocio ya cambió.",
          "Contrataste gente nueva y el onboarding es ‘te paso el Excel que usaba María’.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Cuando aparecen juntas, suele tener sentido combinar ",
          { href: "/automatizacion-procesos-clinicas", label: "automatización" },
          " (integrar lo que ya existe) con un pedazo de producto propio solo donde el genérico choca — no reescribir todo desde cero el día uno.",
        ],
      },
      { type: "h2", id: "ejemplos", text: "Ejemplos que no son ‘portal web’ genérico" },
      {
        type: "paragraph",
        segments: [
          "Liquidaciones de profesionales cruzando turnos atendidos con aranceles negociados por obra social; control de insumos con trazabilidad por sector; paneles donde dirección ve ocupación y márgenes sin pedirle a Excel que aguante 200MB. En mobile, una ",
          { href: "/software-para-clinicas", label: "app para pacientes" },
          " conectada a la misma API que recepción evita el ‘¿tenés el turno en el otro grupo?’.",
        ],
      },
      { type: "h2", id: "cuando-no", text: "Cuándo NO conviene a medida" },
      {
        type: "paragraph",
        segments: [
          "Si el dolor es solo de volumen de mensajes o de agenda desordenada, a veces alcanza con ",
          { href: "/automatizacion-procesos-clinicas", label: "automatizar" },
          " flujos entre herramientas que ya tenés. A medida tiene sentido cuando el costo de adaptarte al software supera el costo de construir la pieza chica que te falta.",
        ],
      },
      { type: "h2", id: "conclusion", text: "Conclusión" },
      {
        type: "paragraph",
        segments: [
          "Elegir entre genérico y propio no es religión: es matemática de horas perdidas + riesgo de error + velocidad de cambio. Si tenés números aproximados de esas tres, el alcance deja de ser charla abstracta.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "Para ver tu caso concreto: ",
          { href: "/#contacto", label: "contacto" },
          " o ",
          { href: WA_MEDIDA, label: "WhatsApp", external: true },
          ".",
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
