import React, { useState, useEffect } from 'react';

export default function StylesOverlay({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const stylesList = [
    { name: "Fineline", desc: "Trazos finos, delicados y elegantes." },
    { name: "Tradicional", desc: "Líneas gruesas y colores sólidos." },
    { name: "New School", desc: "Colores vibrantes y proporciones exageradas." },
    { name: "Realismo", desc: "Retratos y sombras detalladas." }
  ];

  const [activeStyle, setActiveStyle] = useState(stylesList[0]);

  return (
    <>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }} 
        className="font-[var(--font-int)] text-base font-medium text-black hover:text-[var(--color-ca)] transition-colors focus:outline-none"
      >
        {children}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Backdrop Blur */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl h-[80vh] m-auto bg-[var(--color-cd)] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            {/* Left sidebar - Styles */}
            <div className="w-full md:w-1/3 bg-[#0a1017] border-r border-gray-800 p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white font-[var(--font-dl)] font-bold text-2xl">Estilos</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto space-y-2">
                {stylesList.map(st => (
                  <li key={st.name}>
                    <button 
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeStyle.name === st.name ? 'bg-[var(--color-ca)] text-white' : 'text-gray-300 hover:bg-gray-800'}`}
                      onClick={() => setActiveStyle(st)}
                    >
                      {st.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right content - Description & Artists */}
            <div className="w-full md:w-2/3 p-8 flex flex-col h-full">
              <h3 className="text-4xl font-[var(--font-dl)] font-bold text-white mb-4">{activeStyle.name}</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{activeStyle.desc}</p>
              
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-[var(--color-cm)]">Artistas Destacados</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Dummy artists for the overlay */}
                {[1, 2].map(i => (
                  <a href="/artistas" key={i} className="flex items-center gap-4 bg-[#1a2530] p-3 rounded-xl hover:-translate-y-1 transition-transform border border-transparent hover:border-gray-700">
                    <img src={`/images/artist${i}.png`} alt={`Artist ${i}`} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="text-white font-bold text-sm">BLACKKITTY {i}</p>
                      <p className="text-xs text-[var(--color-ca)]">{activeStyle.name}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-auto pt-6">
                <a href="/estilos" onClick={() => setIsOpen(false)} className="inline-block border border-[var(--color-ca)] text-[var(--color-ca)] hover:bg-[var(--color-ca)] hover:text-white px-6 py-2 rounded font-semibold text-sm transition-colors uppercase tracking-widest">
                  Ver Todos los Estilos
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
