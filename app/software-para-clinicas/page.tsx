import type { Metadata } from "next";
import { SoftwareParaClinicasLanding } from "@/components/seo/SoftwareParaClinicasLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "software-para-clinicas" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function SoftwareParaClinicasPage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <SoftwareParaClinicasLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
