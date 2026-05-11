import { getPublicPriceTeaser, type PricingRegion } from "@/lib/pricing-region";
import { getServiceLanding, splitHomeCardBadge, type ServiceLandingSlug } from "@/lib/service-landings";

const chipClass =
  "inline-flex max-w-full items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-medium leading-tight text-primary/95 md:text-[11px]";

export function ServiceLandingHeroOffer({
  slug,
  pricingRegion,
}: {
  slug: ServiceLandingSlug;
  pricingRegion: PricingRegion;
}) {
  const page = getServiceLanding(slug);
  if (!page) return null;
  const chips = splitHomeCardBadge(page.homeCardBadge);
  const teaser = getPublicPriceTeaser(slug, pricingRegion);
  return (
    <>
      <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Enfoque del servicio">
        {chips.map((kw, i) => (
          <span key={`${slug}-${i}-${kw}`} className={chipClass}>
            {kw}
          </span>
        ))}
      </div>
      <div className="mt-5 rounded-xl border border-border/70 bg-muted/20 px-4 py-3 md:px-5 md:py-3.5">
        <p className="text-sm font-semibold tabular-nums text-primary md:text-[15px]">{teaser}</p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground md:text-[12px]">{page.homeCardPriceBenefit}</p>
      </div>
    </>
  );
}
