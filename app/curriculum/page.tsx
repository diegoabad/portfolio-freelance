import type { Metadata } from "next";
import Link from "next/link";
import { CvMobileContactHints } from "@/app/curriculum/CvMobileContactHints";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";

const cvDescription =
  "Curriculum vitae de Diego Abad: desarrollador de software fullstack en Buenos Aires (Argentina). React, Next.js, Node.js, TypeScript, Flutter, PostgreSQL, automatización de procesos, integraciones e inteligencia artificial en el flujo de desarrollo. CV online actualizado.";

const siteBase = getSiteUrl();
/** Portfolio público (misma lógica que sitemap / canonical). */
const publicPortfolioUrl = siteBase ?? "https://www.diegoabad.com";
const cvCanonical = siteBase ? new URL("/curriculum", siteBase).toString() : undefined;

export const metadata: Metadata = {
  title: {
    absolute: "CV Diego Abad — Desarrollador fullstack React, Next.js y Node.js",
  },
  description: cvDescription,
  keywords: [
    "CV Diego Abad",
    "curriculum vitae desarrollador",
    "desarrollador fullstack Buenos Aires",
    "desarrollador de software Argentina",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Flutter",
    "PostgreSQL",
    "automatización",
    "inteligencia artificial desarrollo",
  ],
  authors: [{ name: "Diego Abad", url: LINKEDIN_PROFILE_URL }],
  alternates: cvCanonical ? { canonical: cvCanonical } : undefined,
  openGraph: {
    title: "CV Diego Abad — Desarrollador fullstack",
    description: cvDescription,
    type: "website",
    locale: "es_AR",
    siteName: "Diego Abad",
    ...(cvCanonical ? { url: cvCanonical } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "CV Diego Abad — Desarrollador fullstack",
    description: cvDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Réplica fiel de `cv.html` (raíz del repo `web-porfolio/cv.html`).
 * Mismo árbol HTML, mismas clases. Estilos en `cv-document.css`.
 *
 * Cuando edites el CV, mantené alineado este archivo con el `<main class="cv">…</main>` de `cv.html`.
 */
export default function CurriculumPage() {
  return (
    <div id="cv-document">
      <main className="cv">
        <header className="header">
          <Link href="/" className="cv-back" aria-label="Volver al inicio">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Volver
          </Link>
          <h1 className="name">
            Diego Agustín <em>Abad</em>
          </h1>
          <p className="role">Software Developer · Full Stack &amp; Mobile</p>
          <div className="contact">
            <span
              className="contact-item is-static"
              tabIndex={0}
              aria-label="Ubicación: Buenos Aires, Argentina"
              title="Buenos Aires, Argentina"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="contact-label">Buenos Aires, Argentina</span>
            </span>
            <a
              className="contact-item"
              href="mailto:diegoabad.2289@gmail.com"
              aria-label="Enviar email a diegoabad.2289@gmail.com"
              title="diegoabad.2289@gmail.com"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <span className="contact-label">diegoabad.2289@gmail.com</span>
            </a>
            <a
              className="contact-item"
              href="https://wa.me/5491141499723"
              target="_blank"
              rel="noopener"
              aria-label="Enviar mensaje por WhatsApp al +54 9 11 4149 9723"
              title="WhatsApp: +54 9 11 4149 9723"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
              </svg>
              <span className="contact-label">+54 9 11 4149 9723</span>
            </a>
            <a
              className="contact-item"
              href={publicPortfolioUrl}
              target="_blank"
              rel="noopener"
              aria-label={`Sitio web: ${publicPortfolioUrl.replace(/^https?:\/\//, "")}`}
              title={publicPortfolioUrl.replace(/^https?:\/\//, "")}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="contact-label">www.diegoabad.com</span>
            </a>
            <a
              className="contact-item"
              href="https://github.com/diegoabad"
              target="_blank"
              rel="noopener"
              aria-label="Perfil de GitHub: github.com/diegoabad"
              title="github.com/diegoabad"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.07 3.29 9.37 7.86 10.89.58.11.79-.25.79-.56v-2.04c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56 4.56-1.52 7.85-5.82 7.85-10.89C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              <span className="contact-label">github.com/diegoabad</span>
            </a>
            <a
              className="contact-item"
              href={LINKEDIN_PROFILE_URL}
              target="_blank"
              rel="noopener"
              aria-label="Perfil de LinkedIn: linkedin.com/in/diegoabad-fullstack"
              title="linkedin.com/in/diegoabad-fullstack"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 0 1-2.07-2.06A2.06 2.06 0 0 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
              <span className="contact-label">linkedin.com/in/diegoabad-fullstack</span>
            </a>
          </div>
        </header>

        <p className="summary">
          <strong>Software Developer / Full Stack Engineer</strong> con{" "}
          <strong>+4 años de experiencia (4+ years)</strong> desarrollando plataformas web, mobile y SaaS para los
          sectores <strong>salud (healthtech)</strong>, <strong>seguros (insurtech)</strong> y energía.{" "}
          <strong>Especializado en React.js, Next.js, Node.js, TypeScript y Flutter</strong>, con foco en automatización
          de procesos, integraciones REST y desarrollo de soluciones escalables. Experiencia aplicando herramientas de
          inteligencia artificial en flujos de desarrollo y automatización, utilizando tecnologías como{" "}
          <strong>OpenAI, Claude y Cursor</strong> para acelerar procesos, mejorar productividad y optimizar la calidad
          del software. <strong>Actualmente me desempeño como contractor para Grupo INECO</strong>, colaborando en
          proyectos tecnológicos orientados al sector salud.
        </p>

        {/* 01 EXPERIENCIA -------------------------- */}
        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2 className="section-title">Experiencia profesional</h2>
          </div>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  Desarrollador de Software · <span className="entry-company">Grupo INECO</span>
                </h3>
                <p className="entry-meta">Profesional independiente · Remoto · Sector salud.</p>
              </div>
              <span className="entry-date">Jun 2025 — Actualidad</span>
            </div>
            <ul className="entry-list">
              <li>
                Mantenimiento y evolución de una aplicación móvil en <strong>Flutter</strong>: desarrollo de nuevas
                funcionalidades, integración con APIs y plataformas existentes, y mejora de la visualización y uso de
                datos dentro de la organización.
              </li>
              <li>Desarrollo de soluciones full stack con Node.js y React para necesidades clínicas y operativas internas.</li>
              <li>Aplicación de herramientas de IA en el flujo de desarrollo para acelerar entregas y mejorar la calidad del código.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">Flutter</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Docker</span>
              <span className="tech-chip">Firebase</span>
              <span className="tech-chip">MongoDB</span>
              <span className="tech-chip">Claude</span>
              <span className="tech-chip">Cursor</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  Desarrollador Full Stack · <span className="entry-company">SoulIT</span>
                </h3>
                <p className="entry-meta">Jornada completa · Remoto · Sectores seguros y energía.</p>
              </div>
              <span className="entry-date">Jun 2023 — Abr 2026</span>
            </div>
            <ul className="entry-list">
              <li>Desarrollo de nuevas funcionalidades y evolución de sistemas existentes, optimizando aplicaciones y mejorando su rendimiento.</li>
              <li>Trabajo end-to-end en proyectos para clientes del sector seguros y energía, orientados a la gestión y procesamiento de información crítica.</li>
              <li>Aplicación de buenas prácticas (SOLID, Clean Code) y revisión de código en equipo.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">NestJS</span>
              <span className="tech-chip">.NET Core</span>
              <span className="tech-chip">SQL</span>
              <span className="tech-chip">Claude</span>
              <span className="tech-chip">Cursor</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  Software Developer · <span className="entry-company">Access Informatica SRL</span>
                </h3>
                <p className="entry-meta">Jornada completa · Remoto · Sector salud — ART.</p>
              </div>
              <span className="entry-date">May 2022 — Jun 2023</span>
            </div>
            <ul className="entry-list">
              <li>Desarrollo y mantenimiento de aplicaciones .NET + React sobre sistemas de gestión médica en producción.</li>
              <li>Implementación de nuevas funcionalidades, resolución de incidencias y optimización de consultas en SQL Server para mejorar rendimiento y estabilidad.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">OpenAI</span>
              <span className="tech-chip">ChatGPT</span>
              <span className="tech-chip">.NET</span>
              <span className="tech-chip">C#</span>
              <span className="tech-chip">React</span>
              <span className="tech-chip">Redux</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">SQL Server</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  Full Stack Developer · <span className="entry-company">Ricabade</span>
                </h3>
                <p className="entry-meta">Autónomo · Remoto · Sector salud.</p>
              </div>
              <span className="entry-date">Dic 2021 — May 2022</span>
            </div>
            <ul className="entry-list">
              <li>
                Desarrollo de la plataforma interna para el sector salud: seguimiento de pacientes, asignación de turnos
                y soporte a evaluaciones profesionales, mejorando la eficiencia del proceso clínico.
              </li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">Redux</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Firebase</span>
              <span className="tech-chip">MongoDB</span>
            </div>
          </article>
        </section>

        {/* 02 PROYECTOS ---------------------------- */}
        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2 className="section-title">Proyectos seleccionados</h2>
          </div>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  <span className="entry-company">Cotilink</span> — SaaS de presupuestos digitales
                </h3>
                <p className="entry-meta">Sector servicios — plataforma de utilidad.</p>
              </div>
              <span className="entry-date">Propio · 2025 — Actualidad</span>
            </div>
            <ul className="entry-list">
              <li>SaaS de presupuestos digitales con seguimiento en tiempo real, validez con countdown y aprobación online, reemplazando los PDF estáticos sin trazabilidad.</li>
              <li>Integración con Mercado Pago Marketplace (OAuth 2.0 + application fee) para cobros con comisión por plataforma; integración con Stripe para clientes internacionales.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">Next.js</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Express</span>
              <span className="tech-chip">PostgreSQL</span>
              <span className="tech-chip">Mercado Pago API</span>
              <span className="tech-chip">Stripe</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  <span className="entry-company">Cogniare</span> — Sistema de gestión clínica
                </h3>
                <p className="entry-meta">Sector salud — psicólogos y psicopedagogos.</p>
              </div>
              <span className="entry-date">Cliente · 2024 — 2025</span>
            </div>
            <ul className="entry-list">
              <li>Plataforma centralizada para gestión de pacientes, agenda y seguimiento clínico, reemplazando flujos manuales y herramientas dispersas.</li>
              <li>Generación dinámica de informes y documentos en PDF (PDFKit) con headers por página, correcciones inline y formato profesional listo para imprimir.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">PostgreSQL</span>
              <span className="tech-chip">PDFKit</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  <span className="entry-company">Hablán</span> — Plataforma de ejercicios cognitivos
                </h3>
                <p className="entry-meta">Sector salud — fonoaudiología y rehabilitación cognitiva.</p>
              </div>
              <span className="entry-date">Cliente · 2025 — 2026</span>
            </div>
            <ul className="entry-list">
              <li>Plataforma con ejercicios interactivos para que profesionales trabajen interpretación y habilidades cognitivas con sus pacientes, eliminando la creación manual de material para cada caso.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Tailwind CSS</span>
              <span className="tech-chip">Redux</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Firebase</span>
              <span className="tech-chip">PostgreSQL</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  <span className="entry-company">Optim</span> — Gestión de materiales y stock
                </h3>
                <p className="entry-meta">Sector industrial — mantenimiento.</p>
              </div>
              <span className="entry-date">Cliente · 2025 — 2026</span>
            </div>
            <ul className="entry-list">
              <li>Sistema de gestión de materiales y stock con control de movimientos, categorización por rotación y seguimiento en tiempo real para mejorar la planificación y reducir pérdidas.</li>
              <li>Migración de aplicación legacy a React + Firebase. Módulos de cálculo estadístico para materiales de alta rotación (Punto de Pedido / PDP) y baja rotación (distribución de Poisson) con dashboards interactivos.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Tailwind CSS</span>
              <span className="tech-chip">Redux</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Firebase</span>
              <span className="tech-chip">PostgreSQL</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <div className="entry-header-main">
                <h3 className="entry-title">
                  <span className="entry-company">Remaint</span> — Gestión de mantenimiento
                </h3>
                <p className="entry-meta">Sector industrial — mantenimiento.</p>
              </div>
              <span className="entry-date">Cliente · 2025 — 2026</span>
            </div>
            <ul className="entry-list">
              <li>Sistema de gestión de mantenimiento para administrar tareas, asignaciones y registros con historial, apuntando a mejorar el seguimiento y reducir fallas operativas.</li>
            </ul>
            <div className="tech-stack">
              <span className="tech-chip">React</span>
              <span className="tech-chip">TypeScript</span>
              <span className="tech-chip">Tailwind CSS</span>
              <span className="tech-chip">Redux</span>
              <span className="tech-chip">Node.js</span>
              <span className="tech-chip">Firebase</span>
              <span className="tech-chip">PostgreSQL</span>
            </div>
          </article>
        </section>

        {/* 03 STACK -------------------------------- */}
        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2 className="section-title">Habilidades técnicas</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-cat">Frontend</div>
            <div className="skill-list">
              React (React.js / ReactJS), Next.js, TypeScript (TS), JavaScript (JS / ES6+ / ECMAScript), HTML5, CSS3,
              Tailwind CSS, Redux, Material UI (MUI), Vite, Responsive Design
            </div>

            <div className="skill-cat">Mobile</div>
            <div className="skill-list">Flutter, Dart, Mobile App Development</div>

            <div className="skill-cat">Backend</div>
            <div className="skill-list">
              Node.js (NodeJS), Express, NestJS, REST API (RESTful), .NET Core, .NET, C#, Socket.io / WebSockets,
              Webhooks
            </div>

            <div className="skill-cat">Bases de datos</div>
            <div className="skill-list">PostgreSQL (Postgres), SQL Server (MSSQL), MySQL, MongoDB, Firebase / Firestore</div>

            <div className="skill-cat">DevOps &amp; tools</div>
            <div className="skill-list">Docker, Git, GitHub, n8n, Vercel, Render, Railway, Postman, npm, Linux</div>

            <div className="skill-cat">Integraciones</div>
            <div className="skill-list">OAuth 2.0, JWT, WhatsApp Business API, Mercado Pago API, Stripe, Twilio</div>

            <div className="skill-cat">Metodologías</div>
            <div className="skill-list">SOLID, Clean Code, OOP (Object-Oriented Programming), Code Review, Agile, Scrum, Kanban</div>

            <div className="skill-cat">IA &amp; herramientas</div>
            <div className="skill-list">
              OpenAI (GPT / API), Anthropic Claude, Cursor; uso de LLMs en desarrollo, revisión de código, documentación
              y automatización de flujos
            </div>
          </div>
        </section>

        {/* 04 EDUCACIÓN ---------------------------- */}
        <section className="section section-educacion">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2 className="section-title">Educación</h2>
          </div>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                Lic. en Informática · <span className="entry-company">Universidad Siglo 21</span>
              </h3>
              <span className="entry-date">2022 — En curso</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                Bootcamp Fullstack Web Developer · <span className="entry-company">Henry</span>
              </h3>
              <span className="entry-date">+800 horas</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                Inglés B2 Upper Intermediate · <span className="entry-company">EFSER</span>
              </h3>
              <span className="entry-date">Certificado</span>
            </div>
          </article>
        </section>

        {/* 05 DOCENCIA ----------------------------- */}
        <section className="section section-docencia">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2 className="section-title">Docencia</h2>
          </div>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                <span className="docencia-line-rest">Tutor y corrector · Curso de Fullstack JavaScript</span>
                <span className="docencia-line-org">
                  · Desafío Latam<span className="docencia-line-place"> (Chile)</span>
                </span>
              </h3>
              <span className="entry-date">Ago 2023 — Feb 2026</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                <span className="docencia-line-rest">Profesor de React</span>
                <span className="docencia-line-org"> · EducacionIT</span>
              </h3>
              <span className="entry-date">Jul 2024 — Mar 2025</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                <span className="docencia-line-rest">Clases particulares de programación</span>
                <span className="docencia-line-org"> · Superprof</span>
              </h3>
              <span className="entry-date">May 2024 — Feb 2025</span>
            </div>
          </article>

          <article className="entry">
            <div className="entry-header">
              <h3 className="entry-title">
                <span className="docencia-line-rest">Tutor de cursos de desarrollo web</span>
                <span className="docencia-line-org"> · CoderHouse</span>
              </h3>
              <span className="entry-date">Abr 2022 — Abr 2024</span>
            </div>
          </article>
        </section>

        <footer className="footer">
          <span>Diego Abad · Software Developer · 2026</span>
        </footer>
      </main>
      <CvMobileContactHints />
    </div>
  );
}
