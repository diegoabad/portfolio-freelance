import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BlogTopicChip } from "@/components/blog/BlogTopicChip";
import type { BlogPost } from "@/lib/blog-posts";
import { formatBlogDate } from "@/lib/blog-posts";

type Props = { post: BlogPost; headingLevel?: "h2" | "h3" };

export function BlogPostCard({ post, headingLevel = "h2" }: Props) {
  const TitleTag = headingLevel;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-background/60 p-6 md:p-7 backdrop-blur transition hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <BlogTopicChip track={post.topicTrack} />
        <time className="inline-flex items-center gap-1 tabular-nums" dateTime={post.publishedAt}>
          <Calendar className="h-3.5 w-3.5 shrink-0 text-primary/70" aria-hidden />
          {formatBlogDate(post.publishedAt)}
        </time>
      </div>

      <TitleTag className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors md:text-2xl">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl after:outline-none focus-visible:after:ring-2 focus-visible:after:ring-primary/50 focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-background"
        >
          {post.title}
        </Link>
      </TitleTag>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{post.description}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="relative mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4"
      >
        Leer artículo
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
