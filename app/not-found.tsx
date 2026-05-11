import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-mono text-muted-foreground">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        No encontramos esta página
      </h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        El enlace puede estar desactualizado o la página se movió.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-[10px] border-2 border-primary/45 bg-primary/9 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/80 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
