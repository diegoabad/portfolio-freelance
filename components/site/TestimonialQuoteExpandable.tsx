"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

type Props = {
  quote: string;
  /** Avisar al padre (p. ej. altura fija de tarjeta en móvil). No llamar desde dentro del updater de setState. */
  onExpandedChange?: (expanded: boolean) => void;
};

export function TestimonialQuoteExpandable({ quote, onExpandedChange }: Props) {
  const [expanded, setExpanded] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [needsClamp, setNeedsClamp] = useState(false);

  useEffect(() => {
    onExpandedChange?.(expanded);
  }, [expanded, onExpandedChange]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const p = pRef.current;
    if (!wrap || !p) return;

    function measure() {
      const node = pRef.current;
      const box = wrapRef.current;
      if (!node || !box) return;
      if (expanded) return;
      setNeedsClamp(node.scrollHeight > box.clientHeight + 4);
    }

    measure();
    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [quote, expanded]);

  const showControls = needsClamp;

  return (
    <blockquote className="flex min-h-0 flex-col gap-1.5 text-foreground/90 max-md:min-h-0 max-md:flex-1 max-md:justify-between md:min-h-0 md:flex-1 md:justify-start">
      <div className="flex min-h-0 items-stretch gap-0 max-md:min-h-0 max-md:flex-1 md:min-h-0 md:flex-1 md:gap-3">
        <Quote
          className="mt-0.5 hidden h-5 w-5 shrink-0 text-primary/25 sm:h-6 sm:w-6 md:block"
          strokeWidth={1.25}
          aria-hidden
        />
        <div
          ref={wrapRef}
          className={`relative flex min-w-0 flex-1 flex-col max-md:min-h-0 md:min-h-0 md:overflow-hidden ${
            !expanded && needsClamp
              ? "overflow-hidden md:max-h-[min(6.75rem,100%)]"
              : ""
          }`}
        >
          <p
            ref={pRef}
            className="border-l-2 border-primary/35 pl-3 pb-px text-[15px] leading-relaxed text-pretty whitespace-pre-line sm:pl-4 md:text-[16px]"
          >
            {quote}
          </p>
          {!expanded && needsClamp ? (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-background from-[12%] via-background/45 to-transparent"
            />
          ) : null}
        </div>
      </div>
      {showControls ? (
        <div className="flex shrink-0 gap-2.5 sm:gap-3">
          <div className="hidden w-5 shrink-0 sm:w-6 md:block" aria-hidden />
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex w-fit shrink-0 items-center gap-1 text-[15px] font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm md:text-base"
            aria-expanded={expanded}
          >
            {expanded ? "Leer menos" : "Leer más"}
            {expanded ? (
              <ChevronUp className="h-4 w-4 shrink-0 md:h-5 md:w-5" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4 shrink-0 md:h-5 md:w-5" aria-hidden />
            )}
          </button>
        </div>
      ) : null}
    </blockquote>
  );
}
