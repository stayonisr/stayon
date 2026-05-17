"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface GalleryImage {
  src: string;
  alt: string;
  thumb?: string; // optional separate thumbnail
}

interface ProductGalleryProps {
  images: GalleryImage[];
  objectFit?: "cover" | "contain";
  aspectRatio?: string;
  thumbSize?: number;
}

export function ProductGallery({
  images,
  objectFit = "cover",
  aspectRatio = "4/3",
  thumbSize = 72,
}: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const fit = objectFit === "contain" ? "object-contain p-4" : "object-cover";

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#f8f7f5",
          border: "1px solid rgba(160,144,114,0.12)",
          aspectRatio,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              className={`object-center ${fit}`}
              sizes="(max-width: 768px) 100vw, 700px"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch", paddingInlineEnd: 4 }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={img.alt}
              className="relative shrink-0 cursor-pointer transition-all duration-200 focus:outline-none"
              style={{
                width: thumbSize,
                height: thumbSize,
                background: "#f8f7f5",
                border: active === i
                  ? "2px solid #a09072"
                  : "2px solid rgba(160,144,114,0.18)",
                opacity: active === i ? 1 : 0.55,
              }}
            >
              <Image
                src={img.thumb ?? img.src}
                alt={img.alt}
                fill
                className={`object-center ${fit}`}
                sizes={`${thumbSize}px`}
              />
              {active === i && (
                <motion.div
                  layoutId="thumb-indicator"
                  className="absolute inset-0"
                  style={{ border: "2px solid #a09072", pointerEvents: "none" }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
