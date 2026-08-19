import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="relative mx-auto max-w-[1308px] overflow-hidden px-4 py-12 text-center sm:px-6 lg:px-0 lg:py-20 mb-20" aria-labelledby="rating-title">
      {/* Decorative background image (izquierda) */}
      <img className="pointer-events-none absolute left-10 top-[45%] hidden w-[281px] opacity-30 lg:block z-10" src="/images/assets/spider-black.png" alt="" />
      <img
        src="/images/assets/spider-black.png"
        alt=""
        className="pointer-events-none absolute mr-12 top-0 hidden w-[200px] opacity-30 sm:w-[240px] lg:right-4 lg:block lg:w-[281px] z-10"/>
      <div className="relative mx-auto max-w-[747px] rounded-xs bg-[#f3f3f3] px-6 py-16 shadow-[0px_4px_4px_#00000040]">
        <h2 id="rating-title" className="font-['David_Libre',Helvetica] text-3xl font-bold sm:text-4xl lg:text-[50px] lg:leading-[58px]">
          CALIFICA LA PÁGINA
        </h2>
        <div className="mx-auto mt-8 mb-24 max-w-[456px] h-[108px] flex items-center justify-center rounded-full bg-black px-8 py-4">
          <p className="font-['David_Libre',Helvetica] text-base font-bold leading-6 text-white sm:text-xl sm:leading-[35px]">
            ¿Quedaste satisfecho con los resultados de busqueda?
          </p>
        </div>
        <form className="mt-8" aria-label="Calificación de la página" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend className="sr-only">Selecciona una calificación de una a cinco estrellas</legend>
            <div className="flex justify-center gap-3" role="radiogroup">
              {[1, 2, 3, 4, 5].map((i) => {
                const fill = i <= (hover || rating);
                return (
                  <label key={i} className="cursor-pointer transition-transform duration-150 hover:scale-110">
                    <input
                      className="peer sr-only"
                      type="radio"
                      name="rating"
                      value={i}
                      onChange={() => setRating(i)}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(0)}
                    />
                    <svg
                      className={`w-[62px] h-[62px] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black peer-focus:rounded transition-colors duration-150 ${fill ? 'text-black' : 'text-[#a7a7a7]'}`}
                      viewBox="0 0 62 62"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M31 3.6l8.6 17.4 19.2 2.8-13.9 13.5 3.3 19.1L31 44.6 13.8 56.4l3.3-19.1L3.2 23.8l19.2-2.8L31 3.6z"/>
                    </svg>
                    <span className="sr-only">{i} estrella{i > 1 ? 's' : ''}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
