import { motion } from 'motion/react';
import profileImg from './gemini-2.5-flash-image_Create_a_professional_corporate_headshot_of_a_young_Indian_man_with_the_same_fac-0.jpg';

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface/30 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group order-2 md:order-1"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative glass-card rounded-2xl border border-white/10 p-2 aspect-[4/5] overflow-hidden max-w-xs mx-auto md:mx-0">
            <img 
              src={profileImg} 
              alt="Sachin K" 
              className="w-full h-full object-cover rounded-xl transition-all duration-700"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 p-4 sm:p-6 glass-card rounded-xl border border-white/20">
              <h3 className="text-lg sm:text-xl font-bold font-display mb-1">Sachin K</h3>
              <p className="text-primary font-medium text-xs sm:text-sm">Performance Marketer & Growth Strategist</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6 sm:mb-8">
            Not Just Ads, <br /><span className="text-secondary">Revenue Architecture.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            With <span className="text-white font-bold">4 years of experience</span>, I don't just "run ads." I architect conversion machines. I help service-based businesses stop wasting budget on vanity metrics and start seeing real bottom-line growth.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="p-4 sm:p-6 bg-surface-high rounded-2xl border-l-4 border-primary">
              <div className="text-2xl sm:text-3xl font-black font-display text-white mb-1">₹10L+</div>
              <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold">Ad Spend Managed</div>
            </div>
            <div className="p-4 sm:p-6 bg-surface-high rounded-2xl border-l-4 border-secondary">
              <div className="text-2xl sm:text-3xl font-black font-display text-white mb-1">4.5x</div>
              <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold">Avg. ROAS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
