import { useRef, useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import TechStackOrbit from "../components/TechStackOrbit.jsx";
import TechStackCategories from "../components/TechStackCategories.jsx";

const JAIPUR_LOCATION = {
  lat: 26.9124,
  lng: 75.7873,
  label: "Jaipur, India",
};

const createLocationPin = ({ label }) => {
  const pin = document.createElement("div");
  pin.className = "globe-location-pin";
  pin.setAttribute("role", "img");
  pin.setAttribute("aria-label", label);

  const marker = document.createElement("span");
  marker.className = "globe-location-pin__marker";

  const locationLabel = document.createElement("span");
  locationLabel.className = "globe-location-pin__label";
  locationLabel.textContent = label;

  pin.append(marker, locationLabel);

  return pin;
};

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aroradev1010@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleGlobeReady = () => {
    globeRef.current?.pointOfView(
      {
        lat: JAIPUR_LOCATION.lat,
        lng: JAIPUR_LOCATION.lng,
        altitude: 2,
      },
      1200,
    );
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Dev Arora</p>
              <p className="grid-subtext">
              I have honed my expertise in both frontend and backend development, creating dynamic, interactive, and responsive websites
              </p>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                htmlElementsData={[JAIPUR_LOCATION]}
                htmlElement={createLocationPin}
                htmlAltitude={0.01}
                htmlTransitionDuration={0}
                onGlobeReady={handleGlobeReady}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Jaipur, India and open to remote work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications</p>
            </div>
            <TechStackOrbit />

          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  aroradev1010@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
