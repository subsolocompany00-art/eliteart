import React from 'react';
import { PLANS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import { Check, Crown, ShieldCheck } from 'lucide-react';
import Button from './Button';
import { Plan } from '../types';

const Pricing: React.FC = () => {
  
  const handlePurchase = (plan: Plan) => {
    if (plan.checkoutUrl) {
      window.open(plan.checkoutUrl, '_blank');
      return;
    }
    const message = encodeURIComponent(`${WHATSAPP_MESSAGE} Tenho interesse no ${plan.name}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="py-32 bg-stone-950 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_#0c0a09_100%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Investimento
          </h2>
          <p className="text-stone-400 text-lg font-light tracking-wide">
            Escolha a excelência para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col w-full max-w-md lg:w-1/2 p-10 transition-all duration-500 ${
                plan.recommended 
                  ? 'bg-stone-900 border border-brand-500/40 shadow-2xl shadow-brand-900/20 scale-105 z-10' 
                  : 'bg-stone-950/50 border border-stone-800 hover:border-stone-700'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-sm flex items-center gap-2 shadow-lg">
                  <Crown size={12} className="fill-white" /> Recomendado
                </div>
              )}

              <div className="mb-10 text-center">
                <h3 className="font-serif text-3xl text-white mb-6 italic">
                  {plan.name}
                </h3>
                <div className="flex items-start justify-center gap-1 mb-6">
                  <span className="text-stone-500 text-lg mt-1 font-serif">R$</span>
                  <span className="text-6xl font-serif text-white">
                    {plan.price.toString().split('.')[0]}
                  </span>
                  <div className="flex flex-col items-start mt-1">
                     <span className="text-xl font-serif text-stone-400">,{plan.price.toString().split('.')[1]}</span>
                     <span className="text-[10px] uppercase tracking-widest text-stone-600">Único</span>
                  </div>
                </div>
                <p className="text-stone-400 font-light text-sm">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-5 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${plan.recommended ? 'border-brand-500 text-brand-400' : 'border-stone-700 text-stone-500'}`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className={`text-sm tracking-wide ${feature.highlight ? 'text-white font-medium' : 'text-stone-400 font-light'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handlePurchase(plan)}
                variant={plan.recommended ? 'primary' : 'outline'}
                fullWidth
                className={`py-4 text-xs font-bold uppercase tracking-widest ${!plan.recommended && 'border-stone-700 text-stone-400 hover:text-white hover:border-white'}`}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-stone-600 text-xs uppercase tracking-widest flex items-center justify-center gap-2 opacity-60">
                <ShieldCheck size={14} /> Garantia de Satisfação &bull; Pagamento Seguro
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;