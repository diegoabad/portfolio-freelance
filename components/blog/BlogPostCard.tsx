import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BlogTopicChip } from "@/components/blog/BlogTopicChip";
import type { BlogPost } from "@/lib/blog-posts";
import { formatBlogDate } from "@/lib/blog-posts";

type Props = {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
  /** Carrusel/fila flex: usar flex-1 en lugar de h-full (100% no calcula bien si el padre no tiene alto fijo). */
  sameHeightRow?: boolean;
};

export function BlogPostCard({ post, headingLevel = "h2", sameHeightRow = false }: Props) {
  const TitleTag = headingLevel;
  const heightLayout = sameHeightRow ? "flex-1 min-h-0" : "h-full min-h-0";

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-border bg-background/60 p-5 md:p-6 backdrop-blur transition hover:border-primary/40 ${heightLayout}`}
    >
      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
        <BlogTopicChip track={post.topicTrack} />
        <time className="inline-flex items-center gap-1.5 tabular-nums leading-none" dateTime={post.publishedAt}>
          <Calendar className="h-[1em] w-[1em] shrink-0 text-primary/70" aria-hidden />
          {formatBlogDate(post.publishedAt)}
        </time>
      </div>

      <TitleTag className="mt-3 min-h-18 font-display text-xl font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors md:min-h-21 md:text-2xl">
        <Link
          href={`/blog/${post.slug}`}
          title={post.title}
          className="after:absolute after:inset-0 after:rounded-2xl after:outline-none focus-visible:after:ring-2 focus-visible:after:ring-primary/50 focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-background wrap-anywhere line-clamp-2"
        >
          {post.title}
        </Link>
      </TitleTag>

      <div className="mt-2 flex min-h-19 flex-1 flex-col overflow-hidden md:min-h-22">
        <p
          title={post.description}
          className="text-[15px] leading-relaxed text-muted-foreground line-clamp-3 md:text-base"
        >
          {post.description}
        </p>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="relative mt-3 inline-flex w-fit shrink-0 items-center gap-1.5 text-[15px] font-semibold text-primary hover:underline underline-offset-4 md:text-base"
      >
        Leer artículo
        <ArrowUpRight className="h-4 w-4 shrink-0 md:h-5 md:w-5" aria-hidden />
      </Link>
    </article>
  );
}
