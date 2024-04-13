import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import arrow from "/arrow.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactBtns = [
    { name: "EMAIL", data: "agustin.morro@gmail.com" },
    { name: "PHONE", data: "+5492616598474" },
    { name: "ADDRESS", data: "Guaymallen,Mendoza,Argentina." },
  ];
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to("#contact", {
      yPercent: 100,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#contact-content",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    })
    .to("#lets-talk", {
      y: "200px",
      ease: "power2.in",
      duration:2,
      scrollTrigger: {
        trigger: "#contact-content",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    }); 
  }, []);


  return (
   <>
      <section
        id="contact"
        className="realative bg-gray-100 w-full h-screen flex flex-col justify-center items-center lg:items-start lg:pl-20 2xl:bg-red-600 "
      >
     <article  id="lets-talk" className="z-50 sm:z-10 relative flex flex-col">
          <h2 className="w-fit -mt-28 text-7xl font-semibold font-title2 text-red-700 sm:text-8xl sm:mr-36 lg:text-9xl 2xl:mr-40 2xl:text-[9rem]">
            Lets Talk
          </h2>
        
          <i className='bx bx-link-external text-zinc-900 self-end text-4xl sm:mr-36 sm:text-5xl lg:text-7xl lg:mt-1 rotate-90 '></i>
        </article>  
      </section>

      <section
        id="contact-content"
        className="bg-zinc-900 z-50 w-full h-screen absolute flex flex-col items-center pt-16 lg:pt-16 2xl:pt-20"
      >
        <h2 className="self-start mb-12 pl-3 text-stone-400 font-semibold font-title text-lg lg:text-2xl lg:leading-9 lg:mb-16 2xl:mb-24 lg:pl-14 2xl:pl-24  2xl:text-3xl 2xl:leading-10  ">
          Open to new opportunities and collaborations! <br /> Get in touch
        </h2>
        {contactBtns.map((btn,i) => (
          <div  key={i} className="btn">
            <p 
          className="relative z-50 flex justify-between font-bold font-title2 pl-3 py-1 text-7xl text-stone-700  duration-700 w-full lg:py-2 lg:pl-14 2xl:pl-24 2xl:py-3 2xl:text-8xl">
              { btn.name } 
              
              <p id="btn-data" className="font-semibold pb-2 font-title text-xl hover:text-red-700  absolute right-0 left-0 bottom-0 top-0 flex items-center justify-end opacity-0 hover:opacity-100 hover:-translate-x-20 lg:pr-36 2xl:pr-44 2xl:text-2xl duration-700">
               { btn.data }
              </p>
            </p>
          </div>
        ))}
        <ul className="icons-wrapper">
          <li className="item">
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
          </li>
        </ul>
      </section>
   </>

  );
};

export default Contact;
