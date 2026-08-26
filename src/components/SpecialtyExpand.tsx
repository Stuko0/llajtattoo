import { useState } from "react";

interface SpecialtyExpandProps {
  label: string;
  images: string[];
  /** Color del borde/stroke */
  accent: string;
  /** Fondo del pill */
  pillBg?: string;
  /** Color del texto del pill */
  pillText?: string;
  /** Borde del pill */
  pillBorder?: string;
  /** Border radius del pill (ej: "9999px" para rounded-full, "20px") */
  pillRadius?: string;
  /** Font family del label */
  fontFamily?: string;
  /** Font weight del label */
  fontWeight?: string;
  /** Direccion del despliegue: down o right */
  expandDir?: "down" | "right";
  /** Clases extra para el contenedor de imagenes expandido */
  expandContainerClass?: string;
}

export default function SpecialtyExpand({
  label,
  images,
  accent,
  pillBg = "bg-black/80",
  pillText = "text-white",
  pillBorder,
  pillRadius = "rounded-full",
  fontFamily = "font-['Inter',Helvetica]",
  fontWeight = "font-bold",
  expandDir = "down",
  expandContainerClass = "",
}: SpecialtyExpandProps) {
  const [open, setOpen] = useState(false);

  const borderStyle = pillBorder || `border border-${accent}`;
  const isDown = expandDir === "down";

  return (
    <div className={`flex ${isDown ? "flex-col" : "flex-row"} items-start`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-4 px-7 py-3.5 ${pillBg} ${borderStyle} ${pillRadius} ${pillText} ${fontFamily} text-base ${fontWeight} hover:opacity-90 transition-all cursor-pointer shadow-lg shrink-0`}
      >
        <span>{label}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className={`transition-transform duration-300 ${open ? (isDown ? "rotate-180" : "rotate-90") : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Expanded images */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open
            ? isDown
              ? "max-h-[600px] opacity-100 mt-3"
              : "max-w-[500px] opacity-100 ml-3"
            : isDown
              ? "max-h-0 opacity-0 mt-0"
              : "max-w-0 opacity-0 ml-0"
        } ${expandContainerClass}`}
      >
        <div className={`flex ${isDown ? "flex-row" : "flex-col"} gap-3`}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${label} ${i + 1}`}
              className={`object-cover rounded-2xl shadow-lg ${
                isDown ? "h-48 w-auto" : "w-full h-auto"
              } ${images.length === 1 ? "max-w-[350px]" : "max-w-[220px]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
