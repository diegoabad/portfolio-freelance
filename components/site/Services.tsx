import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CalendarDays, Code2, Package, Stethoscope, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { RevealStagger } from "@/components/site/RevealStagger";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import {
  getHomeCardCta,
  SERVICE_LANDING_PAGES,
  type ServiceLandingSlug,
} from "@/lib/service-landings";

const CARD_ICON: Record<ServiceLandingSlug, LucideIcon | "whatsapp"> = {
  "bots-whatsapp": "whatsapp",
  "sistema-turnos-online": CalendarDays,
  "automatizacion-negocios": Zap,
  "desarrollo-software-medida": Code2,
  "software-para-clinicas": Stethoscope,
  "sistema-gestion-inventario": Package,
};

type ServiceCard = {
  href: string;
  slug: ServiceLandingSlug;
  title: string;
  desc: string;
  impact: string;
  ctaLabel: string;
};

const serviceCards: ServiceCard[] = SERVICE_LANDING_PAGES.map((p) => ({
  href: `/${p.slug}`,
  slug: p.slug,
  title: p.homePainTitle,
  desc: p.homeCardSubtitle,
  impact: p.homeCardBadge,
  ctaLabel: getHomeCardCta(p),
}));

function ServiceIcon({ slug }: { slug: ServiceLandingSlug }) {
  const I = CARD_ICON[slug];
  if (I === "whatsapp") {
    return (
      <div className="h-12 w-12 rounded-xl bg-primary grid place-items-center text-primary-foreground shrink-0">
        <WhatsAppIcon size={22} className="shrink-0 text-primary-foreground" aria-hidden />
      </div>
    );
  }
  const Icon = I;
  return (
    <div className="h-12 w-12 rounded-xl bg-primary grid place-items-center text-primary-foreground shrink-0">
      <Icon size={22} aria-hidden />
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-18 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Servicios</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-semibold tracking-tight text-pretty">
              Software que resuelve <span className="text-primary">problemas reales</span> en tu negocio
            </h2>
            <p className="mt-4 md:mt-5 text-lg text-muted-foreground leading-relaxed">
              Desarrollo sistemas y automatizaciones que ahorran tiempo, reducen errores y mejoran tu operación. Entrá a
              cada solución para ver el enfoque completo.
            </p>
          </div>
        </RevealOnScroll>

        <RevealStagger className="mt-10 md:mt-14 lg:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 md:p-8 backdrop-blur transition hover:border-primary/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_*]:cursor-pointer"
              aria-label={`${card.title}: ${card.ctaLabel.toLowerCase()}`}
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative flex flex-col h-full min-h-[220px] md:min-h-0">
                <ServiceIcon slug={card.slug} />
                <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2.5 md:mt-3 text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                <p className="mt-5 md:mt-6 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary leading-snug">
                  {card.impact}
                </p>
                <p className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1">
                  {card.ctaLabel}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </RevealStagger>
      </div>

      <RevealOnScroll className="w-full mt-12 md:mt-16 lg:mt-20 mb-3 md:mb-4 lg:mb-5">
        <div className="w-full border-y border-border bg-surface/50 backdrop-blur px-6 py-7 md:px-10 md:py-9 lg:py-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Asesoramiento</p>
              <h3 className="mt-3 text-2xl font-display font-semibold tracking-tight text-pretty text-foreground md:text-3xl lg:text-4xl">
                No sabés qué necesitás mejorar en tu negocio
              </h3>
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed md:text-xl">
                Analizo tu caso y te propongo la mejor solución.
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <a
                href={homeSection("#contacto")}
                className="inline-flex w-full min-h-12 items-center justify-center gap-2.5 rounded-full border-2 border-primary bg-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:w-auto lg:min-h-0 lg:px-8 lg:text-base lg:hover:scale-[1.02]"
                aria-label={`${PRIMARY_CTA_LABEL} — ir a contacto`}
              >
                <WhatsAppIcon size={22} className="shrink-0 text-primary-foreground" aria-hidden />
                {PRIMARY_CTA_LABEL}
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
