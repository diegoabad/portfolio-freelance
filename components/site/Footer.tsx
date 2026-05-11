import Link from "next/link";
import { BrandLogoMark } from "@/components/site/BrandLogoMark";
import { BRAND_TAGLINE, LINKEDIN_PROFILE_URL } from "@/lib/site";
import { REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { FooterCopyrightLine } from "@/components/site/FooterCopyrightLine";
import { FooterEmailCopyClient } from "@/components/site/FooterEmailCopyClient";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";

const quickLinks = [
  { href: "/#top", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Casos de éxito" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/blog", label: "Blog" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/25 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/35 to-transparent"
        aria-hidden
      />

      <div className="max-w-site mx-auto px-6 lg:px-10 py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 space-y-4 md:space-y-5">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <BrandLogoMark size={48} />
              <span className="text-left leading-tight">
                <span className="block font-display font-semibold text-base text-foreground tracking-tight">
                  Diego Abad
                </span>
                <span className="block text-[11px] leading-tight text-muted-foreground">{BRAND_TAGLINE}</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-snug max-w-sm">
              Soluciones a medida, integraciones y productos que ordenan la operación real de equipos y negocios.
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Enlaces del pie">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-medium mb-2">Navegación</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:gap-x-5 md:gap-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-1.5 md:py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 flex flex-col items-start gap-3 border-t border-border/80 pt-6 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-medium mb-2">Redes</p>
              <div className="flex flex-wrap items-center gap-3 justify-start max-md:gap-3.5 md:gap-2.5">
                <FooterEmailCopyClient />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel={REL_WHATSAPP_EXTERNAL}
                  className="h-11 w-11 rounded-xl border-2 border-primary bg-surface/60 grid place-items-center text-primary hover:text-primary-foreground hover:bg-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-9 md:w-9 md:rounded-[10px] [&_svg]:size-[22px] md:[&_svg]:size-[18px]"
                  aria-label="Abrir WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={22} />
                </a>
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-xl border-2 border-primary bg-surface/60 grid place-items-center text-primary hover:text-primary-foreground hover:bg-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-9 md:w-9 md:rounded-[10px] [&_svg]:size-[22px] md:[&_svg]:size-[18px]"
                  aria-label="Perfil de LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInGlyph size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/80 flex justify-center sm:justify-start md:mt-10 md:pt-7">
          <FooterCopyrightLine />
        </div>
      </div>
    </footer>
  );
}
