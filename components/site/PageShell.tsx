import type { ReactNode } from "react";
import { FloatingWhatsAppDynamic } from "@/components/site/FloatingWhatsAppDynamic";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { getPricingRegion } from "@/lib/pricing-region";

export async function PageShell({ children }: { children: ReactNode }) {
  const pricingRegion = await getPricingRegion();
  return (
    <>
      <FloatingWhatsAppDynamic />
      <Nav pricingRegion={pricingRegion} />
      <div className="relative z-10 min-h-screen flex-1 flex flex-col text-foreground pt-21 min-[1200px]:pt-24">{children}</div>
      <Footer />
    </>
  );
}
