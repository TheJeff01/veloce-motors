"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Inventory", href: "/inventory" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between h-[72px]"
        animate={{
          backgroundColor: scrolled || menuOpen ? "rgba(10,10,10,0.97)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-[0.15em] text-[#F0EDE8] uppercase"
        >
          Veloce
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 relative ${
                  isActive(link.href) ? "text-[#C8932A]" : "text-[#9DA3AE] hover:text-[#F0EDE8]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#C8932A]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[13px] tracking-wider text-[#9DA3AE]">+1 (310) 555-0192</span>
          <Link
            href="/contact"
            className="text-[12px] tracking-[0.15em] uppercase border border-[#C8932A] text-[#C8932A] px-5 py-2 hover:bg-[#C8932A] hover:text-[#0C0C0C] transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-[1.5px] w-6 bg-[#F0EDE8] origin-center"
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-[#F0EDE8]"
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-[1.5px] w-6 bg-[#F0EDE8] origin-center"
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0C0C0C] flex flex-col items-start justify-center px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-2 mb-12 w-full">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-4xl font-light transition-colors ${
                      isActive(link.href) ? "text-[#C8932A]" : "text-[#F0EDE8] hover:text-[#C8932A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="border-t border-[#1E1E1E] pt-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[#6B7280] text-sm tracking-wider mb-3">+1 (310) 555-0192</p>
              <Link
                href="/contact"
                className="text-[12px] tracking-[0.15em] uppercase border border-[#C8932A] text-[#C8932A] px-5 py-2 inline-block hover:bg-[#C8932A] hover:text-[#0C0C0C] transition-all duration-200"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
