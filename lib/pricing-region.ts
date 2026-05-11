import { cache } from "react";
import { cookies, headers } from "next/headers";
import { getServiceLanding, type ServiceLandingSlug } from "@/lib/service-landings";

/** Cookie manual: pisa la detección por país. */
export const PRICING_REGION_COOKIE = "pricing-region";

export type PricingRegion = "ar" | "intl";

/** Pisos USD públicos (visitantes fuera de Argentina). */
export const SERVICE_USD_FLOOR: Record<ServiceLandingSlug, number> = {
  "bots-whatsapp": 600,
  "sistema-turnos-online": 1200,
  "automatizacion-negocios": 500,
  "desarrollo-software-medida": 2500,
  "software-para-clinicas": 3000,
  "sistema-gestion-inventario": 1500,
};

function formatUsdLatinInteger(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** Texto de tarjeta / hero según región (HTML estable por request). */
export function getPublicPriceTeaser(slug: ServiceLandingSlug, region: PricingRegion): string {
  const page = getServiceLanding(slug);
  if (!page) return "";
  if (region === "ar") return page.homeCardPriceTeaser;
  const usd = SERVICE_USD_FLOOR[slug];
  const formatted = formatUsdLatinInteger(usd);
  if (slug === "desarrollo-software-medida") return `Proyectos desde USD ${formatted}`;
  return `Desde USD ${formatted}`;
}

export function serviceLandingPriceFaqCallout(slug: ServiceLandingSlug, region: PricingRegion): string {
  const page = getServiceLanding(slug);
  if (!page) return "";
  const teaser = getPublicPriceTeaser(slug, region);
  const suffix = region === "ar" ? "en Argentina" : "en USD (visitantes fuera de Argentina)";
  return `Referencia orientativa ${suffix}: ${teaser}. ${page.homeCardPriceBenefit}`;
}

/**
 * Cookie válida gana; si no hay país (p. ej. local) o Vercel no envía geo → Argentina (ARS).
 * Si el país existe y no es AR → USD.
 */
export const getPricingRegion = cache(async (): Promise<PricingRegion> => {
  const jar = await cookies();
  const raw = jar.get(PRICING_REGION_COOKIE)?.value;
  if (raw === "ar" || raw === "intl") return raw;

  const h = await headers();
  const country = (h.get("x-vercel-ip-country") ?? "").trim().toUpperCase();
  if (!country) return "ar";
  if (country === "AR") return "ar";
  return "intl";
});
