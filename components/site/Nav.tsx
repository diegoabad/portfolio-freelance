"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogoMark } from "@/components/site/BrandLogoMark";
import { PricingRegionSwitcher } from "@/components/site/PricingRegionSwitcher";
import { caseStudies } from "@/lib/case-studies";
import { homeSection } from "@/lib/home-links";
import type { PricingRegion } from "@/lib/pricing-region";
import { SERVICE_LANDING_PAGES, SERVICE_SLUGS } from "@/lib/service-landings";
import { BRAND_TAGLINE } from "@/lib/site";

const SECTION_IDS = ["top", "servicios", "proyectos", "testimonios", "sobre-mi", "proceso", "contacto"] as const;

type SectionId = (typeof SECTION_IDS)[number];

type HashNavLink = { kind: "hash"; id: SectionId; label: string; hash: string };
type RouteNavLink = { kind: "route"; label: string; href: "/blog" };

const navLinks: readonly (HashNavLink | RouteNavLink)[] = [
  { kind: "hash", id: "top", label: "Inicio", hash: "#top" },
  { kind: "hash", id: "servicios", label: "Servicios", hash: "#servicios" },
  { kind: "hash", id: "proyectos", label: "Casos de éxito", hash: "#proyectos" },
  { kind: "hash", id: "testimonios", label: "Testimonios", hash: "#testimonios" },
  { kind: "hash", id: "sobre-mi", label: "Sobre mí", hash: "#sobre-mi" },
  { kind: "hash", id: "proceso", label: "Cómo trabajamos", hash: "#proceso" },
  { kind: "route", label: "Blog", href: "/blog" },
  { kind: "hash", id: "contacto", label: "Contacto", hash: "#contacto" },
] as const;

function readActiveFromHash(): SectionId {
  if (typeof window === "undefined") return "top";
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "top") return "top";
  if ((SECTION_IDS as readonly string[]).includes(raw)) return raw as SectionId;
  return "top";
}

/** Píxeles de scroll en home antes de mostrar fondo sólido en la barra (solo desktop). */
const HOME_NAV_SOLID_SCROLL_Y = 72;

