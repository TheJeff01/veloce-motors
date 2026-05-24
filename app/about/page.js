import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blurDataURL } from "@/lib/blur";

export const metadata = {
  title: "About — Veloce Motors",
  description:
    "Twenty years. One standard. Veloce Motors is the definitive destination for exotic and luxury automobiles on the West Coast.",
};

const stats = [
  { value: "20+", label: "Years in business" },
  { value: "600+", label: "Cars placed" },
  { value: "6", label: "Marques carried" },
  { value: "$1.2B", label: "In transactions" },
];

const values = [
  {
    title: "Curation",
    body: "Every car in our inventory is personally selected. We decline more vehicles than we accept. Provenance, condition, and rarity are non-negotiable.",
  },
  {
    title: "Integrity",
    body: "No inflated valuations. No pressure tactics. We publish asking prices that reflect the market, not theater. Our repeat client rate speaks for itself.",
  },
  {
    title: "Precision",
    body: "Every transaction is managed with the same attention given to the cars themselves. Financing, transport, documentation — handled without friction.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0C0C0C]">
      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden pt-[72px]">
        <Image
          src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1600&q=80"
          alt="Veloce Motors showroom"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,12,12,0.85)] via-[rgba(12,12,12,0.5)] to-transparent" />
        <div className="absolute bottom-14 left-6 md:left-12 z-10 max-w-xl">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-4">Since 2004</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-[#F0EDE8] leading-none">
            About<br />Veloce
          </h1>
        </div>
      </div>

      {/* Stats strip */}
      <ScrollReveal>
        <div className="bg-[#111111] border-y border-[#1E1E1E] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1E1E1E]">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <p className="font-display text-4xl md:text-5xl font-light text-[#C8932A] mb-2">
                {s.value}
              </p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-[#6B7280]">{s.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* The story */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-4">
                The story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#F0EDE8] leading-tight">
                Built on one<br />unbreakable rule.
              </h2>
            </div>
            <div className="md:w-2/3 space-y-5 text-[#9DA3AE] text-base leading-relaxed">
              <p>
                Veloce Motors was founded in 2004 by Marcus Elian, a former Scuderia Ferrari
                trackside engineer who grew tired of watching magnificent machines pass through the
                hands of dealers who could not appreciate them. The founding principle was simple:
                only carry cars you would drive yourself.
              </p>
              <p>
                Twenty years later, that rule still holds. Our showroom on Wilshire has become a
                destination — not just for buyers, but for enthusiasts, collectors, and journalists
                who recognize that the cars displayed here have been chosen rather than merely
                acquired.
              </p>
              <p>
                We operate across a small team of twelve specialists, each with deep marque
                knowledge. There is no sales floor pressure here. There are no commissions that
                distort advice. We are paid when you find exactly the right car — and not before.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Full-bleed image break */}
      <ScrollReveal>
        <div className="relative h-80 md:h-[50vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
            alt="Porsche in the Veloce Motors collection"
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute inset-0 bg-[rgba(12,12,12,0.4)]" />
        </div>
      </ScrollReveal>

      {/* Values */}
      <section className="bg-[#111111] border-y border-[#1E1E1E] px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-12">
              How we operate
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#1E1E1E]">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className={`p-10 h-full ${i < values.length - 1 ? "border-b md:border-b-0 md:border-r border-[#1E1E1E]" : ""}`}>
                  <p className="font-display text-3xl font-light text-[#F0EDE8] mb-4">{v.title}</p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F0EDE8] mb-3">
              Come see for yourself.
            </h2>
            <p className="text-[#6B7280] text-sm">
              8400 Wilshire Boulevard, Beverly Hills. Open Monday–Saturday, 9–7.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/inventory"
              className="text-[12px] tracking-[0.15em] uppercase bg-[#C8932A] text-[#0C0C0C] px-6 py-3 font-semibold hover:bg-[#F0EDE8] transition-colors duration-200"
            >
              View Inventory
            </Link>
            <Link
              href="/contact"
              className="text-[12px] tracking-[0.15em] uppercase border border-[#1E1E1E] text-[#9DA3AE] px-6 py-3 hover:border-[#C8932A] hover:text-[#C8932A] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
