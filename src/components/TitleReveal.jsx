const TitleReveal = () => {
  return (
    <section
      id="title-reveal"
      className="relative w-full h-screen bg-zinc-900 flex flex-col items-start justify-end pb-4 lg:justify-center"
    >
      {/* <ul className="z-50 w-full px-2 text-stone-600 text-6xl flex flex-wrap gap-2 justify-center items-center absolute -top-10 lg:text-8xl xl:gap-8  ">
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
      </ul> */}
      <p className="z-50  pl-4 font-bold font-title2 text-6xl text-red-700 xl:text-8xl xl:pl-20 xl:mt-4">
        TRY IT AGAIN. <br />
        <span className="text-stone-600">FAIL AGAIN.</span> <br />
        FAIL BETTER.
      </p>
    </section>
  );
};
export default TitleReveal;
