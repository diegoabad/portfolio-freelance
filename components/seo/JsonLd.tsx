import { CONTACT_EMAIL } from "@/lib/contact";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";

const KNOWS_ABOUT = [
  "Desarrollo web",
  "Aplicaciones web",
  "Desarrollo de software",
  "Software a medida",
  "Sistemas web empresariales",
  "Automatización de procesos",
  "Automatización para clínicas y pymes",
  "Inteligencia artificial aplicada a negocios",
  "Agentes de automatización",
  "SaaS",
  "Bots de WhatsApp",
  "Chatbots para atención al cliente",
  "Sistemas de turnos online",
  "Agenda médica online",
  "Control de stock e inventario",
  "Aplicaciones móviles para empresas",
  "Programación",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Flutter",
  "PostgreSQL",
  "Docker",
  "n8n",
  "Integraciones API",
] as const;

export function JsonLd() {
  const base = getSiteUrl();

  const person: Record<string, unknown> = {
    "@type": "Person",
    name: "Diego Abad",
    jobTitle: "Desarrollador de software fullstack",
    description:
      "Desarrollador de software fullstack en Argentina: aplicaciones web, software a medida, automatización de procesos e integraciones, bots de WhatsApp, turnos online, apps móviles e inventario. Stack React, Next.js, Node.js, TypeScript.",
    email: CONTACT_EMAIL,
    sameAs: [LINKEDIN_PROFILE_URL],
    knowsAbout: [...KNOWS_ABOUT],
  };

  if (base) {
    person["@id"] = `${base}/#person`;
    person.url = base;
  }

  const graph: Record<string, unknown>[] = [person];

  if (base) {
    graph.push({
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: "Diego Abad — Desarrollo web y software a medida",
      description:
        "Software a medida y desarrollo web en Argentina: automatización de procesos, bots de WhatsApp, turnos online, apps para clínicas, stock e inventario. React, Next.js y Node.js.",
      inLanguage: "es-AR",
      publisher: { "@id": `${base}/#person` },
    });
  }

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
