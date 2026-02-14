import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import { FeaturesSection } from "@/components/ui/features-section";
import FeaturesGrid from "@/components/FeaturesGrid";
import { IntegrationSection } from "@/components/ui/integration-section";
import { FAQGeometricSection } from "@/components/ui/faq-geometric-section";
import { FooterSection } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero3D />
      <FeaturesSection />
      <FeaturesGrid />
      <IntegrationSection />
      <FAQGeometricSection />
      <FooterSection />
    </div>
  );
};

export default Index;
