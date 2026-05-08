/**
 * Cuando reemplazás `public/logo-da.png` y no ves el cambio, subí este número
 * (y redeploy si aplica). Así cambia la URL y se evita caché del navegador y de `/_next/image`.
 */
export const LOGO_DA_CACHE_VERSION = "3";

/** `src` para `<Image />` del logo (incluye bust de caché). */
export const LOGO_DA_IMAGE_SRC = `/logo-da.png?v=${LOGO_DA_CACHE_VERSION}`;

/** Ruta en disco para leer el PNG (sin query). */
export const LOGO_DA_FILE_PATH = "logo-da.png";
