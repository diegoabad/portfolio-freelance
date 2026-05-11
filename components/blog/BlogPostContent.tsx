import Link from "next/link";
import type { BlogContentBlock, BlogRichSegment } from "@/lib/blog-types";

function renderSegments(segments: readonly BlogRichSegment[]) {
  return segments.map((seg, i) => {
    if (typeof seg === "string") {
      return <span key={i}>{seg}</span>;
    }
    const rel = seg.external ? "nofollow noreferrer noopener" : undefined;
    const className =
      "font-medium text-primary underline-offset-4 hover:underline break-words";
    if (seg.external) {
      return (
        <a key={i} href={seg.href} target="_blank" rel={rel} className={className}>
          {seg.label}
        </a>
      );
    }
    return (
      <Link key={i} href={seg.href} className={className}>
        {seg.label}
      </Link>
    );
  });
}

export function BlogPostContent({ blocks }: { blocks: readonly BlogContentBlock[] }) {
  return (
    <div className="space-y-5 text-[15px] leading-[1.68] text-foreground/90 md:text-[16px] md:leading-[1.65] [&_p]:text-pretty">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="[&:not(:first-child)]:mt-0">
              {renderSegments(block.segments)}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              id={block.id}
              className="scroll-mt-28 pt-4 font-display text-2xl font-semibold tracking-tight text-foreground first:pt-0 md:text-[1.65rem] md:leading-snug"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              id={block.id}
              className="scroll-mt-28 pt-2 font-display text-lg font-semibold tracking-tight text-foreground md:text-xl"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 marker:text-primary">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "faq") {
          return (
            <div key={i} className="mt-10 space-y-3 rounded-2xl border border-border bg-surface/40 p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Preguntas frecuentes</p>
              <dl className="space-y-5">
                {block.items.map((item) => (
                  <div key={item.question}>
                    <dt className="font-display font-semibold text-foreground">{item.question}</dt>
                    <dd className="mt-2 text-muted-foreground leading-[1.65]">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
