import type { Metadata } from "next";
import { SistemaTurnosOnlineLanding } from "@/components/seo/SistemaTurnosOnlineLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "sistema-turnos-online" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function SistemaTurnosOnlinePage() {
  return (
    <PageShell>
      <SistemaTurnosOnlineLanding />
    </PageShell>
  );
}
