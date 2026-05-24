import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/blur";

export default function ShowroomBlock() {
  return (
    <section className="bg-[#111111] flex flex-col md:flex-row">
      <div className="relative md:w-[55%] h-72 md:h-auto min-h-[420px]">
        <Image
          src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=1200&q=80"
          alt="Veloce Motors showroom interior"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(17,17,17,0.35)]" />
      </div>

      <div className="md:w-[45%] flex items-center px-8 md:px-16 py-16 md:py-24">
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-6">
            About Veloce
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#F0EDE8] leading-tight mb-6">
            Largest Exotic
            <br />
            Car Dealer
          </h2>
          <p className="text-[#9DA3AE] text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            For over two decades, Veloce Motors has been the destination for those who will not
            compromise. Our curated inventory spans the world&apos;s most coveted marques — each
            car personally verified, each acquisition deliberate.
          </p>
          <Link
            href="/about"
            className="inline-block text-[12px] tracking-[0.18em] uppercase border border-[#C8932A] text-[#C8932A] px-6 py-3 hover:bg-[#C8932A] hover:text-[#0C0C0C] transition-all duration-200"
          >
            About the dealership
          </Link>
        </div>
      </div>
    </section>
  );
}
