"use client";

import { useEffect, useRef } from "react";

const GTM_ID = "GTM-MD2MFRLQ";

function injectGtm() {
  if (typeof document === "undefined") return;
  if (document.getElementById("gtm-bootstrap")) return;
  const s = document.createElement("script");
  s.id = "gtm-bootstrap";
  s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(s);
}

/**
 * GTM fuera de la ruta crítica del primer frame:
 * - `requestIdleCallback` + `timeout` (~2.2s) para no competir con LCP/hidratación en 4G.
 * - Primera interacción (scroll o pointer) dispara antes si el usuario ya navega.
 * - `setTimeout` ~4.5s asegura carga si no hay idle ni interacción (rebotes cortos).
 *
 * Meta Pixel y otros tags que viven en el contenedor se benefician del mismo retraso.
 * Si tenés tags que exigen disparo inmediato, movélos a una política aparte en GTM.
 *
 * @see https://developers.google.com/tag-manager/quickstart
 */
export function GoogleTagManager() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;

    let idleId: number | null = null;
    let fallbackId: number | undefined;

    const done = () => {
      if (injected.current) return;
      injected.current = true;
      injectGtm();
      window.removeEventListener("scroll", onWake);
      window.removeEventListener("pointerdown", onWake);
      if (idleId !== null) window.cancelIdleCallback(idleId);
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
    };

    const onWake = () => {
      done();
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(done, { timeout: 2200 });
    }
    fallbackId = window.setTimeout(done, 4500);
    window.addEventListener("scroll", onWake, { passive: true, once: true });
    window.addEventListener("pointerdown", onWake, { once: true });

    return () => {
      window.removeEventListener("scroll", onWake);
      window.removeEventListener("pointerdown", onWake);
      if (idleId !== null) window.cancelIdleCallback(idleId);
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
    };
  }, []);

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height={0}
        width={0}
        title="Google Tag Manager"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
