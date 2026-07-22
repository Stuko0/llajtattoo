import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section class="relative mx-auto max-w-[1150px] overflow-hidden px-4 py-12 text-center sm:px-6 lg:px-0 lg:py-20" aria-labelledby="rating-title">
      {/* Decorative background images */}
      <img class="pointer-events-none absolute left-0 top-3/4 hidden w-64 -translate-y-1/2 opacity-40 lg:block z-50" src="/images/assets/flower.png" alt="" />
      <img class="pointer-events-none absolute right-0 top-0 hidden w-64 opacity-40 lg:block z-50" src="/images/assets/flower.png" alt="" />
      <div class="relative mx-auto max-w-[747px] bg-[#f3f3f3] px-6 py-24 shadow-[0px_4px_4px_#00000040]">
        <h2 id="rating-title" class="font-['David_Libre',Helvetica] text-2xl font-bold sm:text-3xl lg:text-[50px] lg:leading-[58px]">
          CALIFICA LA PÁGINA
        </h2>
        <div class="mx-auto mt-6 max-w-[456px] rounded-full bg-black px-5 py-4">
          <p class="font-['David_Libre',Helvetica] text-sm font-bold leading-6 text-white sm:text-xl sm:leading-[35px]">
            ¿Quedaste satisfecho con los resultados de busqueda?
          </p>
        </div>
        <form class="mt-8" aria-label="Calificación de la página" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend class="sr-only">Selecciona una calificación de una a cinco estrellas</legend>
            <div class="flex justify-center gap-2" role="radiogroup">
              {[1, 2, 3, 4, 5].map((i) => {
                const fill = i <= (hover || rating);
                return (
                  <label key={i} class="cursor-pointer">
                    <input
                      class="peer sr-only"
                      type="radio"
                      name="rating"
                      value={i}
                      onChange={() => setRating(i)}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(0)}
                    />
                    <span
                      class={`block text-3xl peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black ${fill ? 'text-black' : 'text-[#999999]'}`}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                    <span class="sr-only">{i} estrella{i > 1 ? 's' : ''}</span>
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
