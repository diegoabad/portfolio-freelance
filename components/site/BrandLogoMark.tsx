import Image from "next/image";
import { LOGO_DA_IMAGE_SRC } from "@/lib/brand-assets";

type BrandLogoMarkProps = {
  /** Lado del cuadrado en px (pantalla). La imagen interna usa el doble para retina. */
  size: number;
  priority?: boolean;
  className?: string;
};

/** Marca «DA». URL y bust de caché en `lib/brand-assets.ts`. */
export function BrandLogoMark({ size, priority, className }: BrandLogoMarkProps) {
  const pixelSize = Math.round(size);
  return (
    <span
      className={`relative inline-block shrink-0 ${className ?? ""}`}
      style={{ width: pixelSize, height: pixelSize }}
      aria-hidden
    >
      <Image
        src={LOGO_DA_IMAGE_SRC}
        alt=""
        width={pixelSize * 2}
        height={pixelSize * 2}
        priority={priority}
        quality={85}
        className="size-full object-contain object-center"
        sizes={`${pixelSize}px`}
      />
    </span>
  );
}
