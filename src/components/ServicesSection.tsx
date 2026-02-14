const services = [
  {
    title: "Goodbye to Manual Work",
    description: "We help streamline processes with smart automation.",
    tag: "Social Media Post",
  },
  {
    title: "AI That Fits Right In",
    description: "Custom AI integrations that grow seamlessly with your workflows.",
    tag: "Code Analysis",
  },
  {
    title: "Live Insights for Fast Action",
    description: "Powerful data dashboards built for real-time decision-making.",
    tag: "Marketing Strategy",
  },
  {
    title: "AI That Fits Right In",
    description: "Custom AI insights that grow seamlessly into every facet of your business.",
    tag: "AI Tools",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-sm text-primary mb-4 px-3 py-1 rounded-full border border-primary/20">Services</span>
          <div className="grid md:grid-cols-2 gap-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              We help businesses{" "}
              <span className="text-muted-foreground">work smarter, scale faster, and innovate with precision through AI.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed self-end">
              Smart automation solutions designed to help high-performing teams work faster, more efficiently, and more creatively.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass gradient-border rounded-xl p-6 group hover:bg-card/70 transition-all duration-300"
            >
              <div className="h-32 rounded-lg bg-muted/50 mb-4 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">{service.tag}</span>
              </div>
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
