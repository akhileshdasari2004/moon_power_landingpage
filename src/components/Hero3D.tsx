import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },

];

const Hero3D = () => {
  return (
    <div className="min-h-svh w-full bg-black text-foreground flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="glass px-4 py-2 rounded-full text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            Next Generation Tools
          </Badge>

          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl font-display">
              Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-700">minimalism</span> and <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900">power</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button variant="hero" size="lg" className="text-base px-8 h-12 rounded-xl">
                Get Started
              </Button>
              <Button variant="glass" size="lg" className="text-base px-8 h-12 rounded-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3 rounded-xl hover:bg-card/80 transition-colors"
            >
              <feature.icon size={20} className="text-primary md:w-6 md:h-6" />
              <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <Scene />
      </div>
    </div>
  );
};

export default Hero3D;
