/** Tema principal del post (chip en listado y detalle). */
export type BlogTopicTrack =
  | "automatizaciones"
  | "agendas-online"
  | "bots-whatsapp"
  | "software-medida"
  | "apps-moviles"
  | "stock-inventario";

/** Fragmento de párrafo: texto plano o enlace interno/externo. */
export type BlogRichSegment =
  | string
  | {
      href: string;
      label: string;
      external?: boolean;
    };

export type BlogContentBlock =
  | { type: "paragraph"; segments: readonly BlogRichSegment[] }
  | { type: "h2"; id?: string; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "faq"; items: readonly { question: string; answer: string }[] };

export type BlogRelatedPost = {
  slug: string;
  title: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  /** Título visible (H1) */
  title: string;
  /** Resumen para cards y OG si no hay metaDescription */
  description: string;
  /** `<title>` y OG title (opcional) */
  metaTitle?: string;
  /** Meta description SEO (opcional) */
  metaDescription?: string;
  publishedAt: string;
  /** Chip temático (p. ej. Automatizaciones, Software a medida). */
  topicTrack: BlogTopicTrack;
  /** Subtítulo editorial / schema (ej. rubro fino). */
  category: string;
  content: readonly BlogContentBlock[];
  /** Enlaces útiles al final (servicios, contacto, WhatsApp) */
  resourceLinks?: readonly { href: string; label: string; external?: boolean }[];
  /** Sobrescribe titular o texto del CTA final (si falta, usa el default por `topicTrack`). */
  closingCta?: Partial<{ headline: string; supporting: string }>;
  /** Otro artículo del blog */
  relatedPost?: BlogRelatedPost;
};
