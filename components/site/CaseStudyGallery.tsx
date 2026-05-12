"use client";

import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type CaseStudyGalleryProps = {
  images: string[];
  altPrefix: string;
};

/** Capturas UI: capa de composición estable en Chromium/Safari al escalar. */
const SHARP_IMG = "[backface-visibility:hidden] [transform:translateZ(0)]";

/** Vista ampliada: % del viewport + tope en px (evita tamaños desmesurados en 4K/ultrawide). */
const LIGHTBOX_MAX_BOX = "max-h-[min(94dvh,1680px)] max-w-[min(96vw,1920px)]";

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP_BTN = 0.4;
const ZOOM_STEP_WHEEL = 0.1;

function clampZoom(n: number) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, n));
}

export function CaseStudyGallery({ images, altPrefix }: CaseStudyGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const total = images.length;

  const lightboxSurfaceRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startClientX: number;
    startClientY: number;
    startPanX: number;
    startPanY: number;
  } | null>(null);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const resetLightboxView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const [isPanning, setIsPanning] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    resetLightboxView();
  }, [lightboxOpen, index, resetLightboxView]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "+" || e.key === "Add") {
        e.preventDefault();
        setZoom((z) => clampZoom(z + ZOOM_STEP_BTN));
        return;
      }
      if (e.key === "-" || e.key === "Subtract") {
        e.preventDefault();
        setZoom((z) => {
          const nz = clampZoom(z - ZOOM_STEP_BTN);
          if (nz <= 1) setPan({ x: 0, y: 0 });
          return nz;
        });
        return;
      }
      if (e.key === "0") {
        e.preventDefault();
        resetLightboxView();
        return;
      }
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
  }, [lightboxOpen, closeLightbox, goPrev, goNext, resetLightboxView]);

  useLayoutEffect(() => {
    if (!lightboxOpen) return;
    const el = lightboxSurfaceRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dir = e.deltaY > 0 ? -1 : 1;
      setZoom((z) => {
        const nz = clampZoom(z + dir * ZOOM_STEP_WHEEL);
        if (nz <= 1) setPan({ x: 0, y: 0 });
        return nz;
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [lightboxOpen, index]);

  const zoomIn = useCallback(() => {
    setZoom((z) => clampZoom(z + ZOOM_STEP_BTN));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const nz = clampZoom(z - ZOOM_STEP_BTN);
      if (nz <= 1) setPan({ x: 0, y: 0 });
      return nz;
    });
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;
      if (zoom <= 1) return;
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      setIsPanning(true);
      dragRef.current = {
        pointerId: e.pointerId,
        startClientX: e.clientX,
        startClientY: e.clientY,
        startPanX: pan.x,
        startPanY: pan.y,
      };
    },
    [zoom, pan.x, pan.y],
  );

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    setPan({
      x: d.startPanX + (e.clientX - d.startClientX),
      y: d.startPanY + (e.clientY - d.startClientY),
    });
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d || d.pointerId !== e.pointerId) return;
    dragRef.current = null;
    setIsPanning(false);
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      /* captura ya liberada */
    }
  }, []);

  if (total === 0) return null;

  const src = images[index];
  const alt =
    total === 1 ? `${altPrefix} — referencia visual del proyecto` : `${altPrefix} — captura ${index + 1} de ${total}`;

  const lightbox =
    lightboxOpen && typeof document !== "undefined" ? (
      createPortal(
        <div
          className="fixed inset-0 z-9999 bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada con zoom"
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 z-0 cursor-zoom-out bg-black"
            aria-label="Cerrar vista ampliada"
            onClick={closeLightbox}
          />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden p-1 sm:p-1.5">
            <div
              ref={lightboxSurfaceRef}
              className={`pointer-events-auto relative flex touch-none items-center justify-center overflow-hidden ${LIGHTBOX_MAX_BOX} ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div
                className="flex items-center justify-center will-change-transform"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isPanning ? undefined : "transform 100ms ease-out",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  draggable={false}
                  fetchPriority="high"
                  decoding="async"
                  className={`block h-auto max-h-[min(94dvh,1680px)] max-w-[min(96vw,1920px)] w-auto object-contain object-center select-none ${SHARP_IMG}`}
                />
              </div>
            </div>
          </div>

          {total > 1 ? (
            <div className="pointer-events-none absolute left-0 right-0 top-14 z-30 text-center text-xs text-white/75">
              <span className="tabular-nums">
                Imagen {index + 1} de {total}
              </span>
            </div>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex flex-col items-center gap-1.5 sm:bottom-4">
            <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/25 bg-black/85 px-1 py-1 text-white shadow-lg backdrop-blur-md sm:gap-1 sm:px-1.5">
              <button
                type="button"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition hover:bg-white/10 sm:h-10 sm:w-10"
                aria-label="Alejar"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomOut();
                }}
              >
                <ZoomOut className="h-5 w-5" aria-hidden />
              </button>
              <span className="min-w-[2.75rem] px-0.5 text-center text-[11px] tabular-nums text-white/90 sm:min-w-[3rem] sm:text-xs">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition hover:bg-white/10 sm:h-10 sm:w-10"
                aria-label="Acercar"
                onClick={(e) => {
                  e.stopPropagation();
                  zoomIn();
                }}
              >
                <ZoomIn className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition hover:bg-white/10 sm:h-10 sm:w-10"
                aria-label="Restablecer zoom y posición"
                onClick={(e) => {
                  e.stopPropagation();
                  resetLightboxView();
                }}
              >
                <RotateCcw className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <p className="max-w-[min(100vw-2rem,28rem)] px-2 text-center text-[10px] leading-snug text-white/65 sm:text-[11px]">
              Rueda del mouse: zoom · con zoom: arrastrá · teclas + − y 0: zoom / restablecer · Esc o fondo negro:
              cerrar
            </p>
          </div>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="pointer-events-auto absolute left-2 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:left-4"
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
                className="pointer-events-auto absolute right-2 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:right-4"
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
            className="pointer-events-auto absolute right-2 top-2 z-40 grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/25 bg-black/70 text-white shadow-lg backdrop-blur-md transition hover:bg-black/85 sm:right-3 sm:top-3"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>,
        document.body,
      )
    ) : null;

  return (
    <div className="mt-5 md:mt-6 space-y-3">
      {/* Sin aspect-ratio fijo: el marco sigue la proporción natural de la captura y usa todo el ancho del texto */}
      <div className="relative w-full overflow-hidden rounded-xl border border-border bg-[oklch(0.06_0.01_260)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- PNG en public/: ancho columna, alto intrínseco */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`block h-auto w-full max-w-full object-contain object-center pointer-events-none select-none ${SHARP_IMG}`}
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
