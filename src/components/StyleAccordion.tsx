import { useState } from "react";

interface Artist {
  name: string;
  tag: string;
  img: string;
}

interface StyleEntry {
  id: string;
  name: string;
  fontClass?: string;
  desc: string;
  img: string;
  artists: Artist[];
}

const IMG = {
  fabian: "/images/assets/Profe Tattoo.png",
  juan: "/images/assets/Don Juan Caballero.png",
  natalia: "/images/assets/Black Kitty.png",
  ignacio: "/images/assets/Profe Tattoo.png",
};

const styles: StyleEntry[] = [
  {
    id: "fineline",
    name: "FINELINE",
    fontClass: "ff-dosis",
    desc: "El estilo Fine Line se caracteriza por el uso de aguja extremadamente fina para crear trazos delicados, precisos y minimalistas. Ideal para personas que buscan un diseño discreto y elegante.",
    img: "/images/assets/fine-line-home.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "tradicionales",
    name: "TRADICIONALES",
    fontClass: "ff-david",
    desc: "El tatuaje Tradicional u Old School destaca por sus líneas negras gruesas, paleta de colores primarios y motivos icónicos como marineros, dagas y rosas.",
    img: "/images/assets/traditional-home.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "neotradicional",
    name: "NEOTRADICIONAL",
    fontClass: "ff-bmhanna",
    desc: "Una evolución del tradicional que añade sombreados detallados, variaciones en el grosor de línea y una paleta de colores más rica y moderna.",
    img: "/images/assets/neo-traditional-home.png",
    artists: [{ name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan }],
  },
  {
    id: "blackwork",
    name: "BLACKWORK",
    fontClass: "ff-caesar",
    desc: "Enfocado exclusivamente en el uso de tinta negra sólida para crear patrones geométricos, ilustraciones oscuras y piezas de alto impacto visual.",
    img: "/images/assets/blackwork.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "realismo",
    name: "REALISMO",
    fontClass: "ff-carter",
    desc: "Captura retratos, paisajes y objetos con precisión fotográfica utilizando degradados suaves de sombras y luces.",
    img: "/images/assets/realism1-home.png",
    artists: [
      { name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian },
      { name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan },
    ],
  },
  {
    id: "puntillismo",
    name: "PUNTILLISMO",
    fontClass: "ff-doto",
    desc: "Técnica basada en la composición mediante miles de puntos individuales para formar volúmenes, texturas y sombreados.",
    img: "/images/assets/realism2-home.png",
    artists: [{ name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan }],
  },
  {
    id: "patch",
    name: "PATCH",
    fontClass: "ff-modak",
    desc: "Simula el efecto visual de un parche de tela bordado en la piel, con bordes gruesos y texturas de hilos hiperrealistas.",
    img: "/images/assets/new4.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "botanico",
    name: "BOTÁNICO",
    fontClass: "ff-elsie",
    desc: "Inspirado en la naturaleza: flores, ramas, hojas y elementos orgánicos plasmados con sutileza y elegancia.",
    img: "/images/assets/new3.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "newschool",
    name: "NEW SCHOOL",
    fontClass: "ff-betania",
    desc: "Estilo graffiti y caricaturesco con colores extremadamente brillantes, perspectiva exagerada y contornos marcados.",
    img: "/images/assets/new2.png",
    artists: [{ name: "Ignacio Orihuela", tag: "PISTACHO TATTOO", img: IMG.ignacio }],
  },
  {
    id: "culturales",
    name: "CULTURALES",
    fontClass: "ff-barrio",
    desc: "Inspirado en simbologías ancestrales, mitología andina y representaciones tradicionales con profundo significado histórico.",
    img: "/images/assets/new1.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "tribales",
    name: "TRIBALES",
    fontClass: "ff-changa",
    desc: "Patrones sólidos de tinta negra inspirados en antiguas tradiciones polinesias, maoríes y africanas.",
    img: "/images/assets/blackwork.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "neotribal",
    name: "NEO TRIBAL",
    fontClass: "ff-grechen",
    desc: "Reinterpretación futurista del tribal con formas cibernéticas, orgánicas y fluidas que contornean el cuerpo.",
    img: "/images/assets/fine-line-home.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
];

export default function StyleAccordion() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const selectedStyle = styles[activeIdx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
      {/* Category Buttons List */}
      <div className="flex flex-col gap-3">
        {styles.map((s, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center justify-between px-6 py-3 rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-sm transition-all text-left fs-btn ${s.fontClass} tracking-wider ${
                isActive
                  ? "bg-black text-white shadow-lg scale-[1.02]"
                  : "bg-[#101a24] text-white/90 hover:bg-black hover:text-white"
              }`}
            >
              <span>{s.name}</span>
              <span className="text-2xl font-normal opacity-70">&rsaquo;</span>
            </button>
          );
        })}
      </div>

      {/* Style Details Container — dividido: negro (superior) + blanco (artistas) */}
      <div className="relative overflow-hidden rounded-tr-[8rem] rounded-br-[8rem] rounded-bl-[8rem] bg-black border border-black/10 shadow-lg flex flex-col text-center">
        {/* Zona negra: título hereda tipografía del botón + imagen + descripción */}
        <div className="p-8 sm:p-10 flex flex-col gap-6">
          <h2 className={`${selectedStyle.fontClass} text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight`}>
            {selectedStyle.name}
          </h2>
          <div className="my-4 flex justify-center">
            <img
              src={selectedStyle.img}
              alt={selectedStyle.name}
              className="w-80 h-152 object-cover rounded-[6rem] shadow-md border border-black/10"
            />
          </div>
          <p className="font-['Inter',Helvetica] text-base sm:text-lg text-white leading-relaxed">
            {selectedStyle.desc}
          </p>
        </div>

        {/* Zona blanca: Artistas recomendados */}
        <div className="bg-white w-full p-8 sm:p-10 flex flex-col gap-6">
          <h3 className="font-['David_Libre',Helvetica] text-xl font-bold text-black">
            Artistas recomendados:
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {selectedStyle.artists.map((a) => (
              <a
                key={a.name}
                href="/artistas"
                className="flex flex-col h-[20.1875rem] w-[11.0625rem] rounded-3xl bg-black overflow-hidden hover:scale-[1.03] transition-transform shadow-lg"
              >
                {/* Nombre (Inter, blanco) */}
                <div className="flex flex-1 flex-col items-center justify-center gap-4 p-3">
                  <span className="font-['Inter',Helvetica] font-bold text-white text-sm leading-snug">
                    {a.name}
                  </span>
                  {/* Foto circular */}
                  <img
                    src={a.img}
                    alt={a.name}
                    className="h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
                  />
                </div>
                {/* Base blanca: tag en negro con David_Libre */}
                <div className="bg-white w-full py-3 px-2 text-center">
                  <span className="font-['David_Libre',Helvetica] font-bold text-black text-base">
                    {a.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
