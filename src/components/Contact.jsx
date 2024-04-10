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
      ease: "none",
      scrollTrigger: {
        trigger: "#contact-content",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers:true,
      },
    });
  }, []);

  return (
   <>
      <section
        id="contact"
        className="realative z-50 bg-gray-100 w-full h-screen flex flex-col justify-center items-center lg:items-start lg:pl-20  "
      >
     <article className="relative flex flex-col">
          <h2 className="w-fit  text-6xl font-semibold font-title2 text-red-700 sm:text-8xl lg:text-9xl">
            Lets Talk
          </h2>
        
          <i className='bx bx-link-external text-zinc-900 self-end lg:text-7xl lg:mt-1 rotate-90 '></i>
        </article>  
      </section>

      <section
        id="contact-content"
        className="bg-zinc-900 z-50 w-full h-screen absolute flex flex-col items-center lg:pt-16"
      >
        <h2 className=" lg:text-2xl lg:leading-9 self-start ml-10 mb-12 text-stone-400 font-semibold font-title">
          Open to new opportunities and collaborations! <br /> Get in touch
        </h2>
        {contactBtns.map((btn,i) => (
          <div key={i} className="btn">
            <p 
          className="relative flex justify-between font-bold font-title2 py-3 text-7xl pl-10 text-stone-700  duration-700 w-full">
              { btn.name }
              <p className="font-semibold pb-2 font-title text-xl hover:text-red-700  absolute right-0 left-0 bottom-0 top-0 flex items-center justify-end opacity-0 hover:opacity-100 hover:-translate-x-20 lg:pr-20 duration-700">
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
