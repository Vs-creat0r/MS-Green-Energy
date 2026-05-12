import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with floating card */}
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(77,101,70,0.1)]">
            <Image
              src="/images/about-solar-farm.jpg"
              alt="Large solar farm with rows of photovoltaic panels"
              fill
              className="object-cover"
              quality={80}
            />
            <div className="absolute bottom-6 left-6 bg-surface/95 backdrop-blur rounded-[1.5rem] p-5 shadow-lg">
              <div className="text-3xl font-extrabold text-primary font-headline">
                15+
              </div>
              <div className="text-sm text-on-surface-variant font-label uppercase tracking-wide">
                Years in Solar
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-6 tracking-tight">
              About MS Green Solar
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
              With over 15 years of industry experience, we have established
              ourselves as a trusted leader in solar energy solutions across the
              nation. We don't just install panels — we build energy independence.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    trending_up
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface font-headline">
                    25 MW Installed
                  </h3>
                  <p className="mt-1 text-on-surface-variant font-body">
                    Total solar capacity delivered for homes and businesses nationwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface font-headline">
                    5,000+ Customers
                  </h3>
                  <p className="mt-1 text-on-surface-variant font-body">
                    Satisfied homeowners and businesses who made the switch to
                    clean energy with us.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface font-headline">
                    Licensed & Insured
                  </h3>
                  <p className="mt-1 text-on-surface-variant font-body">
                    Fully certified, bonded, and insured for complete peace of
                    mind on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 relative rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about-mission-overlay.jpg"
              alt="Sunlight through solar panels"
              fill
              className="object-cover"
              quality={70}
            />
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="relative text-center text-white p-10 md:p-16">
            <h3 className="text-2xl md:text-3xl font-bold font-headline">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-body">
              To accelerate the world's transition to renewable energy by making
              solar power accessible, affordable, and hassle-free for every
              homeowner and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
