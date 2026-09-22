/**
 * A decorative QR-style graphic.
 *
 * This is an ILLUSTRATION, not a working QR code — it is not encoded and will
 * not scan. Real partner QR codes are generated per hostel and carry that
 * hostel's referral identifier; when that exists, this component is the slot
 * it drops into.
 *
 * The pattern is derived deterministically from `seed`, so the server and the
 * client render exactly the same modules and hydration stays clean.
 */

const MODULES = 25;

function hash(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Finder squares sit in three corners; keep their zones clear of noise. */
function inFinderZone(x: number, y: number) {
  const zone = 8;
  const far = MODULES - zone;
  return (
    (x < zone && y < zone) || (x >= far && y < zone) || (x < zone && y >= far)
  );
}

function Finder({ x, y, unit }: { x: number; y: number; unit: number }) {
  return (
    <g transform={`translate(${x * unit} ${y * unit})`}>
      <rect
        width={unit * 7}
        height={unit * 7}
        rx={unit * 1.6}
        fill="none"
        stroke="currentColor"
        strokeWidth={unit}
      />
      <rect
        x={unit * 2}
        y={unit * 2}
        width={unit * 3}
        height={unit * 3}
        rx={unit * 0.8}
        fill="currentColor"
      />
    </g>
  );
}

export function QrGraphic({
  seed = "next-stop",
  className = "",
  title = "Illustration of a NEXT STOP partner QR code",
}: {
  seed?: string;
  className?: string;
  title?: string;
}) {
  const unit = 4;
  const size = MODULES * unit;
  const rand = mulberry32(hash(seed));

  const cells: Array<{ x: number; y: number }> = [];
  for (let y = 0; y < MODULES; y += 1) {
    for (let x = 0; x < MODULES; x += 1) {
      if (inFinderZone(x, y)) continue;
      if (rand() > 0.52) cells.push({ x, y });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label={title}
    >
      <Finder x={0} y={0} unit={unit} />
      <Finder x={MODULES - 7} y={0} unit={unit} />
      <Finder x={0} y={MODULES - 7} unit={unit} />
      {cells.map((cell) => (
        <rect
          key={`${cell.x}-${cell.y}`}
          x={cell.x * unit}
          y={cell.y * unit}
          width={unit}
          height={unit}
          rx={unit * 0.28}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
