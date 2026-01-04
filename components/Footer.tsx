import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 py-16 border-t border-stone-900/50">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-serif text-2xl text-white mb-4 italic">EliteArt</h3>
        <p className="text-stone-500 font-light text-sm max-w-xs mx-auto mb-8">
          Design estratégico para marcas que desejam liderar o mercado.
        </p>
        
        <div className="text-stone-700 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} EliteArt. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;