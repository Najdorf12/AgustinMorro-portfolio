import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  let dinamicWidth = 0;
  const ammountToScroll = () => {
    const worksCount = 6; // Número total de trabajos
    const workWidth = window.innerWidth > 820 ? 320 : 240; // Ancho aproximado de cada trabajo en móvil y desktop
    const gap = 14; // Espacio entre trabajos
    const totalWidth = worksCount * (workWidth + gap);
    return window.innerWidth > 820 ? `-${totalWidth}px` : `-${totalWidth}px`;
  };

  const numbWorks = ["01", "02", "03", "04", "05", "06"]; // Añade el sexto trabajo

  useLayoutEffect(() => {
    const width = ammountToScroll();
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: width,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", // Aumenta la distancia de scroll
          scrub: 3,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="works" className="z-50 relative overflow-hidden">
      <div ref={triggerRef}>
        <div
          id="works-wrapper"
          ref={sectionRef}
          className="h-screen w-[120vw] relative flex "
        >
          <div className="z-50 relative h-screen w-fit lg:w-[140vw] flex gap-14 justify-start pl-6 lg:pl-28 items-center text-xl">
            <h3
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
              className="text-stone-200 font-semibold font-title2 text-7xl lg:text-[10rem] 2xl:text-[14rem] lg:mr-6"
            >
              <span className="text-pink-700">W</span>ORKS
            </h3>
            {numbWorks.map((num, i) => (
              <h3 key={i} id="box-glass" className="relative z-50 w-60 h-96 lg:w-64 lg:h-96 border border-stone-500 rounded-md 2xl:w-80 2xl:h-[400px]">
                <span className="absolute z-10 -left-10 -bottom-7 lg:-left-7 lg:-bottom-7 text-7xl font-semibold text-stone-300 lg:text-7xl">
                  {num}
                </span>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSlider;