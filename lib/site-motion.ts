/** Entrada al cargar: `fade-in-up` en globals (opacity + translate); `motion-safe` respeta reduced-motion. */
export function motionFadeUpMs(delayMs: number): string {
  return `motion-safe:animate-[fade-in-up_0.58s_cubic-bezier(0.22,1,0.36,1)_${delayMs}ms_backwards] motion-reduce:animate-none`;
}

/** Solo translate en el h1: el texto no arranca invisible (mejor para LCP). */
export function motionH1Nudge(): string {
  return `motion-safe:animate-[hero-nudge-up_0.56s_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none`;
}
