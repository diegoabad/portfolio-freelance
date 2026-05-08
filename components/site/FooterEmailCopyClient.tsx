"use client";

import dynamic from "next/dynamic";

const FooterEmailCopy = dynamic(
  () => import("@/components/site/FooterEmailCopy").then((m) => ({ default: m.FooterEmailCopy })),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-11 w-11 shrink-0 rounded-xl border-2 border-border bg-muted/25 animate-pulse md:h-9 md:w-9 md:rounded-[10px]"
        aria-hidden
      />
    ),
  },
);

export function FooterEmailCopyClient() {
  return <FooterEmailCopy />;
}
