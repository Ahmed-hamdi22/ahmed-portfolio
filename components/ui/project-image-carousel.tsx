"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectImageCarouselProps {
  title: string;
  images?: string[];
  accent: string;
  isFeatured?: boolean;
  className?: string;
}

export function ProjectImageCarousel({
  title,
  images = [],
  accent,
  isFeatured = false,
  className,
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const availableImages = useMemo(
    () => images.filter((image) => image && !failedImages.includes(image)),
    [failedImages, images]
  );
  const hasImages = availableImages.length > 0;
  const canSlide = availableImages.length > 1;

  useEffect(() => {
    if (activeIndex >= availableImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, availableImages.length]);

  useEffect(() => {
    if (!canSlide || paused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % availableImages.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [availableImages.length, canSlide, paused]);

  const goToPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + availableImages.length) % availableImages.length
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % availableImages.length);
  };

  const activeImage = availableImages[activeIndex];

  return (
    <div
      className={cn(
        "group/image relative h-full min-h-[190px] overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#020617] shadow-[0_18px_44px_rgba(2,6,23,0.32)]",
        isFeatured && "min-h-[220px]",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(135deg, rgba(56,189,248,0.10), transparent 42%), linear-gradient(180deg, #06111f 0%, #020617 100%)",
        }}
      />

      <div className="absolute inset-[10px] overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0B1120]">
        {hasImages ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.995 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={`${title} screenshot ${activeIndex + 1}`}
                fill
                sizes={
                  isFeatured
                    ? "(min-width: 768px) 40vw, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-500 group-hover/image:scale-[1.025]"
                priority={isFeatured && activeIndex === 0}
                onError={() =>
                  setFailedImages((current) =>
                    current.includes(activeImage) ? current : [...current, activeImage]
                  )
                }
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div
              className="h-px w-20"
              style={{
                background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
              }}
            />
            <p className="max-w-[220px] text-[12px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
              Project preview unavailable
            </p>
          </div>
        )}

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#020617]/55" />
      </div>

      {canSlide && (
        <>
          <button
            type="button"
            aria-label={`Show previous ${title} screenshot`}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-[#020617]/70 text-[#CBD5E1] backdrop-blur transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8] sm:flex"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label={`Show next ${title} screenshot`}
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12] bg-[#020617]/70 text-[#CBD5E1] backdrop-blur transition hover:border-[#38BDF8]/40 hover:text-[#38BDF8] sm:flex"
          >
            <ChevronRight size={15} />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#020617]/70 px-2.5 py-1.5 backdrop-blur">
            {availableImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show ${title} screenshot ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === activeIndex ? "w-5 bg-[#38BDF8]" : "w-1.5 bg-white/35"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
