/** Luces de fondo muy suaves; solo CSS, respeta motion-reduce vía clases en globals */
export function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-orb ambient-orb-a motion-reduce:animate-none absolute top-[12%] -left-[8%] h-[min(92vw,560px)] w-[min(92vw,560px)] rounded-full bg-primary/[0.085] blur-[120px]" />
      <div className="ambient-orb ambient-orb-b motion-reduce:animate-none absolute top-[42%] -right-[12%] h-[min(88vw,440px)] w-[min(88vw,440px)] rounded-full bg-primary/[0.055] blur-[130px]" />
      <div className="ambient-orb ambient-orb-c motion-reduce:animate-none absolute bottom-[5%] left-[25%] h-[min(70vw,380px)] w-[min(70vw,380px)] rounded-full bg-primary/[0.045] blur-[100px]" />
    </div>
  );
}
