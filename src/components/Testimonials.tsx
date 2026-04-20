import { motion } from 'motion/react';
import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Mehta',
      role: 'Director, Mehta Real Estate',
      text: 'Sachin turned our ad account from a money pit into a lead machine. Our cost per lead dropped by 60% in the first month.',
    },
    {
      name: 'Dr. Ananya Singh',
      role: 'Founder, DermaCare',
      text: "The appointment booking funnel he set up for my clinic has been a game-changer. I'm fully booked for weeks ahead.",
    },
    {
      name: 'Pooja Goswami',
      role: 'Founder, Taarash By Briha',
      text: 'The ROAS we are seeing with Sachin is incredible. He understands the fashion market and how to target high-value clients.',
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface/30 overflow-hidden px-4 sm:px-6" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display mb-12 sm:mb-16">Direct <span className="text-primary">Impact</span></h2>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 sm:pb-8 snap-x no-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] snap-center glass-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5"
            >
              <div className="flex text-secondary mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />)}
              </div>
              <p className="text-base sm:text-lg text-white italic mb-6 sm:mb-8">{'"' + t.text + '"'}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-surface-high flex items-center justify-center border border-white/10 flex-shrink-0">
                  <User className="w-5 sm:w-6 h-5 sm:h-6 text-white/40" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold font-display text-sm sm:text-base truncate">{t.name}</div>
                  <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest truncate">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
