/** Luces de fondo muy suaves; solo CSS, respeta motion-reduce vía clases en globals */
export function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Móvil: blur más bajo (menos costo GPU); desde md mismos valores que antes. */}
      <div className="ambient-orb ambient-orb-a motion-reduce:animate-none absolute top-[12%] -left-[8%] h-[min(92vw,560px)] w-[min(92vw,560px)] max-md:h-[min(80vw,420px)] max-md:w-[min(80vw,420px)] rounded-full bg-primary/[0.085] blur-[120px] max-md:blur-[56px]" />
      <div className="ambient-orb ambient-orb-b motion-reduce:animate-none absolute top-[42%] -right-[12%] h-[min(88vw,440px)] w-[min(88vw,440px)] max-md:h-[min(76vw,360px)] max-md:w-[min(76vw,360px)] rounded-full bg-primary/[0.055] blur-[130px] max-md:blur-[60px]" />
      <div className="ambient-orb ambient-orb-c motion-reduce:animate-none absolute bottom-[5%] left-[25%] h-[min(70vw,380px)] w-[min(70vw,380px)] max-md:h-[min(62vw,300px)] max-md:w-[min(62vw,300px)] rounded-full bg-primary/[0.045] blur-[100px] max-md:blur-[48px]" />
    </div>
  );
}
