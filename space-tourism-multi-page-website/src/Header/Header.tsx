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
    const links = document.querySelectorAll(".nav-text li a");

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
    <header className="lg:mt-5 fixed top-0 left-0 right-0 flex items-center justify-between py-6 md:p-0">
      <img
        src={NavIcon}
        alt="Nav Bar Icon"
        width={45}
        className="md:ml-10 md:w-18"
      />

      <button
        ref={navButtonRef}
        className="hamburger hamburger--collapse relative z-50 md:hidden"
        type="button"
        onClick={handleNavButton}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav
        id="primary-nav"
        ref={navElRef}
        className=""
      >
        <ul className="nav-text uppercase text-white flex flex-col md:flex-row gap-6 lg:gap-16">
          <li>
            <a href="#home" className="nav is-active">
              <span className="font-bold mr-2 md:hidden lg:inline">00</span>{" "}
              home
            </a>
          </li>
          <li>
            <a href="#destination" className="nav">
              <span className="font-bold mr-2 md:hidden lg:inline">01</span>{" "}
              destination
            </a>
          </li>
          <li>
            <a href="#crew" className="nav">
              <span className="font-bold mr-2 md:hidden lg:inline">02</span>{" "}
              crew
            </a>
          </li>
          <li>
            <a href="#technology" className="nav">
              <span className="font-bold mr-2 md:hidden lg:inline">03</span>{" "}
              technologies
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
