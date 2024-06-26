/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 roman3d.gltf 
Author: engine9 (https://sketchfab.com/engine9)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/rhetorician-a89f035291d843069d73988cc0e25399
Title: Rhetorician
*/

import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { useControls } from 'leva'
gsap.registerPlugin(ScrollTrigger);

export default function Model(props) {
  const roman = useRef();
  const { nodes, materials, animations } = useGLTF("/roman3d.gltf");
  const { actions } = useAnimations(animations, roman);
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  /* // ----- used for getting the position for the roman ----
	 const { cameraPosition, scenePosition, sceneRotation } = useControls({
	 	cameraPosition: {
	 		value: {
	 			x: 5,
	 			y: 4,
	 			z: 2.8,
	 		},
	 		step: 0.05,
	 	},
	 	scenePosition: {
	 		value: { x: 3.01, y: 0.76, z: 3.7 },
	 		step: 0.05,
	 	},

	 	sceneRotation: {
	 		value: { x: -0.53, y: -3.48, z: -0.21 },
	 		step: 0.01,
	 	},
	 }); */

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // ABOUT SECTION
    tl.to(camera.position, {
      x: 45.85,
      y: 0,
      z: 45.0,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })
      .to(scene.position, {
        x: -17.3,
        y: -1.5,
        z: -3,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(scene.rotation, {
        x: 0.03,
        y: 1.6,
        z: 0.01,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

      /* THIRD SECTION */
      .to(camera.position, {
        x: 68.5,
        y: 1.3,
        z:38,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#title-reveal",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: -3.3,
        y: -1.1,
        z:1,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#title-reveal",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.0,
        y: 1,
        z: 0.0,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#title-reveal",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      /*WORKS SECTION */
      .to(camera.position, {
        x: 72.5,
        y: -.7,
        z:8,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#works",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: 3,
        y: -1.3,
        z: -.7,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#works",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      /*CONTACT SECTION */
      .to(camera.position, {
        x: 74.5,
        y: .8,
        z:20,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#contact",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.position, {
        x: -20,
        y: -1.3,
        z: -.5,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#contact",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
      .to(scene.rotation, {
        x: 0.0,
        y: 1.5,
        z: 0.0,
        ease: "power1.in",
        duration: 5,
        scrollTrigger: {
          trigger: "#contact",
          start: "100px bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })
  }, []);

  // ---- used for debug ----
  /* 	 useFrame(() => {
	 	camera.position.x = cameraPosition.x;
	 	camera.position.y = cameraPosition.y;
	 	camera.position.z = cameraPosition.z;
	 	scene.position.x = scenePosition.x;
	 	scene.position.y = scenePosition.y;
	 	scene.position.z = scenePosition.z;
	 	scene.rotation.x = sceneRotation.x;
	 	scene.rotation.y = sceneRotation.y;
	 	scene.rotation.z = sceneRotation.z;
	 });
 */
  return (
    <group ref={roman} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="mentor_roman_retopo" position={[-0.266, 0.12, 1.326]}>
              <mesh
                name="mentor_roman_retopo_0"
                geometry={nodes.mentor_roman_retopo_0.geometry}
                material={materials.Stone}
              />
            </group>
            <group
              name="Empty"
              position={[0.161, -0.17, 4.808]}
              rotation={[-0.104, 0.099, 0.002]}
              scale={0.892}
            >
              <group name="nimbus002">
                <mesh
                  name="nimbus002_0"
                  geometry={nodes.nimbus002_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus001">
                <mesh
                  name="nimbus001_0"
                  geometry={nodes.nimbus001_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus003">
                <mesh
                  name="nimbus003_0"
                  geometry={nodes.nimbus003_0.geometry}
                  material={materials.Crown}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/roman3d.gltf");
