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

export default function Destination() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentDestination, setCurrentDestination] = useState<
    Destination | undefined
  >(undefined);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setDestinations(Data.destinations);

    setCurrentDestination({
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
  }, []);

  function handleDestinationClick(index: number) {
    const descElements = document.querySelectorAll(".desc-element");

    gsap.to(descElements, {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.1,
      stagger: 0.05,
    });

    setIndex(index);

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
    }, 200);

    gsap.to(descElements, {
      opacity: 1,
      scaleY: 1,
      duration: 0.1,
      stagger: 0.05,
      delay: 0.2,
    });
  }

  return (
    <section id="destination">
      <h5 className="subHeading-2 text-white">
        <span className="opacity-35 mr-2">01</span> Pick your destination
      </h5>

      {currentDestination && (
        <img
          className="desc-element w-36 mx-auto my-6"
          src={currentDestination.images.webp}
          alt={currentDestination.name}
        />
      )}

      <ul className="flex gap-4 w-fit mx-auto nav-text text-light-blue">
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

      {currentDestination && (
        <>
          <h2 className="desc-element heading-3 mt-8 mb-2 text-white">
            {currentDestination.name}
          </h2>
          <p className="desc-element description text-light-blue">
            {currentDestination.description}
          </p>
        </>
      )}

      <div className="bg-light-blue h-[0.079px] my-10"></div>

      {currentDestination && (
        <>
          <h4 className="subHeading-2 mt-8 mb-2 text-light-blue">
            Avg. distance
          </h4>
          <p className="desc-element subHeading-1 text-white">
            {currentDestination.distance}
          </p>

          <h4 className="subHeading-2 mt-8 mb-2 text-light-blue">
            Est. travel time
          </h4>
          <p className="desc-element subHeading-1 text-white">
            {currentDestination.travel}
          </p>
        </>
      )}
    </section>
  );
}
