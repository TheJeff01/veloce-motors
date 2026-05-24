"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { brands, getCarsByMake } from "@/lib/cars";
import { blurDataURL } from "@/lib/blur";

function MiniCarCard({ car }) {
  return (
    <motion.div
      whileHover="hover"
      className="relative flex-shrink-0 w-64 md:w-72 bg-white border border-[#E5E5E5] overflow-hidden"
    >
      <Link href={`/inventory/${car.slug}`} className="block">
        <div className="relative h-40 overflow-hidden bg-[#F7F7F7]">
          <motion.div
            className="absolute inset-0"
            variants={{ hover: { scale: 1.04 } }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              fill
              className="object-cover"
              sizes="288px"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </motion.div>
        </div>

        <div className="p-4">
          <p className="text-[10px] tracking-[0.18em] uppercase text-[#9DA3AE] mb-1 font-body">
            {car.make}
          </p>
          <h3 className="font-display text-xl font-semibold text-[#111111] leading-tight mb-1">
            {car.model}
          </h3>
          <p className="text-[13px] text-[#6B7280] mb-3">{car.year}</p>
          <div className="flex items-center justify-between">
            <span className="font-body text-sm font-semibold text-[#111111]">
              ${car.price.toLocaleString()}
            </span>
            <span className="text-[#C8932A]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-[#111111] px-4 py-3"
          initial={{ y: "100%" }}
          variants={{ hover: { y: 0 } }}
          transition={{ duration: 0.25 }}
        >
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">Power</p>
              <p className="text-[12px] font-semibold text-[#F0EDE8]">{car.horsepower} hp</p>
            </div>
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">0–60</p>
              <p className="text-[12px] font-semibold text-[#F0EDE8]">{car.zeroToSixty}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">V-Max</p>
              <p className="text-[12px] font-semibold text-[#F0EDE8]">{car.topSpeed}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function BrandTabs() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);
  const tabsRef = useRef(null);
  const activeCars = getCarsByMake(activeBrand);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-3">
            Browse by brand
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#111111]">
            Car <span className="text-[#C8932A]">Catalog</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Brand list — vertical on desktop, horizontal scroll on mobile */}
          <div className="md:w-44 flex-shrink-0">
            {/* Mobile: horizontal scrollable strip */}
            <div
              ref={tabsRef}
              className="flex md:hidden gap-2 overflow-x-auto pb-1"
              style={{ scrollbarWidth: "none" }}
            >
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`flex-shrink-0 text-[11px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 whitespace-nowrap ${
                    activeBrand === brand
                      ? "border-[#C8932A] text-[#C8932A] bg-[#FBF8F3]"
                      : "border-[#E5E5E5] text-[#6B7280] hover:border-[#111111] hover:text-[#111111]"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <ul className="hidden md:flex flex-col gap-1">
              {brands.map((brand) => (
                <li key={brand}>
                  <button
                    onClick={() => setActiveBrand(brand)}
                    className={`text-left w-full text-[12px] tracking-[0.12em] uppercase py-2 px-3 border-l-2 transition-all duration-200 ${
                      activeBrand === brand
                        ? "border-[#C8932A] text-[#C8932A] bg-[#FBF8F3]"
                        : "border-transparent text-[#6B7280] hover:text-[#111111] hover:border-[#E5E5E5]"
                    }`}
                  >
                    {brand}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Car cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="flex gap-4 overflow-x-auto pb-4"
                style={{ scrollbarWidth: "none" }}
              >
                {activeCars.map((car) => (
                  <MiniCarCard key={car.id} car={car} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/inventory"
            className="text-[12px] tracking-[0.18em] uppercase text-[#C8932A] border-b border-[#C8932A] pb-0.5 hover:text-[#111111] hover:border-[#111111] transition-colors duration-200"
          >
            View full inventory
          </Link>
        </div>
      </div>
    </section>
  );
}
