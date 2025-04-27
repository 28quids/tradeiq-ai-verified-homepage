import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SignalExamples from "@/components/SignalExamples";
import PersonalizationEngine from "@/components/PersonalizationEngine";
import BenefitsSection from "@/components/BenefitsSection";
import CredibilitySection from "@/components/CredibilitySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Animation for sections
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        { threshold: 0.1 },
      );

      document.querySelectorAll(".animate-reveal").forEach((el) => {
        observer.observe(el);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} />

      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <SignalExamples />
        <PersonalizationEngine />
        <BenefitsSection />
        <CredibilitySection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
