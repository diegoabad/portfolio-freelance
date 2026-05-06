import type { Metadata } from "next";
import { DesarrolloSoftwareMedidaLanding } from "@/components/seo/DesarrolloSoftwareMedidaLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "desarrollo-software-medida" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function DesarrolloSoftwareMedidaPage() {
  return (
    <PageShell>
      <DesarrolloSoftwareMedidaLanding />
    </PageShell>
  );
}
