"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

export default function NewsSection({ articles }) {
  const [start, setStart] = useState(0);
  const visible = 3;

  const canPrev = start > 0;
  const canNext = start + visible < articles.length;

  return (
    <section className="bg-[#F7F6F3] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          {/* Left — heading */}
          <div className="md:w-64 flex-shrink-0">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-3">Latest from Veloce</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#111111] mb-4">
              Latest<br />News
            </h2>
            <p className="text-[13px] text-[#6B7280] leading-relaxed mb-6 max-w-xs">
              Acquisitions, events, and industry news — curated for the discerning enthusiast.
            </p>
            {/* Prev/next arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => setStart((s) => Math.max(0, s - 1))}
                disabled={!canPrev}
                className={`w-8 h-8 border flex items-center justify-center transition-colors duration-200 ${
                  canPrev
                    ? "border-[#111111] text-[#111111] hover:border-[#C8932A] hover:text-[#C8932A]"
                    : "border-[#D0D0D0] text-[#D0D0D0] cursor-not-allowed"
                }`}
                aria-label="Previous"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => setStart((s) => Math.min(articles.length - visible, s + 1))}
                disabled={!canNext}
                className={`w-8 h-8 border flex items-center justify-center transition-colors duration-200 ${
                  canNext
                    ? "border-[#111111] text-[#111111] hover:border-[#C8932A] hover:text-[#C8932A]"
                    : "border-[#D0D0D0] text-[#D0D0D0] cursor-not-allowed"
                }`}
                aria-label="Next"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Right — cards (horizontal scroll on mobile, 3-up on desktop) */}
          <div className="flex-1">
            <div className="flex gap-4 overflow-x-auto pb-2 md:overflow-visible" style={{ scrollbarWidth: "none" }}>
              {articles.slice(start, start + visible + 1).slice(0, visible).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
