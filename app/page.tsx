import dynamic from "next/dynamic";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsAppDynamic } from "@/components/site/FloatingWhatsAppDynamic";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";

const Projects = dynamic(() => import("@/components/site/Projects").then((m) => ({ default: m.Projects })), {
  loading: () => (
    <section
      id="proyectos"
      className="relative bg-surface/30 border-b border-border pt-4 pb-20 md:pt-5 md:pb-28 lg:pt-6 lg:pb-32"
      aria-busy="true"
      aria-label="Cargando proyectos"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl space-y-3">
          <div className="h-4 w-28 rounded bg-muted/35 animate-pulse" />
          <div className="h-11 md:h-12 max-w-lg rounded-lg bg-muted/40 animate-pulse" />
          <div className="h-16 max-w-2xl rounded-lg bg-muted/25 animate-pulse" />
        </div>
        <div className="mt-8 md:mt-10 grid lg:grid-cols-2 gap-4 md:gap-5">
          {[0, 1].map((k) => (
            <div key={k} className="min-h-[22rem] rounded-2xl border border-border bg-background/40 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <>
      {/* Descarga temprana del retrato en «Sobre mí» (pesado); la barra de hero ya tiene priority */}
      <link rel="preload" href="/avatar-about.png" as="image" />
      <main className="relative z-10 min-h-screen flex-1 text-foreground">
      <FloatingWhatsAppDynamic />
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
