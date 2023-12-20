import { useEffect, useRef } from "react";
import NavIcon from "../assets/shared/logo.svg";
import gsap from "gsap";

export default function Header() {
  const navButtonRef = useRef<HTMLButtonElement | null>(null);
  const navElRef = useRef<HTMLDivElement | null>(null);

  function handleNavButton() {
    const button = navButtonRef.current;
    const nav = navElRef.current;

    if (button && nav) {
      if (!button.classList.contains("is-active")) {
        button.classList.add("is-active");
        gsap.to(nav, { x: 0, duration: 0.5 });
      } else {
        button.classList.remove("is-active");
        gsap.to(nav, { x: "100%", duration: 0.5 });
      }
    }
  }
  
  useEffect(() => {
    const links = document.querySelectorAll(".nav-text li");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((allLinks) => {
          allLinks.classList.remove("is-active");
        });
        link.classList.add("is-active");
      });
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between py-6">
      <img src={NavIcon} alt="Nav Bar Icon" width={45} />

      <button
        ref={navButtonRef}
        className="hamburger hamburger--collapse relative z-50"
        type="button"
        onClick={handleNavButton}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav
        ref={navElRef}
        className="fixed z-40 inset-0 left-36 translate-x-[100%] bg-slate-700 bg-opacity-35 backdrop-filter backdrop-blur-md pl-10 py-32"
        /* translate-x-[100%] */
      >
        <ul className="nav-text uppercase text-white flex flex-col gap-6">
          <li className="is-active">
            <a href="#home">
              <span className="font-bold mr-5">00</span> home
            </a>
          </li>
          <li>
            <a href="#destination">
              <span className="font-bold mr-5">01</span> destination
            </a>
          </li>
          <li>
            <a href="#">
              <span className="font-bold mr-5">02</span> crew
            </a>
          </li>
          <li>
            <a href="#">
              <span className="font-bold mr-5">03</span> technologies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
