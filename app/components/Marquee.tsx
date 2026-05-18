interface MarqueeProps {
  items: string[];
  speed?: number; // seconds for one item-set to travel the viewport
  className?: string;
  separator?: string;
  style?: React.CSSProperties;
}

// Repeat the set this many times per half so a single half is always
// far wider than the viewport -> the band is never empty.
const REPEAT = 4;

/**
 * Infinite horizontal marquee — pure CSS conveyor.
 *
 * The track holds two identical halves. A CSS keyframe slides it from
 * translateX(0) to translateX(-50%): the moment the first half has
 * fully exited left, the second (identical) half sits exactly where
 * the first began, so the loop restarts on a pixel-identical frame —
 * perfectly seamless, always full. No JS, no measurement, no GSAP.
 * dir="ltr" keeps the track left-anchored so nothing empties on the
 * right even though the site is RTL.
 */
export function Marquee({
  items,
  speed = 22,
  className = "",
  separator = "·",
  style,
}: MarqueeProps) {
  const oneHalf = Array.from({ length: REPEAT }, () => items).flat();
  const allItems = [...oneHalf, ...oneHalf];
  const duration = speed * REPEAT;

  return (
    <div
      dir="ltr"
      className={`overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      <style>{`
        @keyframes stayon-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .stayon-marquee-track {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
          animation: stayon-marquee ${duration}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .stayon-marquee-track { animation: none; }
        }
      `}</style>
      <div className="stayon-marquee-track">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span>{item}</span>
            <span className="mx-6 opacity-40 text-lg">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
