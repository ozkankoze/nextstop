/**
 * The network, drawn rather than photographed: a globe with partner hostels
 * pinned on it, dashed routes running between them, and a QR code sitting on
 * each hop — a traveller scanning their way from one destination to the next.
 */

/** A small decorative QR tile used as a waypoint marker. */
function QrMark({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-11"
        y="-11"
        width="22"
        height="22"
        rx="5"
        fill="#ffffff"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="-7.5" y="-7.5" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="2.5" y="-7.5" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="-7.5" y="2.5" width="5" height="5" rx="1" fill="currentColor" />
      <rect x="3.5" y="3.5" width="2.6" height="2.6" fill="currentColor" />
      <rect x="-0.8" y="3.5" width="2.6" height="2.6" fill="currentColor" />
      <rect x="3.5" y="-0.8" width="2.6" height="2.6" fill="currentColor" />
    </g>
  );
}

export function NetworkWorldGraphic({
  className = "",
  title = "A globe with partner hostels linked by travel routes, a QR code on every hop",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 440 330"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="nsw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdecf3" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <rect width="440" height="330" fill="url(#nsw-sky)" />

      {/* The globe */}
      <g
        fill="none"
        stroke="#d5dae2"
        strokeWidth="1.6"
        transform="translate(220 170)"
      >
        <circle r="124" />
        <ellipse rx="124" ry="44" />
        <ellipse rx="124" ry="88" />
        <ellipse rx="44" ry="124" />
        <ellipse rx="88" ry="124" />
        <line x1="-124" y1="0" x2="124" y2="0" />
      </g>

      {/* Routes between the stops */}
      <g
        fill="none"
        stroke="#ea2a6b"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="7 8"
      >
        <path d="M112 196C136 128 196 96 256 108" />
        <path d="M256 108c52 12 78 54 84 104" />
        <path d="M340 212c-30 50-102 72-168 44" />
      </g>

      {/* Hostel pins */}
      <g>
        {[
          [112, 196],
          [256, 108],
          [340, 212],
          [172, 256],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="11" fill="#ea2a6b" opacity="0.18" />
            <circle cx={cx} cy={cy} r="5" fill="#ea2a6b" />
          </g>
        ))}
      </g>

      {/* A QR code on every hop */}
      <g className="text-ink-900" color="#0b1120">
        <QrMark x={178} y={126} />
        <QrMark x={320} y={142} />
        <QrMark x={268} y={262} />
      </g>
    </svg>
  );
}
