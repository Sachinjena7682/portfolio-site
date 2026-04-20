import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What platforms do you specialize in?",
    answer: "I specialize in Meta (Facebook & Instagram) and Google Ads. These platforms offer the highest velocity for lead generation and sales for the industries I serve."
  },
  {
    question: "How soon can I expect to see results?",
    answer: "Typically, once the campaigns are live, you can expect to see the first set of leads within 48 to 72 hours. The first 14 days are usually focused on data collection and initial optimization."
  },
  {
    question: "Do I need a massive ad budget to start?",
    answer: "Not necessarily. We can start with a budget that feels comfortable for your business and scale aggressively once we've proven the ROAS and lead quality."
  },
  {
    question: "How do you ensure the leads are high quality?",
    answer: "We use advanced targeting, custom landing pages, and qualifying questions in our lead forms. We also set up feedback loops with your sales team to constantly refine our targeting based on actual conversions."
  },
  {
    question: "What industries do you have the most experience in?",
    answer: "I have deep expertise in Real Estate, EdTech, Solar, SaaS, and high-ticket coaching programs. My strategies are built for industries where the customer lifetime value is high."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface/20 px-4 sm:px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display mb-3 sm:mb-4">
            Common <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">
            Everything you need to know before we start scaling your business.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold font-display text-left">{faq.question}</span>
                {activeIndex === i ? (
                  <ChevronUp className="text-primary w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-white/40 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 text-white/60 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
