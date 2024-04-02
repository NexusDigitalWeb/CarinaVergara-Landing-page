import React, { useState, useEffect } from "react";
import HamburgerButton from "../buttons/HamburgerButton";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import SocialMedia from "../home/SocialMedia";
import LogoCarina from "../../images/LogoCarina";

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      const nav = document.querySelector("nav");

      setPrevScrollPos(currentScrollPos);

      if (isScrollingUp) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollPos === 0)
        nav?.classList.add("bg-transparent"),
          nav?.classList.remove("bg-background-page-color");
      else nav?.classList.remove("bg-transparent");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`w-full h-[80px] md:h-[100px] fixed transition-all duration-500  bg-transparent ${
        isScrolled
          ? "translate-y-0 z-10 bg-background-page-color"
          : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-full px-2 bg-transparent md:px-0 lg:px-5">
        <div className="w-full h-[80px] lg:w-[180px] flex flex-col items-center justify-center md:ml-10 lg:ml-0">
          <LogoCarina />
        </div>
        <HamburgerButton isOpened={isMenuOpen} setState={handleClick} />
        <MenuDesktop />
        <SocialMedia />
      </div>

      <MenuMobile stateAction={isMenuOpen} setState={handleClick} />
    </nav>
  );
};

export default Navbar;
