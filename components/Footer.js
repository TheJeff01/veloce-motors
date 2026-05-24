import Link from "next/link";

const footerLinks = [
  { label: "Inventory", href: "/inventory" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#1E1E1E] px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Wordmark */}
        <Link href="/" className="font-display text-xl font-semibold tracking-[0.15em] uppercase text-[#F0EDE8]">
          Veloce
        </Link>

        {/* Nav */}
        <ul className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[12px] tracking-[0.12em] uppercase text-[#6B7280] hover:text-[#F0EDE8] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div className="text-right">
          <p className="text-[12px] tracking-wider text-[#6B7280]">+1 (310) 555-0192</p>
          <p className="text-[12px] tracking-wider text-[#6B7280]">hello@velocemotors.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between gap-2">
        <p className="text-[11px] text-[#6B7280] tracking-wider">
          © 2026 Veloce Motors. All rights reserved.
        </p>
        <p className="text-[11px] text-[#6B7280] tracking-wider">
          Engineered for the uncompromising.
        </p>
      </div>
    </footer>
  );
}
