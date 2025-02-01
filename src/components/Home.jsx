import bgPaint from "/bg-paint.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative first-letter:w-full h-screen bg-zinc-900  md:flex md:flex-col md:pt-0"
    >
      <article className="flex z-50 px-2 flex-col h-full  items-start justify-start pt-6  gap-2 w-full relative  lg:max-w-fit lg:h-[100%] lg:justify-center lg:pt-1 lg:ml-20 lg:-mt-10 2xl:-mt-24 2xl:ml-24 ">
        <h1 className="z-10 font-text2 font-bold text-7xl tracking-wide text-stone-700 md:text-8xl  lg:text-[9rem] 2xl:text-[11rem] ">
          <span className="text-pink-700 lg:mr-2">A</span>GUSTIN
        </h1>
        <h1 className="z-10 font-test font-bold text-7xl text-stone-700 tracking-wide md:text-8xl lg:text-[9rem] lg:-mt-4 2xl:text-[11rem] ">
          <span
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "3px",
            }}
            className="text-pink-700"
          >
            M
          </span>
          ORRO
        </h1>
        {/*   <div className="w-20 h-1 self-start bg-stone-700 sm:w-28 rounded-sm  xl:mt-2 xl:w-44 "></div>  */}

        <p className=" z-10 mt-3 font-title2 text-xl text-stone-700 leading-relaxed max-w-[400px] font-medium sm:text-2xl lg:max-w-[430px] lg:text-2xl lg:font-semibold 2xl:text-[2rem] ">
          FULL STACK DEVELOPER
        </p>
        <div className="z-50 flex justify-center items-center mt-6 lg:mt-10 lg:gap-8 2xl:mt-12">
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
        </div>
      </article>

      <div
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
        }}
        className="opacity-100 absolute top-0 right-0 bottom-0 left-0 bg-gray-200  
      lg:opacity-100"
      ></div>
    </section>
  );
};
export default Home;
