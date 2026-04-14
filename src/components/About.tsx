import { motion } from 'motion/react';
import profileImg from './gemini-2.5-flash-image_Create_a_professional_corporate_headshot_of_a_young_Indian_man_with_the_same_fac-0.jpg';

export default function About() {
  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative glass-card rounded-2xl border border-white/10 p-2 aspect-[4/5] overflow-hidden">
            <img 
              src={profileImg} 
              alt="Sachin K" 
              className="w-full h-full object-cover rounded-xl transition-all duration-700"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl border border-white/20">
              <h3 className="text-xl font-bold font-display mb-1">Sachin K</h3>
              <p className="text-primary font-medium text-sm">Performance Marketer & Growth Strategist</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black font-display mb-8">
            Not Just Ads, <br /><span className="text-secondary">Revenue Architecture.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            With <span className="text-white font-bold">4 years of experience</span>, I don't just "run ads." I architect conversion machines. I help service-based businesses stop wasting budget on vanity metrics and start seeing real bottom-line growth.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-surface-high rounded-2xl border-l-4 border-primary">
              <div className="text-3xl font-black font-display text-white mb-1">₹10L+</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Ad Spend Managed</div>
            </div>
            <div className="p-6 bg-surface-high rounded-2xl border-l-4 border-secondary">
              <div className="text-3xl font-black font-display text-white mb-1">4.5x</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Avg. ROAS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
