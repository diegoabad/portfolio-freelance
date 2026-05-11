"use server";

import { cookies } from "next/headers";
import { PRICING_REGION_COOKIE, type PricingRegion } from "@/lib/pricing-region";

export async function setPricingRegionPreference(region: PricingRegion) {
  if (region !== "ar" && region !== "intl") return;
  const jar = await cookies();
  jar.set(PRICING_REGION_COOKIE, region, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
