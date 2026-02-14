const footerLinks = {
  "Quick Links": ["Home", "Solutions", "Pricing", "Blog", "Contact"],
  "Resources": ["Documentation", "API Access", "Case Studies", "FAQs"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">M</span>
              </div>
              <span className="font-display font-semibold text-lg">MoonPower</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Expert guidance for AI success. Smart automation solutions for ambitious teams.
            </p>
            <div className="flex gap-3">
              {["in", "f", "x"].map((s) => (
                <div key={s} className="w-9 h-9 rounded-full glass flex items-center justify-center text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">&copy; 2025 MoonPower Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
