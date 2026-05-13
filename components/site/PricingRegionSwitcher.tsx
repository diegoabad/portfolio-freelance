"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setPricingRegionPreference } from "@/app/actions/pricing-region";
import type { PricingRegion } from "@/lib/pricing-region";

type Props = { initialRegion: PricingRegion };

const segmentInactive =
  "font-semibold text-muted-foreground/90 hover:text-primary min-w-[2.65rem] min-[1200px]:min-w-[2.5rem]";
const segmentActive =
  "bg-primary font-bold text-black shadow-sm shadow-primary/20 ring-1 ring-primary/35";

export function PricingRegionSwitcher({ initialRegion }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const apply = (region: PricingRegion) => {
    if (pending) return;
    startTransition(() => {
      void setPricingRegionPreference(region).then(() => {
        router.refresh();
      });
    });
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border/45 bg-muted/35 p-[5px] backdrop-blur-sm max-md:backdrop-blur-none min-[1200px]:p-[3px] ${pending ? "cursor-wait opacity-90 [&_button]:cursor-wait" : ""}`}
      role="group"
      aria-busy={pending}
      aria-label="Moneda de referencia para precios orientativos"
    >
      <button
        type="button"
        className={`rounded-full px-2.5 py-1 text-[12px] tabular-nums transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-[1200px]:px-2.5 min-[1200px]:py-[5px] min-[1200px]:text-[11px] ${
          initialRegion === "ar" ? segmentActive : segmentInactive
        }`}
        aria-pressed={initialRegion === "ar"}
        onClick={() => initialRegion !== "ar" && apply("ar")}
      >
        ARS
      </button>
      <button
        type="button"
        className={`rounded-full px-2.5 py-1 text-[12px] tabular-nums transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-[1200px]:px-2.5 min-[1200px]:py-[5px] min-[1200px]:text-[11px] ${
          initialRegion === "intl" ? segmentActive : segmentInactive
        }`}
        aria-pressed={initialRegion === "intl"}
        onClick={() => initialRegion !== "intl" && apply("intl")}
      >
        USD
      </button>
    </div>
  );
}
