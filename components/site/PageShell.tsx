import type { ReactNode } from "react";
import { FloatingWhatsAppDynamic } from "@/components/site/FloatingWhatsAppDynamic";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <FloatingWhatsAppDynamic />
      <Nav />
      <div className="relative z-10 min-h-screen flex-1 flex flex-col text-foreground pt-21 min-[1100px]:pt-24">{children}</div>
      <Footer />
    </>
  );
}
