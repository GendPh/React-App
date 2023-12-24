import SectionHeading from "../SectionHeading.tsx";
import SectionImg from "../SectionImg.tsx";
import { useEffect, useState } from "react";
import Data from "../../assets/data.json";
import gsap from "gsap";

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

interface GsapChange {
  entry: {
    opacity: number;
    scaleY: number;
    transformOrigin: string;
    duration: number;
    stagger: number;
    delay: number;
  };
  out: {
    opacity: number;
    scaleY: number;
    transformOrigin: string;
    duration: number;
    stagger: number;
  };
  timer: number;
}

export default function Destination({ out, entry, timer }: GsapChange) {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentDestination, setCurrentDestination] = useState<Destination>({
    name: "Moon",
    images: {
      png: "./src/assets/destination/image-moon.png",
      webp: "./src/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  });
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setDestinations(Data.destinations);
  }, []);

  function handleDestinationClick(index: number) {
    const descElements = document.querySelectorAll(".desc-element");
    setIndex(index);

    gsap.to(descElements, out);
    setTimeout(() => {
      setCurrentDestination({
        name: destinations[index].name,
        images: {
          png: destinations[index].images.png,
          webp: destinations[index].images.webp,
        },
        description: destinations[index].description,
        distance: destinations[index].distance,
        travel: destinations[index].travel,
      });
    }, timer);
    gsap.to(descElements, entry);
  }

  return (
    <section id="destination" className="md:pb-8 auto-rows-max text-start">
      {currentDestination && (
        <>
          <div className="col-span-2">
            <SectionHeading number={1} title="Pick your destination" />
          </div>

          <div className="lg:col-start-1 flex items-center justify-center">
            <SectionImg
              src={currentDestination.images.webp}
              name={currentDestination.name}
              specialClass="desc-element md:w-[40%] lg:w-[60%]"
            />
          </div>

          <div className="lg:max-w-screen-sm">
            <ul className="list nav-text ml-0">
              {destinations.map((dest, i) => (
                <li
                  className={i === index ? "destination active" : "destination"}
                  key={dest.name}
                  onClick={() => handleDestinationClick(i)}
                >
                  {dest.name}
                </li>
              ))}
            </ul>

            <h3 className="desc-element heading-3  text-white">
              {currentDestination.name}
            </h3>

            <div className="">
              <p className="desc-element description">
                {currentDestination.description}
              </p>

              <div className="line my-6 md:my-10"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-10">
              <div>
                <h5 className="subHeading-2">Avg. distance</h5>

                <p className="desc-element subHeading-1 text-white">
                  {currentDestination.distance}
                </p>
              </div>
              <div>
                <h5 className="subHeading-2">Est. travel time</h5>
                <p className="desc-element subHeading-1 text-white">
                  {currentDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
