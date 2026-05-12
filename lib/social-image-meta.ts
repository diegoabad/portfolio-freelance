/** Dimensiones estándar OG / Twitter (deben coincidir con `create-social-image.tsx`). */
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/** Leyenda `alt` coherente con `opengraph-image` / `twitter-image`. */
export const SOCIAL_IMAGE_ALT_DEFAULT =
  "Diego Abad — desarrollador de software y automatizaciones";

/** Descriptor OG/Twitter para la imagen social por defecto (mismas dimensiones que `opengraph-image.tsx`). */
export function buildDefaultSocialImageDescriptor(
  siteBase: string | undefined | null,
  alt: string = SOCIAL_IMAGE_ALT_DEFAULT,
) {
  if (!siteBase) return undefined;
  return {
    url: new URL("/opengraph-image", siteBase).toString(),
    width: SOCIAL_IMAGE_SIZE.width,
    height: SOCIAL_IMAGE_SIZE.height,
    alt,
  };
}
