import { REL_WHATSAPP_EXTERNAL, WHATSAPP_NUMBER } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel={REL_WHATSAPP_EXTERNAL}
      className="fixed z-60 grid h-14 w-14 place-items-center rounded-full border-2 border-primary bg-primary text-primary-foreground shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]"
      aria-label="Escribir por WhatsApp"
      title="WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-primary-foreground" />
    </a>
  );
}
