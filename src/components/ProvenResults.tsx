import Image from "next/image";
import Link from "next/link";

export default function ProvenResults() {
  return (
    <section className="py-12 sm:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/10 House with family.png"
              alt="Happy family in front of solar-powered home"
              fill
              className="object-cover"
              quality={70}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/75 to-transparent" />
          </div>

          <div className="relative p-6 sm:p-10 md:p-16 max-w-xl">
            {/* Proven Results Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-on-primary rounded-full px-5 py-2 mb-6 shadow-md">
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label font-bold text-sm uppercase tracking-wider">
                Proven Results
              </span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-4 tracking-tight">
              Over 5,000 Installs
            </h2>
            <p className="font-body text-on-surface-variant text-lg mb-8 leading-relaxed">
              Join thousands of satisfied homeowners who have already made the switch to a cleaner,
              greener energy future with MS Green Solar.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.25)] active:scale-95 group"
            >
              Start Your Journey
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
