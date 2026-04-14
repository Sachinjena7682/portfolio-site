export default function Footer() {
  return (
    <footer className="bg-background py-8 sm:py-12 border-t border-white/5 w-full flex flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6">
      <div className="font-display font-bold text-white text-2xl sm:text-3xl bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent">
        Sachin K
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-white/40">
        <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
      </div>
      <div className="text-white/20 text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-center">
        © 2026 Sachin K . Built for High-Velocity Growth.
      </div>
    </footer>
  );
}
