import Link from "next/link";

const reasons = [
  {
    icon: "savings",
    title: "Massive Long-Term Savings",
    description:
      "Lock in your energy rates and protect yourself from unpredictable utility hikes. Our systems are designed to pay for themselves.",
  },
  {
    icon: "precision_manufacturing",
    title: "Premium Tier-1 Tech",
    description:
      "We only install the highest-rated panels and inverters for maximum yield.",
  },
  {
    icon: "monitoring",
    title: "24/7 Monitoring",
    description:
      "Track your system's performance in real-time through our dedicated app.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Why Choose MS Green Solar?
          </h2>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver industry-leading technology paired with expert installation to ensure your
            transition to solar is seamless and highly profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-surface-container-lowest rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.06)] hover:shadow-[0_16px_48px_-8px_rgba(5,150,105,0.12)] transition-all duration-500 border border-outline-variant/20 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {reason.icon}
                </span>
              </div>

              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
