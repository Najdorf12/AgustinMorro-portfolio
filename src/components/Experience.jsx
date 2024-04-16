import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Roman from "./Roman";
import { Suspense } from "react";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <OrbitControls 
         enablePan={false}
				 enableRotate={false}
				 enableZoom={false} />
      <group position={[5, -2.5, 6]}>
        <Roman scale={1.1} />
        <Suspense />
      </group>
    </>
  );
};

export default Experience;
