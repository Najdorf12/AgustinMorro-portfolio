import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Home from "./components/Home";
import About from "./components/About";
import TitleReveal from "./components/TitleReveal";
import WorkSlider from "./components/WorkSlider";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";

const App = () => {
  const screen = window.screen.width;
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <main className="relative w-full min-h-screen overflow-hidden bg-zinc-900">
        <div className="w-full h-screen fixed z-30 overflow-hidden lg:block">
          <Canvas
            shadows
            camera={{
              position: screen > 700 ? [35, 9, 80] : [50, 15, 80],
              fov: 4,
            }}
          >
            <Experience />
          </Canvas>
        </div>

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
