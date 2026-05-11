"use client";

import type { MouseEvent, ReactNode } from "react";

/** Enlace a `/#sección`: fuerza navegación completa para que el navegador aplique el hash (Next.js Link suele ir a `/` y quedar arriba). */
export function ForceHomeHashLink({
  hash,
  className,
  children,
}: {
  hash: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  const href = `/${hash}`;

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.location.assign(href);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
