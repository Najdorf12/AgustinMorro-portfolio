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
      <div className="h-screen overflow-x-hidden w-screen fixed top-0 right-0 left-0 z-40 lg:block">
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
        
      </main>
    </ReactLenis>
  );
};
export default App;
