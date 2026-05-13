import type { Metadata, Viewport } from "next";
import { Figtree, Outfit } from "next/font/google";
import { AmbientOrbs } from "@/components/site/AmbientOrbs";
import { GoogleTagManager } from "@/components/seo/GoogleTagManager";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildDefaultSocialImageDescriptor } from "@/lib/social-image-meta";
import { robotsIndexFollowGoogle } from "@/lib/seo-robots";
import { buildSiteVerification } from "@/lib/seo-verification";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";
import "./globals.css";

/** Una sola fuente variable por familia (menos solicitudes que 4 pesos estáticos cada una). */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  /** No compite en red con Outfit (hero / títulos); el cuerpo puede hacer FOUT breve. */
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  /** Preload: el LCP en home es el h1 del hero (font-display / Outfit). */
  preload: true,
});

const siteUrl = getSiteUrl();
/** URLs absolutas para OG/Twitter (en local puede ser localhost si no hay env). */
const metadataBase = new URL(siteUrl ?? "http://localhost:3000");

/** Título orientado a búsquedas no marcadas (servicio + ubicación); la plantilla `%s | Diego Abad` sigue valiendo en páginas hijas. */
const seoTitle = "Diego Abad | Desarrollo de Software a Medida · Buenos Aires";

const seoDescription =
  "Desarrollo de software a medida en Argentina, automatización de procesos (n8n, APIs, integraciones), bots de WhatsApp con IA, sistema de turnos online, apps móviles para clínicas, control de stock e inventario. React, Next.js, Node.js y TypeScript para empresas y pymes en LATAM.";

export const viewport: Viewport = {
  themeColor: "#52a8ff",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  /** Móvil: el viewport se ajusta al teclado sin recortar inputs (mejor UX en contacto). Escritorio no cambia. */
  interactiveWidget: "resizes-content",
};

const siteVerification = buildSiteVerification();

const defaultOgDescriptor = buildDefaultSocialImageDescriptor(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Diego Abad",
  title: {
    default: seoTitle,
    template: "%s | Diego Abad",
  },
  description: seoDescription,
  authors: [{ name: "Diego Abad", url: LINKEDIN_PROFILE_URL }],
  creator: "Diego Abad",
  publisher: "Diego Abad",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
  ...(siteVerification ? { verification: siteVerification } : {}),
  robots: robotsIndexFollowGoogle,
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    locale: "es_AR",
    siteName: "Diego Abad",
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(defaultOgDescriptor ? { images: [defaultOgDescriptor] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    ...(defaultOgDescriptor
      ? {
          images: {
            url: defaultOgDescriptor.url,
            alt: defaultOgDescriptor.alt,
          },
        }
      : {}),
  },
  category: "technology",
  /** Misma marca que app/icon.png; favicon.ico generado desde ese PNG para clientes que piden /.ico */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/icon.png", sizes: "96x96", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${figtree.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <GoogleTagManager />
        <JsonLd />
        <AmbientOrbs />
        {children}
      </body>
    </html>
  );
}
