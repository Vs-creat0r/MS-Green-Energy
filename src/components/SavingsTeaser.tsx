"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SavingsTeaser() {
  const [address, setAddress] = useState("");

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/6 House.png"
          alt="House with solar panels"
          fill
          className="object-cover"
          quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Ready to See Your Savings?
        </h2>
        <p className="font-body text-white/85 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Get a custom, no-obligation solar assessment for your property. We'll analyze your roof, calculate
          your potential savings, and design a system tailored to your needs.
        </p>

        {/* Address Input */}
        <div className="max-w-lg mx-auto mb-6">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 focus:border-accent focus:ring-0 rounded-xl py-4 px-6 text-white font-body text-lg placeholder:text-white/50 transition-all duration-300"
          />
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-on-accent rounded-full font-label font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.35)] active:scale-95"
        >
          Get Free Assessment
        </Link>
      </div>
    </section>
  );
}
