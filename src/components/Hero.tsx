import { motion } from 'motion/react';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 sm:-left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 blur-[80px] sm:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 sm:-right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-secondary/10 blur-[100px] sm:blur-[150px] rounded-full"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface-high border border-white/10 mb-6 sm:mb-8"
        >
          <TrendingUp className="text-secondary w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
          <span className="text-[8px] sm:text-[10px] font-bold tracking-widest uppercase text-white/60">Scalable Performance Marketing</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter leading-[1.1] sm:leading-[0.95] md:leading-[0.9] mb-6 sm:mb-8"
        >
          We Generate <span className="text-primary italic">High-Quality</span> Leads That Turn Into Paying Customers
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          Helping businesses scale with data-driven Meta & Google Ads strategies built for aggressive growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
        >
          <motion.a 
            href="#offer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto radiant-bg text-background text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-full font-display font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-xl shadow-primary/20"
          >
            Get Free 5 Leads
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </motion.a>
          <motion.a 
            href="#results"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-surface-high text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-full font-display font-bold border border-white/10 hover:bg-surface transition-colors text-center"
          >
            View Case Studies
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Dashboard Simulation */}
      <motion.div 
        initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
        animate={{ opacity: 0.2, rotate: 3, scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-full max-w-5xl aspect-video glass-card rounded-xl border border-white/5 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-_XFMR3Z7PnXgTuKOiK6MnZJnFLsJOK1zcIQYwA63vYe6NQkY5G0ol5I2y5DKSo7fHJnNM1YJwaXtghn3A96pkkQSMavPTcdZf3IuWtTBEYfIWU7mCkN56_LYzIPFqjyppXpCDhrs6HjIQ6ZQdsH1r6CiaWeDOyTx28o7_vUnVO_6hk95KoFwkQwctpUuC9MO6INMl0HGLXzdVRMZrpLBX11uLglUgEJus8cMTR79o8-c1fuhUmBMj1SYZue17GZMhVB3ukudNdI" 
            alt="Dashboard" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
