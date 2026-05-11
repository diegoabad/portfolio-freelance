export const CASE_STUDY_SLUGS = [
  "ineco-app-pacientes",
  "cotilink",
  "bot-whatsapp-atencion",
  "ineco-informes-ia",
  "hablan",
  "cogniare",
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number];

export type CaseStudy = {
  slug: CaseStudySlug;
  tag: string;
  title: string;
  /** Texto breve para ítems del menú (nav); evita líneas largas y scroll extra en móvil. */
  navShortLabel: string;
  /** Resumen corto para la card del home (sin competir con la página completa). */
  cardSummary: string;
  /** Párrafo bajo el título en `/proyectos/[slug]`; si no hay, se usa `cardSummary`. */
  detailLead?: string;
  /** Meta description / OG. */
  seoDescription: string;
  problem: string;
  solution: string;
  result: string;
  images: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "ineco-app-pacientes",
    tag: "App móvil — INECO",
    title: "Aplicación móvil para pacientes INECO",
    navShortLabel: "INECO · app pacientes",
    cardSummary:
      "Fidelizar al paciente y darle autonomía: turnos en autogestión, pedidos de recetas digitales con su profesional de confianza y un cronograma de actividades entre consultas.",
    detailLead:
      "La app acompaña al paciente fuera del consultorio: concentra reservas y reprogramaciones, canaliza los pedidos de receta hacia el profesional que ya lo atiende y ordena qué hacer día a día con un cronograma de actividades alineado al plan de cuidado — menos idas y vueltas y una experiencia más continua con la institución.",
    seoDescription:
      "Caso INECO: aplicación móvil para pacientes — autogestión de turnos, recetas digitales con el profesional de confianza y cronograma de actividades para mejorar adherencia y vínculo.",
    problem:
      "Muchas personas vivían la institución a saltos: sacar o cambiar un turno, pedir una receta o saber qué hacer entre una consulta y la otra dependía de canales distintos, sin una experiencia unificada ni una vista clara del plan de cuidado. Eso desgasta la confianza, suma fricción administrativa y dificulta la adherencia.",
    solution:
      "Se diseñó una aplicación móvil centrada en el paciente: autogestión de turnos con el profesional de referencia, flujo de pedidos de recetas digitales vinculado a ese vínculo de confianza y un cronograma de actividades e indicaciones para que la persona sepa qué hacer entre visitas. El foco está en fidelización, claridad y continuidad del cuidado, no solo en “tramitar”.",
    result:
      "Un canal directo que refuerza vínculo con el equipo tratante, menos fricción para gestionar turnos y recetas, y más orden en demandas repetitivas para la operación — con el paciente más acompañado en su día a día.",
    images: [
      "/projects/ineco/04-nuevo-turno.png",
      "/projects/ineco/01-inicio.png",
      "/projects/ineco/02-elegir-profesional.png",
      "/projects/ineco/03-mis-recetas.png",
    ],
  },
  {
    slug: "cotilink",
    tag: "Cotilink",
    title: "Plataforma de presupuestos digitales",
    navShortLabel: "Cotilink",
    cardSummary:
      "Del armado del presupuesto al seguimiento comercial: visto, aceptado o rechazado, con un mini CRM por oportunidad y acciones para recuperar presupuestos que se enfriaron.",
    detailLead:
      "La propuesta nace y vive en la web: el equipo arma líneas, versiones y envíos; el cliente ve el presupuesto en contexto y el sistema registra cada paso. Estados claros (visto, aceptado, rechazado), un tablero liviano tipo mini CRM para priorizar seguimiento y disparadores pensados para volver a contactar cuando el trato queda colgado — sin depender de PDFs sueltos ni del “a ver si me contesta”.",
    seoDescription:
      "Caso Cotilink: presupuestos digitales con seguimiento (visto, aceptado, rechazado), mini CRM comercial y foco en recuperar oportunidades estancadas.",
    problem:
      "Los presupuestos en PDF no dejaban trazabilidad: no sabías si el cliente lo abrió, lo compartió internamente o se frenó por precio o timing. El seguimiento vivía en mensajes sueltos, sin una vista única de oportunidades ni un criterio claro para insistir o recuperar propuestas que se enfriaban.",
    solution:
      "Plataforma web donde se crea y versiona el presupuesto, se envía un enlace con experiencia de lectura clara para el cliente y se centraliza el ciclo de vida: visto, aceptado o rechazado, con historial y notas livianas alrededor de cada trato (un mini CRM alrededor del presupuesto). Se incorporan flujos y recordatorios orientados a recuperar presupuestos sin respuesta y a ordenar el seguimiento del equipo comercial.",
    result:
      "Embudo más transparente, menos operación a ciegas y mejor disciplina de seguimiento: se gana velocidad en cierres y se vuelve explícito qué oportunidades merecen un empujón antes de perderse.",
    images: [
      "/projects/cotilink/01-login.png",
      "/projects/cotilink/02-dashboard.png",
      "/projects/cotilink/03-editor.png",
      "/projects/cotilink/04-detalle-linea.png",
      "/projects/cotilink/05-confirmar-proyecto.png",
    ],
  },
  {
    slug: "bot-whatsapp-atencion",
    tag: "WhatsApp — clínicas",
    title: "Bot de WhatsApp para clínicas",
    navShortLabel: "Bot WhatsApp",
    cardSummary:
      "Bot con o sin IA que responde FAQs de la clínica y enruta intenciones (facturas, turnos, reclamos) a un panel que guarda todo por tipo de consulta — con historial útil para mejorar mensajes y campañas según lo que más preguntan.",
    detailLead:
      "Se arma un asistente en WhatsApp alineado al protocolo de la institución: puede operar con reglas fijas o con IA según el caso, contesta preguntas frecuentes con criterio y detecta intenciones configurables — pedir facturas, sacar turnos, canal de quejas u otras — que aterrizan en una plataforma donde queda organizada la información por intención. Además se registran interacciones y motivos de consulta para ver patrones (qué se pregunta, en qué horarios, qué se corta) y alimentar comunicación institucional o piezas de difusión con datos reales, siempre con foco en buenas prácticas y consentimiento donde aplique.",
    seoDescription:
      "Caso bot WhatsApp para clínicas: FAQs, intenciones (facturas, turnos, quejas), panel por tipo de consulta y métricas para orientar comunicación y campañas.",
    problem:
      "Recepción y call center suelen recibir las mismas preguntas por WhatsApp (horarios, coberturas, turnos, facturación) mezcladas con reclamos urgentes, sin un registro ordenado ni una forma simple de escalar lo sensible. Perder el hilo cuesta tiempo y además se pierde la señal de qué temas concentran la demanda del paciente.",
    solution:
      "Bot de WhatsApp configurable, con o sin IA según la política de la clínica: base sólida de respuestas frecuentes y módulo de intenciones (por ejemplo facturas, turnos, quejas) que deriva cada conversación a vistas y colas en una plataforma web, guardando contexto y estado por tipo de pedido. Se centralizan teléfonos y consultas para tableros de seguimiento y para extraer tendencias — volumen por tema, cuellos de botella, oportunidades de mensajes más claros en redes o campañas — sin reemplazar el criterio humano donde hace falta.",
    result:
      "Menos ruido en la línea de WhatsApp, respuestas más homogéneas en lo repetitivo y un tablero que ordena lo operativo; además, visibilidad sobre qué preguntan los pacientes para afinar comunicación y prioridades del consultorio.",
    images: ["/projects/chatbot/01-simulacion-conversacion.png", "/projects/chatbot/02-panel-intenciones.png"],
  },
  {
    slug: "ineco-informes-ia",
    tag: "Informes con IA — INECO",
    title: "Plataforma de informes clínicos con IA",
    navShortLabel: "INECO · informes IA",
    cardSummary:
      "Notas ordenadas por voz o texto con plantillas de consulta; la IA arma el informe respetando lineamientos generales y un prompt definido por el profesional (secciones, extensión y tono).",
    detailLead:
      "Desarrollada para INECO, la plataforma guía al equipo a capturar la consulta con método: el tomador de notas admite dictado y texto, y ofrece distintas plantillas para estructurar la entrevista según el tipo de encuentro. Toda esa información se vuelca a un motor de IA que combina políticas institucionales generales con un prompt parametrizable por los propios profesionales — así el borrador respeta el esquema deseado (secciones, largo, tono clínico-administrativo o más breve) y queda listo para revisión humana antes de salir.",
    seoDescription:
      "Caso INECO: informes clínicos con IA — notas por voz y texto, plantillas de consulta, lineamientos generales y prompt profesional para controlar secciones, extensión y tono del informe.",
    problem:
      "Redactar informes a partir de notas sueltas o dictados largos consumía horas y el formato final dependía mucho de la memoria y el estilo de cada profesional, con riesgo de inconsistencia entre prestadores y servicios.",
    solution:
      "Aplicación web con captura organizada de la consulta en texto y voz, y plantillas que ordenan qué registrar en cada parte de la visita. Al cerrar la carga, el sistema envía el paquete de notas a la IA bajo dos capas de control: lineamientos generales acordados institucionalmente y un prompt editable por el profesional (o por el servicio) que fija reglas del informe — estructura de secciones, extensión aproximada, tono y matices. El resultado es un borrador alineado a esa “receta” antes de la firma o el ajuste fino.",
    result:
      "Menos tiempo entre la consulta y el documento listo para revisar, más homogeneidad entre informes del mismo tipo y mayor control del equipo sobre cómo “suena” y se organiza cada pieza, sin renunciar a la validación humana.",
    images: [
      "/projects/informes/01-login.png",
      "/projects/informes/02-landing.png",
      "/projects/informes/03-creador-informes.png",
    ],
  },
  {
    slug: "hablan",
    tag: "Hablán",
    title: "Plataforma de ejercicios cognitivos",
    navShortLabel: "Hablán",
    cardSummary:
      "Actividades para que el paciente practique en casa: cada profesional arma su plan eligiendo tipos de ejercicio (memoria, palabra–imagen, identificación, etc.) sin rediseñar todo desde cero cada vez.",
    detailLead:
      "Hablán apunta a la práctica entre sesiones: el profesional crea y asigna actividades pensadas para el hogar, a partir de un catálogo de formatos interactivos — por ejemplo tareas de memoria, asociación palabra–imagen, reconocimiento de términos u otros esquemas que el equipo elige según el objetivo terapéutico. Así el paciente entrena con ejercicios guiados fuera del consultorio y el especialista conserva control sobre qué se envía y con qué intensidad.",
    seoDescription:
      "Caso Hablán: plataforma de actividades cognitivas para el hogar — el profesional crea tareas y elige tipos de ejercicio (memoria, palabra–imagen, identificación).",
    problem:
      "Enviar “tarea para el hogar” suele quedar en indicaciones genéricas o material improvisado: cuesta estandarizar la dificultad, medir si hubo práctica y ofrecer variedad sin pasar horas diseñando cada recurso a mano.",
    solution:
      "Plataforma web donde cada profesional arma actividades para sus pacientes combinando módulos ya pensados (memoria, identificación de palabras, ejercicios con imágenes y otros formatos cognitivos). El flujo separa la creación de la asignación y el seguimiento: el paciente practica en su entorno con interacciones acotadas y el equipo revisa avances sin depender solo de la consulta presencial.",
    result:
      "Más práctica estructurada entre visitas, menos fricción para el profesional al armar tareas variadas y un canal claro para que el paciente entrene con ejercicios alineados al plan — con mejor adherencia que el “pdf o foto suelta”.",
    images: [
      "/projects/hablan/01-mis-actividades.png",
      "/projects/hablan/02-mi-progreso.png",
      "/projects/hablan/03-palabra-imagen-intro.png",
      "/projects/hablan/04-ejercicio-palabra-imagen.png",
    ],
  },
  {
    slug: "cogniare",
    tag: "Cogniare",
    title: "Plataforma para profesionales de la salud",
    navShortLabel: "Cogniare",
    cardSummary:
      "Agenda digital, historia clínica del paciente, espacio de intercambio tipo blog entre colegas, adjuntos y registro de diagnósticos — todo integrado para el consultorio.",
    detailLead:
      "Cogniare apunta a quienes atienden en salud mental y afines: ofrece agenda online, seguimiento del paciente en una historia unificada, un canal tipo blog para que los profesionales compartan contenido o novedades entre pares, guardado ordenado de archivos (estudios, consentimientos, informes) y flujos para documentar diagnósticos y evolución sin saltar entre cuatro aplicaciones distintas.",
    seoDescription:
      "Caso Cogniare: plataforma para profesionales de la salud — agenda digital, historia del paciente, blog entre profesionales, archivos y diagnósticos.",
    problem:
      "Muchos equipos conviven con agenda en un lugar, notas en otro, archivos en el correo y poca continuidad entre lo que se ve en consulta y lo que queda registrado para la próxima sesión — sin un espacio simple para publicar o leer aportes entre colegas del mismo entorno.",
    solution:
      "Plataforma web que concentra la operación del consultorio: turnos y disponibilidad en una agenda digital, historia del paciente con acceso controlado a lo relevante, módulo de publicaciones tipo blog para uso profesional interno, almacenamiento de documentos vinculados al expediente y herramientas para registrar diagnósticos y seguimiento en el mismo contexto de la visita.",
    result:
      "Menos ida y vuelta entre herramientas, expediente más completo y trazable, y un canal liviano de comunicación entre profesionales sin mezclarlo con redes personales.",
    images: [
      "/projects/cogniare/01-login.png",
      "/projects/cogniare/02-gestion-turnos.png",
      "/projects/cogniare/03-pacientes.png",
      "/projects/cogniare/04-ficha-paciente.png",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): CaseStudySlug[] {
  return [...CASE_STUDY_SLUGS];
}
