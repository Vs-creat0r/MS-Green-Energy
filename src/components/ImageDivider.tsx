import Image from "next/image";
import Link from "next/link";

export default function ImageDivider() {
  return (
    <section className="relative h-72 sm:h-96 md:h-[500px] flex items-center overflow-hidden">
      <Image
        src="/images/12 Solar panels.png"
        alt="Solar panels under bright sun with blue sky and clouds"
        fill
        className="object-cover"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl sm:max-w-2xl">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface">
            Ready to Start Saving with Solar?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-on-surface-variant font-body">
            Join 5,000+ homeowners who have slashed their energy bills and gained
            energy independence with MS Green Solar.
          </p>
          <Link
            href="/#quote"
            className="mt-8 inline-flex items-center px-8 py-4 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:opacity-80 transition-all duration-300 bg-gradient-to-r from-primary to-primary-container shadow-[0_8px_32px_-4px_rgba(77,101,70,0.15)]"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
}
