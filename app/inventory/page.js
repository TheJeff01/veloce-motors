"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import CarCard from "@/components/CarCard";
import { cars, brands } from "@/lib/cars";

export default function InventoryPage() {
  const [filterMake, setFilterMake] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const filtered = useMemo(() => {
    let list = filterMake === "All" ? [...cars] : cars.filter((c) => c.make === filterMake);
    if (sortOrder === "asc") list.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [filterMake, sortOrder]);

  const selectClass =
    "bg-transparent border border-[#1E1E1E] text-[#9DA3AE] text-[12px] tracking-[0.1em] uppercase px-4 py-2.5 focus:outline-none focus:border-[#C8932A] transition-colors duration-200 appearance-none pr-8 cursor-pointer";

  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-[72px]">
      {/* Header */}
      <div className="border-b border-[#1E1E1E] px-6 md:px-12 py-12">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-3">
          {filtered.length} vehicles available
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-[#F0EDE8]">Inventory</h1>
      </div>

      {/* Filter bar */}
      <div className="px-6 md:px-12 py-6 border-b border-[#1E1E1E] flex flex-wrap gap-4 items-center">
        <div className="relative">
          <select
            value={filterMake}
            onChange={(e) => setFilterMake(e.target.value)}
            className={selectClass}
          >
            <option value="All">All Makes</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <div className="relative">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={selectClass}
          >
            <option value="default">Sort: Featured</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Grid with animated filter transitions */}
      <div className="px-6 md:px-12 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filterMake}-${sortOrder}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {filtered.map((car) => (
              <motion.div
                key={car.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[#6B7280] tracking-wider">No vehicles found for this selection.</p>
          </div>
        )}
      </div>
    </main>
  );
}
