"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-surface-container">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/9 Solar with sun.png"
          alt="Modern home with sleek black solar panels under blue sky"
          fill
          priority
          className="object-cover"
          quality={85}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface/96 via-surface/88 to-surface/75" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Z-Pattern Layout Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side - Main Content (Z-Pattern: Start) */}
          <div className="max-w-2xl">
            {/* Trust Badge - Floating Bar (Z-Pattern: Top) */}
            <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 mb-6 sm:mb-8 shadow-lg border border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="text-primary font-headline font-bold text-xs sm:text-sm">15+ Years</span>
              </div>
              <div className="w-px h-4 bg-outline-variant hidden sm:block"></div>
              <div className="flex items-center gap-1">
                <span className="text-accent text-base sm:text-lg">★★★★★</span>
                <span className="text-on-surface-variant font-label text-xs sm:text-sm font-medium">4.9</span>
              </div>
              <div className="w-px h-4 bg-outline-variant hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-headline font-bold text-xs sm:text-sm">All 50 States</span>
              </div>
            </div>

            {/* Main Headline (Z-Pattern: Center Left) */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-4 sm:mb-6 animate-fadeInUp">
              Stop Renting Your Power.
              <br />
              <span className="text-primary">Start Owning It.</span>
            </h1>

            {/* Value Proposition with Tax Credit Badge */}
            <div className="mb-10">
              <p className="font-body text-lg text-on-surface-variant mb-4 max-w-lg leading-relaxed">
                Transition from utility consumer to clean energy producer. Join 5,000+ homeowners who've achieved energy independence with our 25-year partnership.
              </p>
              
              {/* 30% Tax Credit Badge */}
              <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  savings
                </span>
                <span className="font-label font-semibold text-accent text-sm">
                  30% Federal Tax Credit Locked Until 2032
                </span>
              </div>
            </div>

            {/* CTA Buttons (Z-Pattern: Bottom Center) */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-on-accent rounded-full font-label font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95 group"
              >
                Get Free Assessment
                <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-on-secondary rounded-full font-label font-bold text-lg hover:bg-secondary-container transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Trust Stats - "By The Numbers" */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-headline">
                  25 MW
                </div>
                <div className="mt-1 text-xs text-on-surface-variant font-label uppercase tracking-widest">
                  Installed Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary font-headline">
                  5,000+
                </div>
                <div className="mt-1 text-xs text-on-surface-variant font-label uppercase tracking-widest">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary font-headline">
                  $0
                </div>
                <div className="mt-1 text-xs text-on-surface-variant font-label uppercase tracking-widest">
                  Down Options
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Render Style Image (Z-Pattern: Top Right) */}
          <div className="relative z-0 h-[280px] sm:h-[400px] lg:h-[600px] w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(5,150,105,0.15)] group">
            {/* Glassmorphism overlay for modern premium feel */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 mix-blend-overlay z-10 rounded-[2rem]" />
            <Image
              src="/images/11 Solar system.png"
              alt="Modern suburban home with sleek black solar panels - 3D architectural visualization style"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-[2rem]"
              quality={80}
            />
            
            {/* Floating "Dashboard Tease" - Monitoring App Preview */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-outline-variant/20 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    energy_savings_leaf
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-label font-semibold text-on-surface text-sm">Real-Time Monitoring</div>
                  <div className="font-body text-on-surface-variant text-xs">Track your energy production 24/7</div>
                </div>
                <div className="text-right">
                  <div className="font-headline font-bold text-primary text-lg">2.4 kW</div>
                  <div className="font-label text-on-surface-variant text-xs">Live Output</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (Z-Pattern: Bottom) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-outline-variant rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
