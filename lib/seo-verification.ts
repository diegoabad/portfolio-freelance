import type { Metadata } from "next";

/** Meta tags de verificación (Search Console, Bing, etc.). Definí solo las env que uses en producción. */
export function buildSiteVerification(): Metadata["verification"] | undefined {
  const verification: Metadata["verification"] = {};

  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  if (google) verification.google = google;

  const yandex = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION?.trim();
  if (yandex) verification.yandex = yandex;

  const yahoo = process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION?.trim();
  if (yahoo) verification.yahoo = yahoo;

  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();
  if (bing) {
    verification.other = { ...(verification.other ?? {}), "msvalidate.01": bing };
  }

  return Object.keys(verification).length > 0 ? verification : undefined;
}
