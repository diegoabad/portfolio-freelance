"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PRIMARY_CTA_LABEL } from "@/lib/contact";
import { homeSection } from "@/lib/home-links";
import { SERVICE_LANDING_PAGES, SERVICE_SLUGS } from "@/lib/service-landings";

const SECTION_IDS = ["top", "servicios", "proyectos", "sobre-mi", "proceso", "contacto"] as const;

type SectionId = (typeof SECTION_IDS)[number];

const links: { id: SectionId; label: string; hash: string }[] = [
  { id: "top", label: "Inicio", hash: "#top" },
  { id: "servicios", label: "Servicios", hash: "#servicios" },
  { id: "proyectos", label: "Casos reales", hash: "#proyectos" },
  { id: "sobre-mi", label: "Sobre mí", hash: "#sobre-mi" },
  { id: "proceso", label: "Cómo trabajamos", hash: "#proceso" },
  { id: "contacto", label: "Contacto", hash: "#contacto" },
];

function readActiveFromHash(): SectionId {
  if (typeof window === "undefined") return "top";
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "top") return "top";
  if ((SECTION_IDS as readonly string[]).includes(raw)) return raw as SectionId;
  return "top";
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("top");
  const [servicesMenu, setServicesMenu] = useState<{ anchorPath: string } | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesOpen = servicesMenu !== null && servicesMenu.anchorPath === pathname;

  const isHome = pathname === "/";
  const isServiceRoute = SERVICE_SLUGS.some((slug) => pathname === `/${slug}`);
  const serviciosActive = (isHome && active === "servicios") || isServiceRoute;

  /** Tras clic en ancla, el hash a veces se actualiza después del handler; `hashchange` no siempre dispara (p. ej. mismo cliente). */
  const bumpActiveFromUrlHash = () => {
    window.setTimeout(() => setActive(readActiveFromHash()), 0);
  };

  /** Ítem activo = ancla en la URL. No escuchamos `scroll`: con `scroll-behavior: smooth` la posición miente hasta que termina la animación y volvía a marcar la sección anterior. */
  useEffect(() => {
    if (!isHome) return;

    const syncFromHash = () => setActive(readActiveFromHash());

    window.addEventListener("hashchange", syncFromHash);
    window.addEventListener("popstate", syncFromHash);

    const t0 = window.setTimeout(syncFromHash, 0);

    return () => {
      window.clearTimeout(t0);
      window.removeEventListener("hashchange", syncFromHash);
      window.removeEventListener("popstate", syncFromHash);
    };
  }, [isHome]);

  useEffect(() => {
    if (!servicesOpen) return;
    const dismissMenuAndResyncNav = () => {
      setServicesMenu(null);
      if (pathname === "/") bumpActiveFromUrlHash();
    };
    const onDocMouseDown = (e: globalThis.MouseEvent) => {
      if (servicesRef.current?.contains(e.target as Node)) return;
      dismissMenuAndResyncNav();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissMenuAndResyncNav();
    };
    document.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen, pathname]);

  const linkClass = (id: SectionId) => {
    if (!isHome) {
      return "text-muted-foreground hover:text-foreground transition-colors";
    }
    return active === id ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground transition-colors";
  };

  const ctaClass =
    "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-primary-foreground hover:opacity-90 transition shrink-0 whitespace-nowrap";

  const closeServicesMenu = () => {
    setServicesMenu(null);
    if (isHome) bumpActiveFromUrlHash();
  };

  const toggleServicesMenu = () => {
    if (servicesOpen) closeServicesMenu();
    else setServicesMenu({ anchorPath: pathname });
  };

  const servicesTriggerClass = serviciosActive
    ? "text-primary font-semibold"
    : servicesOpen
      ? "text-foreground font-medium"
      : "text-muted-foreground hover:text-foreground transition-colors";

  const dropdownItemClass =
    "block px-4 py-2.5 text-sm text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:bg-muted/80";

  const serviceItemClass = (slug: string) => {
    const here = pathname === `/${slug}`;
    return here
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;
  };

  /** Home con `/#servicios`: resalta «Todos los servicios» en el menú (no aplica en landings sueltas). */
  const todosServiciosMenuClass =
    isHome && active === "servicios" && !isServiceRoute
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;

  const scrollToServiciosSection = () => {
    window.setTimeout(() => {
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const onClickTodosServicios = () => {
    closeServicesMenu();
    bumpActiveFromUrlHash();
    if (pathname === "/") scrollToServiciosSection();
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-border bg-background md:bg-background/95 md:backdrop-blur-xl md:supports-[backdrop-filter]:bg-background/80">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between md:justify-center">
        <a
          href={homeSection("#top")}
          onClick={() => isHome && bumpActiveFromUrlHash()}
          className="flex min-w-0 flex-1 items-center gap-2 font-display font-semibold tracking-tight text-foreground z-20 md:absolute md:left-6 lg:left-10 md:top-1/2 md:-translate-y-1/2 md:flex-none md:max-w-none md:pr-0 pr-2"
        >
          <span className="h-8 w-8 rounded-full border-2 border-primary bg-primary grid place-items-center text-primary-foreground text-sm font-semibold shrink-0">
            DA
          </span>
          <span className="min-w-0 truncate">Diego Abad</span>
        </a>

        <nav
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 lg:gap-4 xl:gap-6 text-xs lg:text-sm pointer-events-auto max-w-[min(100%-12rem,52rem)] flex-wrap"
          aria-label="Principal"
        >
          {links.map((l) =>
            l.id === "servicios" ? (
              <div key={l.hash} className="relative shrink-0" ref={servicesRef}>
                <button
                  type="button"
                  id="nav-servicios-trigger"
                  className={`inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-0.5 py-1 ${servicesTriggerClass}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="nav-servicios-menu"
                  onClick={toggleServicesMenu}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {servicesOpen && (
                  <div
                    id="nav-servicios-menu"
                    role="menu"
                    aria-labelledby="nav-servicios-trigger"
                    className="absolute left-1/2 top-full z-[60] pt-2 -translate-x-1/2 min-w-[min(100vw-2rem,17.5rem)]"
                  >
                    <div className="rounded-xl border border-border bg-background py-2 shadow-lg shadow-black/10">
                      <a
                        href={homeSection("#servicios")}
                        role="menuitem"
                        className={todosServiciosMenuClass}
                        onClick={onClickTodosServicios}
                      >
                        Todos los servicios
                      </a>
                      <div className="my-1 h-px bg-border" role="separator" />
                      {SERVICE_LANDING_PAGES.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/${p.slug}`}
                          role="menuitem"
                          className={serviceItemClass(p.slug)}
                          aria-current={pathname === `/${p.slug}` ? "page" : undefined}
                          onClick={closeServicesMenu}
                        >
                          {p.categoryHeading}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.hash}
                href={homeSection(l.hash)}
                onClick={() => isHome && bumpActiveFromUrlHash()}
                className={`whitespace-nowrap shrink-0 ${linkClass(l.id)}`}
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 items-center">
          <a href={homeSection("#contacto")} onClick={() => isHome && bumpActiveFromUrlHash()} className={ctaClass}>
            <WhatsAppIcon size={17} className="shrink-0 text-primary-foreground" />
            {PRIMARY_CTA_LABEL}
          </a>
        </div>

        <div className="flex md:hidden items-center shrink-0 z-20">
          <button
            type="button"
            className="p-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden w-full border-t border-border bg-surface shadow-[0_18px_48px_-20px_oklch(0.02_0.02_270/0.75)]">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Principal móvil">
            {links.map((l) =>
              l.id === "servicios" ? (
                <details key={l.hash} className="group rounded-xl">
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-2 py-2.5 px-3 -mx-1 rounded-xl transition-colors hover:bg-surface-elevated [&::-webkit-details-marker]:hidden ${serviciosActive ? "text-primary font-semibold" : "text-muted-foreground"}`}
                  >
                    <span>Servicios</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="mt-1 mb-1 ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                    <a
                      href={homeSection("#servicios")}
                      onClick={() => {
                        setOpen(false);
                        bumpActiveFromUrlHash();
                        if (pathname === "/") scrollToServiciosSection();
                      }}
                      className={`block rounded-md py-2 text-sm transition-colors ${
                        isHome && active === "servicios" && !isServiceRoute
                          ? "font-semibold text-primary bg-primary/10 px-2 -mx-1"
                          : "text-foreground hover:text-primary px-2 -mx-1"
                      }`}
                    >
                      Todos los servicios
                    </a>
                    {SERVICE_LANDING_PAGES.map((p) => {
                      const here = pathname === `/${p.slug}`;
                      return (
                        <Link
                          key={p.slug}
                          href={`/${p.slug}`}
                          onClick={() => setOpen(false)}
                          aria-current={here ? "page" : undefined}
                          className={`py-2 text-sm transition-colors ${here ? "font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {p.categoryHeading}
                        </Link>
                      );
                    })}
                  </div>
                </details>
              ) : (
                <a
                  key={l.hash}
                  href={homeSection(l.hash)}
                  onClick={() => {
                    bumpActiveFromUrlHash();
                    setOpen(false);
                  }}
                  className={`py-2.5 text-sm rounded-xl px-3 -mx-1 transition-colors hover:bg-surface-elevated ${linkClass(l.id)}`}
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href={homeSection("#contacto")}
              onClick={() => {
                bumpActiveFromUrlHash();
                setOpen(false);
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <WhatsAppIcon size={18} className="shrink-0 text-primary-foreground" />
              {PRIMARY_CTA_LABEL}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
