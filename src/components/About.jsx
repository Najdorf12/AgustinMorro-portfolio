const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col h-screen bg-zinc-900 px-4 pt-12 sm:pt-20 lg:pt-0 lg:justify-center"
    >
      <article className="flex flex-col items-end gap-2 max-w-[500px] self-end xl:mr-20">
        <h3 className="font-title2 font-bold text-4xl text-gray-200 sm:text-5xl lg:self-start lg:text-6xl">
          ABOUT{" "}
          <span className=" text-red-700 "
            /* style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "2px #b91c1c",
            }} */
          >
            ME
          </span>
        </h3>
        <div className="w-20 h-1 bg-stone-700 sm:w-28 rounded-sm lg:self-start xl:mt-2"></div>
        <p className="mt-4 font-title font-normal text-sm text-gray-300 leading-relaxed  lg:font-medium  lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptates explicabo temporibus fuga amet provident mollitia? Quos
          error voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae voluptates explicabo temporibus fuga amet 
          
        </p>
        <button className="mt-6 text-2xl font-semibold font-title2 flex lg:gap-4 justify-center items-center self-end text-gray-200  lg:self-start">
          Contact{" "}
          <i className="bx bx-link-external lg:text-2xl text-red-700 xl:text-3xl"></i>
        </button>
      </article>
    </section>
  );
};
export default About;
