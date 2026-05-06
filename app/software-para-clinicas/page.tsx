import type { Metadata } from "next";
import { SoftwareParaClinicasLanding } from "@/components/seo/SoftwareParaClinicasLanding";
import { PageShell } from "@/components/site/PageShell";
import { buildServicePageMetadata, type ServiceLandingSlug } from "@/lib/service-landings";

const slug = "software-para-clinicas" satisfies ServiceLandingSlug;

export const metadata: Metadata = buildServicePageMetadata(slug);

export default function SoftwareParaClinicasPage() {
  return (
    <PageShell>
      <SoftwareParaClinicasLanding />
    </PageShell>
  );
}
