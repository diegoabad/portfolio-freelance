"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type CaseStudyGalleryProps = {
  images: string[];
  altPrefix: string;
};

export function CaseStudyGallery({ images, altPrefix }: CaseStudyGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  if (total === 0) return null;

  const src = images[index];
  const alt = `${altPrefix} — captura ${index + 1} de ${total}`;

  const lightbox =
    lightboxOpen && typeof document !== "undefined" ? (
      createPortal(
        <div
          className="fixed inset-0 z-9999 cursor-pointer bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada"
          onClick={closeLightbox}
        >
          {/* Ancho máximo para no escalar capturas por encima de su resolución (evita pixelado) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[calc(100dvh-8px)] w-full max-w-site max-h-[calc(100dvh-8px)] -translate-x-1/2 -translate-y-1/2 px-3 sm:px-4 relative">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center select-none"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={78}
              draggable={false}
            />
          </div>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 top-1/2 z-20 grid h-12 w-12 cursor-pointer -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:left-4"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-7 w-7" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 top-1/2 z-20 grid h-12 w-12 cursor-pointer -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:right-4"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-7 w-7" aria-hidden />
              </button>
            </>
          ) : null}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-2 top-2 z-20 grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:right-3 sm:top-3"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          {total > 1 ? (
            <div className="pointer-events-none absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-3 text-center text-xs text-white/80">
              <span className="tabular-nums">
                {index + 1} / {total}
              </span>
              <span className="hidden sm:inline">· Esc · clic en el fondo · ← →</span>
            </div>
          ) : (
            <p className="pointer-events-none absolute bottom-3 left-0 right-0 z-20 text-center text-xs text-white/80">
              Esc o clic en el fondo para cerrar
            </p>
          )}
        </div>,
        document.body,
      )
    ) : null;

  return (
    <div className="mt-5 md:mt-6 space-y-3">
      <div className="relative overflow-hidden rounded-xl border border-border bg-[oklch(0.06_0.01_260)] aspect-video sm:aspect-16/10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center pointer-events-none select-none"
          sizes="(max-width: 640px) min(100vw - 3rem, 360px), (max-width: 1024px) min(100vw - 4rem, 520px), 560px"
          quality={60}
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        />

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 z-1 cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Ver imagen a pantalla completa"
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 cursor-pointer place-items-center rounded-lg border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary/50 hover:bg-background"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 cursor-pointer place-items-center rounded-lg border border-border bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary/50 hover:bg-background"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-background/80 to-transparent" aria-hidden />
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "h-2 w-7 cursor-pointer rounded-full bg-primary transition-[width]"
                  : "h-2 w-2 cursor-pointer rounded-full bg-muted-foreground/35 hover:bg-muted-foreground/55 transition-[width]"
              }
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
          <span className="text-xs text-muted-foreground tabular-nums ml-1">
            {index + 1}/{total}
          </span>
        </div>
      ) : null}

      {lightbox}
    </div>
  );
}
