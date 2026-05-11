import dynamic from "next/dynamic";

const ContactInteractive = dynamic(
  () => import("@/components/site/ContactInteractive").then((m) => ({ default: m.ContactInteractive })),
  {
    loading: () => (
      <div
        className="mt-10 md:mt-12 grid md:grid-cols-5 gap-5 md:gap-6"
        aria-busy="true"
        aria-label="Cargando formulario de contacto"
      >
        <div className="md:col-span-2 space-y-2.5 md:space-y-4">
          <div className="h-[60px] rounded-xl border border-border bg-muted/20 animate-pulse md:h-[104px] md:rounded-2xl" />
          <div className="h-[60px] rounded-xl border border-border bg-muted/20 animate-pulse md:h-[104px] md:rounded-2xl" />
          <div className="h-[60px] rounded-xl border border-border bg-muted/20 animate-pulse md:h-[88px] md:rounded-2xl" />
          <div className="h-[60px] rounded-xl border border-border bg-muted/20 animate-pulse md:h-[104px] md:rounded-2xl" />
        </div>
        <div className="md:col-span-3 min-h-[280px] rounded-2xl border border-border bg-muted/15 animate-pulse" />
      </div>
    ),
  },
);

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-9 md:py-[72px]"
    >
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/12 blur-[130px]" />

      <div className="relative max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Contacto</span>
          <h2 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight text-pretty">
            ¿Tenés una <span className="text-primary">idea o problema</span> que querés resolver?
          </h2>
          <p className="mt-4 md:mt-5 text-lg text-muted-foreground leading-relaxed">
            Contame qué necesitás y te propongo una solución concreta con próximos pasos claros.
          </p>
        </div>

        <ContactInteractive />
      </div>
    </section>
  );
}