export function Nav({ pricingRegion }: { pricingRegion: PricingRegion }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("top");
  const [servicesMenu, setServicesMenu] = useState<{ anchorPath: string } | null>(null);
  const [projectsMenu, setProjectsMenu] = useState<{ anchorPath: string } | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  /** En `/`, barra transparente arriba del hero; al hacer scroll gana fondo (viewport ≥ 1200px). */
  const [navSolid, setNavSolid] = useState(() => pathname !== "/");

  const servicesOpen = servicesMenu !== null && servicesMenu.anchorPath === pathname;
  const projectsOpen = projectsMenu !== null && projectsMenu.anchorPath === pathname;

  const isHome = pathname === "/";
  const isServiceRoute = SERVICE_SLUGS.some((slug) => pathname === `/${slug}`);
  const isProjectRoute = pathname.startsWith("/proyectos");
  const serviciosActive = (isHome && active === "servicios") || isServiceRoute;
  const proyectosActive = (isHome && active === "proyectos") || isProjectRoute;

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
    if (!isHome) {
      setNavSolid(true);
      return;
    }
    const onScroll = () => {
      setNavSolid(window.scrollY > HOME_NAV_SOLID_SCROLL_Y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!servicesOpen && !projectsOpen) return;
    const dismissServices = () => {
      setServicesMenu(null);
      if (pathname === "/") bumpActiveFromUrlHash();
    };
    const dismissProjects = () => {
      setProjectsMenu(null);
      if (pathname === "/") bumpActiveFromUrlHash();
    };
    const onDocMouseDown = (e: globalThis.MouseEvent) => {
      const t = e.target as Node;
      if (servicesOpen && servicesRef.current && !servicesRef.current.contains(t)) dismissServices();
      if (projectsOpen && projectsRef.current && !projectsRef.current.contains(t)) dismissProjects();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) dismissServices();
      if (projectsOpen) dismissProjects();
    };
    document.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen, projectsOpen, pathname]);

  /** En móvil, evita que el scroll mueva la página debajo del header fijo mientras el menú está abierto. */
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, [open]);

  const linkClass = (id: SectionId) => {
    if (!isHome) {
      return "text-white/90 hover:text-white transition-colors";
    }
    return active === id ? "text-primary font-semibold" : "text-white/90 hover:text-white transition-colors";
  };

  const blogNavDesktopClass =
    "whitespace-nowrap shrink-0 transition-colors " +
    (pathname.startsWith("/blog") ? "text-primary font-semibold" : "text-white/90 hover:text-white");

  const closeServicesMenu = () => {
    setServicesMenu(null);
    if (isHome) bumpActiveFromUrlHash();
  };

  const closeProjectsMenu = () => {
    setProjectsMenu(null);
    if (isHome) bumpActiveFromUrlHash();
  };

  const toggleServicesMenu = () => {
    if (servicesOpen) closeServicesMenu();
    else {
      setProjectsMenu(null);
      setServicesMenu({ anchorPath: pathname });
    }
  };

  const toggleProjectsMenu = () => {
    if (projectsOpen) closeProjectsMenu();
    else {
      setServicesMenu(null);
      setProjectsMenu({ anchorPath: pathname });
    }
  };

  const servicesTriggerClass = serviciosActive
    ? "text-primary font-semibold"
    : servicesOpen
      ? "text-white font-medium"
      : "text-white/90 hover:text-white transition-colors";

  const projectsTriggerClass = proyectosActive
    ? "text-primary font-semibold"
    : projectsOpen
      ? "text-white font-medium"
      : "text-white/90 hover:text-white transition-colors";

  const dropdownItemClass =
    "block px-4 py-2.5 text-sm text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-none focus-visible:bg-muted/80";

  const serviceItemClass = (slug: string) => {
    const here = pathname === `/${slug}`;
    return here
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;
  };

  const projectItemClass = (slug: string) => {
    const here = pathname === `/proyectos/${slug}`;
    return here
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;
  };

  /** Home con `/#servicios`: resalta «Todos los servicios» en el menú (no aplica en landings sueltas). */
  const todosServiciosMenuClass =
    isHome && active === "servicios" && !isServiceRoute
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;

  /** Home con `/#proyectos`: resalta «Todos los casos» si no estamos en una página de proyecto. */
  const todosProyectosMenuClass =
    isHome && active === "proyectos" && !isProjectRoute
      ? `${dropdownItemClass} font-semibold text-primary bg-primary/10`
      : dropdownItemClass;

  const scrollToServiciosSection = () => {
    window.setTimeout(() => {
      document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  /** Clic normal (no nueva pestaña / medio): evita que Next.js vaya a `/` y deje el scroll arriba sin respetar el hash. */
  const isPlainLeftClick = (e: MouseEvent<HTMLAnchorElement>) =>
    !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) && e.button === 0;

  const onClickTodosServicios = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isPlainLeftClick(e)) return;
    e.preventDefault();
    closeServicesMenu();
    setOpen(false);
    if (pathname === "/") {
      window.history.pushState(null, "", "#servicios");
      bumpActiveFromUrlHash();
      scrollToServiciosSection();
      return;
    }
    window.location.assign("/#servicios");
  };

  const scrollToProyectosSection = () => {
    window.setTimeout(() => {
      document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const onClickTodosProyectos = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isPlainLeftClick(e)) return;
    e.preventDefault();
    closeProjectsMenu();
    setOpen(false);
    if (pathname === "/") {
      window.history.pushState(null, "", "#proyectos");
      bumpActiveFromUrlHash();
      scrollToProyectosSection();
      return;
    }
    window.location.assign("/#proyectos");
  };

  const headerSurfaceClass =
    isHome && !navSolid
      ? "bg-background min-[1200px]:bg-transparent min-[1200px]:backdrop-blur-none min-[1200px]:supports-backdrop-filter:bg-transparent"
      : "bg-background min-[1200px]:bg-background min-[1200px]:backdrop-blur-none";

  const headerBorderClass =
    isHome && !navSolid ? "border-b border-transparent" : "border-b border-primary/18";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full ${headerBorderClass} transition-[background-color,backdrop-filter,border-color] duration-300 ease-out max-[1199px]:flex max-[1199px]:max-h-dvh max-[1199px]:flex-col max-[1199px]:overflow-hidden min-[1200px]:overflow-visible ${headerSurfaceClass}`}
    >
      <div className="relative max-w-site mx-auto w-full shrink-0 px-4 sm:px-6 lg:px-10 flex min-h-21 min-[1200px]:min-h-24 items-center justify-between gap-3 py-3 min-[1200px]:py-[7px]">
        <a
          href={homeSection("#top")}
          onClick={() => isHome && bumpActiveFromUrlHash()}
          className="flex min-w-0 shrink-0 items-center gap-2.5 z-20 pr-1 min-[1200px]:pr-0"
        >
          <BrandLogoMark
            size={42}
            priority
            className={
              isHome && !navSolid
                ? "drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] min-[1200px]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
                : undefined
            }
          />
          <span className="min-w-0 text-left leading-tight">
            <span className="block truncate font-display font-semibold text-base tracking-tight text-foreground">
              Diego Abad
            </span>
            <span className="block truncate text-[11px] leading-tight text-muted-foreground">{BRAND_TAGLINE}</span>
          </span>
        </a>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
        <nav
          className="hidden min-[1200px]:flex items-center justify-end gap-2 lg:gap-5 xl:gap-7 text-sm min-[1200px]:text-base pointer-events-auto flex-wrap font-medium"
          aria-label="Principal"
        >
          {navLinks.map((l) =>
            l.kind === "hash" && l.id === "servicios" ? (
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
                    className="absolute left-1/2 top-full z-60 pt-2 -translate-x-1/2 min-w-[min(100vw-2rem,17.5rem)]"
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
            ) : l.kind === "hash" && l.id === "proyectos" ? (
              <div key={l.hash} className="relative shrink-0" ref={projectsRef}>
                <button
                  type="button"
                  id="nav-proyectos-trigger"
                  className={`inline-flex items-center gap-0.5 whitespace-nowrap rounded-md px-0.5 py-1 ${projectsTriggerClass}`}
                  aria-expanded={projectsOpen}
                  aria-haspopup="true"
                  aria-controls="nav-proyectos-menu"
                  onClick={toggleProjectsMenu}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 opacity-80 transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {projectsOpen && (
                  <div
                    id="nav-proyectos-menu"
                    role="menu"
                    aria-labelledby="nav-proyectos-trigger"
                    className="absolute left-1/2 top-full z-60 pt-2 -translate-x-1/2 min-w-[min(100vw-2rem,20rem)] max-h-[min(70vh,28rem)] overflow-y-auto overscroll-y-contain"
                  >
                    <div className="rounded-xl border border-border bg-background py-2 shadow-lg shadow-black/10">
                      <a
                        href={homeSection("#proyectos")}
                        role="menuitem"
                        className={todosProyectosMenuClass}
                        onClick={onClickTodosProyectos}
                      >
                        Todos los casos
                      </a>
                      <div className="my-1 h-px bg-border" role="separator" />
                      {caseStudies.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/proyectos/${p.slug}`}
                          role="menuitem"
                          className={projectItemClass(p.slug)}
                          aria-current={pathname === `/proyectos/${p.slug}` ? "page" : undefined}
                          onClick={closeProjectsMenu}
                          aria-label={p.title}
                          title={p.title}
                        >
                          {p.navShortLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : l.kind === "route" ? (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                className={blogNavDesktopClass}
              >
                {l.label}
              </Link>
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

          <div className="hidden min-[1200px]:flex shrink-0 items-center pl-1">
            <PricingRegionSwitcher initialRegion={pricingRegion} />
          </div>

          <button
            type="button"
            className={`min-[1200px]:hidden shrink-0 z-20 p-2 rounded-lg transition ${
              isHome && !navSolid ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="min-[1200px]:hidden flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain border-t border-border bg-surface shadow-[0_18px_48px_-20px_oklch(0.02_0.02_270/0.75)] [touch-action:pan-y]">
          <div className="max-w-site mx-auto flex w-full items-center justify-start px-6 py-2.5">
            <PricingRegionSwitcher initialRegion={pricingRegion} />
          </div>
          <nav
            className="max-w-site mx-auto w-full px-6 pt-1 flex flex-col gap-1 pb-[max(1rem,env(safe-area-inset-bottom))]"
            aria-label="Principal móvil"
          >
            {navLinks.map((l) =>
              l.kind === "hash" && l.id === "servicios" ? (
                <details key={l.hash} className="group rounded-xl">
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-2 py-2.5 px-3 -mx-1 rounded-xl text-base transition-colors hover:bg-surface-elevated [&::-webkit-details-marker]:hidden ${serviciosActive ? "text-primary font-semibold" : "text-white/90"}`}
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
                      className={`block rounded-md py-2 text-base transition-colors ${
                        isHome && active === "servicios" && !isServiceRoute
                          ? "font-semibold text-primary bg-primary/10 px-2 -mx-1"
                          : "text-white/90 hover:text-primary px-2 -mx-1"
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
                          className={`py-2 text-base transition-colors ${here ? "font-semibold text-primary" : "text-white/90 hover:text-primary"}`}
                        >
                          {p.categoryHeading}
                        </Link>
                      );
                    })}
                  </div>
                </details>
              ) : l.kind === "hash" && l.id === "proyectos" ? (
                <details key={l.hash} className="group rounded-xl">
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-2 py-2.5 px-3 -mx-1 rounded-xl text-base transition-colors hover:bg-surface-elevated [&::-webkit-details-marker]:hidden ${proyectosActive ? "text-primary font-semibold" : "text-white/90"}`}
                  >
                    <span>Casos de éxito</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 opacity-70 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="mt-1 mb-1 ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
                    <a
                      href={homeSection("#proyectos")}
                      onClick={onClickTodosProyectos}
                      className={`block rounded-md py-2 text-base transition-colors ${
                        isHome && active === "proyectos" && !isProjectRoute
                          ? "font-semibold text-primary bg-primary/10 px-2 -mx-1"
                          : "text-white/90 hover:text-primary px-2 -mx-1"
                      }`}
                    >
                      Todos los casos
                    </a>
                    {caseStudies.map((p) => {
                      const here = pathname === `/proyectos/${p.slug}`;
                      return (
                        <Link
                          key={p.slug}
                          href={`/proyectos/${p.slug}`}
                          onClick={() => setOpen(false)}
                          aria-current={here ? "page" : undefined}
                          aria-label={p.title}
                          title={p.title}
                          className={`rounded-md py-2 text-base leading-snug transition-colors ${here ? "font-semibold text-primary px-2 -mx-1 bg-primary/10" : "text-white/90 hover:text-primary px-2 -mx-1"}`}
                        >
                          {p.navShortLabel}
                        </Link>
                      );
                    })}
                  </div>
                </details>
              ) : l.kind === "route" ? (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                  className={`py-2.5 text-base rounded-xl px-3 -mx-1 transition-colors hover:bg-surface-elevated ${
                    pathname.startsWith("/blog") ? "font-semibold text-primary" : "text-white/90"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.hash}
                  href={homeSection(l.hash)}
                  onClick={() => {
                    bumpActiveFromUrlHash();
                    setOpen(false);
                  }}
                  className={`py-2.5 text-base rounded-xl px-3 -mx-1 transition-colors hover:bg-surface-elevated ${linkClass(l.id)}`}
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
