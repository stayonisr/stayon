"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  scrub?: boolean;
};

/**
 * Attach GSAP ScrollTrigger reveal to a container ref.
 * Selects children matching `selector` (default: direct children).
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = ":scope > *",
  opts: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: opts.y ?? 48 },
        {
          opacity: 1,
          y: 0,
          duration: opts.duration ?? 0.85,
          delay: opts.delay ?? 0,
          stagger: opts.stagger ?? 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [selector, opts.y, opts.duration, opts.delay, opts.stagger]);

  return ref;
}

/**
 * Parallax — element moves at a fraction of scroll speed.
 */
export function useParallax<T extends HTMLElement>(speed = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * -60,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Horizontal text marquee on scroll (like luxury brand sites).
 */
export function useMarquee<T extends HTMLElement>(direction: "left" | "right" = "left") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sign = direction === "left" ? -1 : 1;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: sign * 15,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [direction]);

  return ref;
}
