import Image from "next/image";

const differentiators = [
  {
    title: "Direct Manufacturer Sourcing",
    description:
      "We source panels and equipment directly from top manufacturers, cutting out middlemen to deliver the best prices.",
  },
  {
    title: "25-Year Equipment Warranties",
    description:
      "Every installation is backed by industry-leading 25-year warranties on panels, inverters, and workmanship.",
  },
  {
    title: "Transparent, No Hidden Fees",
    description:
      "What we quote is what you pay. No surprise charges, no hidden costs — just honest, upfront pricing.",
  },
];

const certifications = [
  "NABCEP Certified",
  "Solar Energy Industries Association",
  "Licensed & Insured",
  "Tesla Powerwall Certified",
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Us */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            Why Choose MS Green Solar?
          </h2>
          <p className="mt-4 text-lg text-on-surface-variant font-body max-w-2xl mx-auto">
            We have built our reputation on trust, quality, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="group relative rounded-[2rem] overflow-hidden bg-surface-container-lowest shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)] hover:shadow-[0_16px_48px_-8px_rgba(27,28,26,0.05)] transition-shadow duration-500 border border-outline-variant/30"
            >
              <div className="relative p-8 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-on-surface font-headline">
                  {d.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-20 relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/trust-section-bg.jpg"
              alt="Happy family with solar panels"
              fill
              className="object-cover"
              quality={70}
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="relative text-center text-white p-10 md:p-16">
            <div className="text-6xl font-extrabold text-white font-headline">
              4.9
            </div>
            <div className="mt-2 text-2xl text-[#FFD700]">
              {"★".repeat(5)}
            </div>
            <p className="mt-4 text-xl text-white/90 font-body">
              Average customer rating across 5,000+ installations
            </p>

            {/* Certifications */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white backdrop-blur"
                >
                  <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
