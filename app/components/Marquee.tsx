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

/**
 * Infinite horizontal marquee — GPU-accelerated via GSAP.
 * Renders items twice so the loop is seamless.
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

    // Measurement-free seamless loop: the track holds the items twice,
    // so translating it by exactly -50% of its own width lands the
    // second copy precisely where the first started. No scrollWidth
    // reads (which can be 0 before fonts load on mobile -> NaN).
    animRef.current = gsap.fromTo(
      track,
      { xPercent: 0 },
      { xPercent: -50, duration: speed, ease: "none", repeat: -1 }
    );

    return () => {
      animRef.current?.kill();
    };
  }, [speed]);

  const allItems = [...items, ...items]; // duplicate for seamless loop

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
