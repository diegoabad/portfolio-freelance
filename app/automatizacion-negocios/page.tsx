import type { Metadata } from "next";
import { AutomatizacionNegociosLanding } from "@/components/seo/AutomatizacionNegociosLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "automatizacion-negocios" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function AutomatizacionNegociosPage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <AutomatizacionNegociosLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
