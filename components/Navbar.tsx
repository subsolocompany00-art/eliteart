import React, { useState, useEffect } from 'react';
import { Diamond } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-xl border-b border-stone-800 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-900/40 ring-1 ring-brand-300/30">
            <Diamond size={20} className="text-white fill-current" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-wide">
            Elite<span className="text-brand-400 italic">Art</span>
          </span>
        </div>
        
        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block bg-white text-stone-950 px-6 py-2.5 rounded-sm font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-50 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(196,134,83,0.5)] border border-transparent hover:border-brand-200"
        >
          Acesso Vip
        </button>
      </div>
    </nav>
  );
};

export default Navbar;