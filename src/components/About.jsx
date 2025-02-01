const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-start items-center pb-12 bg-zinc-900 px-3 pt-1 h-screen sm:pt-20 lg:pb-0 lg:justify-center lg:pt-0 "
    >
      <article className="z-50 text-end h-full flex flex-col justify-center gap-2 max-w-[500px] sm:self-end lg:mr-0 lg:ml-[38rem] lg:self-center 2xl:max-w-[720px]">
        <h3 className="font-title2 font-bold text-gray-200 text-5xl lg:text-7xl 2xl:text-9xl">
          ABOUT <span className=" text-pink-700 ">ME</span>
        </h3>
        <div className="w-20 h-1 self-end bg-stone-700 rounded-sm lg:w-32 xl:mt-2 2xl:w-36"></div>
        <p className="mt-4  font-title font-normal text-sm text-gray-200 leading-relaxed lg:text-lg  lg:leading-[1.9rem] 2xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptates explicabo temporibus fuga amet provident mollitia? Quos
          error voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae voluptates explicabo temporibus fuga amet
        </p>
        <button id="btn-about" className="mt-5 self-end">
          <a  href="#">
            <span className="text-base font-semibold text-gray-200 font-title2 tracking-widest md:text-lg">Button</span>
          </a>
        </button>
      </article>
    </section>
  );
};
export default About;
{/* <i className='bx bx-link-external text-zinc-900 self-end text-4xl sm:mr-36 sm:text-5xl lg:text-7xl lg:mt-1 rotate-90 '></i> */}