import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TitleReveal = () => {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to("#icons", {
      xPercent: 30,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#title-reveal",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    })
   
  }, []);

  return (
    <section
      id="title-reveal"
      className="relative w-full h-screen bg-zinc-900 flex flex-col items-start justify-end lg:justify-end lg:pb-4"
    >
      <ul id="icons" className="z-50 w-1/2 absolute -top-6 flex flex-wrap justify-center items-center text-6xl gap-2 px-2 text-stone-600  md:text-7xl lg:text-8xl xl:gap-8 xl:top-10  ">
        <li>
          <i className="bx bxl-javascript"></i>
        </li>
        <li>
          <i className="bx bxl-react"></i>
        </li>
        <li>
          <i className="bx bxl-html5"></i>
        </li>
        <li>
          <i className="bx bxl-css3"></i>
        </li>
        <li>
          <i className="bx bxl-typescript"></i>
        </li>
        <li>
          <i className="bx bxl-nodejs"></i>
        </li>
        <li>
          <i class="bx bxl-postgresql"></i>
        </li>
        <li>
          <i class="bx bxl-mongodb"></i>
        </li>
        <li>
          <i class="bx bxl-vuejs"></i>
        </li>
        <li>
          <i class="bx bxl-git"></i>
        </li>
      </ul>
      <p className="z-50  pl-4 font-bold font-title2 text-6xl text-red-700 xl:text-8xl xl:pl-20 2xl:text-9xl">
        TRY IT AGAIN. <br />
        <span className="text-stone-600">FAIL AGAIN.</span> <br />
        FAIL BETTER.
      </p>
    </section>
  );
};
export default TitleReveal;
