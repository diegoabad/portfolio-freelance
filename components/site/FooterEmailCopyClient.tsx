"use client";

import dynamic from "next/dynamic";

const FooterEmailCopy = dynamic(
  () => import("@/components/site/FooterEmailCopy").then((m) => ({ default: m.FooterEmailCopy })),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-10 w-10 shrink-0 rounded-xl border-2 border-border bg-muted/25 animate-pulse"
        aria-hidden
      />
    ),
  },
);

export function FooterEmailCopyClient() {
  return <FooterEmailCopy />;
}
