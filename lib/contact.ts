export const WHATSAPP_NUMBER = "541141499723";
export const CONTACT_EMAIL = "contacto@diegoabad.com";

/** `nofollow` reduce rastreos masivos a wa.me (auditores suelen marcar 429 como “enlace roto”). */
export const REL_WHATSAPP_EXTERNAL = "nofollow noreferrer noopener" as const;

/** Mensaje prellenado al abrir WhatsApp desde la home (hero, etc.). */
export const WHATSAPP_HERO_PREFILL =
  "Hola Diego, te escribo desde tu web. Me interesa charlar sobre un proyecto.";

export function whatsAppHref(message: string = WHATSAPP_HERO_PREFILL): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Texto del botón principal en landings, bloque servicios y textos largos. */
export const PRIMARY_CTA_LABEL = "Contame tu proyecto";

/** Mismo texto en hero y barra de navegación (CTA a contacto). */
export const HERO_NAV_CTA_LABEL = "Hablemos de tu proyecto";

/** Línea secundaria bajo el CTA principal (presupuesto sin compromiso de pago previo). */
export const PRIMARY_CTA_SUBLINE = "Presupuesto sin cargo";

/** Texto completo del botón en cada landing de servicio (sin segunda línea debajo). */
export const SERVICE_LANDING_CTA_LABEL = "Pedí tu presupuesto sin cargo";

/** Alias usado en vistas cortas de servicio (`ServiceLandingView`). */
export const LANDING_CONSULT_CTA = SERVICE_LANDING_CTA_LABEL;

/** Texto reutilizable para FAQs / landings (sin montos). */
export const EVALUATION_OFFER_FAQ =
  "Cada proyecto es distinto: lo que sale depende de lo que necesites de verdad. Charlamos por llamada o WhatsApp, contame tu proyecto y te paso un presupuesto sin cargo, con próximos pasos claros.";
