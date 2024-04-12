import bgPaint from "/bg-paint.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative first-letter:w-full h-screen bg-zinc-900  md:flex md:flex-col md:pt-0"
    >
      
      <article className="flex px-2 flex-col h-full py-4 items-start justify-center  gap-2 w-full relative  lg:max-w-fit lg:h-[100%] lg:justify-center lg:pt-1 lg:ml-20 lg:-mt-10 ">
        <h1 className="z-10 font-test font-bold text-6xl tracking-wide text-stone-700 sm:text-8xlsm:ml-[78px] lg:text-[9rem] ">
          <span className="text-red-700 lg:mr-2">A</span>GUSTIN
        </h1>
        <h1 
          className="z-10  font-test font-bold text-6xl text-stone-700 tracking-wide sm:text-8xl  lg:text-[9rem] lg:-mt-5  ">
          <span style={{
          WebkitTextFillColor: "transparent",
           WebkitTextStroke: "3px",
         }} className="text-red-700">M</span>ORRO
        </h1>
       {/*   <div className="w-20 h-1 self-start bg-stone-700 sm:w-28 rounded-sm  xl:mt-2 xl:w-44 "></div>  */}

        <p className=" z-10 mt-3 font-title2 text-xl text-stone-700 leading-relaxed max-w-[400px] font-medium sm:text-2xl lg:max-w-[430px] lg:text-2xl lg:font-semibold ">
          FULL STACK DEVELOPER
        </p>
        <div className="z-40 flex justify-center items-center mt-6 ">
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

      <div style={{
       clipPath:"polygon(0 0, 0% 100%, 100% 0)"
      }} className="opacity-100 absolute top-0 right-0 bottom-0 left-0 bg-gray-200  
      lg:opacity-100">
     </div> 
      {/* <div className="absolute bottom-0 left-0 flex flex-col gap-1 justify-center items-center text-4xl m-4 mb-6 text-stone-300 sm:ml-5 lg:flex-col z-50">
        <i className="bx bxl-github "></i>
        <i className="bx bxl-linkedin"></i>
        <div className="w-1 h-24 mt-2 bg-stone-600 rounded-sm xl:w-1 xl:h-16 xl:mt-3 xl:ml-0"></div>
      </div> */}
    </section>
  );
};
export default Home;
