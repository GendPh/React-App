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
    <section
      id="crew"
      className="md:pb-0 md:pt-32 md:flex md:flex-col md:justify-between "
    >
      <SectionHeading number={2} title="Meet Your crew" />

      {currectCrewMember && (
        <div className="flex flex-col md:flex-col-reverse">
          <div className="flex flex-col md:flex-col-reverse">
            <SectionImg
              specialClass="crew-el object-contain mt-6 w-56 md:w-[400px]"
              src={currectCrewMember.images.webp}
              name={currectCrewMember.name}
            />

            <div className="line md:hidden"></div>

            <ul className="list nav-text">
              {crewData.map((_, i) => (
                <li
                  key={i}
                  className={i === index ? "crew active" : "crew"}
                  onClick={() => handleIndexChange(i)}
                ></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="crew-el subHeading-2 md:text-3xl ">
              {currectCrewMember.role}
            </h5>
            <h6 className="crew-el subHeading-1 md:heading-4 text-white my-6">
              {currectCrewMember.name}
            </h6>
            <p className="crew-el description md:px-20">
              {currectCrewMember.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
