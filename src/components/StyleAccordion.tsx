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
  img2?: string;
  artists: Artist[];
}

const IMG = {
  fabian: "/images/assets/Profe Tattoo.jpg",
  juan: "/images/assets/Don Juan Caballero.jpg",
  juanma: "/images/assets/Juanma.jpg",
  natalia: "/images/assets/Black Kitty.png",
  ignacio: "/images/assets/Pistacho.jpg",
};

const S = "/images/assets/style-";

const styles: StyleEntry[] = [
  {
    id: "fineline",
    name: "FINELINE",
    fontClass: "ff-dosis",
    desc: "El tatuaje fine line es un estilo que se caracteriza por el uso de líneas muy finas y delicadas, logrando diseños sutiles y elegantes. Sus principales características son el trazo limpio, poco sombreado, detalles minimalistas y una apariencia ligera, ideal para diseños pequeños, florales, símbolos o ilustraciones simples.",
    img: `${S}fineline.jpg`,
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia },
      { name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio },
      { name: "Fabian Morales", tag: "FABI TATTO", img: IMG.fabian },
      { name: "Juan Caballero", tag: "JUAN CABALLERO", img: IMG.juan },
    ],
  },
  {
    id: "tradicionales",
    name: "TRADICIONALES",
    fontClass: "ff-david",
    desc: "El tatuaje tradicional (o old school) es un estilo clásico de arte corporal que se distingue por sus líneas negras muy gruesas, colores sólidos y brillantes (como rojo, amarillo, azul y verde), y diseños bidimensionales. Nació a principios del siglo XX, popularizado por marineros y soldados estadounidenses.",
    img: `${S}tradicional-1.jpg`,
    img2: `${S}tradicional-2.jpg`,
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia },
      { name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio },
      { name: "Juan Caballero", tag: "JUAN CABALLERO", img: IMG.juan },
    ],
  },
  {
    id: "neotradicional",
    name: "NEOTRADICIONAL",
    fontClass: "ff-bmhanna",
    desc: "El tatuaje neotradicional (o “neo-tradi”) es una evolución del estilo tradicional americano (old school). Mantiene la base de líneas negras gruesas y definidas, pero incorpora una paleta de colores mucho más amplia, sombras más suaves y un nivel de detalle mucho mayor.",
    img: `${S}neotradicional-1.jpg`,
    img2: `${S}neotradicional-2.jpg`,
    artists: [
      { name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio },
      { name: "Juan Caballero", tag: "JUAN CABALLERO", img: IMG.juan },
    ],
  },
  {
    id: "blackwork",
    name: "BLACKWORK",
    fontClass: "ff-caesar",
    desc: "El blackwork es un estilo de tatuaje que, como su nombre indica, utiliza exclusivamente tinta negra. Se caracteriza por sus altos contrastes, líneas precisas y el uso de técnicas como el puntillismo (dotwork) o sólidos rellenos de negro para crear sombras y texturas sin recurrir a los grises diluidos.",
    img: `${S}blackwork-1.jpg`,
    img2: `${S}blackwork-2.jpg`,
    artists: [
      { name: "Juan Maria Savedra", tag: "JUANMA", img: IMG.juanma },
      { name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia },
      { name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio },
    ],
  },
  {
    id: "realismo",
    name: "REALISMO",
    fontClass: "ff-carter",
    desc: "El tatuaje realista es un estilo que busca reproducir imágenes de la vida real con una precisión fotográfica en la piel. Funciona como una disciplina artística donde el tatuador utiliza sombras, luces y degradados para crear profundidad y volumen, logrando que retratos, animales o paisajes parezcan cobrar vida.",
    img: `${S}realismo-1.jpg`,
    img2: `${S}realismo-2.jpg`,
    artists: [{ name: "Fabian Morales", tag: "FABI TATTO", img: IMG.fabian }],
  },
  {
    id: "puntillismo",
    name: "PUNTILLISMO",
    fontClass: "ff-doto",
    desc: "El puntillismo (conocido como dotwork) es una técnica de tatuaje que construye imágenes y sombras utilizando miles de diminutos puntos en lugar de líneas continuas. Los tatuadores agrupan o separan los puntos para crear diferentes niveles de luz, oscuridad y texturas, tal como se hace en las bellas artes.",
    img: `${S}puntillismo-1.jpg`,
    img2: `${S}puntillismo-2.jpg`,
    artists: [
      { name: "Natalia Lazzo", tag: "BLACKITTY", img: IMG.natalia },
      { name: "Juan Maria Savedra", tag: "JUANMA", img: IMG.juanma },
    ],
  },
  {
    id: "patch",
    name: "PATCH",
    fontClass: "ff-modak",
    desc: "El término tatuaje patch (o tatuaje bordado) se refiere a un estilo artístico que simula la textura e hilos de un parche textil cosido directamente sobre la piel.",
    img: `${S}patch-1.jpg`,
    img2: `${S}patch-2.jpg`,
    artists: [{ name: "Fabian Morales", tag: "FABI TATTO", img: IMG.fabian }],
  },
  {
    id: "botanico",
    name: "BOTÁNICO",
    fontClass: "ff-elsie",
    desc: "El tatuaje botánico es un estilo de arte corporal que recrea plantas, flores, hojas y enredaderas con gran detalle y realismo, imitando el estilo de las antiguas ilustraciones científicas. Se caracteriza por el uso de líneas muy finas, trazos precisos y un sombreado delicado que resalta las formas orgánicas de la naturaleza.",
    img: `${S}botanico-1.jpg`,
    img2: `${S}botanico-2.jpg`,
    artists: [{ name: "Juan Maria Savedra", tag: "JUANMA", img: IMG.juanma }],
  },
  {
    id: "newschool",
    name: "NEW SCHOOL",
    fontClass: "ff-betania",
    desc: "El New School (nueva escuela) es un estilo de tatuaje caracterizado por sus colores hipervibrantes, contornos gruesos y definidos, y un fuerte enfoque en la exageración y el humor. Surgido en los años 70 y popularizado en los 90, rompe con las estrictas reglas tradicionales.",
    img: `${S}newschool-1.jpg`,
    img2: `${S}newschool-2.jpg`,
    artists: [{ name: "Ignacio Orihuela", tag: "PISTACHO", img: IMG.ignacio }],
  },
  {
    id: "culturales",
    name: "CULTURALES",
    fontClass: "ff-barrio",
    desc: "Los tatuajes culturales asiáticos, como el Sak Yant tailandés y el Irezumi japonés, van más allá de la estética; son lenguajes visuales cargados de espiritualidad, mitología y protección. Lejos de ser simples adornos, representan antiguos rituales que conectan el cuerpo con la identidad, el respeto y la historia de sus civilizaciones.",
    img: `${S}culturales-1.jpg`,
    img2: `${S}culturales-2.jpg`,
    artists: [{ name: "Fabian Morales", tag: "FABI TATTO", img: IMG.fabian }],
  },
  {
    id: "tribales",
    name: "TRIBALES",
    fontClass: "ff-changa",
    desc: "Los tatuajes tribales son diseños ancestrales elaborados con tinta negra sólida y líneas geométricas. En sus orígenes, no eran simples adornos; marcaban el estatus social, la valentía, los logros y la identidad de una persona dentro de su comunidad, además de servir como símbolos de protección.",
    img: `${S}tribales-1.jpg`,
    img2: `${S}tribales-2.jpg`,
    artists: [{ name: "Fabian Morales", tag: "FABI TATTO", img: IMG.fabian }],
  },
  {
    id: "neotribal",
    name: "NEO TRIBAL",
    fontClass: "ff-grechen",
    desc: "El tatuaje Neotribal es una evolución moderna del clásico tatuaje tribal. Mantiene la base de tinta negra sólida y las líneas gruesas, pero rompe con los diseños rígidos del pasado para ofrecer líneas más fluidas, abstractas y adaptadas a la anatomía del cuerpo.",
    img: `${S}neotribal-1.jpg`,
    img2: `${S}neotribal-2.png`,
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

      {/* Style Details Container — dividido: negro (superior) + claro (artistas) */}
      <div className="relative overflow-hidden rounded-tr-[8rem] rounded-br-[8rem] rounded-bl-[8rem] bg-black border border-black/10 shadow-lg flex flex-col text-center">
        {/* Zona negra: título hereda tipografía del botón + imagen/es + descripción (z-6: tapa al dragón z-5) */}
        <div className="relative z-[6] p-8 sm:p-10 flex flex-col gap-6">
          <h2 className={`${selectedStyle.fontClass} text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight`}>
            {selectedStyle.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src={selectedStyle.img}
              alt={selectedStyle.name}
              className="w-80 h-152 object-cover rounded-[6rem] shadow-md border border-black/10"
            />
            {selectedStyle.img2 && (
              <img
                src={selectedStyle.img2}
                alt={selectedStyle.name}
                className="w-80 h-152 object-cover rounded-[6rem] shadow-md border border-black/10"
              />
            )}
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
                {/* Base clara: tag en negro con David_Libre */}
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
