import type { ReactNode } from "react";
import "./cv-document.css";

/**
 * Layout dedicado a /curriculum: no incluye Nav ni Footer del sitio.
 * El root layout sigue aplicándose (no se puede saltar en App Router),
 * pero #cv-document es position:fixed inset:0 con fondo opaco, así
 * tapa los orbes y el fondo del sitio para verse igual que `cv.html`.
 *
 * Las fuentes Geist + Poppins se cargan vía <link> de Google Fonts
 * (mismas que usa el cv.html en la raíz del repo).
 */
export default function CurriculumLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Poppins:wght@400;500;600;700;800&display=swap"
      />
      {children}
    </>
  );
}
