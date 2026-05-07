import dynamic from "next/dynamic";

const CaseStudyGallery = dynamic(
  () => import("@/components/site/CaseStudyGallery").then((mod) => mod.CaseStudyGallery),
  {
    loading: () => (
      <div
        className="mt-5 md:mt-6 aspect-video sm:aspect-16/10 rounded-xl border border-border bg-muted/20 animate-pulse"
        aria-hidden
      />
    ),
  },
);

const projects = [
  {
    tag: "App pacientes - INECO",
    title: "Aplicación para gestión clínica",
    problem:
      "La gestión de pacientes, turnos y evaluaciones estaba distribuida en múltiples herramientas, generando errores y pérdida de información.",
    solution:
      "Aplicación centralizada para la gestión clínica, con agenda, seguimiento de pacientes y acceso unificado a la información.",
    result:
      "Operación más ordenada, reducción del trabajo administrativo y mejor acceso a la información clínica.",
    images: [
      "/projects/ineco/04-nuevo-turno.png",
      "/projects/ineco/01-inicio.png",
      "/projects/ineco/02-elegir-profesional.png",
      "/projects/ineco/03-mis-recetas.png",
    ],
  },
  {
    tag: "Cotilink",
    title: "Plataforma de presupuestos digitales",
    problem:
      "Los presupuestos se enviaban en PDF sin visibilidad sobre si el cliente los veía o avanzaba.",
    solution:
      "Plataforma web con presupuestos interactivos, seguimiento en tiempo real y aprobación online.",
    result: "Mayor control del proceso comercial y mejora en el cierre de ventas.",
    images: [
      "/projects/cotilink/01-login.png",
      "/projects/cotilink/02-dashboard.png",
      "/projects/cotilink/03-editor.png",
      "/projects/cotilink/04-detalle-linea.png",
      "/projects/cotilink/05-confirmar-proyecto.png",
    ],
  },
  {
    tag: "Bot de WhatsApp",
    title: "Automatización de atención por WhatsApp",
    problem: "Equipos saturados respondiendo consultas repetitivas sin seguimiento ordenado.",
    solution:
      "Plataforma integrada con bots de WhatsApp (con y sin IA) para responder consultas, automatizar flujos y gestionar conversaciones.",
    result: "Respuestas 24/7, menor carga operativa y mejor organización de la atención.",
    images: [
      "/projects/chatbot/01-simulacion-conversacion.png",
      "/projects/chatbot/02-panel-intenciones.png",
    ],
  },
  {
    tag: "Informes con IA - INECO",
    title: "Plataforma de informes clínicos con IA",
    problem:
      "Pasar de notas clínicas a informes profesionales implicaba mucho trabajo manual y formatos poco uniformes.",
    solution:
      "Aplicación web para tomar notas estructuradas, elegir el tipo de informe y generar documentos con IA, con historial y exportación.",
    result: "Informes en minutos, menos carga administrativa y documentación más consistente.",
    images: [
      "/projects/informes/01-login.png",
      "/projects/informes/02-landing.png",
      "/projects/informes/03-creador-informes.png",
    ],
  },
  {
    tag: "Hablán",
    title: "Plataforma de ejercicios cognitivos",
    problem:
      "Los profesionales debían crear ejercicios manualmente para pacientes con dificultades de comprensión.",
    solution:
      "Plataforma con ejercicios interactivos para trabajar interpretación y habilidades cognitivas.",
    result: "Ahorro de tiempo en la preparación y mejor adherencia de los pacientes.",
    images: [
      "/projects/hablan/01-mis-actividades.png",
      "/projects/hablan/02-mi-progreso.png",
      "/projects/hablan/03-palabra-imagen-intro.png",
      "/projects/hablan/04-ejercicio-palabra-imagen.png",
    ],
  },
  {
    tag: "Cogniare",
    title: "Sistema de gestión para profesionales de salud",
    problem:
      "Psicólogos y psicopedagogos gestionaban pacientes y turnos en múltiples herramientas o de forma manual.",
    solution:
      "Plataforma centralizada para gestión de pacientes, agenda y seguimiento clínico.",
    result: "Organización de la información y ahorro de tiempo administrativo.",
    images: [
      "/projects/cogniare/01-login.png",
      "/projects/cogniare/02-gestion-turnos.png",
      "/projects/cogniare/03-pacientes.png",
      "/projects/cogniare/04-ficha-paciente.png",
    ],
  },
];

export function Projects() {
  const total = projects.length;

  return (
    <section
      id="proyectos"
      className="relative bg-surface/30 border-b border-border pt-2 pb-20 md:pt-3 md:pb-28 lg:pt-4 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Casos reales</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Del problema a la <span className="text-primary">solución</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
            {total} proyectos con contexto de cliente: qué pasaba, qué se construyó y qué cambió en la operación.
          </p>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 grid lg:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-border bg-background/60 p-6 md:p-8 backdrop-blur hover:border-primary/40 transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs rounded-full bg-primary/15 text-primary px-3 py-1 font-medium">{p.tag}</span>
                <span className="text-xs text-muted-foreground font-mono tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-display font-semibold leading-snug">{p.title}</h3>

              {"images" in p && p.images && p.images.length > 0 ? (
                <CaseStudyGallery images={p.images} altPrefix={p.title} />
              ) : null}

              <dl className="mt-5 md:mt-6 space-y-3 md:space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Problema</dt>
                  <dd className="mt-1 text-foreground/90 leading-relaxed">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Solución</dt>
                  <dd className="mt-1 text-foreground/90 leading-relaxed">{p.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-primary">Resultado</dt>
                  <dd className="mt-1 text-foreground leading-relaxed">{p.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
