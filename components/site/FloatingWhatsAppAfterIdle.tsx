"use client";

import { useEffect, useRef, useState } from "react";
import { FloatingWhatsAppDynamic } from "@/components/site/FloatingWhatsAppDynamic";

const placeholderClass =
  "fixed z-60 h-14 w-14 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]";

/**
 * Carga el chunk del botón flotante tras idle (o timeout corto), para no competir con LCP / hidratación en móvil.
 * El placeholder reserva el mismo espacio que el botón real.
 */
export function FloatingWhatsAppAfterIdle() {
  const [show, setShow] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const go = () => {
      if (fired.current) return;
      fired.current = true;
      setShow(true);
    };

    let idleId: number | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(go, { timeout: 2800 });
    }
    const t = window.setTimeout(go, 4200);

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      window.clearTimeout(t);
    };
  }, []);

  if (!show) {
    return <div className={placeholderClass} aria-hidden />;
  }

  return <FloatingWhatsAppDynamic />;
}
