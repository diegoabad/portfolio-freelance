import type { Metadata } from "next";
import { SistemaGestionInventarioLanding } from "@/components/seo/SistemaGestionInventarioLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "sistema-gestion-inventario" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function SistemaGestionInventarioPage() {
  return (
    <PageShell>
      <SistemaGestionInventarioLanding />
    </PageShell>
  );
}
