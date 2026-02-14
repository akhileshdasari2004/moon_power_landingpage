import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    q: "Why does my business need AI Integration?",
    a: "AI integration streamlines operations, reduces manual effort, and unlocks data-driven insights that help your business scale faster and smarter."
  },
  {
    id: "02",
    q: "What is AI Integration?",
    a: "AI integration is the process of connecting artificial intelligence with existing systems, applications, or workflows to improve efficiency, automation, and decision-making."
  },
  {
    id: "03",
    q: "Is AI Integration only for large enterprises?",
    a: "Not at all. Businesses of all sizes can benefit from AI integration, from automating simple tasks to building complex intelligent workflows."
  },
  {
    id: "04",
    q: "How much does AI Integration cost?",
    a: "Costs vary depending on the scope and complexity of the integration. We offer flexible pricing to fit different budgets and needs."
  },
];

const categories = ["General", "Implementation", "Security & Compliance", "Use Cases"];

export function FAQGeometricSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <HeroGeometric>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Got Questions?<br />
              <span className="text-white/50">We've Got Answers</span>
            </h2>

            <div className="flex flex-col gap-2 mt-8">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "text-left px-4 py-2 rounded-lg text-sm transition-all w-fit",
                    activeTab === i
                      ? "bg-white/10 text-white border border-white/10 backdrop-blur-sm"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={cn(
                  "group rounded-2xl border transition-all duration-300",
                  openIndex === i
                    ? "bg-white/10 border-white/20 backdrop-blur-md"
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left"
                >
                  <div className="flex gap-6">
                    <span className="text-white/30 font-mono text-sm pt-1">{faq.id}</span>
                    <span className={cn(
                      "font-medium text-lg transition-colors",
                      openIndex === i ? "text-white" : "text-white/80"
                    )}>
                      {faq.q}
                    </span>
                  </div>
                  <span className={cn(
                    "ml-4 p-1 rounded-full transition-all duration-300",
                    openIndex === i ? "bg-white/20 rotate-180" : "bg-white/5 group-hover:bg-white/10"
                  )}>
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[4.5rem] text-white/50 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeroGeometric>
  );
}
