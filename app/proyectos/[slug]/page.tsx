import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { ForceHomeHashLink } from "@/components/site/ForceHomeHashLink";
import { PageShell } from "@/components/site/PageShell";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { getSiteUrl } from "@/lib/site";

const CaseStudyGallery = dynamic(
  () => import("@/components/site/CaseStudyGallery").then((mod) => mod.CaseStudyGallery),
  {
    loading: () => (
      <div
        className="mt-8 aspect-video sm:aspect-16/10 rounded-xl border border-border bg-muted/20 animate-pulse md:mt-10"
        aria-hidden
      />
    ),
  },
);

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Caso no encontrado" };

  const siteBase = getSiteUrl();
  const canonical = siteBase ? new URL(`/proyectos/${slug}`, siteBase).toString() : undefined;
  const title = `${study.title} — caso de éxito`;
  const firstShot = study.images[0];
  const ogImage =
    siteBase && firstShot
      ? [{ url: new URL(firstShot, siteBase).toString(), alt: study.title }]
      : siteBase
        ? [{ url: new URL("/opengraph-image", siteBase).toString(), alt: title }]
        : undefined;

  return {
    title,
    description: study.seoDescription,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: `${title} | Diego Abad`,
      description: study.seoDescription,
      type: "article",
      locale: "es_AR",
      siteName: "Diego Abad",
      ...(canonical ? { url: canonical } : {}),
      ...(ogImage ? { images: ogImage } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Diego Abad`,
      description: study.seoDescription,
      ...(ogImage?.[0]
        ? { images: { url: ogImage[0].url.toString(), alt: ogImage[0].alt ?? title } }
        : {}),
    },
    robots: { index: true, follow: true },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const siteBase = getSiteUrl();
  const canonical = siteBase ? new URL(`/proyectos/${slug}`, siteBase).toString() : "";

  const primaryImage =
    siteBase && study.images[0] ? new URL(study.images[0], siteBase).toString() : undefined;

  const jsonLd =
    canonical.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.title,
          description: study.seoDescription,
          url: canonical,
          author: { "@type": "Person", name: "Diego Abad" },
          inLanguage: "es-AR",
          ...(primaryImage ? { image: primaryImage } : {}),
        }
      : null;

  return (
    <PageShell>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <main className="flex-1 border-b border-border bg-background">
        <article className="max-w-site mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <header className="border-b border-border pb-8 md:pb-10">
              <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                {study.tag}
              </span>
              <h1 className="mt-4 text-3xl font-display font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                {study.title}
              </h1>
              <blockquote className="mt-5 rounded-r-xl border border-primary/15 border-l-[3px] border-l-primary bg-primary/[0.07] px-4 py-3.5 text-base font-medium leading-snug text-pretty text-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.05)] md:mt-6 md:px-5 md:py-4 md:text-lg md:leading-relaxed">
                {study.detailHighlight}
              </blockquote>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
                {study.detailLead ?? study.cardSummary}
              </p>
            </header>

            {study.images.length > 0 ? (
              <div className="mt-8 md:mt-10">
                <h2 className="font-display text-lg font-semibold text-foreground md:text-xl">Capturas del proyecto</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Galería navegable; podés ampliar cada imagen para verla con más detalle.
                </p>
                <CaseStudyGallery images={[...study.images]} altPrefix={study.title} />
              </div>
            ) : null}

            <dl className="mt-10 space-y-6 border-t border-border pt-10 md:mt-12 md:space-y-8 md:pt-12">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contexto</dt>
                <dd className="mt-2 text-base leading-relaxed text-foreground/90 md:text-[17px]">{study.problem}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Qué se construyó</dt>
                <dd className="mt-2 text-base leading-relaxed text-foreground/90 md:text-[17px]">{study.solution}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary">Impacto</dt>
                <dd className="mt-2 text-base leading-relaxed text-foreground md:text-[17px]">{study.result}</dd>
              </div>
            </dl>

            <footer className="mt-12 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:pt-12">
              <ForceHomeHashLink
                hash="#proyectos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
                Todos los casos
              </ForceHomeHashLink>
              <ForceHomeHashLink
                hash="#contacto"
                className="inline-flex w-fit items-center justify-center rounded-[10px] border-2 border-primary/45 bg-primary/9 px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/80 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Consultar por tu proyecto
              </ForceHomeHashLink>
            </footer>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
