"use client";

import dynamic from "next/dynamic";

/** Carga el botón flotante en un chunk aparte tras el primer paint (no puede usarse `ssr: false` desde Server Components). */
export const FloatingWhatsAppDynamic = dynamic(
  () => import("@/components/site/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp })),
  {
    ssr: false,
    loading: () => (
      <div
        className="fixed z-60 h-14 w-14 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]"
        aria-hidden
      />
    ),
  },
);
