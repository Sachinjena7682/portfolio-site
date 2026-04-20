import { motion } from 'motion/react';

export default function Results() {
  const cases = [
    {
      client: 'Taarash by Briha',
      title: 'Scaling Ecom to 5x ROAS',
      tag: 'E-commerce',
      color: 'primary',
      metrics: [
        { label: 'ROAS', value: '5.2x' },
        { label: 'CPC Avg', value: '₹12' },
        { label: 'New Sales', value: '800+' },
      ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBefMF7uQM08RW4lo63nQt5JX0_LAO-Dl9xDft726sjhMKXB-hzHzbsJAEGyub716ECcwaeJv2MuJqnXGIs_ZzyDoiba0b4wEacqXC1nYcqE_cGYw56nwV3LHnDM1sOHh79iMk3ho0t2m3yTahYCiP3lKBKulROyuBIE9fjEit9QkimdemF6eFf835zYHyHzenZIpbrVodLQjQsSmDi6Snr4Hb9m5TJvOpwjKCG5Kon2iQw4BiTMy2U3WqQND4n_H-xARMUgUFFr8U'
    },
    {
      client: 'Mehta Realty',
      title: '20+ High-Intent Leads',
      tag: 'Real Estate',
      color: 'secondary',
      metrics: [
        { label: 'Timeline', value: '5 Days' },
        { label: 'Cost Per Lead', value: '₹142' },
        { label: 'Conv. Rate', value: '38%' },
      ],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcpE_9npnAwxfQ3ud1TVdPtOBRgBVbLDNIn7vbzehsCLKf16tBiyrUu65rk7zVh_olbY6hE2QVsr45XdMzAXfDKCo-6Zu7GhGtmhIcvoIEly_lap8F4h_C3R17QpBlD90uZvb8y4kl3yGKjLJF2x1R4VkAXyf1DjWdaAdJLwyrG6O01jeUtjf-DsueLHP4DFYmBybDsEpSVaH5qnvzoPsZ1w4H8TXjLaJGPD2BZPS9_DsS4GsT1khdMGGpETts1mnk-8s9fPJMNGE'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface" id="results" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display">Proven <span className="text-primary">Velocity</span></h2>
            <p className="text-white/60 text-sm sm:text-base md:text-lg mt-3 sm:mt-4">Real results from live campaigns. No fluff, just math.</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <span className="bg-secondary/10 text-secondary px-3 sm:px-4 py-2 rounded-full text-[8px] sm:text-[10px] font-bold uppercase border border-secondary/20">Live Metrics</span>
            <span className="bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-[8px] sm:text-[10px] font-bold uppercase border border-primary/20">Verified Results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={c.client}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-surface-high rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="h-40 sm:h-52 md:h-64 overflow-hidden relative">
                <img 
                  src={c.img} 
                  alt={c.client} 
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-high to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8">
                  <span className={`bg-${c.color} text-background px-2 sm:px-3 py-1 rounded text-[8px] sm:text-[10px] font-black uppercase mb-1 sm:mb-2 inline-block`}>{c.tag}</span>
                  <h3 className="text-lg sm:text-2xl font-bold font-display">{c.title}</h3>
                  <p className="text-white/40 text-xs sm:text-sm">{c.client}</p>
                </div>
              </div>
              <div className="p-4 sm:p-8 grid grid-cols-3 gap-2 sm:gap-4">
                {c.metrics.map((m, j) => (
                  <div key={m.label} className={`text-center ${j === 1 ? 'border-x border-white/10' : ''}`}>
                    <div className={`text-xl sm:text-2xl font-black font-display text-${c.color}`}>{m.value}</div>
                    <div className="text-[8px] sm:text-[10px] text-white/40 uppercase font-bold">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
