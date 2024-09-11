import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";

import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import Headphones from "../components/Headphones.jsx";
import PlaystationVR from "../components/PlaystationVR.jsx";
import MrPotatoHead from "../components/PotatoHead.jsx";
const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Dev <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Build Tomorrow’s Solutions Today
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 23]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={6}
                position={[2.4, -3, 4]}
                rotation={[0, 0, 0]}
              />
            </HeroCamera>
            <group>
              {/* <Target position={sizes.targetPosition} /> */}
              <Headphones
                position={[4.5, 0, 10]}
                scale={0.28}
                rotation={[0.5, 1, -0.4]}
              />
              <PlaystationVR
                scale={0.3}
                position={[-8.5, -5, 0]}
                rotation={[-0.4, 0.5, 0.2]}
              />
              <MrPotatoHead scale={0.2} position={[-10.5, 3.5, 0]} />
            </group>
            <ambientLight intensity={2} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
