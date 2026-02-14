import { Zap, BarChart3, Shield, Layers, Headphones, Settings } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: Zap,
    name: "Seamless Integration",
    description: "Connect AI tools with your existing systems without disruption.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-amber-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: Settings,
    name: "Custom Solutions",
    description: "AI tailored to fit your exact business needs and workflows.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-slate-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: BarChart3,
    name: "Real-Time Insights",
    description: "Instant analytics and smart recommendations to support decisions.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Layers,
    name: "Scalable Architecture",
    description: "Flexible solutions that grow as your business expands.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-indigo-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: Shield,
    name: "Enhanced Security",
    description: "Enterprise-grade protection to keep your data safe.",
    href: "#",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-emerald-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-1 lg:row-span-1 bg-emerald-950/20", // Custom darker bg
  },
  {
    Icon: Headphones,
    name: "Expert Support",
    description: "End-to-end guidance from implementation to ongoing optimization.",
    href: "#",
    cta: "Contact Us",
    background: <div className="absolute -right-20 -top-20 opacity-60 w-[200px] h-[200px] bg-pink-500/20 rounded-full blur-3xl" />,
    className: "lg:col-span-3 lg:row-span-1",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Powerful <span className="text-gradient">Features</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to scale your business with intelligent automation.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default FeaturesGrid;
