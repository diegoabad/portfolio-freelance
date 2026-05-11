const steps = [
  { n: "01", t: "Entiendo el problema", d: "Conversamos para entender tu operación y qué necesitás resolver." },
  { n: "02", t: "Defino la mejor solución", d: "Propongo el enfoque técnico más simple y efectivo." },
  { n: "03", t: "Alcance y presupuesto", d: "Documento qué incluye, plazos y costos. Sin sorpresas." },
  { n: "04", t: "Desarrollo por etapas", d: "Entregas frecuentes para que veas avances reales." },
  { n: "05", t: "Validamos y ajustamos", d: "Probamos en tu contexto real y refinamos lo necesario." },
  { n: "06", t: "Entrega y soporte", d: "Lanzamiento y acompañamiento posterior cuando lo necesites." },
];

export function Process() {
  return (
    <section id="proceso" className="relative bg-surface/30 py-9 md:py-[72px]">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Proceso</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight">
            Cómo <span className="text-primary">trabajamos juntos</span>
          </h2>
        </div>

        <ol className="mt-10 md:mt-14 lg:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 list-none p-0 m-0">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-background/60 p-5 md:p-7 backdrop-blur"
            >
              <span className="font-display text-5xl font-semibold text-primary">{s.n}</span>
              <h3 className="mt-3 md:mt-4 text-lg md:text-xl font-display font-semibold">{s.t}</h3>
              <p className="mt-1.5 md:mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
