import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { CaseStudyRichInline, stripRichMarkers } from "@/components/site/CaseStudyRichInline";
import { ForceHomeHashLink } from "@/components/site/ForceHomeHashLink";
import { PageShell } from "@/components/site/PageShell";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { robotsIndexFollowGoogle } from "@/lib/seo-robots";
import { motionFadeUpMs, motionH1Nudge } from "@/lib/site-motion";
import { buildDefaultSocialImageDescriptor } from "@/lib/social-image-meta";
import { getSiteUrl } from "@/lib/site";

const CaseStudyGallery = dynamic(
  () => import("@/components/site/CaseStudyGallery").then((mod) => mod.CaseStudyGallery),
  {
    loading: () => (
      <div
        className="mt-8 min-h-[220px] w-full rounded-xl border border-border bg-muted/20 animate-pulse md:mt-10 md:min-h-[260px]"
        aria-hidden
      />
    ),
  },
);

type Props = { params: Promise<{ slug: string }> };

function CaseStudyDetailLead({ text, className }: { text: string; className: string }) {
  const parts = text
    .split(/\n\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className={className}>
      {parts.map((para, i) => (
        <p
          key={i}
          className={`text-sm leading-relaxed text-foreground md:text-[15px] md:leading-relaxed text-pretty ${i > 0 ? "mt-4" : ""}`}
        >
          {stripRichMarkers(para)}
        </p>
      ))}
    </div>
  );
}

function splitLeadParagraphs(text: string): string[] {
  return text
    .split(/\n\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function CaseStudySectionDd({
  intro,
  list,
  secondaryIntro,
  secondaryList,
  closing,
  emphasis,
}: {
  intro: string;
  list?: readonly string[];
  secondaryIntro?: string;
  secondaryList?: readonly string[];
  closing?: string;
  emphasis?: boolean;
}) {
  const tone = emphasis
    ? "text-sm leading-relaxed text-foreground md:text-[15px] md:leading-relaxed"
    : "text-sm leading-relaxed text-foreground/90 md:text-[15px] md:leading-relaxed";
  const introParts = splitLeadParagraphs(intro);
  return (
    <dd className={`mt-2 space-y-3 ${tone}`}>
      {introParts.map((block, i) => (
        <p key={`intro-${i}`} className="text-pretty">
          {stripRichMarkers(block)}
        </p>
      ))}
      {list?.length ? (
        <ul className="list-outside list-disc space-y-1.5 ps-6 marker:text-primary/65">
          {list.map((item) => (
            <li key={item} className="ps-2">
              {stripRichMarkers(item)}
            </li>
          ))}
        </ul>
      ) : null}
      {secondaryIntro?.trim() ? (
        <p className="text-pretty">
          {stripRichMarkers(secondaryIntro.trim())}
        </p>
      ) : null}
      {secondaryList?.length ? (
        <ul className="list-outside list-disc space-y-1.5 ps-6 marker:text-primary/65">
          {secondaryList.map((item) => (
            <li key={item} className="ps-2">
              {stripRichMarkers(item)}
            </li>
          ))}
        </ul>
      ) : null}
      {closing ? (
        <p className="text-pretty">
          {stripRichMarkers(closing)}
        </p>
      ) : null}
    </dd>
  );
}

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
  const fallbackOg = buildDefaultSocialImageDescriptor(siteBase, `${title} | Diego Abad`);
  const ogImage =
    siteBase && firstShot
      ? [{ url: new URL(firstShot, siteBase).toString(), alt: study.title }]
      : fallbackOg
        ? [fallbackOg]
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
        ? { images: { url: ogImage[0].url, alt: ogImage[0].alt ?? `${title} | Diego Abad` } }
        : {}),
    },
    robots: robotsIndexFollowGoogle,
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
              <span
                className={`inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary ${motionFadeUpMs(24)}`}
              >
                {study.tag}
              </span>
              <h1
                className={`mt-5 text-3xl font-display font-semibold tracking-tight text-pretty text-foreground md:mt-6 md:text-4xl lg:text-[2.35rem] lg:leading-tight ${motionH1Nudge()}`}
              >
                {study.title}
              </h1>
              {study.detailHighlight?.trim() ? (
                <blockquote
                  className={`mt-6 rounded-r-xl border border-primary/15 border-l-[3px] border-l-primary bg-primary/[0.07] px-4 py-3.5 text-base font-medium leading-snug text-pretty text-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.05)] md:mt-7 md:px-5 md:py-4 md:text-lg md:leading-relaxed ${motionFadeUpMs(40)}`}
                >
                  {stripRichMarkers(study.detailHighlight.trim())}
                </blockquote>
              ) : null}
              <CaseStudyDetailLead
                text={study.detailLead ?? study.cardSummary}
                className={`${study.detailHighlight?.trim() ? "mt-7 md:mt-8" : "mt-6 md:mt-7"} ${motionFadeUpMs(52)}`}
              />
            </header>

            {study.images.length > 0 ? (
              <div className={`mt-8 md:mt-10 ${motionFadeUpMs(64)}`}>
                <h2 className="font-display text-lg font-semibold text-foreground md:text-xl">Vista del proyecto</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Referencia visual del caso; hacé clic en la imagen para ampliarla y ver más detalle.
                </p>
                <CaseStudyGallery images={[...study.images]} altPrefix={study.title} />
              </div>
            ) : null}

            <dl className={`mt-10 space-y-6 border-t border-border pt-10 md:mt-12 md:space-y-8 md:pt-12 ${motionFadeUpMs(72)}`}>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary md:text-[0.95rem]">Contexto</dt>
                <CaseStudySectionDd
                  intro={study.problem}
                  list={study.problemList}
                  secondaryIntro={study.problemSecondaryIntro}
                  secondaryList={study.problemSecondaryList}
                />
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary md:text-[0.95rem]">Qué se construyó</dt>
                <CaseStudySectionDd
                  intro={study.solution}
                  list={study.solutionList}
                  secondaryIntro={study.solutionSecondaryIntro}
                  secondaryList={study.solutionSecondaryList}
                  closing={study.solutionClosing}
                />
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-primary md:text-[0.95rem]">Impacto</dt>
                <CaseStudySectionDd
                  intro={study.result}
                  list={study.resultList}
                  closing={study.resultClosing}
                  emphasis
                />
              </div>
            </dl>

            {study.detailFooterCallout?.trim() ? (
              <aside
                className={`mt-10 rounded-2xl border-2 border-primary/25 bg-linear-to-br from-primary/[0.09] via-primary/[0.04] to-background/80 px-5 py-5 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06),0_12px_40px_-28px_oklch(0.55_0.14_250/0.18)] md:mt-12 md:px-7 md:py-6 ${motionFadeUpMs(80)}`}
              >
                <p className="text-center text-base font-medium leading-relaxed text-pretty text-foreground md:text-lg md:leading-relaxed">
                  <CaseStudyRichInline text={study.detailFooterCallout} />
                </p>
              </aside>
            ) : null}

            <footer className={`mt-12 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:pt-12 ${motionFadeUpMs(88)}`}>
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
