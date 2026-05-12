import type { Metadata } from "next";

/** Robots + Googlebot: indexación y vistas ampliadas en resultados cuando aplique. */
export const robotsIndexFollowGoogle: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
