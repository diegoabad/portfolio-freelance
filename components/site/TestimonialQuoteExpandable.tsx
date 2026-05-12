"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

type Props = {
  quote: string;
};

/** Coherente con max-h del preview (~5.25rem / ~6rem a 16px) */
function previewLimitPx(): number {
  if (typeof window === "undefined") return 84;
  return window.matchMedia("(min-width: 768px)").matches ? 96 : 84;
}

export function TestimonialQuoteExpandable({ quote }: Props) {
  const [expanded, setExpanded] = useState(false);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [needsClamp, setNeedsClamp] = useState(false);

  useLayoutEffect(() => {
    const p = pRef.current;
    if (!p) return;

    function measure() {
      const node = pRef.current;
      if (!node || expanded) return;
      const limit = previewLimitPx();
      setNeedsClamp(node.scrollHeight > limit + 6);
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(p);
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, [quote, expanded]);

  const showControls = needsClamp;

  return (
    <blockquote className="flex flex-col gap-1.5 text-foreground/90">
      <div className="flex items-start gap-2.5 sm:gap-3">
        <Quote
          className="mt-0.5 h-5 w-5 shrink-0 text-primary/25 sm:h-6 sm:w-6"
          strokeWidth={1.25}
          aria-hidden
        />
        <div
          className={`relative min-w-0 flex-1 ${
            !expanded && needsClamp ? "max-h-[5.25rem] overflow-hidden md:max-h-[6rem]" : ""
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
        <div className="flex gap-2.5 sm:gap-3">
          <div className="w-5 shrink-0 sm:w-6" aria-hidden />
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
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
