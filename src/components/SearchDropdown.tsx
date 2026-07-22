import React, { useState, useRef, useEffect } from 'react';

export default function SearchDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const styles = ["Fineline", "Tradicional", "New School", "Realismo", "Blackwork", "Japonés"];

  return (
    <div className="relative ml-auto" ref={containerRef}>
      <div className="relative">
        <svg className="absolute left-[18px] top-1/2 -translate-y-1/2 text-white pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Buscar estilo"
          className="pl-[48px] pr-6 py-3 bg-black text-white rounded-full font-[var(--font-int)] text-[20px] font-medium w-[260px] outline-none border-none placeholder:text-[var(--color-cg)] cursor-pointer"
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-[300px] right-0 bg-[var(--color-cd)] rounded-lg shadow-xl border border-gray-800 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <h4 className="text-[var(--color-cm)] text-xs font-semibold uppercase tracking-wider mb-3">Sugerencias Rápidas</h4>
          <ul className="flex flex-col gap-1">
            {styles.map(style => (
              <li key={style}>
                <a href={`/estilos#${style.toLowerCase().replace(" ", "-")}`} className="block px-3 py-2 text-white hover:bg-[var(--color-ca)] hover:text-white rounded transition-colors text-sm font-medium">
                  {style}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
