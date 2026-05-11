import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronLeft, ExternalLink } from "lucide-react";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogTopicChip } from "@/components/blog/BlogTopicChip";
import { PageShell } from "@/components/site/PageShell";
import {
  formatBlogDate,
  getAllBlogSlugs,
  getBlogPostBySlug,
  getFaqItemsFromPost,
} from "@/lib/blog-posts";
import type { BlogPost } from "@/lib/blog-types";
import { blogTopicLabel } from "@/lib/blog-topics";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

function buildArticleJsonLd(post: BlogPost, url: string, imageUrls?: string[]) {
  const desc = post.metaDescription ?? post.description;
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: desc,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Diego Abad",
      url: LINKEDIN_PROFILE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Diego Abad",
      url: LINKEDIN_PROFILE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: blogTopicLabel(post.topicTrack),
    inLanguage: "es-AR",
  };
  if (imageUrls?.length) {
    base.image = imageUrls;
  }
  if (post.keywords?.length) {
    base.keywords = [...post.keywords].slice(0, 20).join(", ");
  }
  return base;
}

function buildFaqPageJsonLd(items: { question: string; answer: string }[]) {
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const siteBase = getSiteUrl();
  const canonical = siteBase ? new URL(`/blog/${slug}`, siteBase).toString() : undefined;
  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.description;

  const ogTags = post.keywords?.length ? [...post.keywords].slice(0, 12) : undefined;
  const defaultOgImage = siteBase ? new URL("/opengraph-image", siteBase).toString() : undefined;

  return {
    title,
    description,
    ...(post.keywords?.length ? { keywords: [...post.keywords] } : {}),
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: ["Diego Abad"],
      ...(ogTags?.length ? { tags: ogTags } : {}),
      locale: "es_AR",
      siteName: "Diego Abad",
      ...(canonical ? { url: canonical } : {}),
      ...(defaultOgImage ? { images: [{ url: defaultOgImage, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const siteBase = getSiteUrl();
  const canonical = siteBase ? new URL(`/blog/${slug}`, siteBase).toString() : "";
  const faqItems = getFaqItemsFromPost(post);
  const faqJsonLd = faqItems.length > 0 ? buildFaqPageJsonLd(faqItems) : null;
  const articleOgImage = siteBase ? new URL("/opengraph-image", siteBase).toString() : undefined;

  return (
    <PageShell>
      {canonical ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildArticleJsonLd(post, canonical, articleOgImage ? [articleOgImage] : undefined)),
          }}
        />
      ) : null}
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      <main className="flex-1 border-b border-border bg-background">
        <article className="max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <nav
              className="mb-4 text-[13px] font-mono leading-snug text-muted-foreground wrap-break-word md:mb-5 md:text-sm"
              aria-label="Ruta del artículo"
            >
              <Link href="/blog" className="text-muted-foreground underline-offset-2 transition-colors hover:text-primary hover:underline">
                blog
              </Link>
              <span className="text-muted-foreground/65" aria-hidden>
                /
              </span>
              <span className="text-muted-foreground/90">{slug}</span>
            </nav>
            <header>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                <BlogTopicChip track={post.topicTrack} />
                <time className="inline-flex items-center gap-1.5 tabular-nums" dateTime={post.publishedAt}>
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-primary/70" aria-hidden />
                  Publicado el {formatBlogDate(post.publishedAt)}
                </time>
              </div>
              <h1 className="mt-5 text-3xl font-display font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed md:text-lg">
                {post.metaDescription ?? post.description}
              </p>
            </header>

            <div className="prose-blog mt-10 border-t border-border pt-10 md:mt-12 md:pt-12">
              <BlogPostContent blocks={post.content} />
            </div>
          </div>

          {post.resourceLinks && post.resourceLinks.length > 0 ? (
            <section
              className="mx-auto mt-12 w-full max-w-3xl rounded-2xl border border-border bg-surface/40 p-6 md:p-8"
              aria-labelledby="blog-resources-heading"
            >
              <h2 id="blog-resources-heading" className="font-display text-lg font-semibold text-foreground md:text-xl">
                Enlaces útiles
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {post.resourceLinks.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {link.label}
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {post.relatedPost ? (
            <aside className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-primary/30 bg-primary/8 p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Seguía leyendo</p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                <Link
                  href={`/blog/${post.relatedPost.slug}`}
                  className="text-primary hover:underline underline-offset-4"
                >
                  {post.relatedPost.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed md:text-[15px]">
                {post.relatedPost.description}
              </p>
              <Link
                href={`/blog/${post.relatedPost.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                Ir al artículo →
              </Link>
            </aside>
          ) : null}

          <footer className="mx-auto mt-12 flex w-full max-w-3xl flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:pt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Todas las entradas
            </Link>
            <Link
              href="/#contacto"
              className="inline-flex w-fit items-center justify-center rounded-[10px] border-2 border-primary/45 bg-primary/9 px-4 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/80 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Consultar por tu proyecto
            </Link>
          </footer>
        </article>
      </main>
    </PageShell>
  );
}
