import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import { FeaturesSection } from "@/components/ui/features-section";
import { IntegrationSection } from "@/components/ui/integration-section";
import { FAQGeometricSection } from "@/components/ui/faq-geometric-section";
import { FooterSection } from "@/components/ui/footer-section";
import TestimonialStackDemo from "@/components/landing/TestimonialStackDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <Hero3D />
      <FeaturesSection />
      <IntegrationSection />
      <TestimonialStackDemo />
      <FAQGeometricSection />
      <FooterSection />
    </div>
  );
};

export default Index;
