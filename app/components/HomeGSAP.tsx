"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mounts GSAP scroll-driven effects on the homepage.
 * Server component renders the HTML; this client component
 * attaches the animations after hydration.
 */
export function HomeGSAP() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hero product — subtle parallax float ──────────────────────
      gsap.to("[data-hero-product]", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-section]",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ── Hero heading — fade + slide as user scrolls away ─────────
      gsap.to("[data-hero-text]", {
        opacity: 0,
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-section]",
          start: "40% top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Stats numbers — count up on enter ────────────────────────
      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count") ?? "0", 10);
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Section titles — clip reveal (luxury feel) ────────────────
      document.querySelectorAll("[data-clip-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)", opacity: 1 },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.9,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ── Image sections — reveal from bottom with mask ─────────────
      document.querySelectorAll("[data-img-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 6, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
}
