"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogPost } from "@/lib/blog-types";

type Props = {
  posts: readonly BlogPost[];
};

const btnClass =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border-2 border-primary/45 bg-primary/[0.09] text-primary transition hover:border-primary/80 hover:bg-primary/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35";

export function BlogHomeCarousel({ posts }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const eps = 4;
    setCanPrev(scrollLeft > eps);
    setCanNext(scrollLeft + clientWidth < scrollWidth - eps);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
  }, [posts.length, updateEdges]);

  const scrollDir = (dir: -1 | 1) => {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.querySelector("[data-carousel-card]") as HTMLElement | null;
    if (!card) return;
    const gap = 20;
    const step = card.offsetWidth + gap;
    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollBy({
      left: dir * step,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  if (posts.length === 0) return null;

  return (
    <div className="mt-10 md:mt-12 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/blog"
          className="inline-flex min-h-10 shrink-0 items-center text-sm font-semibold text-primary underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ver todas las entradas
        </Link>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className={btnClass}
            aria-label="Entradas anteriores del blog"
            disabled={!canPrev}
            onClick={() => scrollDir(-1)}
          >
            <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden />
          </button>
          <button
            type="button"
            className={btnClass}
            aria-label="Entradas siguientes del blog"
            disabled={!canNext}
            onClick={() => scrollDir(1)}
          >
            <ChevronRight className="h-5 w-5 shrink-0" aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Últimas entradas del blog"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollDir(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollDir(1);
          }
        }}
        className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            data-carousel-card
            className="flex min-h-0 w-full min-w-full shrink-0 snap-start flex-col self-stretch md:w-[calc((100%-1.25rem)/2)] md:min-w-[calc((100%-1.25rem)/2)]"
          >
            <BlogPostCard post={post} headingLevel="h3" sameHeightRow />
          </div>
        ))}
      </div>
    </div>
  );
}
