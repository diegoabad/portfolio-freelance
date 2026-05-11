import type { Metadata } from "next";
import { BlogIndexListing } from "@/components/blog/BlogIndexListing";
import { PageShell } from "@/components/site/PageShell";
import { blogPostsSorted } from "@/lib/blog-posts";
import { getSiteUrl } from "@/lib/site";

const title = "Blog — software, WhatsApp, turnos y automatización";
/** Meta SEO (listado y redes). */
const description =
  "Artículos sobre bots de WhatsApp para empresas y clínicas en Argentina, turnos online, automatización administrativa, software a medida, apps móviles, stock e inventario. Guías prácticas enlazadas a servicios.";

const blogIndexKeywords = [
  "blog desarrollo software Argentina",
  "guías bots WhatsApp",
  "automatización clínicas",
  "turnos online consultorios",
  "software a medida salud",
  "apps móviles clínicas",
  "control de stock inventario",
  "chatbot WhatsApp pymes",
  "automatización procesos Argentina",
  "Diego Abad blog",
];

const siteBase = getSiteUrl();
const canonical = siteBase ? new URL("/blog", siteBase).toString() : undefined;
const blogOgImage = siteBase ? new URL("/opengraph-image", siteBase).toString() : undefined;

export const metadata: Metadata = {
  title,
  description,
  keywords: blogIndexKeywords,
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: `${title} | Diego Abad`,
    description,
    type: "website",
    locale: "es_AR",
    siteName: "Diego Abad",
    ...(canonical ? { url: canonical } : {}),
    ...(blogOgImage ? { images: [{ url: blogOgImage, alt: title }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Diego Abad`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <main className="flex-1 border-b border-border bg-background">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">
          <header className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
              Blog
            </h1>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              En este apartado voy sumando artículos que me hubiera gustado leer antes: temas que aparecen seguido en
              proyectos reales — turnos, WhatsApp, clínicas, stock, apps o desarrollo a medida — explicados de forma
              simple, para ubicarte sin rodeos.
            </p>
          </header>

          <BlogIndexListing posts={blogPostsSorted} />
        </div>
      </main>
    </PageShell>
  );
}
