export const CASE_STUDY_SLUGS = [
  "ineco-app-pacientes",
  "cotilink-saas-cotizaciones",
  "bot-whatsapp-odontologia-soler",
  "ineco-informes-ia",
  "hablan-plataforma-fonoaudiologia",
  "cogniare-gestion-clinicas",
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
  /** Ventajas breves en la card del home (chips compactos). */
  cardChips: readonly string[];
  /** Párrafo bajo el título en `/proyectos/[slug]`; si no hay, se usa `cardSummary`. */
  detailLead?: string;
  /** Frase destacada entre título y lead; si no hay, no se muestra el bloque. */
  detailHighlight?: string;
  /** Meta description / OG. */
  seoDescription: string;
  problem: string;
  /** Si existe, se muestra como lista con viñetas bajo `problem` (Contexto). */
  problemList?: readonly string[];
  /** Párrafo opcional tras la primera lista (p. ej. “Con el crecimiento… esto generaba:”). */
  problemSecondaryIntro?: string;
  /** Lista opcional bajo `problemSecondaryIntro`. */
  problemSecondaryList?: readonly string[];
  solution: string;
  solutionList?: readonly string[];
  /** Párrafo opcional tras `solutionList` (p. ej. segunda categoría de ítems). */
  solutionSecondaryIntro?: string;
  solutionSecondaryList?: readonly string[];
  solutionClosing?: string;
  result: string;
  resultList?: readonly string[];
  resultClosing?: string;
  /** Cierre antes del pie; usá **texto** para resaltar en primary. */
  detailFooterCallout?: string;
  images: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "ineco-app-pacientes",
    tag: "App móvil — INECO",
    title: "Aplicación móvil para pacientes INECO",
    navShortLabel: "INECO · App pacientes",
    cardSummary:
      "Turnos, recetas y seguimiento desde el celular. Una app pensada para reducir tareas administrativas y darle más autonomía al paciente: autogestión de turnos, pedidos de recetas digitales y actividades indicadas por profesionales entre consultas.",
    cardChips: ["Menos carga en recepción", "Turnos en autogestión", "Pacientes más autónomos"],
    detailLead:
      "La aplicación acompaña al paciente fuera del consultorio: permite gestionar turnos, solicitar recetas digitales y acceder a actividades indicadas por profesionales desde un solo lugar.\n\nEl objetivo fue reducir fricción en tareas cotidianas y mejorar la continuidad del seguimiento entre consultas.",
    seoDescription:
      "Caso INECO: app móvil para pacientes — turnos, recetas digitales y actividades entre consultas; menos tareas administrativas y más autonomía desde el celular.",
    problem:
      "Muchas acciones dependían de distintos canales: llamadas, WhatsApp o gestiones manuales para reservar turnos, pedir recetas o entender qué debía hacer el paciente entre consultas. Esto generaba:",
    problemList: [
      "Más carga administrativa",
      "Experiencias fragmentadas",
      "Menor continuidad en el seguimiento del tratamiento",
    ],
    solution:
      "Se desarrolló una aplicación móvil centrada en la experiencia del paciente, con funcionalidades como:",
    solutionList: [
      "Autogestión de turnos",
      "Reprogramación de consultas",
      "Solicitud de recetas digitales",
      "Actividades y seguimiento entre consultas",
      "Acceso desde el celular en un entorno unificado",
    ],
    solutionClosing:
      "La solución prioriza claridad, autonomía y continuidad del cuidado, no solo la digitalización de trámites.",
    result:
      "La app permitió centralizar interacciones frecuentes en un único canal digital, reduciendo fricción operativa y mejorando la experiencia de pacientes y profesionales. Además:",
    resultList: [
      "Simplificó tareas repetitivas",
      "Mejoró el acceso a información",
      "Fortaleció el vínculo entre paciente e institución",
    ],
    detailFooterCallout:
      "Más que una app, el objetivo fue construir una **experiencia más simple y continua** para pacientes y profesionales en el día a día.",
    images: ["/projects/ineco/01-ineco-app-pacientes-flujo.png"],
  },
  {
    slug: "cotilink-saas-cotizaciones",
    tag: "Cotilink",
    title: "Plataforma de presupuestos digitales",
    navShortLabel: "Cotilink · SaaS cotizaciones",
    cardSummary:
      "Una plataforma SaaS para crear presupuestos interactivos y dar seguimiento a cada oportunidad comercial desde un solo lugar: visto, aceptado, rechazado o pendiente.",
    cardChips: ["Seguimiento comercial", "Presupuestos centralizados", "Menos seguimiento manual"],
    detailLead:
      "Desarrollo de una plataforma web orientada a digitalizar presupuestos y dar seguimiento a oportunidades comerciales desde un único lugar.\n\nLa solución permite crear propuestas interactivas, visualizar estados comerciales y mantener más ordenado el proceso posterior al envío.",
    seoDescription:
      "Caso Cotilink: plataforma web y MVP para presupuestos digitales interactivos, estados comerciales y seguimiento de oportunidades desde un solo lugar.",
    problem:
      "Muchas veces los presupuestos se envían por PDF o WhatsApp y el seguimiento termina dependiendo de mensajes, recordatorios manuales o archivos dispersos. Con el tiempo, eso genera:",
    problemList: [
      "Oportunidades perdidas",
      "Poca visibilidad sobre el estado comercial",
      "Dificultad para organizar el proceso de venta",
    ],
    solution:
      "Se desarrolló un MVP funcional enfocado en transformar una idea inicial en una herramienta utilizable en el día a día comercial. La plataforma incluye:",
    solutionList: [
      "Presupuestos digitales interactivos",
      "Seguimiento de propuestas",
      "Estados comerciales",
      "Organización por clientes",
      "Historial de actividad",
      "Confirmación o rechazo de presupuestos",
    ],
    solutionClosing:
      "El foco estuvo en construir una experiencia simple y clara, priorizando usabilidad y seguimiento comercial más allá del simple envío de cotizaciones.",
    result:
      "El proyecto permitió centralizar información comercial y ordenar el seguimiento de oportunidades desde un único entorno. Además:",
    resultList: [
      "Redujo la dependencia de archivos sueltos",
      "Mejoró la visibilidad del proceso comercial",
      "Convirtió una idea inicial en un producto funcional listo para evolucionar",
    ],
    detailFooterCallout:
      "El proyecto **nació como una idea** y **lo convertimos en una plataforma** funcional para el seguimiento de propuestas comerciales, pensada para freelancers y equipos pequeños que necesitan orden más allá del PDF y del chat suelto.",
    images: ["/projects/cotilink/01-presupuesto-cotilink.png"],
  },
  {
    slug: "bot-whatsapp-odontologia-soler",
    tag: "Odontología Soler",
    title: "Bot de WhatsApp con IA y agenda online",
    navShortLabel: "Soler · Bot WhatsApp y agenda",
    cardSummary:
      "**Automatización de atención por WhatsApp** para responder **consultas frecuentes**, **detectar intenciones** en conversaciones y **gestionar turnos** de forma integrada con una agenda online.",
    cardChips: ["IA conversacional", "Agenda integrada", "Menos carga manual"],
    detailLead:
      "Desarrollo de una solución conversacional para clínicas orientada a **mejorar la atención inicial de pacientes** y **reducir tareas manuales** del equipo administrativo.\n\nEl proyecto combinó un **bot de WhatsApp con IA** y una **agenda online integrada** para permitir la gestión automatizada de consultas y turnos desde un único canal.",
    seoDescription:
      "Caso Odontología Soler: bot de WhatsApp con IA, detección de intenciones, agenda online integrada y panel para ordenar consultas y turnos desde un solo canal.",
    problem:
      "**Gran parte de las consultas** llegaban por WhatsApp y requerían intervención manual incluso para tareas repetitivas:",
    problemList: [
      "Preguntas frecuentes",
      "Horarios",
      "Obras sociales",
      "Confirmaciones",
      "Solicitud de turnos",
    ],
    problemSecondaryIntro: "Con el crecimiento de mensajes, esto generaba:",
    problemSecondaryList: [
      "Demoras en respuestas",
      "Conversaciones desordenadas",
      "Mayor carga operativa para recepción y administración",
    ],
    solution:
      "Se desarrolló un sistema de atención automatizada por WhatsApp con capacidad de **interpretar intenciones** dentro de las conversaciones y actuar según el contexto del paciente.\n\nLa solución incluye:",
    solutionList: [
      "Bot conversacional con IA",
      "Respuestas automáticas a preguntas frecuentes",
      "Detección de intenciones",
      "Enrutamiento de consultas",
      "Agenda online integrada",
      "Gestión automática de turnos",
      "Panel de administración y seguimiento",
    ],
    solutionClosing:
      "Además, toda la información de interacción queda **centralizada** para facilitar análisis, seguimiento y mejora continua de mensajes y flujos de atención.",
    result:
      "La solución permitió **automatizar gran parte de las consultas repetitivas** y centralizar la gestión de conversaciones y turnos desde WhatsApp.\n\nAdemás:",
    resultList: [
      "Redujo tiempos de respuesta",
      "Mejoró la organización de mensajes",
      "Ayudó a escalar la atención sin depender por completo de gestión manual",
    ],
    detailFooterCallout:
      "El objetivo no fue reemplazar la atención humana, sino **automatizar tareas repetitivas** para que el equipo pueda enfocarse en consultas que realmente requieren atención personalizada.",
    images: ["/projects/chatbot/01-odontologia-soler-panel-dashboard.png"],
  },
  {
    slug: "ineco-informes-ia",
    tag: "Informes con IA — INECO",
    title: "Plataforma de informes clínicos con IA",
    navShortLabel: "INECO · Informes IA",
    cardSummary:
      "Desarrollo de una plataforma para **registrar notas clínicas por voz o texto** y **generar informes automáticamente con IA** según **criterios definidos por cada profesional**.",
    cardChips: ["Voz y texto", "Plantillas configurables", "IA alineada al criterio profesional"],
    detailLead:
      "Desarrollo de una plataforma orientada a **asistir a profesionales de salud** en la toma de notas y creación de informes clínicos mediante **inteligencia artificial**.\n\nLa solución permite **transformar la información registrada durante la consulta** en informes estructurados **adaptados al criterio de cada profesional**.",
    seoDescription:
      "Caso INECO: plataforma de informes clínicos con IA — notas por voz o texto, plantillas, estructura y tono configurables, generación asistida y control del criterio profesional.",
    problem:
      "La generación de informes clínicos suele requerir **tiempo adicional fuera de la consulta** y muchas veces implica **reorganizar notas dispersas** o **redactar contenido repetitivo** manualmente.",
    problemSecondaryIntro: "Esto puede generar:",
    problemSecondaryList: [
      "Más carga administrativa",
      "Pérdida de tiempo operativo",
      "Dificultad para mantener formatos consistentes entre informes",
    ],
    solution:
      "Se desarrolló una **plataforma web** para centralizar notas clínicas y automatizar la generación de informes utilizando IA.\n\nLa solución permite:",
    solutionList: [
      "Registrar notas por voz o texto",
      "Organizar información clínica",
      "Utilizar plantillas configurables",
      "Definir estructura y tono del informe",
      "Generar informes automáticamente con IA",
      "Adaptar resultados según criterios del profesional",
    ],
    solutionClosing:
      "El objetivo fue crear una herramienta flexible que acompañe el flujo de trabajo clínico **sin reemplazar el criterio profesional**.",
    result:
      "La plataforma permitió **simplificar el proceso de documentación clínica** y reducir tiempo dedicado a **tareas repetitivas de redacción**.\n\nAdemás:",
    resultList: [
      "Ayudó a mantener mayor consistencia en informes",
      "Mejoró la organización de notas clínicas",
      "Agilizó la preparación de documentación profesional",
    ],
    detailFooterCallout:
      "La solución fue pensada para **reducir tiempos administrativos** al generar informes, sin perder control sobre el contenido y criterio clínico.",
    images: ["/projects/informes/01-informespro-crear-informe-ia.png"],
  },
  {
    slug: "hablan-plataforma-fonoaudiologia",
    tag: "Hablán",
    title: "Plataforma de ejercicios cognitivos",
    navShortLabel: "Hablán · Ejercicios cognitivos",
    cardSummary:
      "Desarrollo de una plataforma web para que profesionales puedan crear actividades cognitivas personalizadas y acompañar el seguimiento de pacientes fuera del consultorio.",
    cardChips: ["Práctica en el hogar", "Seguimiento de avance", "Experiencia interactiva"],
    detailLead:
      "Desarrollo de una plataforma web orientada a profesionales que necesitan crear actividades cognitivas personalizadas para que pacientes puedan practicar desde sus hogares.\n\nLa solución fue diseñada para combinar seguimiento, ejercicios interactivos y una experiencia amigable tanto para profesionales como para pacientes.",
    seoDescription:
      "Caso Hablán: plataforma de ejercicios cognitivos — niveles, tipos de ejercicios, actividades interactivas, seguimiento y uso desde el hogar para fonoaudiología y afines.",
    problem:
      "Muchas actividades cognitivas suelen depender de ejercicios manuales, documentos aislados o preparación individual para cada paciente.\n\nEsto dificulta:",
    problemList: [
      "Reutilizar ejercicios",
      "Organizar actividades",
      "Medir avances",
      "Sostener continuidad entre sesiones",
    ],
    problemSecondaryIntro:
      "Además, crear contenido desde cero para cada caso implica tiempo operativo adicional para el profesional.",
    solution:
      "Se desarrolló una plataforma web donde los profesionales pueden crear niveles, organizar actividades y adaptar ejercicios según las necesidades de cada paciente.\n\nLa solución incluye:",
    solutionList: [
      "Creación de niveles y progresión",
      "Distintos tipos de ejercicios cognitivos",
      "Actividades interactivas",
      "Seguimiento de avance",
      "Experiencia gamificada",
      "Uso desde el hogar",
    ],
    solutionSecondaryIntro: "Entre los ejercicios disponibles se incluyen:",
    solutionSecondaryList: [
      "Memoria",
      "Sí o no",
      "Asociación palabra-imagen",
      "Identificación visual",
      "Reconocimiento",
      "Actividades de práctica cognitiva",
    ],
    solutionClosing:
      "El foco estuvo en construir una herramienta flexible y amigable que facilite tanto la creación de actividades como la experiencia diaria de uso.",
    result:
      "La plataforma permitió centralizar ejercicios y simplificar la preparación de actividades cognitivas para distintos pacientes.\n\nAdemás:",
    resultList: [
      "Ayudó a dar continuidad al trabajo terapéutico fuera de la consulta",
      "Mejoró la organización de actividades",
      "Creó una experiencia más interactiva y accesible para los pacientes",
    ],
    detailFooterCallout:
      "Lo que se buscó fue desarrollar una **plataforma que ayude a los pacientes a practicar** desde sus hogares y permita a los profesionales acompañar el proceso de forma más simple y organizada.",
    images: ["/projects/hablan/01-hablan-dashboard-ejercicio.png"],
  },
  {
    slug: "cogniare-gestion-clinicas",
    tag: "Cogniare",
    title: "Plataforma para profesionales de la salud",
    navShortLabel: "Cogniare · Historia clínica y agenda",
    cardSummary:
      "Desarrollo de una plataforma SaaS creada a partir de una idea orientada a psicopedagogas y profesionales de la salud para centralizar pacientes, agenda, historia clínica y comunicación entre colegas.",
    cardChips: ["Agenda y pacientes", "Historia clínica", "Colaboración entre colegas"],
    detailLead:
      "Desarrollo de una plataforma SaaS creada a partir de una necesidad concreta: ayudar a psicopedagogas y profesionales de la salud a organizar pacientes, consultas e información clínica desde un único entorno digital.\n\nLa solución buscó simplificar tareas administrativas y mejorar la organización diaria del consultorio.",
    seoDescription:
      "Caso Cogniare: plataforma SaaS para profesionales de la salud — agenda digital, pacientes, historia clínica, recordatorios, diagnósticos, adjuntos y espacio de intercambio entre colegas.",
    problem:
      "Muchos profesionales gestionan información entre agendas, documentos, mensajes y herramientas separadas, lo que dificulta mantener una visión clara del seguimiento de cada paciente.",
    problemSecondaryIntro: "Además:",
    problemSecondaryList: [
      "Los recordatorios suelen hacerse manualmente",
      "Las historias clínicas quedan dispersas",
      "El intercambio entre colegas no siempre tiene un espacio organizado",
    ],
    solution:
      "Se desarrolló una plataforma SaaS orientada al uso diario de profesionales de la salud, integrando herramientas de gestión, seguimiento y colaboración.\n\nLa solución incluye:",
    solutionList: [
      "Agenda digital",
      "Gestión de pacientes",
      "Historia clínica online",
      "Recordatorios automáticos por mail y WhatsApp",
      "Registro de diagnósticos",
      "Adjuntos y documentación",
      "Espacio interno tipo blog para intercambio entre colegas",
    ],
    solutionClosing:
      "El foco estuvo en construir una herramienta práctica y simple de usar, adaptada a dinámicas reales de consultorio.",
    result:
      "La plataforma permitió centralizar información clínica y administrativa en un único entorno, ayudando a ordenar el trabajo diario y reducir tareas manuales.\n\nAdemás:",
    resultList: [
      "Mejoró la organización de pacientes y consultas",
      "Facilitó el acceso a información clínica",
      "Generó un espacio más colaborativo entre profesionales",
    ],
    detailFooterCallout:
      "La plataforma fue diseñada para combinar **organización, seguimiento y colaboración** en una experiencia más **práctica para el día a día** del consultorio.",
    images: ["/projects/cogniare/01-cogniare-plataforma-collage.png"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): CaseStudySlug[] {
  return [...CASE_STUDY_SLUGS];
}
