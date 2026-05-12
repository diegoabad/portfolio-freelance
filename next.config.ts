import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 68, 72, 75, 85, 90],
    /** Variantes para `sizes` pequeños (avatar, logo en nav). */
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
    /** Permite variantes más chicas para miniaturas (galería casos) sin subir el mínimo global de `fill` demasiado. */
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920, 2048],
    /**
     * Next 16: si definís `localPatterns`, **todas** las rutas locales usadas en `<Image />` deben coincidir.
     * Un solo patrón cubre `public/` (hero, avatar, logo con `?v=`, capturas `/projects/...`).
     */
    localPatterns: [{ pathname: "/**" }],
    /** Segundos que CDN/origen puede cachear variantes de `/_next/image` (menos recomputación en visitas repetidas). */
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  async headers() {
    /** En prod: cache largo para PNG estáticos (Next `/image` también optimiza). En dev: sin caché para ver cambios al instante. Si cambiás el archivo, renombrá o bust cache. */
    const staticImageCache =
      process.env.NODE_ENV === "production"
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate";

    return [
      { source: "/hero-decor.png", headers: [{ key: "Cache-Control", value: staticImageCache }] },
      { source: "/logo-da.png", headers: [{ key: "Cache-Control", value: staticImageCache }] },
      { source: "/avatar-about.png", headers: [{ key: "Cache-Control", value: staticImageCache }] },
      { source: "/projects/:path*", headers: [{ key: "Cache-Control", value: staticImageCache }] },
      { source: "/testimonials/:path*", headers: [{ key: "Cache-Control", value: staticImageCache }] },
    ];
  },
  async redirects() {
    return [
      {
        source: "/software-gestion-pacientes",
        destination: "/software-para-clinicas",
        permanent: true,
      },
      {
        source: "/automatizacion-whatsapp-negocios",
        destination: "/bots-whatsapp",
        permanent: true,
      },
      {
        source: "/sistemas-con-inteligencia-artificial",
        destination: "/desarrollo-software-medida",
        permanent: true,
      },
      {
        source: "/desarrollo-saas-mvp",
        destination: "/desarrollo-software-medida",
        permanent: true,
      },
      {
        source: "/desarrollo-apps-moviles",
        destination: "/desarrollo-software-medida",
        permanent: true,
      },
      {
        source: "/automatizacion-negocios",
        destination: "/automatizacion-procesos-clinicas",
        permanent: true,
      },
      {
        source: "/sistema-gestion-inventario",
        destination: "/control-stock-clinicas",
        permanent: true,
      },
      {
        source: "/proyectos/cotilink",
        destination: "/proyectos/cotilink-saas-cotizaciones",
        permanent: true,
      },
      {
        source: "/proyectos/bot-whatsapp-atencion",
        destination: "/proyectos/bot-whatsapp-odontologia-soler",
        permanent: true,
      },
      {
        source: "/proyectos/hablan",
        destination: "/proyectos/hablan-plataforma-fonoaudiologia",
        permanent: true,
      },
      {
        source: "/proyectos/cogniare",
        destination: "/proyectos/cogniare-gestion-clinicas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
