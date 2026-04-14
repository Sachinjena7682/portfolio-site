import { motion } from 'motion/react';
import { Home, Paintbrush, Sparkles, ShoppingBag, GraduationCap, Sun, Users, Cpu } from 'lucide-react';

export default function Industries() {
  const industries = [
    { 
      name: 'Real Estate', 
      desc: 'Get property buyer leads', 
      icon: Home, 
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    { 
      name: 'Interior', 
      desc: 'High-value design clients', 
      icon: Paintbrush, 
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    { 
      name: 'EdTech', 
      desc: 'High-ticket student enrollments', 
      icon: GraduationCap, 
      color: 'text-tertiary',
      bg: 'bg-tertiary/10'
    },
    { 
      name: 'Solar', 
      desc: 'Qualified installation leads', 
      icon: Sun, 
      color: 'text-white',
      bg: 'bg-white/10'
    },
    { 
      name: 'Coaching', 
      desc: 'Scale high-ticket programs', 
      icon: Users, 
      color: 'text-primary',
      bg: 'bg-primary/10'
    },
    { 
      name: 'SaaS', 
      desc: 'B2B demo bookings & trials', 
      icon: Cpu, 
      color: 'text-secondary',
      bg: 'bg-secondary/10'
    },
    { 
      name: 'Cleaning', 
      desc: 'Local service bookings', 
      icon: Sparkles, 
      color: 'text-tertiary',
      bg: 'bg-tertiary/10'
    },
    { 
      name: 'Ecom', 
      desc: 'Sales + ROAS growth', 
      icon: ShoppingBag, 
      color: 'text-white',
      bg: 'bg-white/10'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4">
            Industries <span className="text-primary">We Dominate</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl">
            Tailored strategies for high-growth sectors. We know your audience better than they know themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 glass-card border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-lg ${industry.bg} flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-colors`}>
                <industry.icon className={`w-6 h-6 ${industry.color} group-hover:text-inherit`} />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{industry.name}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{industry.desc}</p>
              <div className={`flex items-center gap-2 ${industry.color} font-bold text-[10px] uppercase tracking-widest`}>
                High Velocity <Sparkles className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
