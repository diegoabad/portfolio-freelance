"use client";

import dynamic from "next/dynamic";

const FooterEmailCopy = dynamic(
  () => import("@/components/site/FooterEmailCopy").then((m) => ({ default: m.FooterEmailCopy })),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-9 w-9 shrink-0 rounded-[10px] border-2 border-border bg-muted/25 animate-pulse"
        aria-hidden
      />
    ),
  },
);

export function FooterEmailCopyClient() {
  return <FooterEmailCopy />;
}
