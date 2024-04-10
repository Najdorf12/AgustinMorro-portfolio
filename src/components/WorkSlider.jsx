import React, { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  let dinamicWidth = 0;
  const ammountToScroll = () => {
    if (window.innerWidth > 820) {
      dinamicWidth = "-90vw";
    } else {
      dinamicWidth = "-210vw";
    }
  };

  useEffect(() => {
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
    <section className="overflow-hidden bg-zinc-900">
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
              }}
              className="text-stone-200 font-semibold font-title2 text-6xl lg:text-9xl lg:mr-6"
            >
              WORKS
            </h3>

            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md ">
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                01
              </span>
            </h3>
            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md">
              {" "}
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                02
              </span>
            </h3>
            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md">
              {" "}
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                03
              </span>
            </h3>
            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md ">
              {" "}
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                04
              </span>
            </h3>
            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md">
              {" "}
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                05
              </span>
            </h3>
            <h3 className="relative w-44 h-72 lg:w-64 lg:h-96 bg-gray-200 rounded-md">
              {" "}
              <span className="absolute z-10 -left-5 -bottom-5 lg:-left-7 lg:-bottom-7 text-5xl font-semibold text-red-700 lg:text-7xl">
                06
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSlider;
