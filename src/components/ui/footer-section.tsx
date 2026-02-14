'use client';
import React, { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Square, Send } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Quick Links',
    links: [
      { title: 'Home', href: '/' },
      { title: 'Solutions', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Documentation', href: '/docs' },
      { title: 'API Access', href: '/api' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'FAQs', href: '/faqs' },
    ],
  },
  {
    label: 'Socials',
    links: [
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Twitter', href: '#', icon: Twitter },
      { title: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center border-t border-white/5 bg-[radial-gradient(35%_128px_at_50%_0%,hsl(var(--primary)/0.05),transparent)] px-6 py-12 lg:py-20 mt-24">
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/10 border border-white/10">
              <Square className="size-5 fill-white/20 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight">MoonPower</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Expert guidance for AI success. Smart automation solutions for ambitious teams.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-8">
            © {new Date().getFullYear()} MoonPower Inc. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-sm font-semibold text-foreground">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-white inline-flex items-center transition-colors duration-200"
                      >
                        {link.icon && <link.icon className="me-2 size-4 opacity-70" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', y: 10, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
