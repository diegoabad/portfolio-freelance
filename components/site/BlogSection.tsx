import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPostsSorted } from "@/lib/blog-posts";

const PREVIEW_COUNT = 3;

export function BlogSection() {
  const preview = blogPostsSorted.slice(0, PREVIEW_COUNT);

  return (
    <section id="blog" className="relative border-t border-border py-20 md:py-28 lg:py-32">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Blog</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
              Ideas sobre <span className="text-primary">software y operación</span>
            </h2>
            <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed md:text-lg">
              Artículos con fecha, FAQs y enlaces a servicios: automatización, WhatsApp para negocios y cómo encarar
              proyectos con sentido.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[10px] border-2 border-primary/45 bg-primary/[0.09] px-5 py-2.5 text-sm font-semibold text-primary backdrop-blur-sm transition hover:border-primary/80 hover:bg-primary/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:mb-1"
          >
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            Ver todas las entradas
          </Link>
        </div>

        <div className="mt-10 md:mt-12 grid gap-4 md:gap-5 lg:grid-cols-3" aria-label="Últimas entradas del blog">
          {preview.map((post) => (
            <BlogPostCard key={post.slug} post={post} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
