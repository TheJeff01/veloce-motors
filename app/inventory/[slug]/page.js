import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FinanceStrip from "@/components/FinanceStrip";
import SpecTable from "@/components/SpecTable";
import CarCard from "@/components/CarCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { getCarBySlug, getCarsByMake, cars } from "@/lib/cars";
import { blurDataURL } from "@/lib/blur";

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const car = getCarBySlug(p.slug);
  if (!car) return {};
  return {
    title: `${car.year} ${car.make} ${car.model} — Veloce Motors`,
    description: car.description,
  };
}

export default async function CarDetailPage({ params }) {
  const p = await params;
  const car = getCarBySlug(p.slug);
  if (!car) notFound();

  const relatedCars = getCarsByMake(car.make)
    .filter((c) => c.slug !== car.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#0C0C0C] min-h-screen">
      {/* Back link */}
      <div className="pt-[72px] px-6 md:px-12 py-4 border-b border-[#1E1E1E]">
        <Link
          href="/inventory"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#6B7280] hover:text-[#C8932A] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Inventory
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative h-[60vh] w-full bg-[#111111]">
        <Image
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[rgba(12,12,12,0.3)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,12,12,0.5)] to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 z-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-2">{car.make}</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-[#F0EDE8] leading-none">
            {car.model}
          </h1>
          <p className="text-[#9DA3AE] text-base mt-2">{car.year}</p>
        </div>
      </div>

      {/* Tagline + price */}
      <div className="px-6 md:px-12 py-8 border-b border-[#1E1E1E] flex flex-col md:flex-row justify-between gap-4">
        <p className="font-display text-xl md:text-2xl font-light text-[#9DA3AE] italic">
          &ldquo;{car.tagline}&rdquo;
        </p>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B7280] mb-1">Asking Price</p>
          <p className="font-display text-3xl text-[#C8932A]">${car.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Finance strip */}
      <ScrollReveal>
        <FinanceStrip />
      </ScrollReveal>

      {/* Related cars */}
      {relatedCars.length > 0 && (
        <ScrollReveal>
          <section className="px-6 md:px-12 py-14 border-b border-[#1E1E1E]">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-6">
              More {car.make} in stock
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCars.map((related) => (
                <CarCard key={related.id} car={related} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Gallery + specs */}
      <section className="px-6 md:px-12 py-14 border-b border-[#1E1E1E]">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-8">Overview</p>
        </ScrollReveal>

        {/* Gallery — 1 wide + 3 smaller */}
        <ScrollReveal>
          <div className="grid grid-cols-3 gap-2 mb-12">
            <div className="col-span-3 relative overflow-hidden bg-[#111111]" style={{ aspectRatio: "21/8" }}>
              <Image
                src={car.images[0]}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            {car.images.slice(1, 4).map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden bg-[#111111]">
                <Image
                  src={img}
                  alt={`${car.make} ${car.model} — photo ${i + 2}`}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-500"
                  sizes="33vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-[#9DA3AE] text-base leading-relaxed">{car.description}</p>
          </div>
        </ScrollReveal>

        {/* Spec table */}
        <ScrollReveal>
          <SpecTable car={car} />
        </ScrollReveal>
      </section>

      {/* Full-bleed feature image */}
      <ScrollReveal>
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src={car.images[1] || car.images[0]}
            alt={`${car.make} ${car.model} detail`}
            fill
            className="object-cover"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(12,12,12,0.65)] to-transparent" />
          <div className="absolute bottom-8 left-6 md:left-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#9DA3AE]">
              {car.exteriorColor} — {car.year} {car.make} {car.model}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Book a test drive */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 border-t border-[#1E1E1E]">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-4">
              Reserve your experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#F0EDE8] mb-8">
              Book a Test Drive
            </h2>
            <ContactForm cars={[car]} />
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
