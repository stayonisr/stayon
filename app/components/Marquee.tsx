"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeProps {
  items: string[];
  speed?: number; // seconds for one full loop
  className?: string;
  separator?: string;
  style?: React.CSSProperties;
}

// How many times to repeat the item set per half. Enough so a single
// half is always wider than the viewport (so the band is never empty).
const REPEAT = 4;

/**
 * Infinite horizontal marquee — GPU-accelerated via GSAP.
 * Renders two identical halves so the loop is perfectly seamless.
 */
export function Marquee({
  items,
  speed = 22,
  className = "",
  separator = "·",
  style,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measurement-free seamless loop. The track holds two identical
    // halves; translating by exactly -50% lands the second half where
    // the first began -> perfectly continuous, content always on screen.
    // No scrollWidth reads (which can be 0 before fonts load -> NaN).
    animRef.current = gsap.fromTo(
      track,
      { xPercent: 0 },
      { xPercent: -50, duration: speed * REPEAT, ease: "none", repeat: -1 }
    );

    return () => {
      animRef.current?.kill();
    };
  }, [speed]);

  // Repeat the set enough times that a single half always overflows the
  // viewport (even on narrow phones) -> the band is never empty.
  const oneHalf = Array.from({ length: REPEAT }, () => items).flat();
  const allItems = [...oneHalf, ...oneHalf];

  return (
    <div className={`overflow-hidden ${className}`} style={style} aria-hidden="true">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
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
