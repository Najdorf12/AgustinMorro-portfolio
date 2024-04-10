import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  let dinamicWidth = 0;
  const ammountToScroll = () =>  window.innerWidth > 820 ? dinamicWidth = "-90vw" : dinamicWidth = "-210vw";
      
  
  const numbWorks = ["01", "02", "03", "04", "05"];
  useLayoutEffect(() => {
    ammountToScroll();
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: dinamicWidth,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
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
    <section className="overflow-hidden bg-zinc-600">
      <div ref={triggerRef}>
        <div
          id="works-wrapper"
          ref={sectionRef}
          className="h-screen w-[150vw] relative flex "
        >
          <div className="h-screen w-fit lg:w-[150vw] flex gap-14 justify-end items-center pl-12 lg:pl-36 text-xl">
            <h3
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
               /*  WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1px white", */
              }}
              className="text-stone-200 font-semibold font-title2 text-6xl lg:text-9xl lg:mr-6"
            >
              WORKS
            </h3>
            {numbWorks.map((num, i) => (
              <h3 key={i} className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md ">
                <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-stone-600 lg:text-7xl">
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
