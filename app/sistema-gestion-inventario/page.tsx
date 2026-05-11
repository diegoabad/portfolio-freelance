import type { Metadata } from "next";
import { SistemaGestionInventarioLanding } from "@/components/seo/SistemaGestionInventarioLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "sistema-gestion-inventario" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function SistemaGestionInventarioPage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <SistemaGestionInventarioLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
