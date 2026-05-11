import type { Metadata } from "next";
import { SistemaTurnosOnlineLanding } from "@/components/seo/SistemaTurnosOnlineLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "sistema-turnos-online" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function SistemaTurnosOnlinePage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <SistemaTurnosOnlineLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
