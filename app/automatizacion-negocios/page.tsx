import type { Metadata } from "next";
import { AutomatizacionNegociosLanding } from "@/components/seo/AutomatizacionNegociosLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "automatizacion-negocios" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function AutomatizacionNegociosPage() {
  return (
    <PageShell>
      <AutomatizacionNegociosLanding />
    </PageShell>
  );
}
