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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl sm:text-2xl font-bold font-display tracking-tight bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent"
        >
          Sachin K
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs lg:text-sm font-medium text-white/60 hover:text-white transition-colors"
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
            className="px-4 lg:px-6 py-2 rounded-full radiant-bg text-background font-bold font-display text-xs lg:text-sm whitespace-nowrap"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-surface border-b border-white/10 px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base sm:text-lg font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#offer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl radiant-bg text-background font-bold font-display text-center text-sm sm:text-base"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
}
