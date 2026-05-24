"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const offers = [
  {
    id: 1,
    make: "Lamborghini",
    model: "Huracán EVO",
    slug: "lamborghini-huracan-evo-2022",
    price: 285000,
    originalPrice: 310000,
    description:
      "Low-mileage 2022 example in Arancio Borealis. One of the last naturally aspirated V10 sports cars available.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    make: "Ferrari",
    model: "Roma",
    slug: "ferrari-roma-2023",
    price: 285000,
    originalPrice: 315000,
    description:
      "2023 Ferrari Roma in Rosso Corsa with Cuoio leather. CPO certified with full factory warranty.",
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    make: "Porsche",
    model: "911 Turbo S",
    slug: "porsche-911-turbo-s-2023",
    price: 219000,
    originalPrice: 245000,
    description:
      "Gentian Blue 2023 with sport exhaust, carbon interior package, and rear axle steering.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function SpecialOfferSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % offers.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + offers.length) % offers.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const offer = offers[current];

  return (
    <section
      className="relative bg-[#0C0C0C] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={offer.image}
            alt={`${offer.make} ${offer.model}`}
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left — title */}
          <div className="md:w-1/2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#C8932A] mb-4">Limited availability</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-[#F0EDE8] leading-none">
              Special<br />Offer
            </h2>
          </div>

          {/* Right — car info */}
          <div className="md:w-1/2 md:text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={current + "-info"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-2">{offer.make}</p>
                <h3 className="font-display text-3xl md:text-4xl font-light text-[#F0EDE8] mb-3">
                  {offer.model}
                </h3>
                <p className="text-[#9DA3AE] text-sm leading-relaxed mb-4 max-w-sm md:ml-auto">
                  {offer.description}
                </p>
                <div className="flex items-baseline gap-3 md:justify-end mb-6">
                  <span className="font-display text-2xl text-[#C8932A]">
                    ${offer.price.toLocaleString()}
                  </span>
                  <span className="text-[#6B7280] text-sm line-through">
                    ${offer.originalPrice.toLocaleString()}
                  </span>
                </div>
                <Link
                  href={`/inventory/${offer.slug}`}
                  className="inline-block text-[12px] tracking-[0.15em] uppercase border border-[#C8932A] text-[#C8932A] px-5 py-2 hover:bg-[#C8932A] hover:text-[#0C0C0C] transition-all duration-200"
                >
                  More details
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex items-center gap-4">
          <button onClick={prev} className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center text-[#9DA3AE] hover:border-[#C8932A] hover:text-[#C8932A] transition-colors" aria-label="Previous">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex gap-2">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? "w-6 h-[2px] bg-[#C8932A]" : "w-2 h-[2px] bg-[#6B7280] hover:bg-[#9DA3AE]"}`}
                aria-label={`Offer ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center text-[#9DA3AE] hover:border-[#C8932A] hover:text-[#C8932A] transition-colors" aria-label="Next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
