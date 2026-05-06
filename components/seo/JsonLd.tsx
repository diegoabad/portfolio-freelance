import { CONTACT_EMAIL } from "@/lib/contact";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";

const KNOWS_ABOUT = [
  "Desarrollo web",
  "Aplicaciones web",
  "Desarrollo de software",
  "Automatización de procesos",
  "SaaS",
  "Bots de WhatsApp",
  "Programación",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "n8n",
  "Integraciones API",
  "Software a medida",
  "Sistemas web empresariales",
] as const;

export function JsonLd() {
  const base = getSiteUrl();

  const person: Record<string, unknown> = {
    "@type": "Person",
    name: "Diego Abad",
    jobTitle: "Desarrollador de software fullstack",
    description:
      "Desarrollador de software fullstack: aplicaciones web, sistemas a medida, automatización y bots de WhatsApp (React, Next.js, Node.js, TypeScript).",
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
        "Software a medida, automatización de procesos, bots de WhatsApp y desarrollo web con React y Next.js.",
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
