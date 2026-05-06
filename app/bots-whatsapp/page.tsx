import type { Metadata } from "next";
import { AutomatizacionWhatsappLanding } from "@/components/seo/AutomatizacionWhatsappLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "bots-whatsapp" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function BotsWhatsappPage() {
  return (
    <PageShell>
      <AutomatizacionWhatsappLanding />
    </PageShell>
  );
}
