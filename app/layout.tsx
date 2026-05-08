import type { Metadata } from "next";
import { Figtree, Outfit } from "next/font/google";
import { AmbientOrbs } from "@/components/site/AmbientOrbs";
import { JsonLd } from "@/components/seo/JsonLd";
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

const seoTitle = "Diego Abad - desarrollador de software";

const seoDescription =
  "Software a medida, automatización de procesos, bots de WhatsApp, apps y sistemas web con React y Next.js. Proyectos para negocios en Argentina y Latinoamérica.";

const keywords = [
  "Diego Abad",
  "desarrollador de software",
  "desarrollador fullstack",
  "software a medida",
  "desarrollo web",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "automatización de procesos",
  "bots de WhatsApp",
  "integraciones API",
  "PostgreSQL",
  "Argentina",
];

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: seoTitle,
    template: "%s | Diego Abad",
  },
  description: seoDescription,
  keywords,
  authors: [{ name: "Diego Abad", url: LINKEDIN_PROFILE_URL }],
  creator: "Diego Abad",
  publisher: "Diego Abad",
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
        <JsonLd />
        <AmbientOrbs />
        {children}
      </body>
    </html>
  );
}
