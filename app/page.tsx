import dynamic from "next/dynamic";
import { Contact } from "@/components/site/Contact";
import { FloatingWhatsAppDynamic } from "@/components/site/FloatingWhatsAppDynamic";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";

/** Debajo del pliegue: chunk aparte y sin competir con el LCP del hero. */
const About = dynamic(() => import("@/components/site/About").then((m) => ({ default: m.About })), {
  loading: () => (
    <section
      id="sobre-mi"
      className="relative border-t border-border py-20 md:py-28 lg:py-32"
      aria-busy="true"
      aria-label="Cargando sección Sobre mí"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="h-4 w-28 max-w-3xl rounded bg-muted/35 animate-pulse" />
        <div className="relative mt-6 min-h-[300px] rounded-2xl border border-border bg-muted/15 animate-pulse md:mt-8 md:min-h-[380px] lg:min-h-[420px]" />
      </div>
    </section>
  ),
});

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

/** Incluye `blog-posts` (contenido largo): chunk aparte para menos JS inicial y mejor prioridad de red. */
const BlogSection = dynamic(() => import("@/components/site/BlogSection").then((m) => ({ default: m.BlogSection })), {
  loading: () => (
    <section
      id="blog"
      className="relative border-t border-border py-20 md:py-28 lg:py-32"
      aria-busy="true"
      aria-label="Cargando blog"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="h-4 w-24 rounded bg-muted/35 animate-pulse" />
        <div className="mt-4 h-11 max-w-sm rounded-lg bg-muted/30 animate-pulse md:h-12 md:max-w-md" />
        <div className="mt-3 h-14 max-w-2xl rounded-lg bg-muted/20 animate-pulse" />
        <div className="mt-10 grid gap-4 md:gap-5 lg:grid-cols-3">
          {[0, 1, 2].map((k) => (
            <div
              key={k}
              className="min-h-[220px] rounded-2xl border border-border bg-background/40 animate-pulse md:min-h-[240px]"
            />
          ))}
        </div>
      </div>
    </section>
  ),
});

const Testimonials = dynamic(() => import("@/components/site/Testimonials").then((m) => ({ default: m.Testimonials })), {
  loading: () => (
    <section
      id="testimonios"
      className="relative border-t border-border py-20 md:py-28 lg:py-32"
      aria-busy="true"
      aria-label="Cargando testimonios"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="h-4 w-32 rounded bg-muted/35 animate-pulse" />
        <div className="mt-4 h-12 max-w-lg rounded-lg bg-muted/30 animate-pulse md:h-14" />
        <div className="mt-3 h-12 max-w-2xl rounded-lg bg-muted/20 animate-pulse" />
        <div className="mt-10 grid gap-4 md:gap-5 lg:grid-cols-2">
          {[0, 1].map((k) => (
            <div key={k} className="min-h-[280px] rounded-2xl border border-border bg-background/40 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <>
      <main className="relative z-10 min-h-screen flex-1 text-foreground">
      <FloatingWhatsAppDynamic />
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <Process />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
