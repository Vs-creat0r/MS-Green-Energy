import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialSection from "@/components/TestimonialSection";
import ImageDivider from "@/components/ImageDivider";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <TestimonialSection />
        <ImageDivider />
        <FAQSection />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
