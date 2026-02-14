import { Rocket, Layers, Globe } from "lucide-react";

const stats = [
  { icon: Rocket, title: "Plug & Play Compatibility", description: "Connect with platforms like CRM, ERP, marketing tools, and more." },
  { icon: Layers, title: "Scalable Architecture", description: "From small teams to enterprises, our systems grow with your business." },
  { icon: Globe, title: "Cross-Platform Integration", description: "Works across cloud, hybrid, and on-premise environments to match." },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-sm text-primary mb-4 px-3 py-1 rounded-full border border-primary/20">Integration</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-xl">
            Behind <span className="text-gradient">Every Great</span> Result Is a Process That Just Works
          </h2>
        </div>

        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-7xl md:text-8xl font-bold text-gradient">10</span>
          <div>
            <span className="text-3xl font-display font-bold">x</span>
            <span className="text-2xl ml-2 text-muted-foreground">Faster</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{stat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
