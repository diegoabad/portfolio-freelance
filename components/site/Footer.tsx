import Link from "next/link";
import { REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { FooterEmailCopyClient } from "@/components/site/FooterEmailCopyClient";
import { LinkedInGlyph } from "@/components/site/SimpleIcons";

const quickLinks = [
  { href: "/#top", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Casos reales" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#proceso", label: "Cómo trabajamos" },
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
              <span className="h-9 w-9 rounded-full border-2 border-primary bg-primary grid place-items-center text-primary-foreground text-xs font-display font-semibold shrink-0">
                DA
              </span>
              <span className="text-left">
                <span className="block font-display font-semibold text-base text-foreground tracking-tight">
                  Diego Abad
                </span>
                <span className="block text-xs text-muted-foreground">Software y automatizaciones</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-snug max-w-sm">
              Soluciones a medida, integraciones y productos que ordenan la operación real de equipos y negocios.
            </p>
          </div>

          <nav className="lg:col-span-4" aria-label="Enlaces del pie">
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-medium mb-2">Navegación</p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-1.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block py-0.5"
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
              <div className="flex flex-wrap items-center gap-2.5 justify-start">
                <FooterEmailCopyClient />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel={REL_WHATSAPP_EXTERNAL}
                  className="h-9 w-9 rounded-[10px] border-2 border-primary bg-surface/60 grid place-items-center text-primary hover:text-primary-foreground hover:bg-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Abrir WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/diegoabad-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 rounded-[10px] border-2 border-primary bg-surface/60 grid place-items-center text-primary hover:text-primary-foreground hover:bg-primary transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label="Perfil de LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInGlyph size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-border/80 flex justify-center sm:justify-start">
          <p className="text-[11px] text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Diego Abad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
