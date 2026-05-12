/**
 * Entradas animadas desactivadas: en móvil, muchas animaciones CSS en paralelo + `animation-timeline: view()`
 * empeoraban trabajo en el hilo principal / percepción de fluidez (Lighthouse).
 * Las funciones se mantienen para no tocar decenas de call sites; devuelven cadena vacía.
 */
export function motionFadeUpMs(_delayMs: number): string {
  return "";
}

export function motionH1Nudge(): string {
  return "";
}
