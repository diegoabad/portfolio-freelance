import type { BlogTopicTrack } from "@/lib/blog-types";

export type BlogClosingCtaCopy = {
  headline: string;
  supporting: string;
  whatsAppPrefill: string;
};

/** CTA editorial al cierre del artículo (conversión desde tráfico orgánico). */
export function getBlogClosingCta(track: BlogTopicTrack): BlogClosingCtaCopy {
  switch (track) {
    case "stock-inventario":
      return {
        headline: "¿Querés implementar esto en tu negocio?",
        supporting:
          "Si encaja con tu depósito, ventas o inventario, coordinamos una charla y vemos próximos pasos—presupuesto sin cargo.",
        whatsAppPrefill:
          "Hola Diego, leí un artículo del blog sobre stock o inventario y quiero contarte mi caso.",
      };
    case "software-medida":
      return {
        headline: "¿Querés llevar esto a tu empresa o clínica?",
        supporting:
          "Hablemos: contame el alcance por WhatsApp o el formulario de contacto y te paso una propuesta acotada—presupuesto sin cargo.",
        whatsAppPrefill:
          "Hola Diego, leí un artículo del blog sobre software a medida y quiero contarte mi proyecto.",
      };
    default:
      return {
        headline: "¿Querés implementar esto en tu clínica o consultorio?",
        supporting:
          "Hablemos sin compromiso: escribime por WhatsApp o dejame los datos en contacto y vemos si encaja—presupuesto sin cargo.",
        whatsAppPrefill:
          "Hola Diego, leí un artículo en tu blog y me interesa algo parecido para mi clínica o consultorio.",
      };
  }
}
