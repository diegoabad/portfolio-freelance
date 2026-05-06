import type { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <FloatingWhatsApp />
      <Nav />
      <div className="relative z-10 min-h-screen flex-1 flex flex-col text-foreground pt-16">{children}</div>
      <Footer />
    </>
  );
}
