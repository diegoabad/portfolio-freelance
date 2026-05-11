import type { Metadata } from "next";
import { DesarrolloSoftwareMedidaLanding } from "@/components/seo/DesarrolloSoftwareMedidaLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "desarrollo-software-medida" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function DesarrolloSoftwareMedidaPage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <DesarrolloSoftwareMedidaLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
