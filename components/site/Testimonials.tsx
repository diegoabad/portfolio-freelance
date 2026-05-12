import { motionFadeUpMs } from "@/lib/site-motion";
import { testimonials } from "@/components/site/testimonials-data";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-9 md:py-[72px]">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className={`max-w-3xl ${motionFadeUpMs(20)}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Testimonios</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
            Lo que dicen quienes <span className="text-primary">trabajaron conmigo</span>
          </h2>
          <p className="mt-3 md:mt-4 text-muted-foreground leading-relaxed">
            Referencias reales de clientes sobre proyectos entregados: calidad, comunicación y resultado en producción.
          </p>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
