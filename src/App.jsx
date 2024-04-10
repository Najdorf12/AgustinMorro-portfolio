import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Home from "./components/Home";
import About from "./components/About";
import TitleReveal from "./components/TitleReveal";
import WorkSlider from "./components/WorkSlider";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <div className="h-screen overflow-x-hidden w-screen fixed top-0 right-0 left-0 z-10 lg:block">
        <Canvas shadows camera={{ position: [35, 9, 80], fov: 4 }}>
          <Experience />
        </Canvas>
      </div>
      
      <main className="w-full overflow-hidden bg-zinc-900">
        <Home />
        <About />
        <TitleReveal />
        <WorkSlider></WorkSlider>
        <Contact />
        <article className="relative flex flex-col h-screen w-full">
          <h2 className="z-50 w-fit  text-6xl font-semibold font-title2 text-red-700 sm:text-8xl lg:text-9xl">
            Lets Talk
          </h2>
        
          <i className='bx bx-link-external text-zinc-900 self-end lg:text-7xl lg:mt-1 rotate-90 '></i>
        </article> 
      </main>
    </ReactLenis>
  );
};
export default App;
