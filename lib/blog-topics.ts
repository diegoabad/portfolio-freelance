import type { BlogTopicTrack } from "@/lib/blog-types";

/** Orden fijo de las 6 etiquetas en filtros y UI. */
export const BLOG_TOPIC_TRACKS_ORDERED = [
  "bots-whatsapp",
  "agendas-online",
  "automatizaciones",
  "software-medida",
  "apps-moviles",
  "stock-inventario",
] as const satisfies readonly BlogTopicTrack[];

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
    "inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-sm font-semibold tracking-tight";
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

const TOPIC_MENU_OPTION_BASE =
  "flex w-full items-center rounded-lg px-4 py-2.5 text-left text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/35";

/** Opción del menú desplegable: hover/focus alineados al color del chip del tema. */
export function blogTopicMenuOptionClassName(track: BlogTopicTrack): string {
  switch (track) {
    case "bots-whatsapp":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-primary/20 hover:text-primary`;
    case "agendas-online":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-emerald-500/22 hover:text-emerald-100`;
    case "automatizaciones":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-violet-500/22 hover:text-violet-100`;
    case "software-medida":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-sky-500/22 hover:text-sky-100`;
    case "apps-moviles":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-rose-500/22 hover:text-rose-100`;
    case "stock-inventario":
      return `${TOPIC_MENU_OPTION_BASE} text-foreground/95 hover:bg-amber-500/22 hover:text-amber-100`;
    default: {
      const _exhaustive: never = track;
      return _exhaustive;
    }
  }
}

/** Opción “Todas las etiquetas” en el mismo menú. */
export const BLOG_TOPIC_MENU_ALL_OPTION_CLASS =
  `${TOPIC_MENU_OPTION_BASE} text-foreground/90 hover:bg-muted/55 hover:text-foreground`;
