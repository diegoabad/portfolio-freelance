import { BlogHomeCarousel } from "@/components/site/BlogHomeCarousel";
import { blogPostsSorted } from "@/lib/blog-posts";

export function BlogSection() {
  return (
    <section id="blog" className="relative py-9 md:py-[72px]">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Blog</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Guías sobre <span className="text-primary">WhatsApp, turnos y software</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed md:text-lg">
            Temas que salen seguido en proyectos reales — automatización, clínicas, stock — explicados en simple, con
            enlaces a servicios cuando tiene sentido.
          </p>
        </div>

        <BlogHomeCarousel posts={blogPostsSorted} />
      </div>
    </section>
  );
}
