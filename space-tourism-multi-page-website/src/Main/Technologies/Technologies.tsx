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
  const [isLargeViewport, setIsLargeViewport] = useState<boolean>(false);

  useEffect(() => {
    setTechnologyData(Data.technology);
    // Function to check if the viewport is lg
    const checkViewportSize = () => {
      const isLg = window.matchMedia("(min-width: 992px)").matches;
      setIsLargeViewport(isLg);
    };

    // Initial check on component mount
    checkViewportSize();
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
    <section
      id="technology"
      className="px-0 grid grid-cols-1 lg:grid-cols-2 lg:pl-20 lg:gap-y-10"
    >
      <div className="md:pl-10">
        <SectionHeading number={3} title="Space launch 101" />
      </div>
      {currentTechonlogy && (
        <>
          <SectionImg
            specialClass="tec-el w-full md:w-full md:max-h-[350px] aspect-video object-fill mt-6 md:mx-0 lg:col-start-2 lg:row-start-2 lg:aspect-square lg:m-0 lg:w-full lg:max-h-none"
            src={
              !isLargeViewport
                ? currentTechonlogy.images.landscape
                : currentTechonlogy.images.portrait
            }
            name={currentTechonlogy.name}
          />

          <div className="lg:row-start-2 lg:flex lg:text-start lg:gap-16 md:max-w-xl md:mx-auto">
            <ul className="list nav-text gap-8 lg:flex-col lg:justify-start lg:gap-10 lg:m-0">
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

            <div>
              <h5 className="tec-el sub-title">the technology...</h5>
              <h4 className="tec-el title">{currentTechonlogy.name}</h4>
              <p className="tec-el description mt-6">
                {currentTechonlogy.description}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
