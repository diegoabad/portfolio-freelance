/** Normaliza a origen https://host sin barra final. */
function originFromEnv(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const t = raw.trim().replace(/\/+$/, "");
  if (!t) return undefined;
  const host = t.replace(/^https?:\/\//i, "");
  if (!host) return undefined;
  return `https://${host}`;
}

/**
 * URL canónica del sitio (SEO, Open Graph, JSON-LD, sitemap).
 *
 * 1) `NEXT_PUBLIC_SITE_URL` si está definida (recomendado: `https://www.diegoabad.com` en Vercel Production).
 * 2) `VERCEL_PROJECT_PRODUCTION_URL` (dominio de producción del proyecto en Vercel; evita canónicos `*.vercel.app`
 *    cuando el deploy de preview usa `VERCEL_URL`). En el dashboard: activar acceso a variables de sistema si aplica.
 * 3) `VERCEL_URL` como último recurso (suele ser `*.vercel.app`).
 */
export function getSiteUrl(): string | undefined {
  const explicit = originFromEnv(process.env.NEXT_PUBLIC_SITE_URL);
  if (explicit) return explicit;

  const productionHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const production = originFromEnv(productionHost);
  if (production) return production;

  return originFromEnv(process.env.VERCEL_URL);
}

export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/diegoabad-fullstack/";

export const FACEBOOK_PAGE_URL = "https://www.facebook.com/diegoabadsoftware/";

/** Enlace compartido (p. ej. perfil o ficha en Google). */
export const GOOGLE_SHARE_URL = "https://share.google/O8Uq56eKGbQspHtWe";

/** Subtítulo bajo el nombre en footer y barra de navegación. */
export const BRAND_TAGLINE = "Software y automatizaciones";
