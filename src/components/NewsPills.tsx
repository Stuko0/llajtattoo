import { useState } from "react";

interface NewsPillsProps {
  /** Ancho máximo del contenedor (ej: "500px", "100%"). Default "350px" */
  maxWidth?: string;
  /** Alto del contenedor (ej: "400px"). Default "300px" */
  height?: string;
  /** Alto máximo del contenedor. Sin límite por defecto */
  maxHeight?: string;
}

const pills = [
  { img: "/images/assets/new1.png", alt: "Noticia 1" },
  { img: "/images/assets/new2.png", alt: "Noticia 2" },
  { img: "/images/assets/new3.png", alt: "Noticia 3" },
  { img: "/images/assets/new4.png", alt: "Noticia 4" },
];

export default function NewsPills({ maxWidth, height, maxHeight }: NewsPillsProps) {
  const [active, setActive] = useState(0);
  return (
    <div
      className="mx-auto mt-6 flex lg:mt-10"
      style={{
        display: "flex",
        gap: "8px",
        height: height ?? "300px",
        maxHeight: maxHeight,
        maxWidth: maxWidth ?? "350px",
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {pills.map((p, i) => {
        const isActive = i === active;
        return (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              flex: isActive ? "3" : "1",
              height: "100%",
              overflow: "hidden",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              minWidth: 0,
              flexShrink: 0,
            }}
            className={`${isActive ? "" : ""}`}
          >
            <img
              src={p.img}
              alt={p.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
