export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5 w-full flex flex-col items-center gap-6 px-4">
      <div className="font-display font-bold text-white text-3xl bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent">
        Sachin K
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
        <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
      </div>
      <div className="text-white/20 text-[10px] uppercase tracking-widest font-bold text-center">
        © 2026 Sachin K . Built for High-Velocity Growth.
      </div>
    </footer>
  );
}
