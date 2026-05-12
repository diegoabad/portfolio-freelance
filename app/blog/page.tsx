import type { Metadata } from "next";
import { BlogIndexListing } from "@/components/blog/BlogIndexListing";
import { PageShell } from "@/components/site/PageShell";
import { blogPostsSorted } from "@/lib/blog-posts";
import { getSiteUrl } from "@/lib/site";

const title = "Blog — software, WhatsApp, turnos y automatización";
/** Meta SEO (listado y redes). */
const description =
  "Artículos sobre bots de WhatsApp para empresas y clínicas en Argentina, turnos online, automatización administrativa, software a medida, apps móviles, stock e inventario. Guías prácticas enlazadas a servicios.";

const siteBase = getSiteUrl();
const canonical = siteBase ? new URL("/blog", siteBase).toString() : undefined;
const blogOgImage = siteBase ? new URL("/opengraph-image", siteBase).toString() : undefined;

function buildBlogIndexJsonLd(listUrl: string, posts: { url: string; title: string; datePublished: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: listUrl,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "BlogPosting",
        "@id": p.url,
        headline: p.title,
        url: p.url,
        datePublished: p.datePublished,
      },
    })),
  };
}

export const metadata: Metadata = {
  title,
  description,
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
    ...(blogOgImage ? { images: { url: blogOgImage, alt: `${title} | Diego Abad` } } : {}),
  },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const indexJsonLd =
    canonical && siteBase
      ? buildBlogIndexJsonLd(
          canonical,
          blogPostsSorted.map((p) => ({
            url: new URL(`/blog/${p.slug}`, siteBase).toString(),
            title: p.title,
            datePublished: p.publishedAt,
          })),
        )
      : null;

  return (
    <PageShell>
      {indexJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indexJsonLd) }} />
      ) : null}
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
