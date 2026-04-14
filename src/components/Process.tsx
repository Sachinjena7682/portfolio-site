import { motion } from 'motion/react';
import { Compass, Rocket, Users, Wrench } from 'lucide-react';

export default function Process() {
  const steps = [
    { 
      name: 'Strategy', 
      desc: 'Defining your ideal customer profile and market angle.', 
      icon: Compass,
      color: 'text-primary',
      border: 'border-primary/30'
    },
    { 
      name: 'Ads Launch', 
      desc: 'Deploying high-converting creative and technical setups.', 
      icon: Rocket,
      color: 'text-secondary',
      border: 'border-secondary/30'
    },
    { 
      name: 'Lead Gen', 
      desc: 'Flooding your CRM with qualified business prospects.', 
      icon: Users,
      color: 'text-tertiary',
      border: 'border-tertiary/30'
    },
    { 
      name: 'Optimization', 
      desc: 'Daily scaling and split-testing for maximum ROI.', 
      icon: Wrench,
      color: 'text-white',
      border: 'border-white/30'
    },
  ];

  return (
    <section className="py-24 relative" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black font-display text-center mb-20">The <span className="text-secondary">Blueprint</span></h2>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-12"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className={`w-20 h-20 mx-auto bg-surface-high border ${step.border} rounded-full flex items-center justify-center ${step.color} mb-6 shadow-lg`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{step.name}</h3>
              <p className="text-sm text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
