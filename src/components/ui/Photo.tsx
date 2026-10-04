import Image, { type ImageProps } from "next/image";

/**
 * Every photograph on the site goes through here, for two reasons.
 *
 * 1. Sharpness — Next re-encodes images at quality 75 by default, which is
 *    visibly soft on the small cards. We always ask for 92.
 * 2. Brand — a pink cast is laid over the photo so the galleries read as
 *    NEXT STOP rather than as a wall of stock photography. `soft-light` keeps
 *    the original detail and only shifts the colour; the `screen` layer adds
 *    the pink glow along the bottom edge.
 *
 * The tint is rendered as a sibling rather than a wrapper, so it drops into
 * the existing `relative` photo frames without changing any layout.
 */

export type PhotoTint = "none" | "soft" | "strong";

const tints: Record<Exclude<PhotoTint, "none">, string> = {
  soft: "from-brand-600/70 via-brand-500/28",
  strong: "from-brand-600/90 via-brand-500/45",
};

export function Photo({
  tint = "soft",
  tintClassName = "",
  quality = 92,
  alt,
  ...props
}: ImageProps & {
  tint?: PhotoTint;
  /** Extra classes for the tint layer — stacking context, hover, z-index. */
  tintClassName?: string;
}) {
  return (
    <>
      <Image alt={alt} quality={quality} {...props} />
      {tint === "none" ? null : (
        <>
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${tints[tint]} to-transparent mix-blend-soft-light ${tintClassName}`}
          />
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-500/22 via-transparent to-transparent mix-blend-screen ${tintClassName}`}
          />
        </>
      )}
    </>
  );
}
