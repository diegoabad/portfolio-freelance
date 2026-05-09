"use client";

import { useEffect, useState } from "react";

const TOAST_MS = 2000;

function copyEmail(addr: string): Promise<void> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(addr);
  }
  return new Promise((resolve, reject) => {
    try {
      const ta = document.createElement("textarea");
      ta.value = addr;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) resolve();
      else reject(new Error("copy"));
    } catch {
      reject(new Error("copy"));
    }
  });
}

export function CvMobileContactHints() {
  const [toast, setToast] = useState<{ text: string; show: boolean }>({ text: "", show: false });

  useEffect(() => {
    const root = document.getElementById("cv-document");
    if (!root) return;

    let hideId: ReturnType<typeof setTimeout>;
    let clearId: ReturnType<typeof setTimeout>;

    const show = (text: string) => {
      clearTimeout(hideId);
      clearTimeout(clearId);
      setToast({ text, show: true });
      hideId = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
        clearId = setTimeout(() => setToast({ text: "", show: false }), 320);
      }, TOAST_MS);
    };

    const loc = root.querySelector<HTMLElement>(".contact .contact-item.is-static");
    const revealLocation = () => {
      show("Buenos Aires, Argentina");
    };
    loc?.addEventListener("click", revealLocation);
    const onLocKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      revealLocation();
    };
    loc?.addEventListener("keydown", onLocKey);

    const emailLink = root.querySelector<HTMLAnchorElement>('a.contact-item[href^="mailto:"]');
    const onMail = (e: MouseEvent) => {
      e.preventDefault();
      const href = emailLink?.getAttribute("href") ?? "";
      const addr = href.replace(/^mailto:/i, "").split("?")[0];
      copyEmail(addr).then(
        () => show("Email copiado al portapapeles"),
        () => show("No se pudo copiar el email"),
      );
    };
    emailLink?.addEventListener("click", onMail);

    return () => {
      clearTimeout(hideId);
      clearTimeout(clearId);
      loc?.removeEventListener("click", revealLocation);
      loc?.removeEventListener("keydown", onLocKey);
      emailLink?.removeEventListener("click", onMail);
    };
  }, []);

  return (
    <div
      className={`cv-contact-toast${toast.show ? " is-visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={!toast.show}
    >
      {toast.text}
    </div>
  );
}
