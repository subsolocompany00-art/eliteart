import React from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';

const WhyItWorks: React.FC = () => {
  return (
    <section id="why" className="py-32 bg-stone-950 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-800 to-transparent -translate-x-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 text-right lg:pr-10">
            <h2 className="font-serif text-4xl md:text-6xl font-medium text-white mb-8 leading-tight">
              A Psicologia <br/>
              <span className="italic text-brand-500">da Imagem</span>
            </h2>
            <div className="space-y-8 text-lg text-stone-400 font-light leading-relaxed">
              <p>
                O cérebro humano processa imagens <strong className="text-white font-normal">60.000x mais rápido</strong> que textos. Em um feed lotado, você tem apenas milissegundos.
              </p>
              <p>
                Nossa estética não é apenas bonita; é <strong className="text-white font-normal">intencional</strong>. Cores sóbrias e tipografia hierárquica transmitem autoridade imediata.
              </p>
              <div className="border-r-4 border-brand-500 pr-6 py-2 my-10 italic text-brand-200 text-2xl font-serif">
                "O design é o embaixador silencioso da sua marca."
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-10">
            <div className="relative max-w-md">
              <div className="space-y-6">
                <div className="group flex items-start gap-6 p-8 rounded-sm bg-stone-900/50 border border-stone-800 hover:border-brand-900/50 transition-all duration-500 hover:bg-stone-900">
                    <div className="mt-1 text-stone-500 group-hover:text-brand-400 transition-colors">
                        <Eye size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl text-white mb-2">1. Atração</h4>
                        <p className="text-stone-400 font-light text-sm leading-relaxed">O visual premium captura a atenção instantaneamente no scroll infinito.</p>
                    </div>
                </div>
                
                <div className="group flex items-start gap-6 p-8 rounded-sm bg-stone-900/50 border border-stone-800 hover:border-brand-900/50 transition-all duration-500 hover:bg-stone-900 translate-x-4">
                    <div className="mt-1 text-stone-500 group-hover:text-brand-400 transition-colors">
                        <Heart size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl text-white mb-2">2. Desejo</h4>
                        <p className="text-stone-400 font-light text-sm leading-relaxed">A consistência estética gera percepção de alto valor e confiança.</p>
                    </div>
                </div>

                <div className="group flex items-start gap-6 p-8 rounded-sm bg-brand-900/10 border border-brand-900/30 hover:bg-brand-900/20 transition-all duration-500">
                    <div className="mt-1 text-brand-500">
                        <ShoppingBag size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl text-white mb-2">3. Conversão</h4>
                        <p className="text-brand-100/80 font-light text-sm leading-relaxed">O cliente se sente seguro para investir em quem aparenta profissionalismo.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;