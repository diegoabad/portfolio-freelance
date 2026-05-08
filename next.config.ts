import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 72, 75, 85],
    /** Permite variantes más chicas para miniaturas (galería casos) sin subir el mínimo global de `fill` demasiado. */
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async headers() {
    return [
      {
        source: "/hero-decor.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
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
    ];
  },
};

export default nextConfig;
