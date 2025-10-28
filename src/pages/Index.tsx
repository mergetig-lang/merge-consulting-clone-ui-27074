
import { HeroSection } from "@/components/sections/HeroSection";
import { ConsultancySection } from "@/components/sections/ConsultancySection";
import { ProcessManagementSection } from "@/components/sections/ProcessManagementSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TeamSection } from "@/components/sections/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ConsultancySection />
      <ProcessManagementSection />
      <ServicesSection />
      <WhyChooseSection />
      <FAQSection />
      <TeamSection />
    </div>
  );
};

export default Index;
