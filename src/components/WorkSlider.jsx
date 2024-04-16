import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  let dinamicWidth = 0;
  const ammountToScroll = () =>  window.innerWidth > 820 ? dinamicWidth = "-70vw" : dinamicWidth = "-210vw";
      
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
    <section id="works" className="overflow-hidden bg-zinc-900">
      <div ref={triggerRef}>
        <div
          id="works-wrapper"
          ref={sectionRef}
          className="h-screen w-[110vw] relative flex "
        >
          <div className=" h-screen w-fit lg:w-[140vw] flex gap-14 justify-start pl-6 lg:pl-28 items-center text-xl">
            <h3
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
               /*  WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1px white", */
              }}
              className="text-stone-200 font-semibold font-title2 text-6xl lg:text-[10rem] 2xl:text-[14rem] lg:mr-6"
            >
              WORKS
            </h3>
            {numbWorks.map((num, i) => (
              <h3 key={i} className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md 2xl:w-80 2xl:h-[400px]">
                <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-stone-300 lg:text-7xl">
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
