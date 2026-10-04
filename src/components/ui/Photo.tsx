import Image, { type ImageProps } from "next/image";

/**
 * Every photograph on the site goes through here, for two reasons.
 *
 * 1. Sharpness — Next re-encodes images at quality 75 by default, which is
 *    visibly soft on the small cards. We always ask for 92.
 * 2. Brand — a colour grade is laid over the photo so the galleries read as
 *    one set rather than as a wall of stock photography.
 *
 * The grade is three layers, applied in order:
 *   · `wash`  — pink, in `soft-light`: shifts the colour without flattening
 *               detail, so the photo keeps its contrast.
 *   · `cool`  — navy from the top, in `overlay`: deepens skies towards the
 *               blue hour. Only the `city` preset uses it.
 *   · `glow`  — pink from the bottom, in `screen`: the lamp-light bloom that
 *               makes a night frame feel lit rather than merely dark.
 *
 * Use `city` on destination photography, where every frame is a blue-hour or
 * night cityscape and the grade is doing the work of making them a family.
 *
 * The layers render as siblings rather than a wrapper, so they drop into the
 * existing `relative` photo frames without changing any layout.
 */

export type PhotoTint = "none" | "soft" | "strong" | "city";

const tints = {
  soft: {
    wash: "from-brand-600/70 via-brand-500/28",
    glow: "from-brand-500/22",
    cool: null,
  },
  strong: {
    wash: "from-brand-600/90 via-brand-500/45",
    glow: "from-brand-500/30",
    cool: null,
  },
  city: {
    wash: "from-brand-600/85 via-brand-500/40",
    glow: "from-brand-500/36",
    cool: "from-ink-900/35",
  },
} satisfies Record<Exclude<PhotoTint, "none">, unknown>;

export function Photo({
  tint = "soft",
  tintClassName = "",
  quality = 92,
  alt,
  ...props
}: ImageProps & {
  tint?: PhotoTint;
  /** Extra classes for the grade layers — stacking context, z-index, hover. */
  tintClassName?: string;
}) {
  const grade = tint === "none" ? null : tints[tint];

  return (
    <>
      <Image alt={alt} quality={quality} {...props} />
      {grade ? (
        <>
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${grade.wash} to-transparent mix-blend-soft-light ${tintClassName}`}
          />
          {grade.cool ? (
            <span
              aria-hidden
              className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${grade.cool} via-transparent to-transparent mix-blend-overlay ${tintClassName}`}
            />
          ) : null}
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${grade.glow} via-transparent to-transparent mix-blend-screen ${tintClassName}`}
          />
        </>
      ) : null}
    </>
  );
}
