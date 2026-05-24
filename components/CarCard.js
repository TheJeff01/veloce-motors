"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { blurDataURL } from "@/lib/blur";

export default function CarCard({ car }) {
  return (
    <motion.div
      whileHover="hover"
      className="group bg-[#111111] border border-[#1E1E1E] overflow-hidden"
    >
      <Link href={`/inventory/${car.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-[#181818]">
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
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8932A]"
            initial={{ opacity: 0 }}
            variants={{ hover: { opacity: 1 } }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B7280] mb-1">
            {car.make} · {car.year}
          </p>
          <h3 className="font-display text-xl font-semibold text-[#F0EDE8] leading-tight mb-2">
            {car.model}
          </h3>
          <div className="flex items-center justify-between mt-4">
            <span className="font-body text-[#C8932A] font-semibold">
              ${car.price.toLocaleString()}
            </span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#6B7280] flex items-center gap-1.5 group-hover:text-[#C8932A] transition-colors duration-200">
              View
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-[#1E1E1E] grid grid-cols-3 gap-2">
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">Power</p>
              <p className="text-[11px] text-[#9DA3AE]">{car.horsepower} hp</p>
            </div>
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">0–60</p>
              <p className="text-[11px] text-[#9DA3AE]">{car.zeroToSixty}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-wider uppercase text-[#6B7280] mb-0.5">Miles</p>
              <p className="text-[11px] text-[#9DA3AE]">{car.mileage.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
