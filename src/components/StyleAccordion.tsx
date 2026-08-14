import { useState } from "react";

interface StyleEntry {
  id: string;
  name: string;
  fontClass?: string;
  desc: string;
  img: string;
  artists: { name: string; tag: string }[];
}

const styles: StyleEntry[] = [
  {
    id: "fineline",
    name: "FINELINE",
    fontClass: "ff-dosis",
    desc: "El estilo Fine Line se caracteriza por el uso de aguja extremadamente fina para crear trazos delicados, precisos y minimalistas. Ideal para personas que buscan un diseño discreto y elegante.",
    img: "/images/assets/fine-line-home.png",
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY" }
    ]
  },
  {
    id: "tradicionales",
    name: "TRADICIONALES",
    fontClass: "ff-david",
    desc: "El tatuaje Tradicional u Old School destaca por sus líneas negras gruesas, paleta de colores primarios y motivos icónicos como marineros, dagas y rosas.",
    img: "/images/assets/traditional-home.png",
    artists: [
      { name: "Fabian Morales", tag: "PROFE TATTOO" }
    ]
  },
  {
    id: "neotradicional",
    name: "NEOTRADICIONAL",
    fontClass: "ff-bmhanna",
    desc: "Una evolución del tradicional que añade sombreados detallados, variaciones en el grosor de línea y una paleta de colores más rica y moderna.",
    img: "/images/assets/neo-traditional-home.png",
    artists: [
      { name: "Juan Caballero", tag: "DON JUAN" }
    ]
  },
  {
    id: "blackwork",
    name: "BLACKWORK",
    fontClass: "ff-caesar",
    desc: "Enfocado exclusivamente en el uso de tinta negra sólida para crear patrones geométricos, ilustraciones oscuras y piezas de alto impacto visual.",
    img: "/images/assets/blackwork.png",
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY" }
    ]
  },
  {
    id: "realismo",
    name: "REALISMO",
    fontClass: "ff-carter",
    desc: "Captura retratos, paisajes y objetos con precisión fotográfica utilizando degradados suaves de sombras y luces.",
    img: "/images/assets/realism1-home.png",
    artists: [
      { name: "Fabian Morales", tag: "PROFE TATTOO" },
      { name: "Juan Caballero", tag: "DON JUAN" }
    ]
  },
  {
    id: "puntillismo",
    name: "PUNTILLISMO",
    fontClass: "ff-doto",
    desc: "Técnica basada en la composición mediante miles de puntos individuales para formar volúmenes, texturas y sombreados.",
    img: "/images/assets/realism2-home.png",
    artists: [
      { name: "Juan Caballero", tag: "DON JUAN" }
    ]
  },
  {
    id: "patch",
    name: "PATCH",
    fontClass: "ff-modak",
    desc: "Simula el efecto visual de un parche de tela bordado en la piel, con bordes gruesos y texturas de hilos hiperrealistas.",
    img: "/images/assets/new4.png",
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY" }
    ]
  },
  {
    id: "botanico",
    name: "BOTÁNICO",
    fontClass: "ff-elsie",
    desc: "Inspirado en la naturaleza: flores, ramas, hojas y elementos orgánicos plasmados con sutileza y elegancia.",
    img: "/images/assets/new3.png",
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY" }
    ]
  },
  {
    id: "newschool",
    name: "NEW SCHOOL",
    fontClass: "ff-betania",
    desc: "Estilo graffiti y caricaturesco con colores extremadamente brillantes, perspectiva exagerada y contornos marcados.",
    img: "/images/assets/new2.png",
    artists: [
      { name: "Ignacio Orihuela", tag: "PISTACHO TATTOO" }
    ]
  },
  {
    id: "culturales",
    name: "CULTURALES",
    fontClass: "ff-barrio",
    desc: "Inspirado en simbologías ancestrales, mitología andina y representaciones tradicionales con profundo significado histórico.",
    img: "/images/assets/new1.png",
    artists: [
      { name: "Fabian Morales", tag: "PROFE TATTOO" }
    ]
  },
  {
    id: "tribales",
    name: "TRIBALES",
    fontClass: "ff-changa",
    desc: "Patrones sólidos de tinta negra inspirados en antiguas tradiciones polinesias, maoríes y africanas.",
    img: "/images/assets/blackwork.png",
    artists: [
      { name: "Fabian Morales", tag: "PROFE TATTOO" }
    ]
  },
  {
    id: "neotribal",
    name: "NEO TRIBAL",
    fontClass: "ff-grechen",
    desc: "Reinterpretación futurista del tribal con formas cibernéticas, orgánicas y fluidas que contornean el cuerpo.",
    img: "/images/assets/fine-line-home.png",
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY" }
    ]
  }
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
              className={`flex items-center justify-between px-6 py-3 rounded-[10px] transition-all text-left fs-btn ${s.fontClass} tracking-wider ${
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

      {/* Style Details Container */}
      <div className="relative rounded-[30px] bg-[#f3f3f3] p-8 sm:p-10 shadow-lg border border-black/10 flex flex-col gap-6">
        <h2 className="font-['David_Libre',Helvetica] text-3xl sm:text-4xl lg:text-[44px] font-bold text-black leading-tight">
          {selectedStyle.name}
        </h2>
        <p className="font-['Inter',Helvetica] text-base sm:text-lg text-[#5c6674] leading-relaxed">
          {selectedStyle.desc}
        </p>

        <div className="my-4 flex justify-center">
          <img
            src={selectedStyle.img}
            alt={selectedStyle.name}
            className="w-full max-w-[360px] h-[260px] object-cover rounded-2xl shadow-md border border-black/10"
          />
        </div>

        <div>
          <h3 className="font-['David_Libre',Helvetica] text-xl font-bold text-black mb-3">
            Artistas recomendados:
          </h3>
          <div className="flex flex-wrap gap-3">
            {selectedStyle.artists.map((a) => (
              <a
                key={a.name}
                href="/artistas"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-bold text-white hover:bg-[#222] transition-colors shadow-md"
              >
                <span>{a.name}</span>
                <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {a.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}