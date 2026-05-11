"use client";

import { useEffect, useMemo, useId, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogPost, BlogTopicTrack } from "@/lib/blog-types";
import {
  BLOG_TOPIC_MENU_ALL_OPTION_CLASS,
  BLOG_TOPIC_TRACKS_ORDERED,
  blogTopicLabel,
  blogTopicMenuOptionClassName,
} from "@/lib/blog-topics";

const PAGE_SIZE = 12;

function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

function postSearchHaystack(post: BlogPost): string {
  return [
    post.title,
    post.description,
    post.metaDescription ?? "",
    post.category,
  ].join(" ");
}

function matchesSearch(post: BlogPost, query: string): boolean {
  const q = query.trim();
  if (!q) return true;
  const hay = normalizeText(postSearchHaystack(post));
  const tokens = normalizeText(q).split(/\s+/).filter(Boolean);
  return tokens.every((t) => hay.includes(t));
}

type Props = { posts: readonly BlogPost[] };

export function BlogIndexListing({ posts }: Props) {
  const searchId = useId();
  const topicFilterId = useId();
  const topicListboxId = useId();
  const topicDropdownRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<BlogTopicTrack | null>(null);
  const [topicMenuOpen, setTopicMenuOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!topicMenuOpen) return;
    function closeOnOutside(e: MouseEvent) {
      if (!topicDropdownRef.current?.contains(e.target as Node)) setTopicMenuOpen(false);
    }
    function closeOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setTopicMenuOpen(false);
    }
    document.addEventListener("mousedown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [topicMenuOpen]);

  useEffect(() => {
    setPage(1);
  }, [query, topic]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (topic !== null && p.topicTrack !== topic) return false;
      return matchesSearch(p, query);
    });
  }, [posts, topic, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const currentPage = Math.min(Math.max(1, page), totalPages);

  const pageSlice = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = filtered.length === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, filtered.length);

  const topicTriggerClass =
    "flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-border bg-background/60 py-3 pl-4 pr-3 text-left text-sm text-foreground transition hover:border-primary/35 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const topicListboxPanelClass =
    "absolute left-0 right-0 top-full z-50 mt-1 max-h-[min(50vh,280px)] overflow-y-auto rounded-xl border border-border bg-background py-1 shadow-xl ring-1 ring-black/25 dark:ring-white/10";

  return (
    <div className="mt-10 md:mt-12 space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="w-full max-w-xl">
          <label htmlFor={searchId} className="text-xs uppercase tracking-wider text-muted-foreground">
            Buscar
          </label>
          <div className="relative mt-2">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Título o palabras clave…"
              autoComplete="off"
              className="w-full rounded-xl border border-border bg-background/60 py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition"
            />
          </div>
        </div>

        <div className="w-full max-w-md flex-1 lg:max-w-none lg:shrink-0">
          <span id={`${topicFilterId}-label`} className="text-xs uppercase tracking-wider text-muted-foreground">
            Etiqueta
          </span>
          <div ref={topicDropdownRef} className="relative mt-2 max-w-md">
            <button
              type="button"
              id={topicFilterId}
              aria-haspopup="listbox"
              aria-expanded={topicMenuOpen}
              aria-controls={topicListboxId}
              aria-labelledby={`${topicFilterId}-label`}
              onClick={() => setTopicMenuOpen((o) => !o)}
              className={topicTriggerClass}
            >
              <span className="min-w-0 truncate">
                {topic === null ? "Todas las etiquetas" : blogTopicLabel(topic)}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${topicMenuOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {topicMenuOpen ? (
              <ul
                id={topicListboxId}
                role="listbox"
                aria-labelledby={`${topicFilterId}-label`}
                className={topicListboxPanelClass}
              >
                <li role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={topic === null}
                    className={`${BLOG_TOPIC_MENU_ALL_OPTION_CLASS} ${topic === null ? "bg-muted/40 font-semibold text-foreground" : ""}`}
                    onClick={() => {
                      setTopic(null);
                      setTopicMenuOpen(false);
                    }}
                  >
                    Todas las etiquetas
                  </button>
                </li>
                {BLOG_TOPIC_TRACKS_ORDERED.map((track) => {
                  const selected = topic === track;
                  return (
                    <li key={track} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected}
                        className={`${blogTopicMenuOptionClassName(track)} ${selected ? "bg-muted/35 font-semibold" : ""}`}
                        onClick={() => {
                          setTopic(track);
                          setTopicMenuOpen(false);
                        }}
                      >
                        {blogTopicLabel(track)}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground" aria-live="polite">
        {filtered.length === 0
          ? "No hay entradas que coincidan con tu búsqueda."
          : `Mostrando ${rangeStart}–${rangeEnd} de ${filtered.length} ${filtered.length === 1 ? "entrada" : "entradas"}`}
      </p>

      {pageSlice.length > 0 ? (
        <div className="grid gap-4 md:gap-5 lg:grid-cols-2" aria-label="Entradas del blog">
          {pageSlice.map((post) => (
            <BlogPostCard key={post.slug} post={post} headingLevel="h2" />
          ))}
        </div>
      ) : null}

      {filtered.length > PAGE_SIZE ? (
        <nav
          className="flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row sm:gap-6"
          aria-label="Paginación del blog"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-[10px] border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 disabled:pointer-events-none disabled:opacity-35"
            >
              Anterior
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-[10px] border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 disabled:pointer-events-none disabled:opacity-35"
            >
              Siguiente
            </button>
          </div>
          <span className="text-sm tabular-nums text-muted-foreground">
            Página {currentPage} de {totalPages}
          </span>
        </nav>
      ) : null}
    </div>
  );
}
