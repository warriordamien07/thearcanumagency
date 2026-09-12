import Image from "next/image";

// Photo with intrinsic dimensions (no layout shift) served by Next in
// modern formats (AVIF/WebP) with responsive sizes. All site photos are
// below the fold, so they stay lazy-loaded.
const DIMS: Record<string, [number, number]> = {
  "/assets/img/work-1.jpg": [1200, 801],
  "/assets/img/work-2.jpg": [1200, 872],
  "/assets/img/work-3.jpg": [1200, 1500],
  "/assets/img/work-4.jpg": [1200, 855],
  "/assets/img/service-web.jpg": [1200, 1500],
  "/assets/img/service-brand.jpg": [1200, 1500],
  "/assets/img/service-seo.jpg": [1200, 800],
  "/assets/img/service-ecom.jpg": [1200, 801],
  "/assets/img/journal-1.jpg": [1200, 800],
  "/assets/img/journal-2.jpg": [1200, 800],
  "/assets/img/spotlight.jpg": [880, 1100],
};

export function Ph({
  src,
  alt,
  sizes,
  style,
}: {
  src: string;
  alt: string;
  sizes: string;
  style?: React.CSSProperties;
}) {
  const [width, height] = DIMS[src] ?? [1200, 800];
  return (
    <Image
      className="ph"
      draggable={false}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      style={style}
    />
  );
}
