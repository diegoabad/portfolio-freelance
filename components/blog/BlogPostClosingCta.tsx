import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { getBlogClosingCta } from "@/lib/blog-closing-cta";
import type { BlogTopicTrack } from "@/lib/blog-types";
import { HERO_NAV_CTA_LABEL, PRIMARY_CTA_SUBLINE, REL_WHATSAPP_EXTERNAL, whatsAppHref } from "@/lib/contact";

type Props = {
  track: BlogTopicTrack;
  closingCta?: Partial<{ headline: string; supporting: string }>;
};

export function BlogPostClosingCta({ track, closingCta }: Props) {
  const base = getBlogClosingCta(track);
  const headline = closingCta?.headline ?? base.headline;
  const supporting = closingCta?.supporting ?? base.supporting;
  const wa = whatsAppHref(base.whatsAppPrefill);

  return (
    <aside
      className="mt-10 rounded-2xl border border-primary/35 bg-linear-to-br from-primary/12 via-primary/6 to-transparent p-6 shadow-[inset_0_1px_0_0_rgb(255_255_255_/0.06)] md:mt-12 md:p-8"
      aria-labelledby="blog-closing-cta-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">¿Siguiente paso?</p>
      <h2
        id="blog-closing-cta-heading"
        className="mt-3 font-display text-xl font-semibold tracking-tight text-pretty text-foreground md:text-2xl md:leading-snug"
      >
        {headline}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{supporting}</p>
      <div className="mt-6 flex justify-center">
        <div className="inline-flex w-full max-w-md flex-col items-center gap-3 sm:w-auto">
          <a
            href={wa}
            target="_blank"
            rel={REL_WHATSAPP_EXTERNAL}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[10px] border-2 border-primary bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-95 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-h-0 sm:px-6"
          >
            <WhatsAppIcon size={20} className="shrink-0" aria-hidden />
            {HERO_NAV_CTA_LABEL}
          </a>
          <p className="w-full text-center text-xs text-muted-foreground">{PRIMARY_CTA_SUBLINE}</p>
        </div>
      </div>
    </aside>
  );
}
