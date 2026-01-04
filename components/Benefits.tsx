import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-stone-950 relative border-t border-stone-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-500 font-bold tracking-widest text-xs uppercase mb-4 block">Benefícios Exclusivos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Eleve o Nível do Seu Jogo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-6 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-8 group-hover:border-brand-500 group-hover:bg-brand-500/10 transition-colors duration-500">
                <benefit.icon size={24} className="text-stone-400 group-hover:text-brand-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{benefit.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed px-4">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;