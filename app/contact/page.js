import ContactForm from "@/components/ContactForm";
import { cars } from "@/lib/cars";

export const metadata = {
  title: "Contact — Veloce Motors",
  description:
    "Reach the Veloce Motors team. Visit our Beverly Hills showroom or submit an enquiry online.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen pt-[72px]">
      <div className="px-6 md:px-12 py-14 border-b border-[#1E1E1E]">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#C8932A] mb-3">
          We&apos;re here
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-[#F0EDE8]">
          Contact
        </h1>
      </div>

      <div className="px-6 md:px-12 py-14 flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1 max-w-xl">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-6">
            Send an enquiry
          </p>
          <ContactForm cars={cars} />
        </div>

        <div className="md:w-80 flex-shrink-0">
          <div className="space-y-8 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8932A] mb-2">Address</p>
              <p className="text-[#9DA3AE] text-sm leading-relaxed">
                8400 Wilshire Boulevard
                <br />
                Beverly Hills, CA 90211
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8932A] mb-2">Phone</p>
              <p className="text-[#9DA3AE] text-sm">+1 (310) 555-0192</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8932A] mb-2">Email</p>
              <p className="text-[#9DA3AE] text-sm">hello@velocemotors.com</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#C8932A] mb-2">Hours</p>
              <p className="text-[#9DA3AE] text-sm leading-relaxed">
                Monday – Saturday: 9:00 AM – 7:00 PM
                <br />
                Sunday: By appointment only
              </p>
            </div>
          </div>

          <div className="h-56 bg-[#111111] relative overflow-hidden border border-[#1E1E1E]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(200,147,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,147,42,0.05) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-[#C8932A] mx-auto mb-3 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="6" r="2.5" stroke="#0C0C0C" strokeWidth="1.5" />
                    <path
                      d="M7 13C7 13 2 9 2 6a5 5 0 0 1 10 0c0 3-5 7-5 7z"
                      stroke="#0C0C0C"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#9DA3AE]">
                  Veloce Motors
                </p>
                <p className="text-[11px] text-[#6B7280] mt-1">Beverly Hills, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
