import type { BlogTopicTrack } from "@/lib/blog-types";

const LABELS: Record<BlogTopicTrack, string> = {
  automatizaciones: "Automatizaciones",
  "agendas-online": "Agendas online",
  "bots-whatsapp": "Bots de WhatsApp",
  "software-medida": "Software a medida",
  "apps-moviles": "Apps móviles",
  "stock-inventario": "Stock e inventario",
};

export function blogTopicLabel(track: BlogTopicTrack): string {
  return LABELS[track];
}

/** Clases Tailwind para el chip (fondo/borde legibles sobre el tema oscuro del sitio). */
export function blogTopicChipClassName(track: BlogTopicTrack): string {
  const base =
    "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-tight";
  switch (track) {
    case "bots-whatsapp":
      return `${base} border-primary/35 bg-primary/12 text-primary`;
    case "agendas-online":
      return `${base} border-emerald-400/35 bg-emerald-500/14 text-emerald-100`;
    case "automatizaciones":
      return `${base} border-violet-400/35 bg-violet-500/14 text-violet-100`;
    case "software-medida":
      return `${base} border-sky-400/35 bg-sky-500/14 text-sky-100`;
    case "apps-moviles":
      return `${base} border-rose-400/35 bg-rose-500/14 text-rose-100`;
    case "stock-inventario":
      return `${base} border-amber-400/35 bg-amber-500/14 text-amber-100`;
    default: {
      const _exhaustive: never = track;
      return _exhaustive;
    }
  }
}
