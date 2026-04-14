import { motion } from 'motion/react';

export default function Offer() {
  return (
    <section className="py-24 relative overflow-hidden" id="offer">
      <div className="absolute inset-0 radiant-bg opacity-5"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-high p-8 md:p-12 rounded-[3rem] border border-primary/20 shadow-2xl shadow-primary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8">
            <div className="bg-tertiary text-background text-[10px] font-black uppercase px-4 py-2 rounded-full transform rotate-12">Limited Time Offer</div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-display mb-6">Get 5 <span className="text-primary italic">FREE</span> leads as a trial</h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            I'm so confident in my system that I'll generate your first 5 leads for free. No long-term contracts, just results. Fill out the form below to get started.
          </p>

          <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-inner">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSey02afC31AQz0wZSd_cYg41N7eV6GsO_v5i0Z99d7GH3SReQ/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
          
          <p className="text-[10px] text-white/40 mt-8 uppercase tracking-widest font-bold">Only 5 slots remaining this month</p>
        </motion.div>
      </div>
    </section>
  );
}
