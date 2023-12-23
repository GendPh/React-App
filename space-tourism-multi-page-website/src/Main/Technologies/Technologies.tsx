import SectionHeading from "../SectionHeading.tsx";
import SectionImg from "../SectionImg.tsx";
import { useEffect, useState } from "react";
import Data from "../../assets/data.json";
import gsap from "gsap";

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
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

export default function Technologies({ out, entry, timer }: GsapChange) {
  const [technologyData, setTechnologyData] = useState<Technology[]>([]);
  const [currentTechonlogy, setCurrentTechonlogy] = useState<Technology>({
    name: "Launch vehicle",
    images: {
      portrait: "./src/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./src/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTechnologyData(Data.technology);
  }, []);

  function handleIndexChange(index: number) {
    const tecEl = document.querySelectorAll(".tec-el");

    setIndex(index);

    gsap.to(tecEl, out);

    setTimeout(() => {
      setCurrentTechonlogy((prevTec) => ({
        ...prevTec,
        name: technologyData[index].name,
        images: {
          portrait: technologyData[index].images.portrait,
          landscape: technologyData[index].images.landscape,
        },
        description: technologyData[index].description,
      }));
    }, timer);

    gsap.to(tecEl, entry);
  }

  return (
    <section id="technology" className="px-0">
      <SectionHeading number={3} title="Space launch 101" />
      {currentTechonlogy && (
        <>
          <SectionImg
            specialClass="tec-el w-full md:w-full md:max-h-[350px] aspect-video object-fill mt-6 md:mx-0 bg-red-500"
            src={currentTechonlogy.images.landscape}
            name={currentTechonlogy.name}
          />

          <ul className="list nav-text">
            {technologyData.map((_, i) => (
              <li
                key={i}
                className={i === index ? "tec-list active" : "tec-list"}
                onClick={() => handleIndexChange(i)}
              >
                {i + 1}
              </li>
            ))}
          </ul>

          <h5 className="tec-el subHeading-2 md:text-2xl mt-6">
            the technology...
          </h5>
          <h4 className="tec-el subHeading-1 md:text-4xl md:my-8 text-white mb-6">
            {currentTechonlogy.name}
          </h4>
          <p className="tec-el description px-5">
            {currentTechonlogy.description}
          </p>
        </>
      )}
    </section>
  );
}
