import type { Metadata } from "next";
import { AutomatizacionWhatsappLanding } from "@/components/seo/AutomatizacionWhatsappLanding";
import { PageShell } from "@/components/site/PageShell";
import { getPricingRegion } from "@/lib/pricing-region";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "bots-whatsapp" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default async function BotsWhatsappPage() {
  const pricingRegion = await getPricingRegion();
  return (
    <PageShell>
      <AutomatizacionWhatsappLanding pricingRegion={pricingRegion} />
    </PageShell>
  );
}
