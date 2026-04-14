import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Offer', href: '#offer' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-display tracking-tight bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent"
        >
          Sachin K
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#offer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full radiant-bg text-background font-bold font-display text-sm"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-surface border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/60 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#offer"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 rounded-xl radiant-bg text-background font-bold font-display text-center"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
}
