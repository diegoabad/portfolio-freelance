"use client";

import { useEffect, useRef, useState } from "react";

type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
  /** Contenedor semántico; los hijos directos reciben el stagger (p. ej. `ol` + `li`). */
  as?: "div" | "ol" | "ul";
};

/**
 * Anima los hijos directos en cascada al entrar en viewport (opacity + lift + leve scale).
 * Respeta prefers-reduced-motion vía CSS.
 */
export function RevealStagger({
  children,
  className = "",
  rootMargin = "0px 0px -7% 0px",
  as: Tag = "div",
}: RevealStaggerProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const olRef = useRef<HTMLOListElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = Tag === "ol" ? olRef.current : Tag === "ul" ? ulRef.current : divRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        io.disconnect();
      },
      { rootMargin, threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, Tag]);

  const cls = `reveal-stagger ${active ? "reveal-stagger--in" : ""} ${className}`.trim();

  if (Tag === "ol") {
    return (
      <ol ref={olRef} className={cls}>
        {children}
      </ol>
    );
  }
  if (Tag === "ul") {
    return (
      <ul ref={ulRef} className={cls}>
        {children}
      </ul>
    );
  }
  return (
    <div ref={divRef} className={cls}>
      {children}
    </div>
  );
}
