import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Services — Veloce Motors",
  description:
    "Finance, insurance, trade-in, storage, transport, and specialist maintenance. Every Veloce service is built around the car.",
};

const services = [
  {
    number: "01",
    title: "Finance",
    body: "We work with a network of 40+ specialist lenders who understand exotic valuations — not retail banks trying to underwrite a car they've never seen. Competitive rates, structured for the asset.",
    cta: "Enquire about financing",
  },
  {
    number: "02",
    title: "Trade-In",
    body: "We value your current vehicle honestly. No low-ball offers, no trade-in theater. Send us the details and we'll respond with a written offer within 24 hours.",
    cta: "Get a valuation",
  },
  {
    number: "03",
    title: "Insurance",
    body: "Specialist coverage through Lloyd's of London syndicate underwriters. Agreed value policies, track day extensions, and multi-vehicle programs for serious collections.",
    cta: "Arrange coverage",
  },
  {
    number: "04",
    title: "Storage",
    body: "Climate-controlled, humidity-monitored, 24-hour secured facilities. Long-term storage programs available for seasonal vehicles and travelling clients.",
    cta: "Reserve storage",
  },
  {
    number: "05",
    title: "Transport",
    body: "Enclosed white-glove transport, nationwide and international. We coordinate customs clearance, bonded transit, and port-to-door delivery for overseas acquisitions.",
    cta: "Request transport",
  },
  {
    number: "06",
    title: "Servicing",
    body: "Factory-authorized technicians on-site. Scheduled maintenance, pre-purchase inspections, and post-purchase preparation — all performed to manufacturer specification.",
    cta: "Book a service",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen">
      {/* Header */}
      <div className="pt-[72px] px-6 md:px-12 py-20 border-b border-[#1E1E1E] max-w-7xl">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-4">
          What we offer
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-light text-[#F0EDE8] leading-none mb-6">
          Services
        </h1>
        <p className="text-[#6B7280] text-base max-w-lg leading-relaxed">
          Owning an exceptional car requires exceptional support. Every Veloce service is built
          around the vehicle — not the transaction.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1E1E1E]">
        {services.map((s, i) => (
          <ScrollReveal key={s.number} delay={(i % 2) * 0.1}>
            <div
              className={`px-8 md:px-12 py-14 border-b border-[#1E1E1E] ${
                i % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <p className="font-display text-5xl font-light text-[#1E1E1E] mb-6 select-none">
                {s.number}
              </p>
              <h2 className="font-display text-3xl font-light text-[#F0EDE8] mb-4">{s.title}</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 max-w-md">{s.body}</p>
              <Link
                href="/contact"
                className="text-[11px] tracking-[0.18em] uppercase text-[#C8932A] border-b border-[#C8932A] pb-0.5 hover:text-[#F0EDE8] hover:border-[#F0EDE8] transition-colors duration-200"
              >
                {s.cta}
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <ScrollReveal>
        <section className="px-6 md:px-12 py-16 border-b border-[#1E1E1E]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-3">
                Not sure where to start?
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#F0EDE8]">
                Speak to a specialist.
              </h2>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 text-[12px] tracking-[0.15em] uppercase bg-[#C8932A] text-[#0C0C0C] px-8 py-3.5 font-semibold hover:bg-[#F0EDE8] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
