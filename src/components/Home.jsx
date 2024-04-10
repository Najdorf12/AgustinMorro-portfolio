const Home = () => {
  return (
    <section id="home" className="w-full h-screen bg-zinc-900 px-2 pt-14 sm:pl-12 md:flex md:flex-col md:justify-center md:pt-0 xl:pl-44">
     
      <article className="flex flex-col items-start z-10 gap-2 px-2 relative  xl:max-w-fit">
        <h1 className="font-title font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-neutral-800 lg:text-4xl">
          Hi,Im
        </h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-title font-bold text-5xl ml-6 sm:ml-12 lg:text-7xl lg:tracking-wider lg:ml-24 lg:font-extrabold">
          AGUSTIN
        </h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-title font-bold text-5xl lg:text-7xl lg:font-extrabold">
          MORRO
        </h1>
        {/* <p className="text-2xl text-gray-300 font-semibold font-title self-center mt-6"> {'< CODER />'} </p> */}
       <p className="mt-6 font-title font-normal text-sm text-gray-400 leading-relaxed max-w-[400px] lg:font-medium lg:max-w-[430px] lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          accusantium ipsa? Quos fugiat culpa
          numquam, harum quidem!
        </p> 
        <button className="mt-8 bg-gradient-to-tl font-text tracking-wider from-red-700 text-gray-300 px-2 py-1 flex justify-center items-center w-36 font-semibold text-base rounded-md self-center sm:self-start ">
          Portfolio
        </button>
      </article>

      <div className="absolute bottom-0 left-0 flex justify-center items-center text-4xl m-4 mb-6 text-stone-300 sm:ml-8 lg:flex-col">
        <i className="bx bxl-github"></i>
        <i className="bx bxl-linkedin"></i>
        <div className="w-24 h-1 ml-2 mt-2 bg-stone-600 rounded-sm xl:w-1 xl:h-24 xl:mt-3 xl:ml-0"></div>
      </div>
    </section>
  );
};
export default Home;
