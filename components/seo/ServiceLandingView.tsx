import Link from "next/link";
import type { ServiceLandingPageData } from "@/lib/service-landings";
import { mergedInterlinks } from "@/lib/service-landings";
import { LANDING_CONSULT_CTA } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  LandingReadingMain,
  LandingRelatedNav,
  LANDING_SECTION,
  landingBodyClass,
  landingH2Class,
} from "@/components/seo/landing-blocks";

export function ServiceLandingView({ page }: { page: ServiceLandingPageData }) {
  const links = mergedInterlinks(page);

  return (
    <LandingReadingMain>
      <header className="border-b border-border pb-8 md:pb-10">
        <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          {page.categoryHeading}
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-pretty text-foreground md:text-4xl lg:text-[2.35rem] lg:leading-tight">
          {page.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{page.subtitle}</p>
      </header>

      <section className={LANDING_SECTION} aria-labelledby="svc-problem-heading">
        <h2 id="svc-problem-heading" className={landingH2Class}>
          ¿Te suena familiar?
        </h2>
        <p className={`${landingBodyClass} mt-6 font-medium text-foreground md:text-lg`}>{page.problem}</p>
      </section>

      <section className={LANDING_SECTION} aria-labelledby="svc-solution-heading">
        <h2 id="svc-solution-heading" className={landingH2Class}>
          Lo que te propongo
        </h2>
        <div className={landingBodyClass}>{page.solution}</div>
      </section>

      <section className={LANDING_SECTION} aria-labelledby="svc-benefits-heading">
        <h2 id="svc-benefits-heading" className={landingH2Class}>
          Beneficios
        </h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 marker:text-primary text-foreground/95 leading-relaxed md:text-[17px]">
          {page.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 md:mt-12">
        <Link
          href={homeSection("#contacto")}
          className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-6 py-3.5 text-center text-[15px] font-semibold text-primary-foreground transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-8 sm:text-base"
          aria-label={`${LANDING_CONSULT_CTA} — ir a contacto`}
        >
          <WhatsAppIcon size={20} className="hidden shrink-0 text-primary-foreground md:block" aria-hidden />
          {LANDING_CONSULT_CTA}
        </Link>
      </div>

      <LandingRelatedNav links={links} />
    </LandingReadingMain>
  );
}
