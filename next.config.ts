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
    qualities: [72, 75, 85],
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
