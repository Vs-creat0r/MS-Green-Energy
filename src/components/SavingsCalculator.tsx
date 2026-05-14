"use client";

import { useState, useActionState } from "react";
import { submitLead } from "@/app/actions";

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofSun, setRoofSun] = useState("full");
  const [result, setResult] = useState<{
    monthlySavings: number;
    annualSavings: number;
    systemSize: string;
    payback: string;
  } | null>(null);
  const [state, formAction, pending] = useActionState(submitLead, { success: false, message: "" });
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    const bill = parseFloat(monthlyBill);
    if (!bill || bill <= 0) return;

    setIsCalculating(true);

    // Simulate calculation
    setTimeout(() => {
      const sunFactor = roofSun === "full" ? 0.85 : roofSun === "partial" ? 0.65 : 0.45;
      const monthlySavings = Math.round(bill * sunFactor);
      const annualSavings = monthlySavings * 12;
      const systemSize =
        bill <= 1500 ? "3 kW" : bill <= 3000 ? "5 kW" : bill <= 5000 ? "7 kW" : "10 kW";
      const payback = bill <= 2000 ? "6-7 years" : bill <= 4000 ? "5-6 years" : "4-5 years";

      setResult({ monthlySavings, annualSavings, systemSize, payback });
      setIsCalculating(false);
    }, 800);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Calculator Form */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-8 shadow-[0_16px_48px_-8px_rgba(5,150,105,0.08)] border border-outline-variant/20">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-2 tracking-tight">
              Solar Savings Calculator
            </h2>
            <p className="font-body text-on-surface-variant mb-8">
              Estimate your potential monthly savings in seconds.
            </p>

            {/* Monthly Bill Input */}
            <div className="mb-6">
              <label
                htmlFor="calc-bill"
                className="block text-sm font-medium text-on-surface-variant mb-2 font-body"
              >
                Average Monthly Electric Bill (₹)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-body font-medium">
                  e.g.
                </span>
                <input
                  id="calc-bill"
                  type="number"
                  placeholder="3000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 pl-14 pr-5 text-on-surface font-body text-lg transition-all duration-300 placeholder:text-outline-variant"
                />
              </div>
            </div>

            {/* Roof Sun Exposure */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-on-surface-variant mb-3 font-body">
                Roof Sun Exposure
              </label>
              <div className="space-y-2">
                {[
                  { value: "full", label: "Full Sun (No Shade)", icon: "wb_sunny" },
                  { value: "partial", label: "Partial Sun (Some Shade)", icon: "partly_cloudy_day" },
                  { value: "shaded", label: "Mostly Shaded", icon: "cloud" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setRoofSun(option.value)}
                    className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all duration-200 text-left ${
                      roofSun === option.value
                        ? "bg-primary/10 border-primary/40 text-primary"
                        : "bg-surface-container-high border-outline-variant/20 text-on-surface-variant hover:border-primary/20"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${
                        roofSun === option.value ? "text-primary" : "text-on-surface-variant"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {option.icon}
                    </span>
                    <span className="font-body font-medium text-sm">{option.label}</span>
                    {roofSun === option.value && (
                      <span
                        className="material-symbols-outlined text-primary ml-auto text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              disabled={!monthlyBill || isCalculating}
              className="w-full py-4 bg-primary text-on-primary rounded-full font-label font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(5,150,105,0.25)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                calculate
              </span>
              {isCalculating ? "Calculating..." : "Calculate Savings"}
            </button>

            {/* Results */}
            {result && (
              <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-xl animate-fadeInUp">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="material-symbols-outlined text-primary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    trending_up
                  </span>
                  <span className="font-headline font-bold text-on-surface text-lg">
                    Your Estimated Savings
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-body text-on-surface-variant text-xs mb-1">Monthly Savings</div>
                    <div className="font-headline text-2xl font-bold text-primary">
                      ₹{result.monthlySavings.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-on-surface-variant text-xs mb-1">Annual Savings</div>
                    <div className="font-headline text-2xl font-bold text-accent">
                      ₹{result.annualSavings.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-on-surface-variant text-xs mb-1">Recommended System</div>
                    <div className="font-headline text-lg font-bold text-on-surface">
                      {result.systemSize}
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-on-surface-variant text-xs mb-1">Payback Period</div>
                    <div className="font-headline text-lg font-bold text-on-surface">
                      {result.payback}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Schedule Assessment */}
          <div>
            <div className="bg-accent/10 border border-accent/20 rounded-full px-5 py-2.5 inline-flex items-center gap-2 mb-6">
              <span
                className="material-symbols-outlined text-accent text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                event
              </span>
              <span className="font-label font-semibold text-accent text-sm uppercase tracking-wide">
                Next Step
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3 tracking-tight">
              Schedule Your Free Assessment
            </h2>
            <p className="font-body text-on-surface-variant mb-8 text-lg leading-relaxed">
              Like what you see? Let's make it real. Book a free, no-obligation assessment with our
              solar experts to design your custom system.
            </p>

            {/* Assessment Form */}
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="form_type" value="appointment" />
              <input type="hidden" name="monthly_bill" value={monthlyBill} />
              <div>
                <label
                  htmlFor="assess-name"
                  className="block text-xs md:text-sm font-medium text-on-surface-variant mb-2 font-body"
                >
                  Full Name
                </label>
                <input
                  id="assess-name"
                  name="full_name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                />
              </div>
              <div>
                <label
                  htmlFor="assess-email"
                  className="block text-xs md:text-sm font-medium text-on-surface-variant mb-2 font-body"
                >
                  Email Address
                </label>
                <input
                  id="assess-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                />
              </div>
              <div>
                <label
                  htmlFor="assess-phone"
                  className="block text-xs md:text-sm font-medium text-on-surface-variant mb-2 font-body"
                >
                  Phone Number
                </label>
                <input
                  id="assess-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                />
              </div>
              
              {/* Added a hidden zip code to satisfy the schema's zip_code requirement if needed, or we just let it be missing if we change the schema. Wait, schema requires zip_code. I will add a zip code field. */}
              <div>
                <label
                  htmlFor="assess-zip"
                  className="block text-xs md:text-sm font-medium text-on-surface-variant mb-2 font-body"
                >
                  PIN Code
                </label>
                <input
                  id="assess-zip"
                  name="zip_code"
                  type="text"
                  placeholder="400001"
                  className="w-full bg-surface-container-high border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
                />
              </div>

              <button 
                type="submit" 
                disabled={pending}
                className="w-full py-4 bg-accent text-on-accent rounded-full font-label font-bold text-lg hover:bg-accent-container transition-all duration-300 shadow-[0_8px_32px_-4px_rgba(245,158,11,0.25)] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-xl">event_available</span>
                {pending ? "Confirming..." : "Confirm Appointment"}
              </button>

              {state.message && (
                <div
                  className={`text-center text-sm font-medium rounded-lg p-3 mt-4 font-body ${
                    state.success
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-error/10 text-error border border-error/20"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
