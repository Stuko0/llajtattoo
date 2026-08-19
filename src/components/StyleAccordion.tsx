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
  fabian: "/images/assets/Profe Tattoo.jpg",
  juan: "/images/assets/Don Juan Caballero.jpg",
  natalia: "/images/assets/Black Kitty.png",
  ignacio: "/images/assets/Pistacho.jpg",
};

const styles: StyleEntry[] = [
  {
    id: "fineline",
    name: "FINELINE",
    fontClass: "ff-dosis",
    desc: "El tatuaje fine line es un estilo que se caracteriza por el uso de líneas muy finas y delicadas, logrando diseños sutiles y elegantes. Sus principales características son el trazo limpio, poco sombreado, detalles minimalistas y una apariencia ligera, ideal para diseños pequeños, florales, símbolos o ilustraciones simples.",
    img: "/images/fineline-style.jpg",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }, { name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio }, { name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }, { name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan }],
  },
  {
    id: "tradicionales",
    name: "TRADICIONALES",
    fontClass: "ff-david",
    desc: "El tatuaje tradicional (o old school) es un estilo clásico de arte corporal que se distingue por sus líneas negras muy gruesas, colores sólidos y brillantes (como rojo, amarillo, azul y verde), y diseños bidimensionales. Nació a principios del siglo XX, popularizado por marineros y soldados estadounidenses.",
    img: "/images/assets/traditional-home.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "neotradicional",
    name: "NEOTRADICIONAL",
    fontClass: "ff-bmhanna",
    desc: "El tatuaje neotradicional (o “neo-tradi”) es una evolución del estilo tradicional americano (old school). Mantiene la base de líneas negras gruesas y definidas, pero incorpora una paleta de colores mucho más amplia, sombras más suaves y un nivel de detalle mucho mayor.",
    img: "/images/assets/neo-traditional-home.png",
    artists: [{ name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan }],
  },
  {
    id: "blackwork",
    name: "BLACKWORK",
    fontClass: "ff-caesar",
    desc: "El blackwork es un estilo de tatuaje que, como su nombre indica, utiliza exclusivamente tinta negra. Se caracteriza por sus altos contrastes, líneas precisas y el uso de técnicas como el puntillismo (dotwork) o sólidos rellenos de negro para crear sombras y texturas sin recurrir a los grises diluidos.",
    img: "/images/assets/blackwork.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "realismo",
    name: "REALISMO",
    fontClass: "ff-carter",
    desc: "El tatuaje realista es un estilo que busca reproducir imágenes de la vida real con una precisión fotográfica en la piel. Funciona como una disciplina artística donde el tatuador utiliza sombras, luces y degradados para crear profundidad y volumen, logrando que retratos, animales o paisajes parezcan cobrar vida.",
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
    desc: "El puntillismo (conocido como dotwork) es una técnica de tatuaje que construye imágenes y sombras utilizando miles de diminutos puntos en lugar de líneas continuas. Los tatuadores agrupan o separan los puntos para crear diferentes niveles de luz, oscuridad y texturas, tal como se hace en las bellas artes.",
    img: "/images/assets/realism2-home.png",
    artists: [{ name: "Juan Caballero", tag: "DON JUAN", img: IMG.juan }],
  },
  {
    id: "patch",
    name: "PATCH",
    fontClass: "ff-modak",
    desc: "El término tatuaje patch (o tatuaje bordado) se refiere a un estilo artístico que simula la textura e hilos de un parche textil cosido directamente sobre la piel.",
    img: "/images/assets/new4.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "botanico",
    name: "BOTÁNICO",
    fontClass: "ff-elsie",
    desc: "El tatuaje botánico es un estilo de arte corporal que recrea plantas, flores, hojas y enredaderas con gran detalle y realismo, imitando el estilo de las antiguas ilustraciones científicas. Se caracteriza por el uso de líneas muy finas, trazos precisos y un sombreado delicado que resalta las formas orgánicas de la naturaleza.",
    img: "/images/assets/new3.png",
    artists: [{ name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia }],
  },
  {
    id: "newschool",
    name: "NEW SCHOOL",
    fontClass: "ff-betania",
    desc: "El New School (nueva escuela) es un estilo de tatuaje caracterizado por sus colores hipervibrantes, contornos gruesos y definidos, y un fuerte enfoque en la exageración y el humor. Surgido en los años 70 y popularizado en los 90, rompe con las estrictas reglas tradicionales.",
    img: "/images/assets/new2.png",
    artists: [{ name: "Ignacio Orihuela", tag: "PISTACHO TATTOO", img: IMG.ignacio }],
  },
  {
    id: "culturales",
    name: "CULTURALES",
    fontClass: "ff-barrio",
    desc: "Los tatuajes culturales asiáticos, como el Sak Yant tailandés y el Irezumi japonés, van más allá de la estética; son lenguajes visuales cargados de espiritualidad, mitología y protección. Lejos de ser simples adornos, representan antiguos rituales que conectan el cuerpo con la identidad, el respeto y la historia de sus civilizaciones.",
    img: "/images/assets/new1.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "tribales",
    name: "TRIBALES",
    fontClass: "ff-changa",
    desc: "Los tatuajes tribales son diseños ancestrales elaborados con tinta negra sólida y líneas geométricas. En sus orígenes, no eran simples adornos; marcaban el estatus social, la valentía, los logros y la identidad de una persona dentro de su comunidad, además de servir como símbolos de protección.",
    img: "/images/assets/blackwork.png",
    artists: [{ name: "Fabian Morales", tag: "PROFE TATTOO", img: IMG.fabian }],
  },
  {
    id: "neotribal",
    name: "NEO TRIBAL",
    fontClass: "ff-grechen",
    desc: "El tatuaje Neotribal es una evolución moderna del clásico tatuaje tribal. Mantiene la base de tinta negra sólida y las líneas gruesas, pero rompe con los diseños rígidos del pasado para ofrecer líneas más fluidas, abstractas y adaptadas a la anatomía del cuerpo.",
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
        {/* Zona negra: título hereda tipografía del botón + imagen + descripción (z-6: tapa al dragón z-5) */}
        <div className="relative z-[6] p-8 sm:p-10 flex flex-col gap-6">
          <h2 className={`${selectedStyle.fontClass} text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight`}>
            {selectedStyle.name}
          </h2>
          <div className="my-4 flex justify-center">
            <img
              src={selectedStyle.img}
              alt={selectedStyle.name}
              className="w-80 h-152 object-cover rounded-[6rem]"
            />
          </div>
          <p className="font-['Inter',Helvetica] text-base sm:text-lg text-white leading-relaxed">
            {selectedStyle.desc}
          </p>
        </div>

        {/* Zona clara: artistas del estilo (fondo z-0 → el dragón z-5 pasa por encima) */}
        <div className="bg-[#ecedee] w-full p-8 sm:p-10 flex flex-col gap-6">
          <h3 className="font-['David_Libre',Helvetica] text-xl font-bold text-black">
            Artistas que realizan el estilo {selectedStyle.name.toLowerCase()}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {selectedStyle.artists.map((a) => (
              <a
                key={a.name}
                href="/artistas"
                className="relative z-[7] flex flex-col h-80.75 w-44.25 rounded-3xl bg-black overflow-hidden hover:scale-[1.03] transition-transform shadow-lg"
              >
                {/* Nombre (Inter, blanco) */}
                <div className="flex flex-1 flex-col items-center justify-center gap-4 p-3">
                  <span className="font-['Inter',Helvetica] font-bold text-white text-sm leading-snug mb-8">
                    {a.tag}
                  </span>
                  {/* Foto circular */}
                  <img
                    src={a.img}
                    alt={a.name}
                    className="size-32 rounded-full object-cover ring-2 ring-white/20"
                  />
                </div>
                {/* Base blanca: tag en negro con David_Libre */}
                <div className="bg-white w-full py-3 px-2 text-center">
                  <span className="font-['David_Libre',Helvetica] font-bold text-black text-base">
                    Ver Perfil
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
