import type { ReactNode } from "react";

/** Quita marcadores `**` del texto conservando el interior (card y cuerpo del detalle: sin color primary). */
export function stripRichMarkers(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

/** Solo para la frase final del caso (`detailFooterCallout`): `**fragmento**` → énfasis en color primary. */
export function CaseStudyRichInline({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(text.slice(last, m.index));
    }
    nodes.push(
      <span key={key++} className="font-semibold text-primary">
        {m[1]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return <>{nodes}</>;
}
