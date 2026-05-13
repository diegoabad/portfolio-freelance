"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import type { Testimonial } from "@/components/site/testimonials-data";
import { TestimonialQuoteExpandable } from "@/components/site/TestimonialQuoteExpandable";

const btnClass =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border-2 border-primary/45 bg-primary/[0.09] text-primary transition hover:border-primary/80 hover:bg-primary/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-35";

/** Desktop: altura unificada de tarjetas colapsadas = altura natural de esta tarjeta (cita sin ampliar). */
const DESKTOP_CARD_HEIGHT_REFERENCE_NAME = "José Contreras Márquez";

function Avatar({ imageSrc, name }: { imageSrc: string; name: string }) {
  return (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/40 bg-muted/40 ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition duration-300 group-hover:border-primary/60 group-hover:ring-primary/35">
      <Image
        src={imageSrc}
        alt={`Foto de perfil de ${name}`}
        width={64}
        height={64}
        className="h-full w-full object-cover"
        sizes="64px"
        quality={72}
        loading="lazy"
        fetchPriority="low"
        decoding="async"
      />
    </div>
  );
}

function ProjectChips({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <div
      className={`flex shrink-0 flex-wrap gap-1.5 sm:gap-2 ${className}`.trim()}
      aria-label="Proyectos relacionados con este testimonio"
    >
      {"projectName" in t ? (
        <span className="inline-flex rounded-full border border-primary/35 bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)] sm:px-3 sm:py-1">
          {t.projectName}
        </span>
      ) : (
        t.projectNames.map((name) => (
          <span
            key={name}
            className="inline-flex rounded-full border border-primary/35 bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)] sm:px-3 sm:py-1"
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
  reportQuoteExpanded,
}: {
  t: Testimonial;
  registerArticle: (name: string, el: HTMLDivElement | null) => void;
  reportQuoteExpanded: (name: string, expanded: boolean) => void;
}) {
  const [quoteExpanded, setQuoteExpanded] = useState(false);

  const setArticleRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerArticle(t.name, el);
    },
    [t.name, registerArticle],
  );

  useEffect(() => {
    reportQuoteExpanded(t.name, quoteExpanded);
  }, [quoteExpanded, t.name, reportQuoteExpanded]);

  return (
    <article
      ref={setArticleRef}
      className={`group relative flex min-h-0 w-full shrink-0 flex-col overflow-hidden rounded-2xl border-2 border-border/90 bg-linear-to-br from-primary/[0.08] via-background/88 to-background/72 px-5 py-5 shadow-[0_10px_36px_-22px_rgba(0,0,0,0.42)] backdrop-blur-md max-md:backdrop-blur-none transition duration-300 hover:border-primary/50 hover:shadow-[0_18px_48px_-18px_oklch(0.55_0.14_250/0.2)] md:box-border md:flex md:flex-col md:overflow-hidden md:px-5 md:py-5 ${
        quoteExpanded
          ? "max-md:h-auto max-md:min-h-[22rem] max-md:overflow-visible md:!h-auto md:!max-h-none md:!min-h-0 md:overflow-visible"
          : "max-md:h-[21rem] max-md:overflow-hidden"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/22 blur-3xl opacity-35 transition-opacity duration-500 group-hover:opacity-80"
        aria-hidden
      />
      <div className="relative z-[1] w-full min-w-0 shrink-0">
        {/* Móvil: chips → fila foto + nombre con cargo debajo → (cita abajo) */}
        <div className="flex flex-col gap-4 md:hidden">
          <ProjectChips t={t} className="justify-start" />
          <div className="flex min-w-0 items-center gap-2.5">
            <Avatar imageSrc={t.imageSrc} name={t.name} />
            <div className="min-w-0 flex-1 text-left">
              {t.linkedInUrl ? (
                <a
                  href={t.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex max-w-full items-center gap-[7px] font-display text-base font-semibold leading-snug text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  <span className="min-w-0 wrap-break-word">{t.name}</span>
                  <Linkedin className="h-4 w-4 shrink-0 text-primary/80 group-hover:text-primary" aria-hidden />
                  <span className="sr-only">(abre perfil de LinkedIn en una pestaña nueva)</span>
                </a>
              ) : (
                <span className="inline-flex max-w-full items-center gap-[7px] font-display text-base font-semibold leading-snug text-foreground">
                  <span className="min-w-0 wrap-break-word">{t.name}</span>
                </span>
              )}
              <p className="text-sm leading-snug text-muted-foreground">
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
        </div>

        {/* Desktop: foto+nombre+cargo | chips */}
        <div className="hidden items-start justify-between gap-3 md:flex">
          <div className="flex min-w-0 flex-1 items-center gap-2">
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
              <p className="text-sm leading-snug text-muted-foreground">
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
          <ProjectChips t={t} className="justify-end" />
        </div>
      </div>

      <div className="relative z-[1] mt-3.5 flex min-h-0 flex-col max-md:min-h-0 max-md:flex-1 md:mt-4 md:flex-1 md:overflow-hidden">
        <TestimonialQuoteExpandable quote={t.quote} onExpandedChange={setQuoteExpanded} />
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

  const articlesRef = useRef(new Map<string, HTMLDivElement>());
  const joseCollapsedHeightPx = useRef<number | null>(null);
  const expandedQuoteRef = useRef(new Set<string>());

  const applyDesktopUniformCardHeight = useCallback(() => {
    const desktop =
      typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
    const map = articlesRef.current;
    const expanded = expandedQuoteRef.current;

    const clearSizing = (el: HTMLDivElement) => {
      el.style.removeProperty("min-height");
      el.style.removeProperty("height");
      el.style.removeProperty("max-height");
      el.style.removeProperty("overflow");
    };

    if (!desktop) {
      for (const el of map.values()) clearSizing(el);
      return;
    }

    const joseEl = map.get(DESKTOP_CARD_HEIGHT_REFERENCE_NAME);
    if (!joseEl) return;

    let H = joseCollapsedHeightPx.current ?? 0;
    if (!expanded.has(DESKTOP_CARD_HEIGHT_REFERENCE_NAME)) {
      clearSizing(joseEl);
      H = Math.ceil(joseEl.getBoundingClientRect().height);
      if (H > 0) joseCollapsedHeightPx.current = H;
    }

    if (H <= 0) return;

    for (const [name, el] of map) {
      if (expanded.has(name)) {
        clearSizing(el);
      } else {
        el.style.boxSizing = "border-box";
        el.style.minHeight = `${H}px`;
        el.style.height = `${H}px`;
        el.style.maxHeight = `${H}px`;
        el.style.overflow = "hidden";
      }
    }
  }, []);

  const reportQuoteExpanded = useCallback(
    (name: string, expanded: boolean) => {
      const r = expandedQuoteRef.current;
      if (expanded) r.add(name);
      else r.delete(name);
      applyDesktopUniformCardHeight();
    },
    [applyDesktopUniformCardHeight],
  );

  const registerArticle = useCallback(
    (name: string, el: HTMLDivElement | null) => {
      if (el) articlesRef.current.set(name, el);
      else articlesRef.current.delete(name);
      applyDesktopUniformCardHeight();
    },
    [applyDesktopUniformCardHeight],
  );

  useLayoutEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => applyDesktopUniformCardHeight());
    });
    return () => cancelAnimationFrame(id);
  }, [items.length, applyDesktopUniformCardHeight]);

  useEffect(() => {
    function onResize() {
      joseCollapsedHeightPx.current = null;
      applyDesktopUniformCardHeight();
    }
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [applyDesktopUniformCardHeight]);

  useEffect(() => {
    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      void document.fonts.ready.then(() => {
        if (!cancelled) {
          joseCollapsedHeightPx.current = null;
          applyDesktopUniformCardHeight();
        }
      });
    }
    return () => {
      cancelled = true;
    };
  }, [applyDesktopUniformCardHeight]);

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
    <div className="mt-6 space-y-2 md:mt-8">
      <div className="flex flex-wrap items-center justify-end gap-2">
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
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t) => (
          <div
            key={t.name}
            data-testimonial-card
            className="flex w-full min-w-full shrink-0 snap-start flex-col self-start md:w-[calc((100%-1.25rem)/2)] md:min-w-[calc((100%-1.25rem)/2)]"
          >
            <TestimonialCard
              t={t}
              registerArticle={registerArticle}
              reportQuoteExpanded={reportQuoteExpanded}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
