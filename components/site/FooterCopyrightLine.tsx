"use client";

import { useEffect, useState } from "react";

/** Año en cliente para que siga siendo correcto sin redeploy (HTML estático del build). */
export function FooterCopyrightLine() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className="text-[11px] text-muted-foreground text-center sm:text-left">
      © {year} Diego Abad. Todos los derechos reservados.
    </p>
  );
}
