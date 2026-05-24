"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { blurDataURL } from "@/lib/blur";

function StaggaredHeading({ text }) {
  const words = text.split(" ");
  return (
    <h1 className="font-display text-5xl md:text-7xl font-light text-[#F0EDE8] leading-none mb-4 overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.2em]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.1 + i * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function HeroSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden bg-[#0C0C0C]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={slide.images[0]}
            alt={`${slide.make} ${slide.model}`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[rgba(12,12,12,0.55)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,12,12,0.65)] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Text — bottom left */}
      <div className="absolute bottom-16 left-6 md:left-12 max-w-xl z-10">
        <AnimatePresence mode="wait">
          <motion.div key={current + "-meta"}>
            <motion.p
              className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-3 font-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {slide.make}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <div key={current + "-heading"}>
            <StaggaredHeading text={slide.model} />
          </div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current + "-body"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-[#9DA3AE] text-sm md:text-base mb-6 leading-relaxed font-body max-w-sm">
              {slide.tagline}
            </p>
            <Link
              href={`/inventory/${slide.slug}`}
              className="inline-block text-[12px] tracking-[0.15em] uppercase bg-[#C8932A] text-[#0C0C0C] px-6 py-3 font-semibold hover:bg-[#F0EDE8] transition-colors duration-200"
            >
              View Details
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Price badge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current + "-price"}
          className="absolute top-20 right-6 md:right-12 z-10 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-[11px] tracking-[0.15em] uppercase text-[#6B7280] mb-1">Starting at</p>
          <p className="font-display text-2xl text-[#F0EDE8]">
            ${slide.price.toLocaleString()}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Controls — bottom right */}
      <div className="absolute bottom-8 right-6 md:right-12 z-10 flex items-center gap-4">
        <div className="flex gap-2 mr-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-6 h-[2px] bg-[#C8932A]"
                  : "w-2 h-[2px] bg-[#6B7280] hover:bg-[#9DA3AE]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={prev}
          className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center text-[#9DA3AE] hover:border-[#C8932A] hover:text-[#C8932A] transition-colors duration-200"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center text-[#9DA3AE] hover:border-[#C8932A] hover:text-[#C8932A] transition-colors duration-200"
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-8 left-6 md:left-12 z-10">
        <span className="text-[11px] tracking-[0.15em] text-[#6B7280]">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
