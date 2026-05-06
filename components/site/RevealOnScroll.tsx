"use client";

import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  /** Retardo extra al entrar (ms) */
  delayMs?: number;
};

export function RevealOnScroll({ children, className = "", delayMs = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        io.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-750 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98] motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:scale-100"} ${className}`}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
