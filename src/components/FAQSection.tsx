import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["General", "Implementation", "Security & Compliance", "Use Cases"];

const faqs = [
  { q: "Why does my business need AI Integration?", a: "AI integration streamlines operations, reduces manual effort, and unlocks data-driven insights that help your business scale faster and smarter." },
  { q: "What is AI Integration?", a: "AI integration is the process of connecting artificial intelligence with existing systems, applications, or workflows to improve efficiency, automation, and decision-making." },
  { q: "Is AI Integration only for large enterprises?", a: "Not at all. Businesses of all sizes can benefit from AI integration, from automating simple tasks to building complex intelligent workflows." },
  { q: "How much does AI Integration cost?", a: "Costs vary depending on the scope and complexity of the integration. We offer flexible pricing to fit different budgets and needs." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Got Questions?</h2>
        <p className="font-display text-3xl md:text-4xl font-bold text-muted-foreground mb-10">We've Got Answers</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass gradient-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground text-sm font-mono">0{i + 1}</span>
                  <span className="font-medium">{faq.q}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pl-14 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
