import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ProvenResults from "@/components/ProvenResults";
import SavingsTeaser from "@/components/SavingsTeaser";
import TestimonialSection from "@/components/TestimonialSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <ProvenResults />
        <SavingsTeaser />
        <TestimonialSection />
        <SavingsCalculator />
        <FAQSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
