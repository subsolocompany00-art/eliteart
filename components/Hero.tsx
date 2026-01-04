import React from 'react';
import { HERO_CONTENT } from '../constants';
import Button from './Button';
import { ArrowRight, Star, Crown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-stone-950 -z-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_100%)] -z-40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.07] -z-30 pointer-events-none mix-blend-screen"></div>
      
      {/* Elegant Blobs */}
      <div className="absolute top-0 -left-20 w-[40rem] h-[40rem] bg-brand-900/40 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob -z-20"></div>
      <div className="absolute top-40 right-0 w-[35rem] h-[35rem] bg-gold-700/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000 -z-20"></div>
      <div className="absolute -bottom-40 left-1/3 w-[50rem] h-[30rem] bg-stone-800/60 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000 -z-20"></div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 text-center z-10 max-w-5xl">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-stone-900/60 border border-brand-500/20 text-brand-200 text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-md shadow-2xl animate-float">
          <Crown size={14} className="text-brand-400 fill-brand-400" />
          <span>Design de Alta Performance</span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl">
          A Arte de <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 animate-shimmer bg-[length:200%_auto]">
              Vender Mais
            </span>
            <span className="absolute inset-x-0 bottom-2 h-[0.5em] bg-brand-900/30 blur-lg -z-10"></span>
          </span>
        </h1>

        <p className="font-sans text-xl md:text-2xl text-stone-300/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          {HERO_CONTENT.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button onClick={scrollToPricing} className="text-base px-10 py-4 w-full sm:w-auto shadow-xl shadow-brand-900/40 bg-brand-500 hover:bg-brand-400 text-white border border-brand-400/20">
            {HERO_CONTENT.cta}
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('why')?.scrollIntoView({behavior: 'smooth'})} className="text-base px-10 py-4 w-full sm:w-auto border-stone-700 text-stone-300 hover:text-white hover:border-brand-400/50 hover:bg-stone-800/50">
            Conhecer Detalhes
          </Button>
        </div>

        {/* Cinematic Mockup */}
        <div className="mt-28 relative mx-auto max-w-5xl perspective-[3000px]">
           <div className="absolute -inset-10 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent rounded-[100%] blur-3xl opacity-60"></div>
           
           <div className="relative bg-stone-900/80 border border-stone-800/60 rounded-xl p-2 md:p-6 shadow-2xl backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transform rotate-x-6 transition-transform duration-1000 ease-out hover:rotate-x-0">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[4/5] rounded bg-stone-800 overflow-hidden relative group border border-stone-700/50 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  
                  {/* Art Placeholder */}
                  <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-brand-800 to-stone-900' : 'from-stone-700 to-brand-900'} opacity-80 group-hover:scale-105 transition-transform duration-700`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border-2 border-white/5 m-2">
                        <span className="font-serif text-3xl text-white/20 italic font-bold">Post #{i+1}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 flex gap-1">
                      <Star size={12} className="text-brand-400 fill-brand-400" />
                      <Star size={12} className="text-brand-400 fill-brand-400" />
                      <Star size={12} className="text-brand-400 fill-brand-400" />
                  </div>
                </div>
              ))}
           </div>
           <div className="mt-8 flex justify-center gap-2 text-stone-500 text-xs font-bold tracking-[0.2em] uppercase">
              <span>Premium</span> &bull; <span>Editable</span> &bull; <span>Viral</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;