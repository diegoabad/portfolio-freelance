import Link from "next/link";
import type { ServiceLandingPageData } from "@/lib/service-landings";
import { mergedInterlinks } from "@/lib/service-landings";
import { LANDING_CONSULT_CTA } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function ServiceLandingView({ page }: { page: ServiceLandingPageData }) {
  const links = mergedInterlinks(page);

  return (
    <div className="mx-auto w-full max-w-site flex-1 px-6 lg:px-10 py-12 lg:py-20">
    <article className="mx-auto max-w-3xl w-full">
      <header>
        <h1 className="font-display tracking-tight text-pretty text-foreground">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {page.categoryHeading}
          </span>
          <span className="mt-3 block text-3xl font-semibold sm:text-4xl md:text-5xl">{page.title}</span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">{page.subtitle}</p>
      </header>

      <div className="mt-12 space-y-8">
        <section className="relative overflow-hidden rounded-2xl border border-primary/35 bg-primary/[0.07] px-6 py-7 md:px-8 md:py-9">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">¿Te suena familiar?</p>
          <p className="relative mt-4 text-lg font-medium leading-snug text-foreground md:text-xl text-pretty">
            {page.problem}
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-surface/45 px-6 py-7 md:px-8 md:py-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Lo que te propongo
          </p>
          <p className="mt-4 leading-relaxed text-foreground/95 md:text-[17px]">{page.solution}</p>
        </section>
      </div>

      <section className="mt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Beneficios</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {page.benefits.map((b) => (
            <span
              key={b}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 inline-flex w-full max-w-full flex-col items-center gap-1.5 self-start sm:w-fit sm:max-w-[min(100%,28rem)]">
        <Link
          href={homeSection("#contacto")}
          className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-6 py-3.5 text-center text-[15px] font-semibold text-primary-foreground transition-[transform,opacity] hover:opacity-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-8 sm:text-base sm:hover:scale-[1.02]"
          aria-label={`${LANDING_CONSULT_CTA} — ir a contacto`}
        >
          <WhatsAppIcon size={20} className="hidden shrink-0 text-primary-foreground md:block" aria-hidden />
          {LANDING_CONSULT_CTA}
        </Link>
      </div>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="font-display text-lg font-semibold text-foreground">Explorá más soluciones</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Otros enfoques que suelen ir de la mano con lo que estás buscando.
        </p>
        <nav aria-label="Soluciones relacionadas" className="mt-6 overflow-hidden rounded-xl border border-border bg-background/50">
          <ul className="divide-y divide-border">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex items-center gap-4 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface md:px-5 md:py-[1.125rem] md:text-[15px]"
                >
                  <span className="group-hover:text-primary transition-colors">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </article>
    </div>
  );
}
