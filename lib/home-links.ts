/** Rutas a secciones del home (`/`). Usar desde cualquier página para evitar `#` sobre la URL actual. */
export function homeSection(hashWithPound: string): string {
  const h = hashWithPound.startsWith("#") ? hashWithPound : `#${hashWithPound}`;
  return `/${h}`;
}
