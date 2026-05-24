export default function ContactBlock() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#9DA3AE] mb-3">Reach us</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#111111]">
            Visit the Showroom
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact info */}
          <div className="md:w-80 flex-shrink-0">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-1">Address</p>
                <p className="text-[#111111] text-sm leading-relaxed">
                  8400 Wilshire Boulevard<br />
                  Beverly Hills, CA 90211
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-1">Phone</p>
                <p className="text-[#111111] text-sm">+1 (310) 555-0192</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-1">Email</p>
                <p className="text-[#111111] text-sm">hello@velocemotors.com</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9DA3AE] mb-1">Hours</p>
                <p className="text-[#111111] text-sm leading-relaxed">
                  Mon–Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: By appointment only
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex-1 min-h-72 bg-[#111111] relative overflow-hidden">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(200,147,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(200,147,42,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full bg-[#C8932A] mx-auto mb-3 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="6" r="2.5" stroke="#0C0C0C" strokeWidth="1.5"/>
                    <path d="M7 13C7 13 2 9 2 6a5 5 0 0 1 10 0c0 3-5 7-5 7z" stroke="#0C0C0C" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#9DA3AE]">Veloce Motors</p>
                <p className="text-[11px] text-[#6B7280] mt-1">Beverly Hills, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
