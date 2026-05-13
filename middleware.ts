import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Deploys de preview (Vercel): evita que Google indexe URLs `*.vercel.app` duplicando el sitio canónico.
 * @see https://vercel.com/docs/environment-variables/system-environment-variables
 */
export function middleware(_request: NextRequest) {
  const res = NextResponse.next();
  if (process.env.VERCEL_ENV === "preview") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|.*\\.(?:ico|png|jpg|jpeg|webp|svg|woff2?)$).*)"],
};
