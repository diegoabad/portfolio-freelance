import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CalendarDays, Code2, MessageCircle, Package, Smartphone, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { HERO_NAV_CTA_LABEL, PRIMARY_CTA_SUBLINE } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { SERVICE_LANDING_PAGES, type ServiceLandingSlug } from "@/lib/service-landings";

const CARD_ICON: Record<ServiceLandingSlug, LucideIcon> = {
  "bots-whatsapp": MessageCircle,
  "sistema-turnos-online": CalendarDays,
  "automatizacion-negocios": Zap,
  "desarrollo-software-medida": Code2,
  "software-para-clinicas": Smartphone,
  "sistema-gestion-inventario": Package,
};

type ServiceCard = {
  href: string;
  slug: ServiceLandingSlug;
  title: string;
  desc: string;
  impact: string;
};

const serviceCards: ServiceCard[] = SERVICE_LANDING_PAGES.map((p) => ({
  href: `/${p.slug}`,
  slug: p.slug,
  title: p.homePainTitle,
  desc: p.homeCardSubtitle,
  impact: p.homeCardBadge,
}));

function ServiceIcon({ slug }: { slug: ServiceLandingSlug }) {
  const Icon = CARD_ICON[slug];
  return <Icon className="size-7 shrink-0 text-primary" strokeWidth={2} aria-hidden />;
}

export function Services() {
  return (
    <section id="servicios" className="relative pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-18 lg:pb-20">
      <div className="max-w-site mx-auto px-6 lg:px-10">
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

        <div className="mt-10 md:mt-14 lg:mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {serviceCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 md:p-6 backdrop-blur transition hover:border-primary/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_*]:cursor-pointer"
              aria-label={`${card.title} — ir al servicio`}
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative flex flex-col h-full min-h-[188px] md:min-h-0">
                <ServiceIcon slug={card.slug} />
                <h3 className="mt-4 md:mt-5 text-lg md:text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 md:mt-2.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                <p className="mt-3 md:mt-4 inline-flex w-fit max-w-full rounded-md border border-primary/20 bg-primary/[0.07] px-2.5 py-1 text-[11px] font-medium text-primary leading-snug md:text-xs">
                  {card.impact}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full mt-12 md:mt-16 lg:mt-20">
        <div className="w-full border-y border-border bg-surface/50 backdrop-blur px-6 py-7 md:px-10 md:py-9 lg:py-10">
          <div className="mx-auto flex max-w-site flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-8 xl:gap-10">
            <div className="max-w-2xl text-center lg:self-center">
              <h3 className="text-2xl font-display font-semibold tracking-tight text-pretty text-foreground md:text-3xl lg:text-4xl">
                ¿Tenés dudas sobre si podemos ayudarte?
              </h3>
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed md:text-xl">
                Analizo tu caso y te propongo la mejor solución.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col items-center gap-1.5 lg:w-fit lg:self-center">
              <a
                href={homeSection("#contacto")}
                className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-[15px] lg:w-auto lg:min-h-10 lg:px-6 lg:py-2.5 lg:text-[15px]"
                aria-label={`${HERO_NAV_CTA_LABEL} — ir a contacto`}
              >
                <WhatsAppIcon size={20} className="shrink-0 text-primary-foreground" aria-hidden />
                {HERO_NAV_CTA_LABEL}
              </a>
              <p className="w-full text-center text-xs font-medium text-muted-foreground">{PRIMARY_CTA_SUBLINE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
