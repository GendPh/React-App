import SectionHeading from "../SectionHeading.tsx";
import SectionImg from "../SectionImg.tsx";
import { useEffect, useState } from "react";
import Data from "../../assets/data.json";
import gsap from "gsap";

interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
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

export default function Crew({ entry, out, timer }: GsapChange) {
  const [crewData, setCrewData] = useState<Crew[]>([]);
  const [currectCrewMember, setCurrectCrewMember] = useState<Crew>({
    name: "Douglas Hurley",
    images: {
      png: "./src/assets/crew/image-douglas-hurley.png",
      webp: "./src/assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  });
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setCrewData(Data.crew);
  }, []);

  function handleIndexChange(index: number) {
    const crewEl = document.querySelectorAll(".crew-el");

    setIndex(index);

    gsap.to(crewEl, out);
    setTimeout(() => {
      setCurrectCrewMember((prevCar) => ({
        ...prevCar,
        name: crewData[index].name,
        images: {
          png: crewData[index].images.png,
          webp: crewData[index].images.webp,
        },
        role: crewData[index].role,
        bio: crewData[index].bio,
      }));
    }, timer);
    gsap.to(crewEl, entry);
  }

  return (
    <section id="crew" className="pb-20 md:pb-0 auto-rows-max">
      {currectCrewMember && (
        <>
          <SectionHeading number={2} title="Meet Your crew" />

          <div className="md:row-start-2 lg:row-start-2 lg:col-start-2 lg:flex lg:items-end ">
            <SectionImg
              specialClass="crew-el mx-auto aspect-square object-contain md:w-[75%] lg:w-[90%]"
              src={currectCrewMember.images.webp}
              name={currectCrewMember.name}
            />
            <div className="line md:hidden"></div>
          </div>

          <div className="lg:row-start-2 flex flex-col md:flex-col-reverse lg:pb-24">
            <ul className="list nav-text lg:ml-0">
              {crewData.map((_, i) => (
                <li
                  key={i}
                  className={i === index ? "crew active" : "crew"}
                  onClick={() => handleIndexChange(i)}
                ></li>
              ))}
            </ul>

            <div className="lg:text-start">
              <h5 className="crew-el sub-title">{currectCrewMember.role}</h5>
              <h4 className="crew-el title">{currectCrewMember.name}</h4>
              <p className="crew-el description mt-6">
                {currectCrewMember.bio}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
