const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center h-screen bg-zinc-900 px-4 pt-12 sm:pt-20 lg:pt-0 "
    >
      <article className="z-50 flex flex-col items-end gap-2 max-w-[500px] self-end xl:mr-20">
        <h3 className="font-title2 self-start font-bold text-4xl text-gray-200 sm:text-5xl  lg:text-6xl">
          ABOUT <span className=" text-red-700 ">ME</span>
        </h3>
        <div className="w-20 h-1 self-start bg-stone-700 sm:w-28 rounded-sm  xl:mt-2"></div>
        <p className="mt-4 font-title font-normal text-sm text-gray-200 leading-relaxed lg:text-base  xl:leading-[1.7rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptates explicabo temporibus fuga amet provident mollitia? Quos
          error voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae voluptates explicabo temporibus fuga amet
        </p>
        <button className="ui-btn flex justify-center items-center gap-3 px-5 py-1 rounded-lg mt-6 lg:text-sm font-extrabold font-title lg:self-start  ">
          <span className="font-extrabold text-white">CONTACT </span>
          <i className="bx bx-link-external lg:text-3xl text-red-700 "></i>
        </button>
        {/*     <button className="mt-6 text-2xl font-semibold font-title2 flex lg:gap-4 justify-center items-center self-start text-gray-300  lg:self-start lg:text-3xl">
          Contact{" "}
          <i className="bx bx-link-external lg:text-2xl text-red-700 xl:text-4xl "></i>
        </button> */}
      </article>
    </section>
  );
};
export default About;
