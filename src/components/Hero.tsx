import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Abstract cosmic background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{ animation: "fade-up 1s ease-out" }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Intelligent Automation Partner
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
          Modern Automation
          <br />
          <span className="text-gradient">for Ambitious Teams.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Smart automation solutions designed to help high-performing
          teams work faster, more efficiently, and more creatively.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-base px-8">
            Start Automation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="glass" size="lg" className="text-base px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
