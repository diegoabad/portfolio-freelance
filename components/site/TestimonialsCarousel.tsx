"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import type { Testimonial } from "@/components/site/testimonials-data";
import { TestimonialQuoteExpandable } from "@/components/site/TestimonialQuoteExpandable";

const btnClass =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border-2 border-primary/45 bg-primary/[0.09] text-primary transition hover:border-primary/80 hover:bg-primary/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35";

function Avatar({ imageSrc, name }: { imageSrc: string; name: string }) {
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/35 bg-muted/40 ring-2 ring-background">
      <Image
        src={imageSrc}
        alt={`Foto de perfil de ${name}`}
        width={48}
        height={48}
        className="h-full w-full object-cover"
        sizes="48px"
        loading="lazy"
        fetchPriority="low"
        decoding="async"
      />
    </div>
  );
}

function ProjectChips({ t }: { t: Testimonial }) {
  return (
    <div
      className="flex shrink-0 flex-wrap justify-end gap-1.5 sm:gap-2"
      aria-label="Proyectos relacionados con este testimonio"
    >
      {"projectName" in t ? (
        <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary sm:px-3 sm:py-1">
          {t.projectName}
        </span>
      ) : (
        t.projectNames.map((name) => (
          <span
            key={name}
            className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary sm:px-3 sm:py-1"
          >
            {name}
          </span>
        ))
      )}
    </div>
  );
}

function TestimonialCard({
  t,
  registerArticle,
}: {
  t: Testimonial;
  registerArticle: (name: string, syncTarget: boolean, el: HTMLDivElement | null) => void;
}) {
  const articleRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerArticle(t.name, Boolean(t.syncMinHeightFromPeers), el);
    },
    [t.name, t.syncMinHeightFromPeers, registerArticle],
  );

  return (
    <article
      ref={articleRef}
      className="group relative flex w-full flex-col rounded-2xl border border-border bg-background/60 p-4 md:p-5 backdrop-blur transition hover:border-primary/40"
    >
      <div className="w-full min-w-0 shrink-0">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-1.5 sm:gap-2">
            <Avatar imageSrc={t.imageSrc} name={t.name} />
            <div className="min-w-0 flex-1 text-left">
              {t.linkedInUrl ? (
                <a
                  href={t.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-[7px] font-display text-base font-semibold leading-snug text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm sm:text-lg"
                >
                  <span className="min-w-0 wrap-break-word">{t.name}</span>
                  <Linkedin className="h-4 w-4 shrink-0 text-primary/80 group-hover:text-primary" aria-hidden />
                  <span className="sr-only">(abre perfil de LinkedIn en una pestaña nueva)</span>
                </a>
              ) : (
                <span className="inline-flex max-w-full items-center gap-[7px] font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
                  <span className="min-w-0 wrap-break-word">{t.name}</span>
                </span>
              )}
              <p className="mt-1 hidden text-sm leading-snug text-muted-foreground md:block">
                {t.role}
                {"roleLine2" in t ? (
                  <>
                    <br />
                    {t.roleLine2}
                  </>
                ) : null}
              </p>
            </div>
          </div>
          <ProjectChips t={t} />
        </div>
        <p className="mt-3 text-left text-sm leading-snug text-muted-foreground md:hidden">
          {t.role}
          {"roleLine2" in t ? (
            <>
              <br />
              {t.roleLine2}
            </>
          ) : null}
        </p>
      </div>

      <div className="mt-3 flex flex-col md:mt-4">
        <TestimonialQuoteExpandable quote={t.quote} />
      </div>
    </article>
  );
}

type Props = {
  testimonials: readonly Testimonial[];
};

export function TestimonialsCarousel({ testimonials: items }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncStore = useRef({
    peers: new Map<string, HTMLDivElement | null>(),
    target: null as HTMLDivElement | null,
    items: items,
  });
  syncStore.current.items = items;

  const applyMatiasMinHeight = useCallback(() => {
    const s = syncStore.current;
    let maxPx = 0;
    for (const it of s.items) {
      if (it.syncMinHeightFromPeers) continue;
      const el = s.peers.get(it.name);
      if (el) maxPx = Math.max(maxPx, el.getBoundingClientRect().height);
    }
    const target = s.target;
    if (!target) return;
    if (maxPx > 0) target.style.minHeight = `${Math.ceil(maxPx)}px`;
    else target.style.removeProperty("min-height");
  }, []);

  const registerArticle = useCallback(
    (name: string, syncTarget: boolean, el: HTMLDivElement | null) => {
      const s = syncStore.current;
      if (syncTarget) {
        s.target = el;
        applyMatiasMinHeight();
        return;
      }
      if (el) s.peers.set(name, el);
      else s.peers.delete(name);
      applyMatiasMinHeight();
    },
    [applyMatiasMinHeight],
  );

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => applyMatiasMinHeight());
    });
    return () => cancelAnimationFrame(id);
  }, [items.length, applyMatiasMinHeight]);

  useEffect(() => {
    function onResize() {
      applyMatiasMinHeight();
    }
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [applyMatiasMinHeight]);

  useEffect(() => {
    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      void document.fonts.ready.then(() => {
        if (!cancelled) applyMatiasMinHeight();
      });
    }
    return () => {
      cancelled = true;
    };
  }, [applyMatiasMinHeight]);

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
  }, [items.length, updateEdges]);

  const scrollDir = (dir: -1 | 1) => {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.querySelector("[data-testimonial-card]") as HTMLElement | null;
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

  if (items.length === 0) return null;

  return (
    <div className="mt-10 md:mt-12 space-y-3">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className={btnClass}
            aria-label="Testimonio anterior"
            disabled={!canPrev}
            onClick={() => scrollDir(-1)}
          >
            <ChevronLeft className="h-5 w-5 shrink-0" aria-hidden />
          </button>
          <button
            type="button"
            className={btnClass}
            aria-label="Testimonio siguiente"
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
        aria-label="Testimonios de clientes"
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
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t) => (
          <div
            key={t.name}
            data-testimonial-card
            className="flex w-full min-w-full shrink-0 snap-start flex-col self-start md:w-[calc((100%-1.25rem)/2)] md:min-w-[calc((100%-1.25rem)/2)]"
          >
            <TestimonialCard t={t} registerArticle={registerArticle} />
          </div>
        ))}
      </div>
    </div>
  );
}
