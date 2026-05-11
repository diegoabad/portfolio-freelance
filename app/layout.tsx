import type { Metadata, Viewport } from "next";
import { Figtree, Outfit } from "next/font/google";
import { AmbientOrbs } from "@/components/site/AmbientOrbs";
import { GoogleTagManager } from "@/components/seo/GoogleTagManager";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteVerification } from "@/lib/seo-verification";
import { getSiteUrl, LINKEDIN_PROFILE_URL } from "@/lib/site";
import "./globals.css";

/** Una sola fuente variable por familia (menos solicitudes que 4 pesos estáticos cada una). */
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
  /** No compite en red con Outfit (hero / títulos); el cuerpo puede hacer FOUT breve. */
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  /** Preload: el LCP en home es el h1 del hero (font-display / Outfit). */
  preload: true,
});

const siteUrl = getSiteUrl();
/** URLs absolutas para OG/Twitter (en local puede ser localhost si no hay env). */
const metadataBase = new URL(siteUrl ?? "http://localhost:3000");

const seoTitle = "Diego Abad — desarrollador de software y automatizaciones";

const seoDescription =
  "Desarrollo de software a medida en Argentina, automatización de procesos (n8n, APIs, integraciones), bots de WhatsApp con IA, sistema de turnos online, apps móviles para clínicas, control de stock e inventario. React, Next.js, Node.js y TypeScript para empresas y pymes en LATAM.";

export const viewport: Viewport = {
  themeColor: "#52a8ff",
  width: "device-width",
  initialScale: 1,
};

const keywords = [
  "Diego Abad",
  "desarrollador de software Argentina",
  "desarrollador fullstack Buenos Aires",
  "software a medida",
  "desarrollo web",
  "desarrollo de aplicaciones móviles",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Flutter",
  "automatización de procesos",
  "automatización empresarial Argentina",
  "inteligencia artificial",
  "agentes de IA",
  "bots de WhatsApp",
  "chatbot WhatsApp empresas",
  "sistema de turnos online",
  "agenda médica online",
  "software para clínicas",
  "control de stock",
  "inventario clínicas",
  "integraciones API",
  "n8n",
  "PostgreSQL",
  "desarrollo de software para pymes",
  "Argentina",
  "Latinoamérica",
];

const siteVerification = buildSiteVerification();

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Diego Abad",
  title: {
    default: seoTitle,
    template: "%s | Diego Abad",
  },
  description: seoDescription,
  keywords,
  authors: [{ name: "Diego Abad", url: LINKEDIN_PROFILE_URL }],
  creator: "Diego Abad",
  publisher: "Diego Abad",
  referrer: "origin-when-cross-origin",
  ...(siteVerification ? { verification: siteVerification } : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    locale: "es_AR",
    siteName: "Diego Abad",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
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
