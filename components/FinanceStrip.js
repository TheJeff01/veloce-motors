import Link from "next/link";

const services = [
  {
    label: "Finance",
    desc: "Competitive rates from our network of 40+ lenders.",
    href: "/contact",
  },
  {
    label: "Trade-In",
    desc: "We buy and trade. Get a real offer in 24 hours.",
    href: "/contact",
  },
  {
    label: "Insurance",
    desc: "Specialist exotic car coverage through Lloyd's of London.",
    href: "/contact",
  },
  {
    label: "Lease",
    desc: "Flexible terms. Competitive residuals.",
    href: "/contact",
  },
];

export default function FinanceStrip() {
  return (
    <div className="bg-white border-y border-[#E5E5E5] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E5E5]">
      {services.map((s) => (
        <div key={s.label} className="px-6 py-8">
          <h3 className="font-display text-xl font-semibold text-[#111111] mb-2">{s.label}</h3>
          <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">{s.desc}</p>
          <Link
            href={s.href}
            className="text-[11px] tracking-[0.15em] uppercase text-[#C8932A] border-b border-[#C8932A] pb-0.5 hover:text-[#111111] hover:border-[#111111] transition-colors duration-200"
          >
            Submit application
          </Link>
        </div>
      ))}
    </div>
  );
}
