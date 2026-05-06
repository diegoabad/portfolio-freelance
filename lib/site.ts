/** URL canónica del sitio (SEO / Open Graph). Definí `NEXT_PUBLIC_SITE_URL` en producción, ej. https://tudominio.com */
export function getSiteUrl(): string | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return undefined;
}

export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/diegoabad-fullstack/";
