import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Home from "./components/Home";
import About from "./components/About";
import TitleReveal from "./components/TitleReveal";
import WorkSlider from "./components/WorkSlider";  
import Contact from "./components/Contact";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
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
