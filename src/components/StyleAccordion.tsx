import { useState } from "react";

interface StyleEntry {
  name: string;
  desc: string;
  artists: string[];
}

const styles: StyleEntry[] = [
  { name: "FINELINE",        desc: "Líneas extremadamente delgadas y precisas para diseños minimalistas y delicados.", artists: ["Natalia Lazzo (BLACKITTY)"] },
  { name: "TRADICIONALES",   desc: "Líneas gruesas, colores vibrantes y temáticas clásicas del tatuaje old school.", artists: ["Fabian Morales (PROFE TATTOO)"] },
  { name: "NEOTRADICIONAL",  desc: "Paleta amplia, líneas variables y sombreados detallados en evolución del estilo tradicional.", artists: ["Juan Don juan Caballero"] },
  { name: "BLACKWORK",       desc: "Tinta negra exclusivamente para patrones, ilustraciones y diseños geométricos.", artists: ["Natalia Lazzo (BLACKITTY)"] },
  { name: "REALISMO",        desc: "Imágenes hiperrealistas con luces, sombras y texturas que imitan la fotografía.", artists: ["Fabian Morales (PROFE TATTOO)"] },
  { name: "PUNTILLISMO",     desc: "Pequeños puntos de tinta para graduaciones tonales y efectos de sombreado.", artists: ["Juan Don juan Caballero"] },
  { name: "PATCH",           desc: "Simula textura de parche textil cosido en la piel con bordes negros.", artists: ["Natalia Lazzo (BLACKITTY)"] },
  { name: "BOTANICO",        desc: "Plantas, flores y enredaderas con líneas finas para un look orgánico.", artists: ["Natalia Lazzo (BLACKITTY)"] },
  { name: "NEW SCHOOL",      desc: "Colores vibrantes, contornos gruesos y diseño exagerado estilo cartoon.", artists: ["Juan Don juan Caballero"] },
  { name: "CULTURALES",      desc: "Lenguajes visuales con espiritualidad y mitología, simbolismo ancestral.", artists: ["Fabian Morales (PROFE TATTOO)"] },
  { name: "TRIBALES",        desc: "Tinta negra sólida con líneas geométricas ancestrales de pueblos originarios.", artists: ["Fabian Morales (PROFE TATTOO)"] },
  { name: "NEO TRIBAL",      desc: "Líneas fluidas y abstractas adaptadas a la anatomía moderna del cuerpo.", artists: ["Natalia Lazzo (BLACKITTY)"] },
];

export default function StyleAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="flex flex-col border-t border-[#333]">
      {styles.map((s, i) => {
        const open = openIdx === i;
        return (
          <div className="border-b border-[#333]" key={s.name}>
            <button
              className="w-full flex items-center justify-between p-4 bg-[var(--color-cd)] text-white border-none cursor-pointer font-[var(--font-int)] text-base font-semibold uppercase tracking-wide hover:bg-[#0f1419] transition-colors focus:outline-none"
              style={{ fontFamily: "var(--font-dl)" }}
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              <span>{s.name}</span>
              <svg
                className={`transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M4 5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="p-6 bg-black flex flex-col gap-4">
                <p className="font-[var(--font-int)] text-[var(--color-cg)] text-sm leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[13px] text-[var(--color-cm)] font-semibold">Artistas en este estilo:</span>
                  {s.artists.map((a) => (
                    <span key={a} className="text-[13px] text-white bg-[var(--color-cd)] px-3 py-1 rounded-full">{a}</span>
                  ))}
                </div>
                <a href="#" className="text-[var(--color-ca)] font-semibold text-[13px] uppercase hover:opacity-75 transition-opacity">INGRESAR &rarr;</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}