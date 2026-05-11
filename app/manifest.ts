import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** Web app manifest (nombre corto, tema; útil en móvil y como señal de marca). */
export default function manifest(): MetadataRoute.Manifest {
  const base = getSiteUrl();

  return {
    name: "Diego Abad — Desarrollo web y software a medida",
    short_name: "Diego Abad",
    description:
      "Software a medida, automatización, bots de WhatsApp, turnos online y apps en Argentina. React, Next.js y Node.js.",
    start_url: "/",
    display: "browser",
    background_color: "#0b1220",
    theme_color: "#52a8ff",
    icons: [
      {
        src: "/icon.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    ...(base ? { id: `${base}/manifest.webmanifest` } : {}),
  };
}
